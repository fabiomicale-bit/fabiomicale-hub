import { Metadata } from "next";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Il Metodo Successo in 3 Passi | Fabio Micale",
  description: "Ferma il caos, rimetti struttura e mantieni il controllo. Il Metodo Successo in 3 Passi per la rinascita professionale Over 40.",
  alternates: { canonical: "https://www.fabiomicale.com/il-metodo" },
};

export default function MetodoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">La Sequenza del Successo</div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Il successo non è un colpo di fortuna.{" "}
            <span className="italic text-hub-gold">È una sequenza.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Prima fermi il caos. Poi rimetti struttura. Poi impari a mantenere il controllo nel tempo. 
            Questa è la base del Metodo Successo in 3 Passi.
          </p>
        </div>
      </section>

      {/* ── PASSO 1 ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg border-t border-hub-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-hub-gold font-serif italic text-6xl mb-6 opacity-20">01</div>
              <h2 className="text-4xl font-serif font-medium mb-8">Passo 1 — Ferma il caos</h2>
              <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                <p>
                  Quando tutto si muove troppo velocemente, la prima tentazione è aggiungere: nuovi strumenti, nuovi obiettivi, nuovi corsi, nuove strategie. Ma se il sistema è già saturo, aggiungere peggiora il problema.
                </p>
                <p>
                  Il primo passo è fermare il caos: riconoscere il rumore, ridurre la reattività, smettere di inseguire ogni stimolo e tornare a vedere con lucidità.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">Obiettivo:</span>
                <span className="text-hub-ink font-medium">Ritrovare lucidità.</span>
              </div>
            </div>
            <div className="card-editorial p-12 bg-hub-cream/30 border-dashed border-2 border-hub-gold/20 rounded-3xl flex items-center justify-center aspect-square">
              <div className="text-center">
                <div className="w-20 h-20 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-hub-ink-light text-sm italic">"Riconoscere il rumore prima che diventi assordante."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSO 2 ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 card-editorial p-12 bg-hub-ink text-white rounded-3xl flex items-center justify-center aspect-square">
              <div className="text-center">
                <div className="w-20 h-20 bg-hub-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-white/50 text-sm italic">"L'architettura che sostiene la tua evoluzione."</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-hub-gold font-serif italic text-6xl mb-6 opacity-20">02</div>
              <h2 className="text-4xl font-serif font-medium mb-8">Passo 2 — Rimetti struttura</h2>
              <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                <p>
                  Una volta fermato il caos, serve una nuova architettura. Non basta sapere cosa non funziona. Devi costruire routine, criteri, priorità, strumenti e decisioni che ti aiutino a procedere senza ricadere nella confusione.
                </p>
                <p>
                  Qui entrano metodo, organizzazione, intelligenza artificiale e sistemi pratici.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">Obiettivo:</span>
                <span className="text-hub-ink font-medium">Costruire una struttura che ti sostiene.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSO 3 ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg border-b border-hub-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-hub-gold font-serif italic text-6xl mb-6 opacity-20">03</div>
              <h2 className="text-4xl font-serif font-medium mb-8">Passo 3 — Mantieni il controllo</h2>
              <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                <p>
                  Il problema non è cambiare per qualche giorno. Il problema è mantenere il controllo quando tornano stanchezza, pressione, imprevisti e vecchie abitudini.
                </p>
                <p>
                  Il terzo passo serve a trasformare il metodo in continuità: revisione, disciplina, adattamento, strumenti di controllo e capacità di correggere rotta.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">Obiettivo:</span>
                <span className="text-hub-ink font-medium">Rendere il cambiamento sostenibile.</span>
              </div>
            </div>
            <div className="card-editorial p-12 bg-hub-white border border-hub-border rounded-3xl flex items-center justify-center aspect-square shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-hub-gold/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-hub-ink-light text-sm italic">"La continuità è la forma più alta di forza."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL LIBRO ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-warm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Il Manifesto Operativo</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">
            Il metodo nasce dal libro <br className="hidden md:block" />
            <span className="italic text-hub-gold">Successo in 3 Passi.</span>
          </h2>
          <p className="text-lg text-hub-ink-muted leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Il libro è il manifesto completo del metodo. Il sito ne è l'estensione pratica: articoli, esercizi, strumenti, area riservata e contenuti futuri nascono da questa struttura.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/estratto" className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
              Prova il primo passo
            </Link>
            <Link href="/successo-in-3-passi" className="btn-outline px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
              Scopri il libro
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl">
            <NewsletterCTA />
          </div>
        </div>
      </section>
    </main>
  );
}
