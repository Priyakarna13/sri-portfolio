"use client";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isNeon = document.documentElement.classList.contains("neon");

  function toggle() {
 
    document.documentElement.classList.toggle("neon");
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-border bg-card hover:bg-muted transition"
      aria-label="Toggle neon accent"
      title={isNeon ? "Switch to Gold" : "Switch to Neon"}
    >
      {isNeon ? <Moon size={16} /> : <SunMedium size={16} />}
      <span className="text-sm">{isNeon ? "Gold" : "Neon"}</span>
    </button>
  );
}

