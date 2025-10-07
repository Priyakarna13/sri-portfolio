"use client";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card p-5 hover:scale-[1.01] transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href={`/work/${p.slug}`} className="hover:opacity-90">
            <h3 className="text-xl font-semibold">{p.title}</h3>
          </Link>
          <p className="opacity-80 text-sm mt-1">{p.oneLiner}</p>
        </div>
        <span className="chip">{p.domain}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.metrics.map((m, i) => (
          <span key={i} className="chip">
            <span className="font-medium">{m.label}:</span>&nbsp;{m.value}
          </span>
        ))}
        {p.links?.github && (
          <a
            href={p.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="chip hover:opacity-80"
            title="View on GitHub"
          >
            GitHub ↗
          </a>
        )}
      </div>

      {p.kpiSeries && (
        <div className="mt-5 h-20">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={p.kpiSeries}>
              <XAxis dataKey="x" hide />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="y"
                fill="hsl(var(--primary)/0.15)"
                stroke="hsl(var(--primary))"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="mt-4">
        <Link href={`/work/${p.slug}`} className="text-primary hover:underline">
          Read case study →
        </Link>
      </div>
    </div>
  );
}
