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

  if (!article || (!article.published && !isAdmin)) {
    notFound();
  }

  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-base font-semibold text-[#ededed] mt-8 mb-3">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside mb-4 space-y-1">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-[#666]">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-sm text-[#666] leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="pt-10 pb-6 flex items-center gap-3 text-xs text-[#444]">
        <Link href="/blog" className="hover:text-[#888] transition-colors">
          Journal
        </Link>
        <span>/</span>
        <span className="text-[#666] truncate">{article.title}</span>
      </div>

      <div className="border-t border-[#1a1a1a] pt-10 pb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs tracking-widest uppercase text-[#c8a96e]">
              {tag}
            </span>
          ))}
          {!article.published && isAdmin && (
            <span className="text-xs bg-[#2a1a1a] text-[#c84e4e] px-2 py-0.5">Draft</span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[#ededed] mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-base text-[#666] leading-relaxed mb-6">{article.excerpt}</p>
        <div className="flex gap-6 text-xs text-[#444]">
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
        </div>
        {isAdmin && (
          <div className="mt-6">
            <Link
              href={`/admin/posts/${article.id}/edit`}
              className="text-xs border border-[#333] text-[#888] px-4 py-2 hover:border-[#555] transition-colors"
            >
              Edit Article
            </Link>
          </div>
        )}
      </div>

      <div className="pb-24">{renderContent(article.content)}</div>

      <div className="border-t border-[#1a1a1a] py-10">
        <Link
          href="/blog"
          className="text-xs tracking-widest uppercase text-[#444] hover:text-[#888] transition-colors"
        >
          ← Back to Journal
        </Link>
      </div>
    </div>
  );
}
