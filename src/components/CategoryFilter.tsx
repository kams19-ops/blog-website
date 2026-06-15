"use client";
import { useState } from "react";
import { categories, posts, type Category } from "@/data/posts";
import PostCard from "./PostCard";

export default function CategoryFilter() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Tag row */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[0.78rem] px-3.5 py-1.5 rounded-full border transition-all duration-200 font-normal ${
              active === cat
                ? "bg-brown-600 text-brown-50 border-brown-600"
                : "bg-brown-100 text-brown-600 border-brown-200 hover:bg-brown-600 hover:text-brown-50 hover:border-brown-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-2xl font-normal text-brown-800">
            {active === "all" ? "recent posts" : active}
          </h2>
          <a href="#" className="text-[0.82rem] text-brown-500 border-b border-brown-200 pb-px hover:text-brown-700 hover:border-brown-500 transition-colors">
            see all →
          </a>
        </div>
        <div className="masonry-grid">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
