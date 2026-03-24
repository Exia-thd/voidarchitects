"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";

export default function BlogPage() {
  const { posts, isAdmin, togglePublish, deletePost } = useStore();

  const articles = posts
    .filter((p) => p.category === "blog")
    .filter((p) => isAdmin || p.published);

  const [featured, ...rest] = articles;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-12 pb-12 px-4 sm:px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
              Ideas & Thinking
            </p>
            <h1 className="text-5xl font-black tracking-tight text-gray-900">
              Journal
            </h1>
            <p className="text-gray-500 mt-3 max-w-md">
              Essays, research, and observations from the studio on architecture,
              materials, climate, and Vietnamese urbanism.
            </p>
          </div>
          {isAdmin && (
            <Link
              href="/admin/posts/new?category=blog"
              className="inline-flex items-center gap-2 bg-[#FF5C28] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors self-start"
            >
              + New Article
            </Link>
          )}
        </div>
      </section>

      {articles.length === 0 ? (
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-gray-400 text-lg">No articles published yet.</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Featured article */}
          {featured && (
            <div className="mb-12">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`aspect-[4/3] md:aspect-auto bg-gradient-to-br ${featured.coverGradient} min-h-[280px]`}
                />
                <div className="p-8 md:py-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                    {!featured.published && isAdmin && (
                      <span className="tag-pill bg-yellow-100 text-yellow-700">Draft</span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-[#FF5C28] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="font-medium text-gray-600">{featured.author}</span>
                      <span>·</span>
                      <span>{featured.publishedAt}</span>
                    </div>
                    <span className="text-sm font-bold text-[#FF5C28] group-hover:underline">
                      Read →
                    </span>
                  </div>
                  {isAdmin && (
                    <div
                      className="flex gap-4 mt-4 pt-4 border-t border-gray-200"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Link href={`/admin/posts/${featured.id}/edit`} className="text-xs text-gray-400 hover:text-gray-700">Edit</Link>
                      <button onClick={() => togglePublish(featured.id)} className="text-xs text-gray-400 hover:text-[#FF5C28]">
                        {featured.published ? "Unpublish" : "Publish"}
                      </button>
                      <button onClick={() => { if(confirm("Delete?")) deletePost(featured.id); }} className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          )}

          {/* Rest of articles */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div
                      className={`aspect-[16/9] bg-gradient-to-br ${article.coverGradient}`}
                    />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                        {!article.published && isAdmin && (
                          <span className="tag-pill bg-yellow-100 text-yellow-700">Draft</span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="font-medium">{article.author}</span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  </Link>
                  {isAdmin && (
                    <div className="flex gap-4 px-6 pb-4 border-t border-gray-100 pt-3">
                      <Link href={`/admin/posts/${article.id}/edit`} className="text-xs text-gray-400 hover:text-gray-700">Edit</Link>
                      <button onClick={() => togglePublish(article.id)} className="text-xs text-gray-400 hover:text-[#FF5C28]">
                        {article.published ? "Unpublish" : "Publish"}
                      </button>
                      <button onClick={() => { if(confirm("Delete?")) deletePost(article.id); }} className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
