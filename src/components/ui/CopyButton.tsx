"use client";
import { useState } from "react";

export default function CopyButton({ text, label = "Copy bullet" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {}
      }}
      className="inline-flex items-center rounded-xl px-3 py-2 border border-border bg-card hover:bg-muted text-sm"
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}
