"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Post } from "@/lib/posts";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function EditPostPage({ params }: Props) {
  const { id } = use(params);
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
    coverImage: string;
  } | null>(null);

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
        coverImage: post.coverImage,
      });
    }
  }, [post]);

  if (!isAdmin) {
    router.replace("/admin");
    return null;
  }

  if (!post || !form) {
    return (
      <div className="max-w-3xl mx-auto px-6 pt-32">
        <p className="text-sm text-[#444]">Post not found.</p>
        <Link href="/admin" className="text-xs text-[#555] hover:text-[#888] mt-4 block">
          ← Back to Admin
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePost(id, {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
    });
    router.push("/admin");
  };

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="pt-16 pb-8 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3 text-xs text-[#444] mb-6">
          <Link href="/admin" className="hover:text-[#888]">Admin</Link>
          <span>/</span>
          <span className="truncate">{post.title}</span>
          <span>/</span>
          <span>Edit</span>
        </div>
        <h1 className="text-2xl font-semibold text-[#ededed] tracking-[-0.02em]">
          Edit Post
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
                onClick={() => setForm((f) => f ? { ...f, category: cat } : f)}
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
            onChange={(e) => setForm((f) => f ? { ...f, title: e.target.value } : f)}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
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
            onChange={(e) => setForm((f) => f ? { ...f, slug: e.target.value } : f)}
            className="w-full bg-[#111] border border-[#222] text-[#555] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Excerpt
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm((f) => f ? { ...f, excerpt: e.target.value } : f)}
            rows={3}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
          />
        </div>

        {/* Content */}
        <div>
          <label className="text-xs tracking-widest uppercase text-[#555] block mb-2">
            Content <span className="text-[#c84e4e]">*</span>
          </label>
          <textarea
            value={form.content}
            onChange={(e) => setForm((f) => f ? { ...f, content: e.target.value } : f)}
            rows={16}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors resize-y font-mono text-xs leading-relaxed"
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
            onChange={(e) => setForm((f) => f ? { ...f, tags: e.target.value } : f)}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
            placeholder="tag1, tag2, tag3"
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
            onChange={(e) => setForm((f) => f ? { ...f, author: e.target.value } : f)}
            className="w-full bg-[#111] border border-[#222] text-[#ededed] text-sm px-4 py-3 focus:outline-none focus:border-[#c8a96e] transition-colors"
          />
        </div>

        {/* Publish toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setForm((f) => f ? { ...f, published: !f.published } : f)}
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
            {form.published ? "Published" : "Draft"}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t border-[#1a1a1a]">
          <button
            type="submit"
            className="text-xs tracking-[0.15em] uppercase bg-[#c8a96e] text-[#0a0a0a] px-8 py-3 font-semibold hover:bg-[#e0c080] transition-colors"
          >
            Save Changes
          </button>
          <Link
            href="/admin"
            className="text-xs tracking-widest uppercase text-[#444] hover:text-[#888] transition-colors py-3"
          >
            Cancel
          </Link>
          {/* Preview link */}
          <Link
            href={`/${post.category === "project" ? "projects" : "blog"}/${post.slug}`}
            target="_blank"
            className="text-xs tracking-widest uppercase text-[#333] hover:text-[#555] transition-colors py-3 ml-auto"
          >
            Preview →
          </Link>
        </div>
      </form>
    </div>
  );
}
