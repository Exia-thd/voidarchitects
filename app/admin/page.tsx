"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function AdminPage() {
  const { isAdmin, login, logout, posts, togglePublish, deletePost } = useStore();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(password)) {
      setError("Incorrect password. Try: voidarchitects2024");
      setPassword("");
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FF5C28] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm">VA</span>
            </div>
            <div>
              <p className="font-bold text-gray-900">Void Architects</p>
              <p className="text-xs text-gray-400">Admin Dashboard</p>
            </div>
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-2">Sign in</h1>
          <p className="text-sm text-gray-400 mb-8">Enter your password to manage content.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-900 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
                placeholder="••••••••••••••••"
                autoFocus
              />
            </div>
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#FF5C28] text-white text-sm font-bold py-3.5 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Sign In →
            </button>
          </form>
        </div>
      </div>
    );
  }

  const allProjects = posts.filter((p) => p.category === "project");
  const allArticles = posts.filter((p) => p.category === "blog");
  const published = posts.filter((p) => p.published);
  const drafts = posts.filter((p) => !p.published);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-900">Admin Dashboard</span>
            <span className="text-xs bg-orange-100 text-[#FF5C28] font-bold px-2.5 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-700">
              ← View Site
            </Link>
            <button
              onClick={logout}
              className="text-xs font-semibold text-gray-500 hover:text-red-500 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Posts", value: posts.length, color: "bg-white", text: "text-gray-900" },
            { label: "Projects", value: allProjects.length, color: "bg-white", text: "text-gray-900" },
            { label: "Published", value: published.length, color: "bg-green-50", text: "text-green-700" },
            { label: "Drafts", value: drafts.length, color: "bg-yellow-50", text: "text-yellow-700" },
          ].map((s) => (
            <div key={s.label} className={`${s.color} rounded-2xl border border-gray-100 p-6 shadow-sm`}>
              <p className={`text-4xl font-black ${s.text} mb-1`}>{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-8">
          <Link
            href="/admin/posts/new?category=project"
            className="inline-flex items-center gap-2 bg-[#FF5C28] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
          >
            + New Project
          </Link>
          <Link
            href="/admin/posts/new?category=blog"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 text-sm font-bold px-5 py-2.5 rounded-xl hover:border-gray-400 transition-colors"
          >
            + New Article
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">All Posts ({posts.length})</h2>
          </div>
          {posts.length === 0 ? (
            <div className="px-6 py-16 text-center text-gray-400">
              No posts yet. Create your first one above.
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Thumbnail */}
                  <div
                    className={`w-12 h-12 rounded-xl shrink-0 bg-gradient-to-br ${post.coverGradient}`}
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{post.title}</p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-xs text-gray-400 capitalize">{post.category}</span>
                      <span className="text-xs text-gray-300">·</span>
                      <span className="text-xs text-gray-400">{post.publishedAt}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${
                      post.published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-xs font-medium text-gray-400 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => togglePublish(post.id)}
                      className="text-xs font-medium text-gray-400 hover:text-[#FF5C28] px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      {post.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => { if (confirm(`Delete "${post.title}"?`)) deletePost(post.id); }}
                      className="text-xs font-medium text-gray-400 hover:text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                    <Link
                      href={`/${post.category === "project" ? "projects" : "blog"}/${post.slug}`}
                      target="_blank"
                      className="text-xs font-medium text-gray-400 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      View ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
