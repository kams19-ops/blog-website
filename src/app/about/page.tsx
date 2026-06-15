export default function About() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-14">
            <a href="/" className="text-sm text-brown-400 hover:text-brown-600 mb-8 inline-block">← back home</a>

            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-brown-200 mb-8">
                <img
                    src="/images/camerame.webp"
                    alt="your name"
                    className="w-full h-full object-cover"
                />
            </div>

            <h1 className="font-serif text-4xl font-light text-brown-800 mb-4">hey, I'm kamakshi mudgal💗</h1>

            <div className="space-y-4 text-brown-500 leading-relaxed text-[0.95rem]">
                <p>Developer by day, over-thinker by night. This blog is my little corner of the internet where I write about things I'm figuring out.</p>
                <p>I write about tech, daily life, books I'm reading, and whatever else is on my mind.</p>
                <p>Feel free to reach out on any of my socials - I'd love to hear from you.</p>
            </div>

            <div className="mt-10 pt-8 border-t border-brown-200">
                <h2 className="font-serif text-xl text-brown-700 mb-4">find me on - </h2>
                <div className="flex flex-col gap-3">
                    {[
                        { label: "Twitter / X", href: "https://x.com/Kamakshi_1905" },
                        { label: "Pinterest", href: "#" },
                        { label: "GitHub", href: "https://github.com/kams05-ops" },
                        { label: "LinkedIn", href: "https://linkedin.com/in/kamakshi-mudgal" },
                    ].map((s) => (
                        <a key={s.label} href={s.href}
                            className="text-brown-500 hover:text-brown-800 transition-colors text-sm border-b border-brown-100 pb-2">
                            {s.label} →
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}