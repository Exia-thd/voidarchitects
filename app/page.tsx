"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";

const stats = [
  { value: "24+", label: "Projects Completed" },
  { value: "12", label: "Years of Practice" },
  { value: "8", label: "Awards Won" },
  { value: "4", label: "Cities in Vietnam" },
];

const services = [
  {
    icon: "🏠",
    title: "Residential",
    desc: "Private homes and multi-family housing that respond to tropical climate with material honesty.",
  },
  {
    icon: "🏛️",
    title: "Cultural & Civic",
    desc: "Museums, libraries, pavilions and public spaces that anchor communities.",
  },
  {
    icon: "🌿",
    title: "Sustainable Design",
    desc: "Climate-responsive buildings that minimise energy use through passive strategies.",
  },
  {
    icon: "🏙️",
    title: "Urban & Mixed-Use",
    desc: "High-density mixed-use developments that contribute positively to the city fabric.",
  },
];

const gradientMap: Record<string, string> = {
  "from-orange-200 via-amber-100 to-yellow-200": "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
  "from-emerald-200 via-teal-100 to-cyan-200": "bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-200",
  "from-sky-200 via-blue-100 to-indigo-200": "bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200",
  "from-lime-200 via-green-100 to-emerald-200": "bg-gradient-to-br from-lime-200 via-green-100 to-emerald-200",
  "from-violet-200 via-purple-100 to-pink-200": "bg-gradient-to-br from-violet-200 via-purple-100 to-pink-200",
};

export default function HomePage() {
  const { posts } = useStore();
  const featuredProjects = posts
    .filter((p) => p.published && p.category === "project")
    .slice(0, 3);
  const latestArticles = posts
    .filter((p) => p.published && p.category === "blog")
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-7xl mx-auto pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-[#FF5C28] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#FF5C28] tracking-wide uppercase">
                Architecture Studio · Hanoi, Vietnam
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.0] mb-6">
              We shape{" "}
              <span className="relative">
                <span className="text-[#FF5C28]">spaces</span>
              </span>
              <br />
              that{" "}
              <span className="relative inline-block">
                breathe.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 Q75 2 150 8 Q225 14 298 8"
                    stroke="#FF5C28"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-md mb-10">
              Award-winning architecture & design studio building Vietnam's architectural
              identity — one carefully considered space at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#FF5C28] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
              >
                View Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 text-sm font-bold px-8 py-4 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                About Studio
              </Link>
            </div>
          </div>

          {/* Right – project cards collage */}
          <div className="relative h-[480px] hidden lg:block">
            {featuredProjects.slice(0, 2).map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`absolute rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group ${
                  i === 0
                    ? "top-0 left-0 w-[58%] h-[52%]"
                    : "bottom-0 right-0 w-[58%] h-[52%]"
                }`}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.coverGradient} flex items-end p-5`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 w-full">
                    <p className="text-xs font-bold text-[#FF5C28] uppercase tracking-wide mb-0.5">
                      {project.tags[0]}
                    </p>
                    <p className="text-sm font-bold text-gray-900 truncate">{project.title}</p>
                  </div>
                </div>
              </Link>
            ))}
            {/* Floating badge */}
            <div className="absolute top-[48%] right-[38%] bg-white rounded-2xl shadow-xl px-5 py-4 z-10">
              <p className="text-2xl font-black text-gray-900">24+</p>
              <p className="text-xs text-gray-500 font-medium">Projects</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-100">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
                Selected Work
              </p>
              <h2 className="font-display text-4xl font-black tracking-tight text-gray-900">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-[#FF5C28] hover:border-[#FF5C28] transition-colors"
            >
              See All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.coverGradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  {project.location && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <p className="text-xs font-semibold text-gray-700">{project.location}</p>
                    </div>
                  )}
                  {project.year && (
                    <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <p className="text-xs font-bold text-white">{project.year}</p>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {project.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs font-bold text-[#FF5C28]">
                    <span>View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5C28]"
            >
              See All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
                What We Do
              </p>
              <h2 className="font-display text-4xl font-black tracking-tight text-gray-900 mb-6">
                Full-spectrum
                <br />
                design services.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                From a single house to a city block, we bring the same rigour and
                care to every scale of project.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#FF5C28] transition-colors"
              >
                Our Approach
              </Link>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`p-7 rounded-2xl border-2 hover:border-[#FF5C28] transition-colors group cursor-default ${
                    i === 0 ? "bg-orange-50 border-orange-100" : "bg-white border-gray-100"
                  }`}
                >
                  <span className="text-3xl block mb-4">{s.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNAL ── */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
                Thinking
              </p>
              <h2 className="font-display text-4xl font-black tracking-tight text-gray-900">
                From the Journal
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-[#FF5C28] hover:border-[#FF5C28] transition-colors"
            >
              All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestArticles.map((article, i) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className={`group rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  i === 0 ? "md:col-span-1 bg-white shadow-sm" : "bg-white shadow-sm"
                }`}
              >
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${article.coverGradient}`}
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.author}</span>
                    <span>{article.publishedAt}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
