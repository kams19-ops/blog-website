import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.id === params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      {/* Back */}
      <a href="/" className="text-sm text-brown-400 hover:text-brown-600 transition-colors mb-8 inline-block">
        ← back home
      </a>

      {/* Header */}
      <div className="w-full h-64 rounded-2xl overflow-hidden relative mb-8 bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-contain p-8"
        />
      </div>

      <p className="text-xs font-medium tracking-widest uppercase text-brown-400 mb-3">
        ✦ {post.category}
      </p>

      <h1 className="font-serif text-4xl font-light text-brown-800 leading-snug mb-4">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 text-sm text-brown-400 mb-8 pb-8 border-b border-brown-200">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-brown-300 inline-block" />
        <span>{post.readTime} read</span>
      </div>

      {/* Content - write your post here */}
      <div className="text-brown-600 leading-relaxed space-y-5">
        {post.content.trim().split("\n\n").map((para, i) => (
          <p key={i} className="text-[1rem] leading-[1.85]">
            {para.trim()}
          </p>
        ))}
      </div>
    </div>
  );
}