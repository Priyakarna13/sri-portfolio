import type { QA } from "@/data/faq";


export function searchFAQ(items: QA[], query: string, k = 3) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);
  const score = (text: string) => {
    const t = text.toLowerCase();
    return terms.reduce((acc, w) => acc + (t.includes(w) ? 1 : 0), 0);
  };

  const scored = items
    .map((item) => {
      const s = score(item.q) * 2 + score(item.a) + score((item.tags || []).join(" "));
      return { item, s };
    })
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .map(x => x.item);

  return scored;
}
