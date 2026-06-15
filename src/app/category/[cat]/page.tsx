import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import { notFound } from "next/navigation";

const labels: Record<string, string> = {
  tech: "tech",
  daily: "life & daily",
  learning: "learning",
  lists: "lists",
  reads: "reads",
};

export default function CategoryPage({ params }: { params: { cat: string } }) {
  if (!labels[params.cat]) return notFound();

  const filtered = posts.filter((p) => p.category === params.cat);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <a href="/" className="text-sm text-brown-400 hover:text-brown-600 mb-8 inline-block">← back home</a>
      <h1 className="font-serif text-4xl font-light text-brown-800 mb-2">{labels[params.cat]}</h1>
      <p className="text-brown-400 text-sm mb-10">{filtered.length} posts</p>
      <div className="masonry-grid">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}