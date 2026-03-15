import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Fabio Micale",
  description:
    "Articoli su AI, mindset e produttività per professionisti over 40 che vogliono reinventarsi nell'era dell'intelligenza artificiale.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Articoli e riflessioni
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Blog
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed">
            AI, mindset e produttività per chi vuole{" "}
            <span className="gradient-text font-semibold">fare sul serio.</span>
          </p>
        </div>
      </section>

      {/* ── ARTICOLI ────────────────────────────────────────────── */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-glow group flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Categoria */}
                <span
                  className={`self-start text-xs font-medium px-3 py-1 rounded-full border mb-5 ${post.categoriaClasses}`}
                >
                  {post.categoria}
                </span>

                {/* Titolo */}
                <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-blue-100 transition-colors duration-200 flex-1">
                  {post.titolo}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span>{post.data}</span>
                    <span>·</span>
                    <span>{post.tempoLettura}</span>
                  </div>
                  <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Leggi
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
