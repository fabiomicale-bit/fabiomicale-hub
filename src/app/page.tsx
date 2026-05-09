import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/EditorialHero";
import MetodoSection from "@/components/MetodoSection";
import BookFeature from "@/components/BookFeature";
import NewsletterCTA from "@/components/NewsletterCTA";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Fabio Micale | Metodo Successo in 3 Passi per Over 40",
  description:
    "Fabio Micale, scrittore e formatore, aiuta professionisti Over 40 a ripartire con metodo, lucidità e strumenti pratici nell’era dell’intelligenza artificiale.",
  alternates: { canonical: "https://www.fabiomicale.com" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── SEZIONE 1 — HERO ─────────────────────────────────────────────── */}
      <EditorialHero
        title="Ripartire dopo i 40 anni non richiede motivazione."
        titleAccent="Richiede metodo."
        subtitle="Sono Fabio Micale, autore di Successo in 3 Passi. Aiuto professionisti Over 40 a fermare il caos, rimettere struttura e costruire una nuova direzione personale e professionale nell’era dell’intelligenza artificiale."
        primaryCTA={{ label: "Estratto disponibile a breve", href: "/area-riservata" }}
        secondaryCTA={{ label: "Scopri il Metodo in 3 Passi", href: "/il-metodo" }}
      />

      {/* Payoff visibile */}
      <div className="bg-hub-cream border-y border-hub-border py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-hub-gold animate-pulse">
            Non ti vendo sogni. Ti do strumenti.
          </p>
        </div>
      </div>

      {/* ── SEZIONE 2 — PROBLEMA ────────────────────────────────────────── */}
      <section className="py-32 px-6 relative bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 leading-tight">
            Il problema non è la tua età. <br />
            <span className="italic text-hub-gold">È la mancanza di un sistema.</span>
          </h2>
          <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
            <p>
              Dopo i 40 anni molti professionisti non sono finiti. Sono pieni di rumore: decisioni sospese, competenze da aggiornare, strumenti nuovi, lavoro che cambia, intelligenza artificiale che avanza e tempo che sembra ridursi.
            </p>
            <p>
              Il Metodo Successo in 3 Passi nasce per questo: rimettere ordine dove oggi c’è dispersione.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 3 — IL METODO IN 3 PASSI ────────────────────────────── */}
      <MetodoSection />

      {/* ── SEZIONE 4 — IL LIBRO ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
                Il libro è il <br />
                <span className="italic text-hub-gold">punto di partenza.</span>
              </h2>
              <p className="text-lg text-hub-ink-muted leading-relaxed mb-10 font-light">
                Successo in 3 Passi non è solo un libro. È il manifesto operativo del metodo. Da qui nasce l’intero sito: articoli, esercizi, newsletter, area riservata, percorsi futuri e contenuti premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button disabled className="btn-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">
                  Estratto in arrivo
                </button>
                <Link href="/successo-in-3-passi" className="inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-border text-hub-ink hover:border-hub-gold transition-colors rounded-full text-center">
                  Scopri il libro
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[2/3] bg-hub-ink rounded-xl shadow-2xl flex items-center justify-center p-12 text-center border-4 border-hub-gold/20 overflow-hidden group">
                <div className="absolute inset-0 bg-grid-editorial opacity-20" />
                <div className="relative z-10">
                  <p className="text-hub-ink-light text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Edizione 2026</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">Successo in <br /> 3 Passi</h3>
                  <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">Fabio Micale</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-hub-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 5 — NEWSLETTER CENTRALE ────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl">
            <div className="p-12 md:p-20 text-center border-b border-hub-border bg-hub-cream/30">
               <h2 className="text-4xl font-serif font-medium mb-6">Un Passo Avanti</h2>
               <p className="text-hub-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-8">La newsletter settimanale per applicare il Metodo</p>
               <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                 Ogni settimana ricevi un contenuto pratico per rimettere ordine nel tuo percorso professionale: una riflessione, uno strumento, un esercizio o un’applicazione concreta dell’AI alla crescita Over 40.
               </p>
               <div className="inline-block bg-hub-gold/10 border border-hub-gold/20 px-6 py-3 rounded-full">
                 <p className="text-hub-ink text-xs font-medium">
                   🎁 Iscrivendoti ricevi anche un <span className="text-hub-gold font-bold">estratto gratuito</span> di Successo in 3 Passi.
                 </p>
               </div>
            </div>
            <NewsletterCTA />
          </div>
        </div>
      </section>

      {/* ── SEZIONE 6 — AREA RISERVATA ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-4">Area Riservata</h2>
            <p className="text-hub-ink-muted text-lg font-light">Uno spazio in evoluzione per applicare il Metodo Successo in 3 Passi.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-editorial p-10 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-hub-gold/10 rounded-xl flex items-center justify-center text-hub-gold mb-6 group-hover:bg-hub-gold group-hover:text-white transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">Area Free</h3>
                <p className="text-hub-ink-muted text-sm leading-relaxed mb-8 font-light">
                  Accesso gratuito con iscrizione alla newsletter. Qui troverai estratti del libro, schede operative, appunti di metodo, aggiornamenti e materiali pratici per iniziare.
                </p>
              </div>
              <button disabled className="btn-gold text-center py-4 text-[10px] tracking-[0.2em] opacity-50">
                Disponibile a breve
              </button>
            </div>
            <div className="card-editorial p-10 flex flex-col justify-between bg-hub-charcoal text-white group">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-hub-gold mb-6 group-hover:bg-hub-gold group-hover:text-hub-ink transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">Area Premium</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
                  Uno spazio a pagamento che si arricchirà nel tempo con corsi, ebook, masterclass, community e strumenti pratici per applicare il metodo alla tua crescita professionale.
                </p>
              </div>
              <button disabled className="btn-outline border-white/20 text-white/40 text-center py-4 text-[10px] tracking-[0.2em]">
                In fase di attivazione
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 7 — PER CHI È QUESTO SITO ────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6">Per chi è questo sito</h2>
            <p className="text-hub-ink-muted text-lg font-light leading-relaxed">
              Questo sito è per chi non vuole ricominciare da zero, ma ricominciare con ordine.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Hai più di 40 anni e senti che devi ripensare il tuo futuro professionale.",
              "Hai esperienza, ma non vuoi restare fermo a vecchi modelli.",
              "Vuoi usare l’intelligenza artificiale senza farti travolgere dalla moda del momento.",
              "Vuoi metodo, non motivazione temporanea.",
              "Vuoi strumenti pratici, non slogan."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-hub-cream/50 rounded-2xl border border-hub-border/50">
                <div className="w-6 h-6 rounded-full bg-hub-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-hub-gold" />
                </div>
                <p className="text-hub-ink font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 8 — CHI È FABIO ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="card-editorial p-12 md:p-20">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">Chi è Fabio Micale</h2>
                <p className="text-lg text-hub-ink-muted leading-relaxed mb-10 font-light">
                  Fabio Micale è scrittore e formatore. Da oltre trent’anni lavora su crescita personale, metodo, impresa e sviluppo professionale. Con Successo in 3 Passi ha trasformato esperienza, errori, ripartenze e strumenti pratici in un sistema pensato per chi vuole ricostruire direzione dopo i 40 anni.
                </p>
                <Link href="/chi-sono" className="btn-gold px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Leggi la storia di Fabio
                </Link>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale border border-hub-border shadow-2xl">
                <div className="absolute inset-0 bg-hub-gold/5" />
                {/* Image placeholder or real image if exists */}
                <div className="absolute inset-0 flex items-center justify-center text-hub-ink/20 font-serif italic text-xl">
                  Fabio Micale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
