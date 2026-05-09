import type { Metadata } from "next";
import Link from "next/link";


import NewsletterCTA from "@/components/NewsletterCTA";
import { getPostsByStep } from "@/lib/posts";
import { methodPillars } from "@/content/method-pillars";

const pillar = methodPillars.hub.pillars[2];

export const metadata: Metadata = {
  title: "Passo 3 — Mantieni il Controllo | Blog di Fabio Micale",
  description:
    "Articoli sul Passo 3 del Metodo Successo in 3 Passi: fatturato prevedibile verso la PA (3A) e acquisizione clienti con sistemi AI (3B). In costruzione.",
  alternates: { canonical: "https://www.fabiomicale.com/blog/passo-3-mantieni-il-controllo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Passo 3 — Mantieni il Controllo nel Tempo",
  description: "Articoli sul Passo 3 del Metodo Successo in 3 Passi (3A · Fatturato Garantito e 3B · Agenzia Business)",
  url: "https://www.fabiomicale.com/blog/passo-3-mantieni-il-controllo",
  isPartOf: { "@type": "WebSite", url: "https://www.fabiomicale.com" },
};

export default function Passo3Page() {
  const allPosts = getPostsByStep("3");
  const manifesto = allPosts.filter((p) => p.manifesto);
  const regular = allPosts.filter((p) => !p.manifesto);
  const isEmpty = allPosts.length === 0;

  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-editorial opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-hub-ink-light hover:text-hub-gold text-xs font-bold uppercase tracking-widest mb-12 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Tutti gli articoli
          </Link>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
            Archivio · Passo 3
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif text-hub-ink">
            Mantieni il <span className="italic text-hub-gold">Controllo.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl font-light font-serif italic">
            {pillar.description}
          </p>
          <div className="flex gap-6 mt-8">
            <Link href="/fatturato-garantito" className="text-[10px] font-bold uppercase tracking-[0.25em] text-hub-ink-muted hover:text-hub-gold transition-colors border-b border-hub-border/60 pb-1">
              3A · Fatturato Garantito →
            </Link>
            <Link href="/agenzia-business" className="text-[10px] font-bold uppercase tracking-[0.25em] text-hub-ink-muted hover:text-hub-gold transition-colors border-b border-hub-border/60 pb-1">
              3B · Agenzia Business →
            </Link>
          </div>
        </div>
      </section>

      {/* ── GRIGLIA ARTICOLI / STATO VUOTO ───────────────────────── */}
      <section className="py-20 px-6 pb-40">
        <div className="max-w-6xl mx-auto">

          {!isEmpty && manifesto.length > 0 && (
            <div className="mb-32">
              <div className="flex items-center gap-6 mb-16">
                <div className="badge-editorial border-hub-gold/30 text-hub-gold-dark">Letture Prioritarie</div>
                <div className="flex-1 h-px bg-gradient-to-r from-hub-gold/20 via-hub-border to-transparent" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {manifesto.map((post) => (
                  <a key={post.slug} href={`/blog/${post.slug}`} className="card-editorial p-10 group flex flex-col bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hub-gold mb-10">Lettura Prioritaria</span>
                    <h2 className="text-2xl font-medium text-hub-ink mb-6 group-hover:text-hub-gold-dark transition-colors leading-tight font-serif italic">{post.titolo}</h2>
                    <p className="text-hub-ink-muted text-base leading-relaxed mb-10 flex-1 line-clamp-3 font-light italic font-serif">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-8 border-t border-hub-border">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">{post.data}</span>
                      <span className="text-hub-gold-dark text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Analizza
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {!isEmpty && regular.length > 0 && (
            <>
              <div className="flex items-center gap-6 mb-16">
                <div className="badge-editorial">Approfondimenti</div>
                <div className="flex-1 h-px bg-gradient-to-r from-hub-border to-transparent" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regular.map((post) => (
                  <a key={post.slug} href={`/blog/${post.slug}`} className="card-editorial p-10 group flex flex-col hover:bg-hub-bg-alt/30 transition-all duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hub-gold mb-10">{post.categoria}</span>
                    <h2 className="text-xl font-medium text-hub-ink mb-6 group-hover:text-hub-gold-dark transition-colors leading-tight">{post.titolo}</h2>
                    <p className="text-hub-ink-muted text-sm leading-relaxed mb-10 flex-1 line-clamp-3 font-light font-serif italic">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-8 border-t border-hub-border">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">{post.data}</span>
                      <span className="text-hub-ink-muted text-[10px] font-bold uppercase tracking-widest group-hover:text-hub-gold-dark transition-colors">Esplora</span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}

          {isEmpty && (
            <div className="max-w-2xl mx-auto text-center py-32">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-6">
                In costruzione
              </p>
              <p className="text-hub-ink-muted text-lg font-light font-serif italic leading-relaxed mb-10">
                Stiamo costruendo i contenuti del Passo 3. Iscriviti alla newsletter per non perdere i primi articoli su Fatturato Garantito e Agenzia Business.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 btn-gold px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                Iscriviti alla Newsletter
              </Link>
            </div>
          )}
        </div>
      </section>

      <NewsletterCTA />
      
    </main>
  );
}
