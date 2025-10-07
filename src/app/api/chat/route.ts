import { NextRequest, NextResponse } from "next/server";
import { localAnswer } from "@/lib/bot/faq";

export const runtime = "nodejs";


const LIMIT = 30;        
const WINDOW_MS = 24 * 60 * 60 * 1000;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return { ok: true, remaining: LIMIT - 1 };
  }
  if (rec.count >= LIMIT) {
    return { ok: false, reset: rec.reset - now };
  }
  rec.count += 1;
  return { ok: true, remaining: LIMIT - rec.count };
}

async function askOpenAI(message: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [
          {
            role: "system",
            content:
              "You are Sri's portfolio assistant. Be concise (<= 120 words). Stick to info on this site: AI/ML, CV, data, genomics, resume, contact, projects, and jetson/int8 pipeline.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.3,
        max_tokens: 220,
      }),
    });
    if (!r.ok) return null;
    const j = await r.json();
    return j?.choices?.[0]?.message?.content?.trim() ?? null;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    
    "anon";
  const { ok, reset } = rateLimit(ip);
  if (!ok) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Try again later." },
      { status: 429 }
    );
  }

  const { message } = await req.json();
  const text = String(message || "").slice(0, 1000).trim();
  if (!text) return NextResponse.json({ reply: "Ask me anything about my work, resume, or contact." });


  const local = localAnswer(text);
  if (local) return NextResponse.json({ reply: local });


  const ai = await askOpenAI(text);
  if (ai) return NextResponse.json({ reply: ai });


  return NextResponse.json({
    reply:
      "I couldn&apos;t match that. Try asking about resume (/resume), contact (LinkedIn/GitHub), or projects (INT8/Jetson pipeline).",
  });
}
