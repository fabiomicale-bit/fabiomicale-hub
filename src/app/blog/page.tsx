import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";
import { getManifestoPosts, getRegularPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | AI e Reinvenzione Over 40 — Fabio Micale",
  description:
    "Articoli pratici su come usare l'AI dopo i 40 anni, reinventarsi professionalmente e costruire nuovi redditi. Niente teoria, solo strumenti.",
  alternates: { canonical: "https://www.fabiomicale.com/blog" },
};

export default function BlogPage() {
  const manifestoPosts = getManifestoPosts();
  const regularPosts = getRegularPosts();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden bg-[#111111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_blog_press.jpg"
            alt="Redazione e carta stampata"
            fill
            className="object-cover object-center opacity-50 mix-blend-luminosity scale-[1.10]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-[#111111]/60 to-[#111111]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-white/20 text-[#AAAAAA] text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A5D6A7]" />
            Articoli e riflessioni
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Articoli su AI, reinvenzione e sistemi per professionisti over 40
          </h1>
          <p className="text-xl text-[#AAAAAA] leading-relaxed">
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
