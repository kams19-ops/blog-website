"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const socials = [
  
  {
    name: "Twitter",
    href: "https://x.com/Kamakshi_1905",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kamakshi-mudgal",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.135-1.867 3.135-4.56 0-2.384-1.714-4.052-4.161-4.052-2.833 0-4.497 2.124-4.497 4.32 0 .856.33 1.772.741 2.273.081.099.093.186.069.286-.076.314-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/kams05-ops",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
];

const menuItems = [
  { icon: "🏠", label: "Home", href: "/" },
  { icon: "💻", label: "Tech", href: "/category/tech" },
  { icon: "🌿", label: "Life & Daily", href: "/category/daily" },
  { divider: true },
  { icon: "📌", label: "Saved", href: "/saved" },
  { icon: "✉️", label: "Newsletter", href: "/#newsletter" },
  { icon: "🌸", label: "About Me", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-brown-50/85 backdrop-blur-md border-b border-brown-200 px-4 md:px-8 h-16 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-serif italic text-2xl text-brown-700 tracking-tight leading-none">
        km 's little <span className="text-brown-400">corner</span>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Socials — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              title={s.name}
              className="w-8 h-8 rounded-full bg-brown-100 border border-brown-200 flex items-center justify-center text-brown-600 hover:bg-brown-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Menu button + dropdown */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 bg-brown-700 text-brown-50 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide hover:bg-brown-600 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              width="13" height="13"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              className={`transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
            >
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Menu
          </button>

          {/* Dropdown */}
          <div
            className={`absolute right-0 top-12 w-52 bg-brown-50 border border-brown-200 rounded-2xl p-1.5 shadow-[0_8px_32px_rgba(61,43,24,0.12)] transition-all duration-200 ${
              open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {menuItems.map((item, i) =>
              "divider" in item ? (
                <div key={i} className="h-px bg-brown-200 my-1" />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-brown-800 text-sm hover:bg-brown-100 transition-colors"
                >
                  <span className="w-5 text-center text-base">{item.icon}</span>
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
