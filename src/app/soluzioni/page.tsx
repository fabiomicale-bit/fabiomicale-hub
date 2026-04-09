import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sistemi di Evoluzione | Fabio Micale — Metodologo della Crescita",
  description:
    "Tre sistemi operativi progettati per l'imprenditore over 40. Sblocca il fatturato pubblico, libera il tuo tempo, riconquista la chiarezza strategica.",
  openGraph: {
    title: "Soluzioni Imprenditoriali — Fabio Micale",
    description:
      "Tre sistemi operativi per l'imprenditore che vuole crescere senza esserne schiavo.",
  },
};

const soluzioni = [
  {
    numero: "I",
    tag: "Intelligence & Appalti",
    titolo: "Lifecycle Appalti Pubblici",
    sottotitolo: "Dall'abilitazione portale all'incasso certo dei pagamenti.",
    descrizione:
      "Gestiamo l'intera filiera burocratica e operativa: abilitazione MEPA (Consob), ricerca e selezione gare, partecipazione, aggiudicazione e setup per lo svolgimento lavori. Un sistema per trasformare la PA nel tuo asset di fatturato più solido.",
    risultato: "Accesso ai flussi PA entro 90 giorni.",
    brand: "MEPA Elite™",
    brandTag: "Lifecycle Appalti e Burocrazia",
    href: "/mepa-elite",
    accent: "#F5A623", // Gold
    icon: "◈",
  },
  {
    numero: "II",
    tag: "Sistemi & Management",
    titolo: "Esci dal Cantiere e Inizia a Guidare",
    sottotitolo: "L'azienda che gira senza di te. Ingegneria Gestionale Pura.",
    descrizione:
      "Basato su 25+ anni di gestione reale. Implementiamo protocolli di organizzazione, deleghe e automazione AI per permetterti di uscire dall'operatività fisica e dirigere la tua impresa da stratega.",
    risultato: "Margine incrementale e libertà operativa.",
    brand: "Impresa Liquida™",
    brandTag: "Ingegneria Gestionale",
    href: "/impresa-liquida",
    accent: "#2E7D32", // Green
    icon: "◇",
  },
  {
    numero: "III",
    tag: "Condivisione & Mentorship",
    titolo: "Eredità Punto Zero™",
    sottotitolo: "Condividere il percorso di rinascita per chi ricomincia da zero.",
    descrizione:
      "Non è consulenza, è mentorship basata sull'esperienza. Condivido il mio percorso di resilienza e ricostruzione umana per chi si trova in una situazione di crisi e deve ricostruire asset solidi partendo dalla realtà dei fatti.",
    risultato: "Community e Mentorship di Resilienza.",
    brand: "Eredità Punto Zero™",
    brandTag: "Asset di Condivisione Umana",
    href: "/punto-zero",
    accent: "#A0A0A0", // Silver/Gray
    icon: "○",
  },
];

export default function SoluzioniPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO SOLUZIONI ────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Ambient Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#F5A623] opacity-[0.01] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[#2E7D32] opacity-[0.01] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.025]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Sistemi di Evoluzione Imprenditoriale</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Smetti di lavorare <br />
            <span className="italic text-[#F5A623]">per</span> l&apos;azienda. <br />
            Inizia a farla <span className="text-[#2E7D32]">crescere.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto font-light">
            Metodi ingegneristici, processi e sistemi operativi progettati per l&apos;imprenditore che ha già costruito tutto, tranne la propria libertà.
          </p>
        </div>
      </section>

      {/* ── GRID SOLUZIONI ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0D0D0D] relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {soluzioni.map((s, i) => (
              <article key={i} className="card-premium p-10 flex flex-col group h-full">
                {/* Header Card */}
                <div className="flex items-center justify-between mb-10">
                  <span className="text-2xl font-serif italic" style={{ color: s.accent }}>{s.numero}</span>
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-xl" style={{ color: s.accent }}>
                    {s.icon}
                  </div>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: s.accent }}>
                  {s.tag}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition-colors leading-tight">
                  {s.titolo}
                </h2>
                
                <p className="text-white/30 text-base leading-relaxed mb-8 flex-1 font-light italic serif">
                  &ldquo;{s.sottotitolo}&rdquo;
                </p>

                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl mb-8">
                  <div className="text-[9px] uppercase tracking-widest text-white/20 font-bold mb-2">Risultato Core</div>
                  <div className="text-white/60 text-sm font-bold">{s.risultato}</div>
                </div>

                {/* Brand & CTA */}
                <div className="mt-auto pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex flex-col">
                      <div className="text-sm font-bold text-white uppercase tracking-wider">{s.brand}</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/30">{s.brandTag}</div>
                    </div>
                  </div>
                  
                  <Link 
                    href={s.href} 
                    className="btn-ghost flex items-center justify-center gap-3 py-4 text-[10px] font-bold tracking-[0.2em] uppercase"
                  >
                    Esplora il sistema
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIO / METODO PREVIEW ────────────────────────────── */}
      <section className="py-40 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mb-8 mx-auto">Asset Fondamentale</div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            L&apos;Ingegneria non è per tutti. <br />
            <span className="italic text-[#F5A623]">Ma è per chi vuole risultati certi.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Ho costruito, scalato e automatizzato aziende per oltre 25 anni. Ogni soluzione che offro è il risultato di errori costosi e vittorie sistematiche ottenute sul campo.
          </p>
          <Link href="/chi-sono" className="btn-gold px-12 py-5 text-[10px] tracking-[0.2em] font-bold">
            LA MIA STORIA COMPLETA
          </Link>
        </div>
      </section>

      {/* ── CTA CONVERSIVA ──────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[#F5A623] opacity-[0.02] blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif">
                Qual è la tua sfida <br />
                <span className="italic text-[#F5A623]">prioritaria?</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
                Non accetto tutti. Prima analizziamo la tua situazione. Poi decidiamo insieme se un mio sistema può effettivamente liberare il tuo potenziale.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <Link href="/contatti" className="btn-gold px-12 py-5 text-xs tracking-[0.3em] font-bold">
                  FISSA UNA SESSIONE STRATEGICA
                </Link>
                <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold italic">
                  Solo 3 nuove implementazioni mensili — Disponibilità limitata.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
