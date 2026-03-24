"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Post } from "@/lib/posts";

interface Props {
  id: string;
}

export default function EditPostForm({ id }: Props) {
  const { isAdmin, posts, updatePost } = useStore();
  const router = useRouter();
  const post = posts.find((p) => p.id === id);

  const [form, setForm] = useState<{
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: Post["category"];
    tags: string;
    author: string;
    published: boolean;
  } | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: post.tags.join(", "),
        author: post.author,
        published: post.published,
      });
    }
  }, [post]);

  if (!isAdmin) { router.replace("/admin"); return null; }

  if (!post || !form) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Post not found.</p>
          <Link href="/admin" className="text-[#FF5C28] font-semibold">← Back to Admin</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    updatePost(id, {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <Link href="/admin" className="hover:text-gray-700">Admin</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium truncate max-w-[200px]">{post.title}</span>
            <span>/</span>
            <span className="text-gray-700">Edit</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`/${post.category === "project" ? "projects" : "blog"}/${post.slug}`}
              target="_blank"
              className="text-xs text-gray-400 hover:text-gray-700"
            >
              Preview ↗
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-black text-gray-900">Edit Post</h1>
          {saved && (
            <div className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-xl">
              ✓ Saved
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
            {/* Category */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-3">
                Post Type
              </label>
              <div className="flex gap-2">
                {(["project", "blog"] as Post["category"][]).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setForm((f) => f ? { ...f, category: cat } : f)}
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
                onChange={(e) => setForm((f) => f ? { ...f, title: e.target.value } : f)}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-900 text-base px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                URL Slug
              </label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm((f) => f ? { ...f, slug: e.target.value } : f)}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-600 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                Excerpt
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm((f) => f ? { ...f, excerpt: e.target.value } : f)}
                rows={3}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors resize-none"
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                Content <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm((f) => f ? { ...f, content: e.target.value } : f)}
                rows={16}
                className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors resize-y font-mono leading-relaxed"
                required
              />
            </div>

            {/* Tags + Author */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm((f) => f ? { ...f, tags: e.target.value } : f)}
                  className="w-full border-2 border-gray-200 rounded-xl text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#FF5C28] transition-colors"
                  placeholder="Residential, Hanoi"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm((f) => f ? { ...f, author: e.target.value } : f)}
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
                onClick={() => setForm((f) => f ? { ...f, published: !f.published } : f)}
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
              <Link href="/admin" className="text-sm font-medium text-gray-400 hover:text-gray-700 px-5 py-2.5">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="bg-[#FF5C28] text-white text-sm font-bold px-8 py-2.5 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-70"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
