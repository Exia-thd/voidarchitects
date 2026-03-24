import { defaultPosts } from "@/lib/posts";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return defaultPosts
    .filter((p) => p.category === "project")
    .map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
