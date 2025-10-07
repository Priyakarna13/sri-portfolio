import { projectSections } from "@/data/projects";
import ProjectCard from "@/components/work/ProjectCard";
import FilterBar from "@/components/work/FilterBar";

export const metadata = { title: "Work — Sri" };

const navItems = [
  { key: "cv",   label: "Computer Vision",           targetId: "section-cv" },
  { key: "ml",   label: "ML / DL (GenAI & Bio)",     targetId: "section-ml" },
  { key: "data", label: "Data Science & Analytics",  targetId: "section-data" },
];

export default function WorkPage() {
  return (
    <section className="py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-display mb-2">Work</h1>
        <p className="opacity-80">
          Flagship projects grouped by focus area. Click a card for the full case study.
        </p>
      </header>

      <FilterBar items={navItems} />

      <div className="space-y-12 mt-8">
        {projectSections.map((section) => (
          <div key={section.key} id={`section-${section.key}`} className="scroll-mt-24">
            <h2 className="text-2xl font-display mb-5">{section.name}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {section.items.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
