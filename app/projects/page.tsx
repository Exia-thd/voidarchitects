"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "Residential", label: "Residential" },
  { value: "Cultural", label: "Cultural" },
  { value: "Mixed-Use", label: "Mixed-Use" },
  { value: "Temporary", label: "Temporary" },
  { value: "Hospitality", label: "Hospitality" },
];

export default function ProjectsPage() {
  const { posts, isAdmin, togglePublish, deletePost } = useStore();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = posts
    .filter((p) => p.category === "project")
    .filter((p) => isAdmin || p.published)
    .filter((p) => activeFilter === "all" || p.tags.includes(activeFilter));

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-12 pb-12 px-4 sm:px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
              Portfolio
            </p>
            <h1 className="font-display text-5xl font-black tracking-tight text-gray-900">
              Our Projects
            </h1>
          </div>
          {isAdmin && (
            <Link
              href="/admin/posts/new?category=project"
              className="inline-flex items-center gap-2 bg-[#FF5C28] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors self-start"
            >
              + New Project
            </Link>
          )}
        </div>
      </section>

      {/* Filters */}
      <div className="border-b border-gray-100 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 py-4">
          {filterOptions.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors ${
                activeFilter === f.value
                  ? "bg-[#FF5C28] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects in this category yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.coverGradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    {project.location && (
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <p className="text-xs font-semibold text-gray-700">{project.location}</p>
                      </div>
                    )}
                    {!project.published && isAdmin && (
                      <div className="absolute top-4 right-4 bg-yellow-400 rounded-full px-3 py-1">
                        <p className="text-xs font-bold text-yellow-900">Draft</p>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
                    {project.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      {project.year && <span>{project.year}</span>}
                      {project.area && <span>{project.area}</span>}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-[#FF5C28] hover:underline"
                    >
                      View →
                    </Link>
                  </div>
                  {isAdmin && (
                    <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href={`/admin/posts/${project.id}/edit`}
                        className="text-xs font-medium text-gray-400 hover:text-gray-700"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => togglePublish(project.id)}
                        className="text-xs font-medium text-gray-400 hover:text-[#FF5C28]"
                      >
                        {project.published ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() => { if (confirm("Delete?")) deletePost(project.id); }}
                        className="text-xs font-medium text-gray-400 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
