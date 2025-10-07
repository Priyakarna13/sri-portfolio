import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-70">© {new Date().getFullYear()} Sri Lakshmi Priya D.</p>
        <div className="flex items-center gap-5">
          <Link href="mailto:dpnolast@asu.edu" className="hover:opacity-80">Email</Link>
          <Link href="https://github.com/Priyakarna13" className="hover:opacity-80">GitHub</Link>
          <Link href="https://www.linkedin.com/in/sri-lakshmi-priya-d/" className="hover:opacity-80">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}