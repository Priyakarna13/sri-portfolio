import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/courses", label: "Courses" },
  { href: "/resume", label: "Resume" },
  { href: "/publications", label: "Publications" },   
  //{ href: "/playground", label: "Playground" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact" },
  

];


export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide">
          Sri Lakshmi Priya<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:opacity-80">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          
        </div>
      </div>
    </header>
  );
}
