type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
};

async function getRepos() {
  const res = await fetch("https://api.github.com/users/Priyakarna13/repos?per_page=100&sort=updated", {
    next: { revalidate: 60 * 60 * 12 },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as Repo[];
  return data
    .filter((r) => r)
    .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));
}

export default async function RepoGrid() {
  const repos = await getRepos();
  if (!repos.length) {
    return <p className="opacity-70">No public repos found.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((r) => (
        <a key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer" className="card p-5 hover:scale-[1.01] transition">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold">{r.name}</h3>
            <span className="chip">{r.language ?? "Code"}</span>
          </div>
          {r.description && <p className="opacity-80 text-sm mt-1">{r.description}</p>}
          <div className="mt-3 flex items-center gap-2 text-sm opacity-70">
            <span>⭐ {r.stargazers_count}</span>
            <span>•</span>
            <span>Updated {new Date(r.updated_at).toLocaleDateString()}</span>
          </div>
          {r.topics && r.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {r.topics.slice(0, 5).map((t) => (
                <span key={t} className="chip text-xs">{t}</span>
              ))}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
