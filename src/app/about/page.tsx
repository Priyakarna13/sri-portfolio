import type { Metadata } from "next";



export const metadata: Metadata = { title: "About — Sri" };

export default function AboutPage() {
  return (
    <article className="py-16 space-y-10 max-w-3xl mx-auto">
      <header className="space-y-3">
        <h1 className="text-4xl font-display">My Journey</h1>
        <p className="opacity-80">The long version — why I moved, what I build, what I value.</p>
      </header>

      <section className="card p-6 space-y-4 leading-relaxed">
        <p>
          Hi, I am Sri! If you are here, you probably want to know more about me. I did my bachelors in AI, worked at ANZ with
          great colleagues, and had a settled life. But I wanted to grow beyond my comfort zone. So I quit and came to the US —
          the place where big dreams meet real life. It has been a ride: stress and uncertainty, yes, but also joy, friends who feel
          like family, and constant learning.
        </p>
        <p>
          Now I am doing robotics/software for perception (computer vision + ML). I have always had a soft spot for biology, so I
          joined a genomics research lab and built deep learning pipelines there. I enjoy building practical AI systems — not just
          models, but the full lifecycle: data, training, evaluation, optimization (INT8/edge), deployment, and monitoring.
        </p>
        <p>
          I am not a LeetCode monk — I am a creative problem solver who communicates, ships, and owns outcomes. In a world of tools
          and LLMs, I believe in clear thinking, accountability, and taste. I am persistent, balanced, and I go above and beyond
          to get things done — just as perfectly as required.
        </p>
      </section>

     

      <section className="space-y-3">
        <h2 className="text-2xl font-display">Want a calmer tour?</h2>
        <p className="opacity-80">Take a detour to my <a href="/hobbies" className="text-primary hover:underline">travel & photography</a> page.</p>
      </section>
    </article>
  );
}
