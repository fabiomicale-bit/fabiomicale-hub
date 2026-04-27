import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";
import { getManifestoPosts, getRegularPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Fabio Micale — Intelletto & Evoluzione",
  description:
    "Riflessioni e protocolli pratici su AI, sistemi operativi di business e reinvenzione sopra i 40 anni. La conoscenza come asset strategico.",
  alternates: { canonical: "https://www.fabiomicale.com/blog" },
};

export default function BlogPage() {
  const manifestoPosts = getManifestoPosts();
  const regularPosts = getRegularPosts();

  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <Navbar />

      {/* ── HERO BLOG ─────────────────────────────────────────── */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        
        {/* Background visual - Now lighter editorial style */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_blog_press.jpg"
            alt="Intelligence & Strategy"
            fill
            className="object-cover object-center opacity-5 grayscale brightness-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hub-bg via-hub-bg/80 to-hub-bg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="badge-editorial mb-8 mx-auto">Protocollo della Crescita</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif text-hub-ink uppercase">
            Pensiero <br />
            <span className="italic text-hub-gold lowercase">Strategico.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light italic font-serif">
            Protocolli, riflessioni e analisi per dominare il cambiamento tecnologico e la reinvenzione professionale.
          </p>
        </div>
      </section>

      {/* ── CONTENUTO DINAMICO ────────────────────────────────── */}
      <BlogContent manifestoPosts={manifestoPosts} regularPosts={regularPosts} />

      <Footer />
    </main>
  );
}
