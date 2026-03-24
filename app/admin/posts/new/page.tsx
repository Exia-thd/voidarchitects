"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Post } from "@/lib/posts";

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
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isAdmin) router.replace("/admin");
  }, [isAdmin, router]);

  if (!isAdmin) { return null; }

  const handleTitleChange = (title: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    setForm((f) => ({ ...f, title, slug }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    addPost({
      title: form.title,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
      excerpt: form.excerpt,
      content: form.content,
      category: form.category as Post["category"],
      coverGradient: form.category === "project"
        ? "from-orange-200 via-amber-100 to-yellow-200"
        : "from-sky-200 via-blue-100 to-indigo-200",
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      author: form.author,
      published: form.published,
    });
    router.push("/admin");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3 text-xs text-gray-400">
          <Link href="/admin" className="hover:text-gray-700">Admin</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">New Post</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl font-black text-gray-900 mb-8">Create New Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
            {/* Category toggle */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-3">
                Post Type
              </label>
              <div className="flex gap-2">
                {(["project", "blog"] as Post["category"][]).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, category: cat }))}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold capitalize transition-colors ${
                      form.category === cat
                        ? "bg-[#FF5C28] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-900 text-base px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
                placeholder="Enter post title"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                URL Slug
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-xl focus-within:border-[#FF5C28] transition-colors overflow-hidden">
                <span className="px-3 py-3 text-sm text-gray-400 bg-gray-50 border-r border-gray-200">
                  /projects/
                </span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                  className="flex-1 px-3 py-3 text-sm text-gray-700 focus:outline-none bg-transparent"
                  placeholder="auto-generated"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                Excerpt / Summary
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                rows={3}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors resize-none"
                placeholder="Short description shown in listings and SEO"
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                Content <span className="text-red-400">*</span>
              </label>
              <p className="text-xs text-gray-400 mb-2">
                Markdown-lite supported: <code className="bg-gray-100 px-1">## Heading</code> and <code className="bg-gray-100 px-1">- List item</code>
              </p>
              <textarea
                value={form.content}
                onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                rows={14}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors resize-y font-mono leading-relaxed"
                placeholder={"## Introduction\n\nYour content here...\n\n## Section Two\n\nMore content..."}
                required
              />
            </div>

            {/* Tags + Author row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
                  className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
                  placeholder="Residential, Hanoi, Concrete"
                />
                <p className="text-xs text-gray-400 mt-1">Comma-separated</p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                  className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Publish bar */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
                className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${
                  form.published ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                    form.published ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {form.published ? "Published" : "Draft"}
                </p>
                <p className="text-xs text-gray-400">
                  {form.published ? "Visible on the website" : "Only visible in Admin"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="text-sm font-medium text-gray-400 hover:text-gray-700 px-5 py-2.5"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="bg-[#FF5C28] text-white text-sm font-bold px-8 py-2.5 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-70"
              >
                {saving ? "Creating..." : "Create Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
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
