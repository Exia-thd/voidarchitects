"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";

const filters = ["All", "residential", "commercial", "cultural", "landscape", "temporary"];

export default function ProjectsPage() {
  const { posts, isAdmin, togglePublish, deletePost } = useStore();
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = posts
    .filter((p) => p.category === "project")
    .filter((p) => isAdmin || p.published)
    .filter((p) => activeFilter === "All" || p.tags.includes(activeFilter));

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-[#1a1a1a]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-6">
          Projects
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#ededed]">
            Selected Work
          </h1>
          {isAdmin && (
            <Link
              href="/admin/posts/new?category=project"
              className="text-xs tracking-widest uppercase border border-[#c8a96e] text-[#c8a96e] px-4 py-2 hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all self-start"
            >
              + New Project
            </Link>
          )}
        </div>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-1 py-6 border-b border-[#1a1a1a]">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-xs tracking-widest uppercase px-4 py-2 transition-colors ${
              activeFilter === f
                ? "bg-[#1a1a1a] text-[#ededed]"
                : "text-[#444] hover:text-[#888]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="py-12">
        {projects.length === 0 ? (
          <p className="text-sm text-[#444] py-12">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {projects.map((project, i) => (
              <div key={project.id} className="group bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors">
                <Link href={`/projects/${project.slug}`} className="block p-8">
                  <div className="aspect-[16/9] bg-[#0d0d0d] border border-[#1a1a1a] mb-6 flex items-center justify-center overflow-hidden">
                    <span className="text-[#1a1a1a] text-8xl font-thin select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs tracking-widest uppercase text-[#444]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base font-medium text-[#ededed] group-hover:text-[#c8a96e] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#555] leading-relaxed line-clamp-2">
                        {project.excerpt}
                      </p>
                    </div>
                    {!project.published && isAdmin && (
                      <span className="text-xs bg-[#2a1a1a] text-[#c84e4e] px-2 py-1 shrink-0">
                        Draft
                      </span>
                    )}
                  </div>
                </Link>
                {isAdmin && (
                  <div className="flex gap-3 px-8 pb-6">
                    <Link
                      href={`/admin/posts/${project.id}/edit`}
                      className="text-xs text-[#555] hover:text-[#888] transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => togglePublish(project.id)}
                      className="text-xs text-[#555] hover:text-[#c8a96e] transition-colors"
                    >
                      {project.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Delete this project?")) deletePost(project.id);
                      }}
                      className="text-xs text-[#555] hover:text-[#c84e4e] transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
