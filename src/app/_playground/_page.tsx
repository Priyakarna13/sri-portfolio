import { playgroundApps } from "@/data/playground";

export const metadata = { title: "Playground – Sri" };

export default function PlaygroundPage() {
  return (
    <section className="py-16 space-y-10 max-w-5xl mx-auto px-4">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-display">Playground</h1>
        <p className="opacity-80">
          Mini projects & live demos you can try out yourself.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {playgroundApps.map((app) => (
          <div
            key={app.key}
            className="card p-6 flex flex-col justify-between shadow-soft"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{app.title}</h2>
              <p className="opacity-80 text-sm">{app.description}</p>
            </div>
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 rounded-xl bg-primary text-primary-fg hover:opacity-90 text-sm text-center"
            >
              Launch →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
