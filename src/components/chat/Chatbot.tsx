"use client";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hey! I’m Sri (chat). Ask about my projects, resume, or how to contact me." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 1e9 });
  }, [msgs, open]);

  async function send() {
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      if (r.status === 429) {
        setMsgs((m) => [...m, { role: "bot", text: "You’ve hit the daily limit. Please try again later 🙏" }]);
      } else {
        const data = await r.json();
        setMsgs((m) => [...m, { role: "bot", text: data.reply ?? "Hmm, I didn’t get that." }]);
      }
    } catch {
      setMsgs((m) => [...m, { role: "bot", text: "Network error. Please try again." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 rounded-full px-4 py-3 bg-black text-white shadow-soft z-50"
        aria-label="Open chat"
      >
        {open ? "Close" : "Chat"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-[360px] max-h-[70vh] card p-3 flex flex-col gap-3 z-50">
          <div className="text-sm opacity-80">Sri — Portfolio Chat</div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 pr-1">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`rounded-xl px-3 py-2 text-sm ${
                  m.role === "user" ? "bg-black text-white self-end" : "bg-muted text-fg/90"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={busy ? "Thinking..." : "Ask about my work…"}
              className="flex-1 rounded-xl px-3 py-2 bg-bg border border-border outline-none"
              disabled={busy}
            />
            <button
              onClick={send}
              disabled={busy}
              className="rounded-xl px-3 py-2 border border-border hover:bg-muted disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
