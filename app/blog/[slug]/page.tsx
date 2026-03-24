import { defaultPosts } from "@/lib/posts";
import BlogDetail from "./BlogDetail";

export function generateStaticParams() {
  return defaultPosts
    .filter((p) => p.category === "blog")
    .map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}
