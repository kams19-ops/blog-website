import Link from "next/link";
import { posts } from "@/data/posts";
import CategoryFilter from "@/components/CategoryFilter";
import PhotoGrid from "@/components/PhotoGrid";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  const featured = posts.find((p) => p.featured);

  return (
    <div id="top">
      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pt-14 pb-8 text-center animate-fade-up">
        <span className="inline-block text-[0.72rem] font-medium tracking-widest uppercase text-brown-400 border border-brown-200 rounded-full px-4 py-1.5 mb-6">
          ✦ welcome to my space
        </span>
        <h1 className="font-serif text-[clamp(2.8rem,7vw,4.8rem)] font-light leading-[1.1] text-brown-800 mb-4">
          thoughts, <em className="italic text-brown-500">tech</em>
          <br />& tiny things
        </h1>
        <p className="text-[1rem] text-brown-500 leading-relaxed max-w-lg mx-auto mb-2">
          A cozy corner where I write about code, life, things I&apos;m learning, and everything in between. Pull up a chair.
        </p>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="max-w-4xl mx-auto px-4 md:px-8 mb-10 animate-fade-up-slow">
          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-brown-200" />
            <span className="text-[0.72rem] tracking-widest uppercase text-brown-400">featured</span>
            <div className="flex-1 h-px bg-brown-200" />
          </div>

          <Link href={`/posts/${featured.id}`} className="block group">
            <div className="grid md:grid-cols-2 bg-[#fffcf9] border border-brown-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(61,43,24,0.1)]">

              {/* Image panel */}
              <div className="min-h-[240px] md:min-h-[320px] relative overflow-hidden bg-brown-100">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${featured.color}`} />
                    <span className="relative z-10 flex items-center justify-center h-full" style={{ fontSize: "5rem" }}>{featured.emoji}</span>
                  </>
                )}
              </div>

              {/* Text panel */}
              <div className="p-8 flex flex-col justify-center">
                <p className="text-[0.72rem] font-medium tracking-widest uppercase text-brown-400 mb-3">
                  ✦ {featured.category}
                </p>
                <h2 className="font-serif text-[1.85rem] font-normal leading-snug text-brown-800 mb-3">
                  {featured.title}
                </h2>
                <p className="text-[0.9rem] text-brown-500 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-[0.78rem] text-brown-400 mb-4">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-brown-300 inline-block" />
                  <span>{featured.readTime} read</span>
                </div>
                <span className="text-[0.85rem] font-medium text-brown-700 group-hover:gap-3 transition-all inline-flex items-center gap-1.5">
                  read more →
                </span>
              </div>

            </div>
          </Link>
        </section>
      )}
      {/* ── ABOUT STRIP ── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-10">
        <div className="bg-gradient-to-br from-brown-700 to-brown-600 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 text-brown-100">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-brown-400 border-2 border-white/20 flex items-center justify-center text-3xl flex-shrink-0">
            🌸
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-[1.35rem] font-light italic mb-1">hey, I&apos;m Kamakshi Mudgal</h3>
            <p className="text-[0.85rem] opacity-80 leading-relaxed">
              Developer by day, over-thinker by night. I write about things I&apos;m figuring out - in code, in life, in the space between.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHOTO SECTION ── */}
      <PhotoGrid />

      {/* ── CATEGORY FILTER + POSTS GRID ── */}
      <CategoryFilter />

      {/* ── NEWSLETTER ── */}
      <Newsletter />
    </div>
  );
}
