"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function AdminPage() {
  const { isAdmin, login, logout, posts, togglePublish, deletePost } = useStore();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (!ok) {
      setError("Incorrect password.");
      setPassword("");
    }
  };

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto px-6 pt-32 pb-20">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-8">
          Admin
        </p>
        <h1 className="text-2xl font-semibold text-[#ededed] mb-8 tracking-[-0.02em]">
          Sign in to continue
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
              placeholder="Enter admin password"
              autoFocus
            />
          </div>
          {error && (
            <p className="text-xs text-[#c84e4e]">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#c8a96e] text-[#0a0a0a] text-xs tracking-[0.15em] uppercase py-3 font-semibold hover:bg-[#e0c080] transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-xs text-[#333] mt-6">
          Default password: <code className="text-[#555]">voidarchitects2024</code>
        </p>
      </div>
    );
  }

  const allProjects = posts.filter((p) => p.category === "project");
  const allArticles = posts.filter((p) => p.category === "blog");
  const published = posts.filter((p) => p.published);
  const drafts = posts.filter((p) => !p.published);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <section className="pt-16 pb-10 border-b border-[#1a1a1a]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-2">
              Admin Dashboard
            </p>
            <h1 className="text-3xl font-semibold text-[#ededed] tracking-[-0.02em]">
              Content Management
            </h1>
          </div>
          <button
            onClick={logout}
            className="text-xs tracking-widest uppercase text-[#444] hover:text-[#888] transition-colors"
          >
            Sign Out
          </button>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] my-10">
        {[
          { label: "Total Posts", value: posts.length },
          { label: "Projects", value: allProjects.length },
          { label: "Published", value: published.length },
          { label: "Drafts", value: drafts.length },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#0a0a0a] p-6">
            <p className="text-3xl font-semibold text-[#ededed] mb-1">{stat.value}</p>
            <p className="text-xs tracking-widest uppercase text-[#444]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="flex gap-3 mb-12">
        <Link
          href="/admin/posts/new?category=project"
          className="text-xs tracking-widest uppercase border border-[#c8a96e] text-[#c8a96e] px-5 py-2.5 hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all"
        >
          + New Project
        </Link>
        <Link
          href="/admin/posts/new?category=blog"
          className="text-xs tracking-widest uppercase border border-[#333] text-[#888] px-5 py-2.5 hover:border-[#555] transition-colors"
        >
          + New Article
        </Link>
      </div>

      {/* Posts table */}
      <div className="border border-[#1a1a1a]">
        <div className="grid grid-cols-12 px-6 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
          <span className="col-span-5 text-xs tracking-widest uppercase text-[#444]">Title</span>
          <span className="col-span-2 text-xs tracking-widest uppercase text-[#444]">Type</span>
          <span className="col-span-2 text-xs tracking-widest uppercase text-[#444]">Status</span>
          <span className="col-span-1 text-xs tracking-widest uppercase text-[#444]">Date</span>
          <span className="col-span-2 text-xs tracking-widest uppercase text-[#444]">Actions</span>
        </div>
        {posts.length === 0 ? (
          <div className="px-6 py-10 text-sm text-[#444]">No posts yet.</div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="grid grid-cols-12 px-6 py-4 border-b border-[#1a1a1a] hover:bg-[#0d0d0d] transition-colors items-center"
            >
              <div className="col-span-5">
                <p className="text-sm text-[#ededed] truncate">{post.title}</p>
                <p className="text-xs text-[#444] truncate mt-0.5">{post.excerpt}</p>
              </div>
              <div className="col-span-2">
                <span className="text-xs tracking-widest uppercase text-[#555]">
                  {post.category}
                </span>
              </div>
              <div className="col-span-2">
                <span
                  className={`text-xs px-2 py-0.5 ${
                    post.published
                      ? "bg-[#0d2a0d] text-[#4ec84e]"
                      : "bg-[#2a1a1a] text-[#c84e4e]"
                  }`}
                >
                  {post.published ? "Published" : "Draft"}
                </span>
              </div>
              <div className="col-span-1">
                <span className="text-xs text-[#444]">{post.publishedAt}</span>
              </div>
              <div className="col-span-2 flex gap-3">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-xs text-[#555] hover:text-[#c8a96e] transition-colors"
                >
                  Edit
                </Link>
                <button
                  onClick={() => togglePublish(post.id)}
                  className="text-xs text-[#555] hover:text-[#888] transition-colors"
                >
                  {post.published ? "Unpublish" : "Publish"}
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete "${post.title}"?`)) deletePost(post.id);
                  }}
                  className="text-xs text-[#555] hover:text-[#c84e4e] transition-colors"
                >
                  Del
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="py-12 flex gap-6 text-xs text-[#333]">
        <Link href="/" className="hover:text-[#555] transition-colors">← Back to site</Link>
        <Link href="/projects" className="hover:text-[#555] transition-colors">Projects</Link>
        <Link href="/blog" className="hover:text-[#555] transition-colors">Journal</Link>
      </div>
    </div>
  );
}
