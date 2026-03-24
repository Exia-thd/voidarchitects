import { defaultPosts } from "@/lib/posts";
import EditPostForm from "./EditPostForm";

export function generateStaticParams() {
  return defaultPosts.map((p) => ({ id: p.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  return <EditPostForm id={id} />;
}
