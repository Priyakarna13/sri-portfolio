"use client";
import { useEffect, useState } from "react";

type Item = { key: string; label: string; targetId: string };

export default function FilterBar({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.key ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach((it) => {
      const el = document.getElementById(it.targetId);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(it.key);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const go = (id: string, key: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(key);
    history.replaceState(null, "", `#${key}`);
  };

  return (
    <div className="sticky top-16 z-40 bg-bg/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex gap-2 overflow-x-auto">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => go(it.targetId, it.key)}
            className={`chip whitespace-nowrap ${
              active === it.key ? "ring-1 ring-primary" : ""
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
}
