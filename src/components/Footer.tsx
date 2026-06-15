import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-brown-200 py-8 px-4 text-center text-sm text-brown-400">
      <p>
        made with ♡ by{" "}
        <Link href="/about" className="text-brown-500 hover:text-brown-700 transition-colors border-b border-brown-200">
          Kamakshi Mudgal
        </Link>{" "}
        ·{" "}
        <a href="/feed.xml" className="hover:text-brown-600 transition-colors">rss</a>{" "}
        ·{" "}
        <a href="#top" className="hover:text-brown-600 transition-colors">back to top ↑</a>
      </p>
    </footer>
  );
}
