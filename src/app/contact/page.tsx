"use client";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8 px-40 py-20">
      <div className="space-y-3">
        <h1 className="text-4xl font-display">Let’s Connect ☕</h1>
        <p className="text-2xl opacity-85 max-w-lg mx-auto leading-relaxed">
          So you made it this far — nice! <br /> I’d love to hear from you.<br />
          <p className="text-center text-gray-300 mt-2 text-lg whitespace-nowrap overflow-x-auto no-scrollbar">
  Whether it’s about an opportunity, collaboration, or just a geeky AI chat — reach out!
</p>

        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <a
          href="mailto:srilakshmipriyadwarakanath@asu.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:bg-muted transition-all"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Email Me</span>
        </a>

        <a
          href="https://github.com/Priyakarna13"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:bg-muted transition-all"
        >
          <Github className="w-5 h-5 group-hover:rotate-6 transition-transform" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/sri-lakshmi-priya-d"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:bg-muted transition-all"
        >
          <Linkedin className="w-5 h-5 group-hover:text-[#0a66c2] transition-colors" />
          <span>LinkedIn</span>
        </a>
      </div>

      <p className="text-4xl pt-10 opacity-70 italic">
        “Ciao!”
      </p>
    </section>
  );
}
