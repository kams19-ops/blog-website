"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setDone(true);
  }

  return (
    <section id="newsletter" className="max-w-4xl mx-auto px-4 md:px-8 mb-14">
      <div className="bg-brown-100 border border-brown-200 rounded-2xl p-8 text-center">
        {done ? (
          <div className="py-4">
            <p className="font-serif text-2xl text-brown-800 mb-1">you&apos;re in ✦</p>
            <p className="text-sm text-brown-500">I&apos;ll send you something good soon.</p>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-[1.9rem] font-light text-brown-800 mb-1">stay in the loop ✦</h3>
            <p className="text-[0.88rem] text-brown-500 mb-5">New posts, occasional thoughts, nothing spammy. Pinky promise.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full border border-brown-200 bg-[#fffcf9] text-[0.88rem] text-brown-800 placeholder-brown-400 outline-none focus:border-brown-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-brown-700 text-brown-50 rounded-full text-[0.85rem] font-medium hover:bg-brown-600 transition-colors"
              >
                subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
