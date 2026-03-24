"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";

export default function HomePage() {
  const { posts } = useStore();
  const featuredProjects = posts
    .filter((p) => p.published && p.category === "project")
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-end px-6 pb-20 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-6">
            Architecture & Design Studio — Hanoi, Vietnam
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] mb-8 text-[#ededed]">
            We design
            <br />
            <span className="text-[#444]">through</span>
            <br />
            the void.
          </h1>
          <p className="text-base text-[#666] leading-relaxed max-w-md mb-10">
            A studio that treats emptiness as material — using negative space,
            silence, and restraint to define architecture that breathes.
          </p>
          <div className="flex gap-6 flex-wrap">
            <Link
              href="/projects"
              className="text-xs tracking-[0.15em] uppercase border border-[#c8a96e] text-[#c8a96e] px-6 py-3 hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="text-xs tracking-[0.15em] uppercase text-[#555] hover:text-[#888] transition-colors py-3"
            >
              About Studio →
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#1a1a1a]" />

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs tracking-[0.2em] uppercase text-[#555]">
            Selected Work
          </h2>
          <Link
            href="/projects"
            className="text-xs tracking-widest uppercase text-[#444] hover:text-[#888] transition-colors"
          >
            All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors"
            >
              <div className="aspect-[4/3] bg-[#0d0d0d] border border-[#1a1a1a] mb-6 overflow-hidden flex items-center justify-center">
                <span className="text-[#1e1e1e] text-7xl font-thin select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs tracking-widest uppercase text-[#444] mb-2">
                {project.tags[0]}
              </p>
              <h3 className="text-sm font-medium text-[#ededed] mb-2 group-hover:text-[#c8a96e] transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-[#555] line-clamp-2 leading-relaxed">
                {project.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#444] mb-6">
              Studio
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#ededed] leading-tight mb-6">
              Architecture defined
              <br />
              by what is left out.
            </h2>
          </div>
          <div>
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              Founded in Hanoi, Void Architects works across residential,
              cultural, and urban scales. Our practice is defined by a
              commitment to material honesty, climatic responsiveness, and the
              productive tension between enclosure and openness.
            </p>
            <Link
              href="/about"
              className="text-xs tracking-widest uppercase text-[#c8a96e] hover:text-[#e0c080] transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
