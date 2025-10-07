"use client";
import Image from "next/image";
import Typewriter from "@/components/ux/Typewriter";

export default function Home() {
  return (
    <section className="relative min-h-[78vh] flex items-center">
      

      <div className="hidden sm:block absolute right-4 top-4">
        <Image
          src="/hero-small.png"
          alt="Sri"
          width={128}
          height={128}
          className="rounded-2xl border border-border shadow-soft object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-3xl w-full text-center space-y-6 px-4">
        <h1 className="font-display leading-tight">
          <Typewriter
  text="Hi there!! Welcome to my space of the Internet."
  speed={22}
  startDelay={180}
  className="text-4xl md:text-5xl text-black"
/>

        </h1>

        <p className="opacity-90">
          I’m Sri — MS in Robotics & Autonomous Systems (Artificial Intelligence)<br />
          Arizona State University. Graduating <strong>May 2026</strong>.
        </p>

        <p className="opacity-85">
          I work on <strong>AI/ML</strong>, <strong>Computer Vision</strong>, and <strong>Biotech (Genomics)</strong> —
          and <strong>all things DATA</strong><br />I engineer datasets for analysis & insights, and
          deploy models end-to-end for actual use cases. <br />Think <em>software for intelligent robotic systems</em>.
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-1">
          <span className="chip">AI/ML</span>
          <span className="chip">Computer Vision</span>
          <span className="chip">Data Science</span>
          <span className="chip">Data Analysis</span>
          <span className="chip">Data Engineering</span>
          <span className="chip">Genomics</span>
          <span className="chip">Edge Deploy</span>
        </div>

        <div className="pt-2">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-fg hover:opacity-90"
          >
            ☕ Have time? Read my journey
          </a>
        </div>
      </div>
    </section>
  );
}
