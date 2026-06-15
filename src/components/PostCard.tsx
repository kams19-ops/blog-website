"use client";
import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="masonry-item group">
      <Link href={`/posts/${post.id}`} className="block">
        <div className="bg-[#fffcf9] border border-brown-200 rounded-2xl overflow-hidden ...">
          {/* Thumb */}
          <div
            className="w-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #d4b896, #b8956a)",
              height: `${130 + ((post.id.length * 7) % 80)}px`
            }}
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain p-4"
              />
            ) : (
              <span style={{ fontSize: "2.2rem" }}>{post.emoji}</span>
            )}
          </div>

          {/* Body */}
          <div className="p-4 pb-3">
            <p className="text-[0.7rem] font-medium tracking-widest uppercase text-brown-400 mb-1">
              ✦ {post.category}
            </p>
            <h3 className="font-serif text-[1.1rem] font-normal leading-snug text-brown-800 mb-1.5">
              {post.title}
            </h3>
            <p className="text-[0.82rem] text-brown-500 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-brown-100">
            <span className="text-[0.74rem] text-brown-400">{post.date.split(",")[0]} · {post.readTime}</span>
            <button
              onClick={() => setSaved((s) => !s)}
              className={`text-lg transition-all duration-200 hover:scale-125 ${saved ? "text-brown-500" : "text-brown-300 hover:text-brown-500"}`}
              title={saved ? "Unsave" : "Save"}
            >
              {saved ? "♥" : "♡"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
