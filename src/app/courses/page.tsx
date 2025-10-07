import type { Metadata } from "next";
import { courses } from "@/data/courses";

export const metadata: Metadata = { title: "Courses — Sri" };

export default function CoursesPage() {
  return (
    <section className="py-16 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-display">Courses</h1>
      <p className="opacity-80">Selected grad/undergrad courses relevant to CV/ML/Systems.</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {courses.map((c) => (
          <li key={c.code} className="card p-4">
            <p className="font-semibold">{c.title}</p>
            <p className="opacity-70 text-sm">{c.code} • {c.term}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
