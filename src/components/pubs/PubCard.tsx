"use client";
import CopyButton from "@/components/ui/CopyButton";
import type { Pub } from "@/data/publications";

export default function PubCard({ p }: { p: Pub }) {
  return (
    <article className="card p-5 space-y-3">
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="opacity-80 text-sm">{p.authors}</p>
      <p className="opacity-70 text-sm">{p.venue} · {p.year}</p>

      {p.abstract && <p className="opacity-90 text-sm mt-2">{p.abstract}</p>}

      <div className="flex flex-wrap gap-2 mt-2">
        {p.links?.pdf && (
          <a className="chip hover:opacity-80" href={p.links.pdf} target="_blank" rel="noopener noreferrer">PDF ↗</a>
        )}
        {p.links?.doi && (
          <a className="chip hover:opacity-80" href={p.links.doi} target="_blank" rel="noopener noreferrer">DOI ↗</a>
        )}
        {p.links?.arxiv && (
          <a className="chip hover:opacity-80" href={p.links.arxiv} target="_blank" rel="noopener noreferrer">arXiv ↗</a>
        )}
        {p.links?.code && (
          <a className="chip hover:opacity-80" href={p.links.code} target="_blank" rel="noopener noreferrer">Code ↗</a>
        )}
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {p.apa && <CopyButton text={p.apa} label="Copy APA" />}
        {p.bibtex && <CopyButton text={p.bibtex} label="Copy BibTeX" />}
      </div>
    </article>
  );
}
