"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";

export default function BlogPage() {
  const { posts, isAdmin, togglePublish, deletePost } = useStore();

  const articles = posts
    .filter((p) => p.category === "blog")
    .filter((p) => isAdmin || p.published);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-[#1a1a1a]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-6">
          Journal
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#ededed] mb-3">
              Thinking & Writing
            </h1>
            <p className="text-sm text-[#555] max-w-md">
              Essays, observations, and research from the studio on architecture,
              urbanism, and material culture.
            </p>
          </div>
          {isAdmin && (
            <Link
              href="/admin/posts/new?category=blog"
              className="text-xs tracking-widest uppercase border border-[#c8a96e] text-[#c8a96e] px-4 py-2 hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all self-start"
            >
              + New Article
            </Link>
          )}
        </div>
      </section>

      {/* Articles */}
      <div className="py-8">
        {articles.length === 0 ? (
          <p className="text-sm text-[#444] py-12">No articles published yet.</p>
        ) : (
          <div className="space-y-0">
            {articles.map((article) => (
              <div
                key={article.id}
                className="border-b border-[#1a1a1a] group"
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="flex flex-col md:flex-row md:items-baseline gap-4 py-8 hover:bg-[#0d0d0d] transition-colors px-2"
                >
                  <span className="text-xs text-[#333] w-24 shrink-0">
                    {article.publishedAt}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="text-base font-medium text-[#ededed] group-hover:text-[#c8a96e] transition-colors">
                        {article.title}
                      </h3>
                      {!article.published && isAdmin && (
                        <span className="text-xs bg-[#2a1a1a] text-[#c84e4e] px-2 py-0.5 shrink-0 self-start">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#555] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase text-[#333]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-[#333] group-hover:text-[#555] transition-colors shrink-0 hidden md:block">
                    Read →
                  </span>
                </Link>
                {isAdmin && (
                  <div className="flex gap-4 pb-4 px-2">
                    <Link
                      href={`/admin/posts/${article.id}/edit`}
                      className="text-xs text-[#444] hover:text-[#888] transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => togglePublish(article.id)}
                      className="text-xs text-[#444] hover:text-[#c8a96e] transition-colors"
                    >
                      {article.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Delete this article?")) deletePost(article.id);
                      }}
                      className="text-xs text-[#444] hover:text-[#c84e4e] transition-colors"
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
