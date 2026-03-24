"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useStore } from "@/lib/store";

interface Props {
  slug: string;
}

export default function BlogDetail({ slug }: Props) {
  const { posts, isAdmin } = useStore();
  const article = posts.find((p) => p.slug === slug && p.category === "blog");

  if (!article || (!article.published && !isAdmin)) notFound();

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

  const related = posts
    .filter((p) => p.category === "blog" && p.published && p.id !== article.id)
    .slice(0, 2);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className={`w-full aspect-[21/9] md:aspect-[32/9] bg-gradient-to-br ${article.coverGradient} relative`}>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/blog" className="hover:text-[#FF5C28] transition-colors">Journal</Link>
          <span>/</span>
          <span className="truncate text-gray-600">{article.title}</span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
          {!article.published && isAdmin && (
            <span className="tag-pill bg-yellow-100 text-yellow-700">Draft</span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
          {article.title}
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed mb-8 font-light">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-100">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-orange-700">
              {article.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{article.author}</p>
            <p className="text-xs text-gray-400">{article.publishedAt}</p>
          </div>
          {isAdmin && (
            <Link
              href={`/admin/posts/${article.id}/edit`}
              className="ml-auto text-xs font-semibold bg-orange-50 text-[#FF5C28] px-4 py-2 rounded-full hover:bg-orange-100 transition-colors"
            >
              Edit Article
            </Link>
          )}
        </div>

        {/* Body */}
        <div className="prose">{renderContent(article.content)}</div>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to Journal
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-gray-50 py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-black text-gray-900 mb-8">More from the Journal</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className={`aspect-[16/9] bg-gradient-to-br ${p.coverGradient}`} />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#FF5C28] transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-sm text-gray-400">{p.author} · {p.publishedAt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
