"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Post } from "@/lib/posts";
import { Suspense } from "react";

function NewPostForm() {
  const { isAdmin, addPost } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultCategory = (searchParams.get("category") as Post["category"]) || "blog";

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: defaultCategory,
    tags: "",
    author: "Void Architects",
    published: false,
    coverImage: "",
  });

  if (!isAdmin) {
    router.replace("/admin");
    return null;
  }

  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    setForm((f) => ({ ...f, title, slug }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;

    addPost({
      title: form.title,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
      excerpt: form.excerpt,
      content: form.content,
      category: form.category as Post["category"],
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      author: form.author,
      published: form.published,
      coverImage: form.coverImage,
    });

    router.push("/admin");
  };

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="pt-16 pb-8 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3 text-xs text-[#444] mb-6">
          <Link href="/admin" className="hover:text-[#888]">Admin</Link>
          <span>/</span>
          <span>New Post</span>
        </div>
        <h1 className="text-2xl font-semibold text-[#ededed] tracking-[-0.02em]">
          Create New Post
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="py-10 space-y-6">
        {/* Category */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Category
          </label>
          <div className="flex gap-2">
            {(["project", "blog"] as Post["category"][]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setForm((f) => ({ ...f, category: cat }))}
                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                  form.category === cat
                    ? "border-[#c8a96e] text-[#c8a96e]"
                    : "border-[#222] text-[#444] hover:border-[#333]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Title <span className="text-[#c84e4e]">*</span>
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
            placeholder="Post title"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Slug (URL)
          </label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            className="w-full bg-[#111] border border-[#222] text-[#555] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
            placeholder="auto-generated-from-title"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Excerpt
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            rows={3}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
            placeholder="Short summary (shown in listings)"
          />
        </div>

        {/* Content */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Content <span className="text-[#c84e4e]">*</span>
          </label>
          <p className="text-xs text-[#333] mb-2">
            Supports basic markdown: ## for headings, - for lists
          </p>
          <textarea
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            rows={16}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors resize-y font-mono text-xs leading-relaxed"
            placeholder="## Section Title&#10;&#10;Your content here..."
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Tags
          </label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
            placeholder="residential, hanoi, concrete (comma-separated)"
          />
        </div>

        {/* Author */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Author
          </label>
          <input
            type="text"
            value={form.author}
            onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
          />
        </div>

        {/* Publish toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
            className={`w-10 h-6 rounded-full transition-colors relative ${
              form.published ? "bg-[#c8a96e]" : "bg-[#222]"
            }`}
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                form.published ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-sm text-[#666]">
            {form.published ? "Published" : "Save as draft"}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t border-[#1a1a1a]">
          <button
            type="submit"
            className="text-xs tracking-[0.15em] uppercase bg-[#c8a96e] text-[#0a0a0a] px-8 py-3 font-semibold hover:bg-[#e0c080] transition-colors"
          >
            Create Post
          </button>
          <Link
            href="/admin"
            className="text-xs tracking-widest uppercase text-[#444] hover:text-[#888] transition-colors py-3"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default function NewPostPage() {
  return (
    <Suspense>
      <NewPostForm />
    </Suspense>
  );
}
