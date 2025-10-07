import type { Metadata } from "next";
import { publications } from "@/data/publications";
import PubCard from "@/components/pubs/PubCard";

export const metadata: Metadata = { title: "Publications — Sri" };

export default function PublicationsPage() {
  return (
    <section className="py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-display">Publications</h1>
        <p className="opacity-80">Peer-reviewed work & preprints.</p>
      </header>

      {publications.length === 0 ? (
        <p className="opacity-70">Coming soon.</p>
      ) : (
        <div className="grid gap-6 max-w-3xl">
          {publications.map((p) => <PubCard key={p.key} p={p} />)}
        </div>
      )}
    </section>
  );
}
