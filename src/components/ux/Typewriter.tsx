"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 38,     
  startDelay = 250, 
  className = "",
  caret = true,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  caret?: boolean;
}) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const begin = setTimeout(() => {
      const t = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(t);
      }, speed);
    }, startDelay);
    return () => clearTimeout(begin);
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {out}
      {caret && <span className="inline-block w-[0.6ch] -translate-y-[1px] animate-pulse">▍</span>}
    </span>
  );
}
