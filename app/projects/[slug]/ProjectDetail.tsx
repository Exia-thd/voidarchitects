"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useStore } from "@/lib/store";

interface Props {
  slug: string;
}

export default function ProjectDetail({ slug }: Props) {
  const { posts, isAdmin } = useStore();
  const project = posts.find((p) => p.slug === slug && p.category === "project");

  if (!project || (!project.published && !isAdmin)) notFound();

  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-bold text-gray-900 mt-10 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="mb-5 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-500">
                <span className="text-[#FF5C28] mt-1 shrink-0">▸</span>
                <span>{item.replace("- ", "")}</span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-gray-500 leading-[1.85] mb-5">
          {block}
        </p>
      );
    });
  };

  const otherProjects = posts
    .filter((p) => p.category === "project" && p.published && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="bg-white">
      {/* Hero image */}
      <div className={`w-full aspect-[21/9] bg-gradient-to-br ${project.coverGradient} relative`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold bg-white/90 text-[#FF5C28] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {!project.published && isAdmin && (
                <span className="text-xs font-bold bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full">
                  Draft
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
                Project Details
              </h3>
              <dl className="space-y-4">
                {[
                  { label: "Location", value: project.location },
                  { label: "Year", value: project.year },
                  { label: "Area", value: project.area },
                  { label: "Client", value: "Confidential" },
                  { label: "Author", value: project.author },
                  { label: "Published", value: project.publishedAt },
                ].filter((d) => d.value).map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{label}</dt>
                    <dd className="text-sm font-semibold text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>

              {isAdmin && (
                <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-2">
                  <Link
                    href={`/admin/posts/${project.id}/edit`}
                    className="text-sm font-bold text-center py-2.5 bg-[#FF5C28] text-white rounded-xl hover:bg-orange-600 transition-colors"
                  >
                    Edit Project
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <p className="text-xl text-gray-500 leading-relaxed mb-8 font-light">
              {project.excerpt}
            </p>
            <div className="prose">{renderContent(project.content)}</div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {otherProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-8">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className={`aspect-[16/9] bg-gradient-to-br ${p.coverGradient}`} />
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#FF5C28] transition-colors">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
