import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";
import { getManifestoPosts, getRegularPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Fabio Micale",
  description:
    "Articoli pratici su AI, mindset e sistemi per professionisti over 40. Niente teorie, solo strumenti.",
  alternates: { canonical: "https://www.fabiomicale.com/blog" },
};

export default function BlogPage() {
  const manifestoPosts = getManifestoPosts();
  const regularPosts = getRegularPosts();

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Articoli e riflessioni
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Approfondimenti
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed">
            AI, mindset e produttività per chi vuole{" "}
            <span className="gradient-text font-semibold">fare sul serio.</span>
          </p>
        </div>
      </section>

      {/* ── CONTENUTO CON FILTRI ────────────────────────────────── */}
      <BlogContent manifestoPosts={manifestoPosts} regularPosts={regularPosts} />

      <Footer />
    </main>
  );
}
