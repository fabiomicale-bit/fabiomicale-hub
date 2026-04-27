import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analisi Strategiche | Risorse e Case Studies Agency — Fabio Micale",
  description: "Approfondimenti tecnici e visioni operative su Sistemi di Acquisizione, Intelligenza Artificiale e Automazione per Business ad Alto Valore.",
};

const articoli = [
  {
    slug: "era-acquisizione-liquida",
    title: "L'Era dell'Acquisizione Liquida",
    excerpt: "Perché le agenzie marketing tradizionali stanno morendo e come l'integrazione di AI e Funnel sta cambiando le regole del gioco.",
    date: "21 Aprile 2026",
    category: "Strategia",
    image: "/blog/agency-1.jpg"
  },
  {
    slug: "dal-click-al-contratto",
    title: "Dal Click al Contratto: Protocolli B2B",
    excerpt: "Analisi dei flussi di conversione chirurgici necessari per trasformare il traffico freddo in appuntamenti commerciali qualificati.",
    date: "18 Aprile 2026",
    category: "Performance",
    image: "/blog/agency-2.jpg"
  },
  {
    slug: "automazione-invisibile",
    title: "Automazione Invisibile e Scalabilità",
    excerpt: "Come gestire un volume triplicato di lead senza assumere nuovo personale, delegando la qualificazione all'Intelligenza Artificiale.",
    date: "15 Aprile 2026",
    category: "AI & Automation",
    image: "/blog/agency-3.jpg"
  }
];

export default function AgencyBlogIndex() {
  return (
    <div className="bg-agency-bg text-agency-text selection:bg-agency-accent/10">

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agency-accent/5 border border-agency-accent/10 text-agency-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
            Visioni Operative & Intelligence
          </div>
          <h1 className="agency-title text-5xl md:text-8xl mb-8 animate-reveal-up">
            Analisi <br />
            <span className="italic text-agency-accent font-light">Strategiche.</span>
          </h1>
          <p className="agency-text-lead max-w-2xl mb-12 animate-reveal-up delay-100">
            Documentiamo i processi, le vittorie e le tecnologie che utilizziamo per scalare i business dei nostri partner. Nessuna teoria, solo protocolli testati sul campo.
          </p>
        </div>
      </section>

      {/* ── ARTICLES GRID ────────────────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {articoli.map((post, i) => (
              <Link 
                key={post.slug} 
                href={`/agenzia-business/analisi-strategiche/${post.slug}`}
                className="group block"
              >
                <article className="h-full flex flex-col">
                  <div className="aspect-[16/10] bg-slate-100 rounded-3xl mb-8 overflow-hidden relative">
                     {/* Placeholder for image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-agency-accent/20 to-agency-navy/20 group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-agency-navy">
                        {post.category}
                     </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-agency-text-muted mb-4 font-bold">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-agency-accent rounded-full" />
                    <span>5 min lettura</span>
                  </div>
                  <h3 className="text-2xl font-bold text-agency-navy mb-4 group-hover:text-agency-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-agency-text-muted text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-agency-accent font-bold text-[10px] uppercase tracking-[0.2em]">
                    Leggi l&apos;Analisi 
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTAs ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-agency-navy text-white text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif italic mb-8">Resta aggiornato sui nostri <br /> protocolli di acquisizione.</h2>
            <p className="text-white/60 mb-10 text-lg font-light">Inviamo una sola analisi strategica al mese, riservata a chi vuole scalare con metodo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <input 
                 type="email" 
                 placeholder="La tua migliore email" 
                 className="bg-white/10 border border-white/20 rounded-2xl px-8 py-5 text-sm outline-none focus:ring-2 focus:ring-agency-accent/50 transition-all min-w-[300px]"
               />
               <button className="bg-agency-accent text-agency-navy font-black uppercase text-xs tracking-widest px-10 py-5 rounded-2xl hover:bg-white transition-all">
                  Unisciti alla Lista
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
