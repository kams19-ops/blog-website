"use client";

/**
 * PHOTO SECTION
 * ─────────────
 * How to add your own photos:
 *  1. Drop any .jpg / .png / .webp images into  public/images/
 *  2. Add entries to the `photos` array below — set `src` to "/images/your-file.jpg"
 *  3. Fill in `alt`, optional `caption`, and whether it is `wide` (spans 2 cols)
 *
 * The placeholder cards are shown when src is an empty string "".
 */

type Photo = {
  src: string;       // "/images/your-photo.jpg"  or "" for placeholder
  alt: string;
  caption?: string;
  wide?: boolean;    // spans 2 columns in the grid
};

const photos: Photo[] = [
  { src: "/images/canvaaa.jpg", alt: "photo 1", caption: "thats me guys!", wide: true },
  { src: "/images/coffee.jpg", alt: "photo 2", caption: "my love" },
  { src: "/images/bloom.jpg", alt: "photo 3", caption: "what i'm trying to do" },
  { src: "/images/book.webp", alt: "photo 4", caption: "what i'm reading" },
  { src: "/images/tajmahal.jpg", alt: "photo 5", caption: "favourite !!" },
  { src: "/images/camerame2.webp", alt: "photo 6", caption: "acting cool.." },
];

export default function PhotoGrid() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1 h-px bg-brown-200" />
        <span className="text-[0.72rem] tracking-widest uppercase text-brown-400">moments</span>
        <div className="flex-1 h-px bg-brown-200" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brown-100 to-brown-200 border border-brown-200 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(61,43,24,0.12)] ${photo.wide ? "col-span-2" : ""}`}
            style={{ aspectRatio: photo.wide ? "2/1" : "1/1" }}
          >
            {photo.src ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Placeholder */
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-brown-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="3"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span className="text-[0.72rem] tracking-wide">
                  {photo.caption ?? "add photo"}
                </span>
              </div>
            )}

            {/* Caption overlay */}
            {photo.src && photo.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/60 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[0.74rem] text-brown-100">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      
    </section>
  );
}
