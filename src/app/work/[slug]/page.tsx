import { notFound } from "next/navigation";
import { projectSections, findProject } from "@/data/projects";
import CopyButton from "@/components/ui/CopyButton";

export function generateStaticParams() {
  return projectSections.flatMap((s) => s.items.map((p) => ({ slug: p.slug })));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = findProject(params.slug);
  return { title: p ? `${p.title} — Sri` : "Project — Sri" };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = findProject(params.slug);
  if (!p) return notFound();

  return (
    <article className="py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-display">{p.title}</h1>
        <p className="opacity-80">{p.oneLiner}</p>
        <div className="flex flex-wrap gap-2">
          {p.metrics.map((m, i) => (
            <span key={i} className="chip">
              <span className="font-medium">{m.label}:</span>&nbsp;{m.value}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card p-6 md:col-span-2">
          <h2 className="text-2xl font-display mb-3">Problem</h2>
          <p className="opacity-90">{p.problem}</p>

          <h2 className="text-2xl font-display mt-6 mb-3">Approach</h2>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            {p.approach.map((a, i) => <li key={i}>{a}</li>)}
          </ul>

          <h2 className="text-2xl font-display mt-6 mb-3">Impact</h2>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            {p.impact.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>

        <aside className="card p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((s, i) => <span key={i} className="chip">{s}</span>)}
            </div>
          </div>

          {p.links && (p.links.github || p.links.paper || p.links.demo) && (
            <div>
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="list-disc list-inside opacity-90">
                {p.links.github && (<li><a className="text-primary hover:underline" href={p.links.github} target="_blank">GitHub</a></li>)}
                {p.links.paper && (<li><a className="text-primary hover:underline" href={p.links.paper} target="_blank">Paper</a></li>)}
                {p.links.demo && (<li><a className="text-primary hover:underline" href={p.links.demo} target="_blank">Demo</a></li>)}
              </ul>
            </div>
          )}

          {p.copyBullet && (<CopyButton text={p.copyBullet} label="Copy résumé bullet" />)}
        </aside>
      </section>
    </article>
  );
}
