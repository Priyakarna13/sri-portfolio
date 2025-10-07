import { NextRequest, NextResponse } from "next/server";
import { localAnswer } from "@/lib/bot/faq";
import { faq } from "@/data/faq";
import { searchFAQ } from "@/lib/faqSearch";

export const runtime = "nodejs";

// --- RATE LIMITING ---
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

// --- OPENAI FALLBACK ---
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
              "You are Sri's personal portfolio assistant. Be concise (<= 120 words). Only use information from this portfolio — about Sri, her ASU studies, AI/ML projects, and research work. Never make up details.",
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

// --- MAIN CHAT LOGIC ---
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  const { ok, reset } = rateLimit(ip);
  if (!ok) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Try again later." },
      { status: 429 }
    );
  }

  const { message } = await req.json();
  const text = String(message || "").slice(0, 1000).trim();
  if (!text)
    return NextResponse.json({
      reply: "Ask me anything about my work, projects, or contact details.",
    });

  // Step 1: Local regex FAQ
  const local = localAnswer(text);
  if (local) return NextResponse.json({ reply: local });

  // Step 2: Search structured FAQ
  const hits = searchFAQ(faq, text);
  if (hits.length > 0)
    return NextResponse.json({ reply: hits[0].a });

  // Step 3: AI fallback
  const ai = await askOpenAI(text);
  if (ai) return NextResponse.json({ reply: ai });

  // Step 4: Generic fallback
  return NextResponse.json({
    reply:
      "Hmm, I'm not sure about that. Try asking about my work, resume, projects, or contact info!",
  });
}
