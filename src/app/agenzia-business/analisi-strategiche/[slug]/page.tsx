import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Tipi
interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  content: React.ReactNode;
  date: string;
}

// Simulazione DB
const articoli: Record<string, Article> = {
  "era-acquisizione-liquida": {
    slug: "era-acquisizione-liquida",
    title: "L'Era dell'Acquisizione Liquida",
    subtitle: "Perché le agenzie marketing tradizionali stanno morendo.",
    category: "Strategia",
    date: "21 Aprile 2026",
    content: (
      <>
        <p className="mb-8">
          Il mondo del marketing B2B è arrivato a un punto di rottura. Per anni, le agenzie si sono concentrate sulla vendita di "servizi isolati": la gestione delle ads, la creazione di contenuti, il design del sito. 
        </p>
        <h3 className="text-3xl font-bold text-agency-navy my-8 font-serif italic">La fine dei compartimenti stagni.</h3>
        <p className="mb-8">
          Oggi, un imprenditore non ha bisogno di un grafico o di un media buyer. Ha bisogno di un <strong>Sistema di Acquisizione Liquido</strong>. Un sistema dove l&apos;AI qualifica il lead nel momento esatto in cui questo atterra sul funnel, senza tempi di attesa e senza errori umani.
        </p>
        <div className="bg-agency-bg-alt p-10 rounded-[40px] border border-slate-100 my-12">
            <h4 className="text-agency-accent font-bold text-xs uppercase tracking-widest mb-4">Punto Chiave</h4>
            <p className="text-agency-navy font-bold text-xl italic">
                "La velocità di risposta è il nuovo vantaggio competitivo. Se rispondi dopo 10 minuti, hai già perso il 70% di probabilità di chiudere."
            </p>
        </div>
        <p>
          Il nostro approccio integra verticalmente ogni fase: dal primo click sulla piattaforma pubblicitaria fino alla conferma dell&apos;appuntamento nel tuo calendario. Senza frizioni. Questo è ciò che chiamiamo Acquisizione Liquida.
        </p>
      </>
    )
  },
  "dal-click-al-contratto": {
    slug: "dal-click-al-contratto",
    title: "Dal Click al Contratto",
    subtitle: "Protocolli chirurgici per la conversione B2B.",
    category: "Performance",
    date: "18 Aprile 2026",
    content: (
      <>
        <p className="mb-8">
          Attrarre traffico è diventato facile (e costoso). Convertire quel traffico in fatturato reale è dove la maggior parte delle aziende fallisce.
        </p>
        <h2 className="text-3xl font-bold text-agency-navy mb-6">L&apos;Ingegneria del Funnel High-Ticket</h2>
        <p className="mb-8">
          In un mercato B2B ad alto valore (Servizi Premium), il lead non compra un servizio; compra la fiducia in un processo. Per questo i nostri funnel sono progettati non per "generare contatti", ma per "educare acquirenti".
        </p>
        <ul className="space-y-4 mb-8">
            <li className="flex gap-4 items-start">
               <span className="w-6 h-6 rounded-full bg-agency-accent/20 text-agency-accent flex items-center justify-center font-bold text-xs">1</span>
               <p><strong>Pre-qualificazione:</strong> Eliminiamo i perditempo prima che arrivino a parlare con te.</p>
            </li>
            <li className="flex gap-4 items-start">
               <span className="w-6 h-6 rounded-full bg-agency-accent/20 text-agency-accent flex items-center justify-center font-bold text-xs">2</span>
               <p><strong>Nurturing AI:</strong> Contenuti dinamici basati sul comportamento dell&apos;utente.</p>
            </li>
            <li className="flex gap-4 items-start">
               <span className="w-6 h-6 rounded-full bg-agency-accent/20 text-agency-accent flex items-center justify-center font-bold text-xs">3</span>
               <p><strong>Set & Close:</strong> Sistemi di prenotazione che garantiscono show-rate elevatissimi.</p>
            </li>
        </ul>
      </>
    )
  },
  "automazione-invisibile": {
    slug: "automazione-invisibile",
    title: "Automazione Invisibile",
    subtitle: "Scalare senza aumentare il personale operativo.",
    category: "AI & Automation",
    date: "15 Aprile 2026",
    content: (
      <>
        <p className="mb-8">
          La scalabilità di un business è spesso limitata dalla capacità di gestione umana. Più lead significa più persone per chiamarli, più persone per fissare appuntamenti, più persone per gestire le obiezioni.
        </p>
        <h3 className="text-3xl font-bold text-agency-navy my-8 font-serif italic">Il dipendente perfetto che non dorme mai.</h3>
        <p className="mb-8">
          L&apos;Intelligenza Artificiale oggi agisce come un filtro invisibile e instancabile. I nostri protocolli di automazione permettono di gestire flussi di centinaia di lead al giorno garantendo a ciascuno un&apos;esperienza personalizzata e un tempo di risposta di millisecondi.
        </p>
        <p>
          Questo non è solo risparmio di costi; è l&apos;unico modo per scalare in modo profittevole senza distruggere la qualità del servizio o il benessere del team operativo.
        </p>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articoli[slug];
  if (!article) return { title: "Articolo non trovato" };
  return {
    title: `${article.title} | Analisi Strategica — Fabio Micale`,
    description: article.subtitle,
  };
}

export default async function AgencyArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articoli[slug];

  if (!article) notFound();

  return (
    <div className="bg-agency-bg text-agency-text selection:bg-agency-accent/10">

      {/* ── ARTICLE HEADER ──────────────────────────────────────── */}
      <article className="pt-44 pb-32">
        <header className="max-w-4xl mx-auto px-6 mb-20 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-agency-accent/10 text-agency-accent text-[10px] font-bold uppercase tracking-widest mb-8">
                {article.category}
            </div>
            <h1 className="agency-title text-5xl md:text-7xl mb-8 leading-tight">
                {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-agency-text-muted font-light italic mb-8">
                {article.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-40">
                <span>{article.date}</span>
                <span className="w-1 h-1 bg-agency-accent rounded-full" />
                <span>Fabio Micale</span>
            </div>
        </header>

        {/* ── CONTENT ────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6 text-lg leading-relaxed agency-content">
            {article.content}
        </div>

        {/* ── FOOTER CTA ─────────────────────────────────────────── */}
        <footer className="max-w-4xl mx-auto px-6 mt-32 pt-20 border-t border-slate-100 text-center">
            <h3 className="text-3xl font-serif italic text-agency-navy mb-8">Vuoi implementare queste strategie nel tuo business?</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/agenzia-business/contatti" className="btn-agency px-12">
                    Richiedi Audit Strategico
                </Link>
                <Link href="/agenzia-business/analisi-strategiche" className="inline-flex items-center justify-center px-10 text-agency-navy font-bold text-[11px] uppercase tracking-widest border-b-2 border-transparent hover:border-agency-accent transition-all">
                    Torna alle Analisi
                </Link>
            </div>
        </footer>
      </article>

    </div>
  );
}
