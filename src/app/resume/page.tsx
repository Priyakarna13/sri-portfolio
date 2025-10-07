"use client";
import { motion } from "framer-motion";
import { resume, education, skills } from "@/data/resume";

export default function ResumePage() {
  return (
    <section className="py-16 space-y-12">
  
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-display">Resume</h1>
        <p className="opacity-80">A quick, skimmable timeline. Full PDF below.</p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-fg hover:opacity-90"
        >
          Download PDF
        </a>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-border max-w-3xl mx-auto">
        {resume.map((item, i) => (
          <motion.div
            key={`${item.company}-${i}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="ml-6 mb-12"
          >
            <div className="absolute -left-3 w-6 h-6 rounded-full bg-primary" aria-hidden />
            <div className="card p-6">
              <h2 className="text-xl font-semibold">{item.role}</h2>
              <p className="opacity-80">{item.company}</p>
              <p className="text-sm opacity-60 mb-3">{item.period}</p>
              <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
                {item.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl font-display">Education</h3>
        <div className="grid gap-4">
          {education.map((e, i) => (
            <div key={i} className="card p-5">
              <p className="font-semibold">{e.school}</p>
              <p className="opacity-80">{e.degree}</p>
              <p className="text-sm opacity-60">{e.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl font-display">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span key={i} className="chip">{s}</span>
          ))}
        </div>
      </div>

      {/* ATS text link */}
      <div className="text-center">
        <a href="/resume/text" className="text-primary hover:underline">
          View accessible text version →
        </a>
      </div>
    </section>
  );
}
