import type { Metadata } from "next";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Area Riservata | Fabio Micale",
  description: "Accedi ai contenuti esclusivi e agli strumenti del Metodo Successo in 3 Passi.",
  robots: { index: false, follow: false },
};

export default function AreaRiservataPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-editorial opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Accesso Riservato</div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            Il tuo spazio <br />
            <span className="italic text-hub-gold">operativo.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            L'Area Riservata è in fase di preparazione. Qui saranno raccolti estratti, schede operative, contenuti bonus e futuri percorsi collegati al Metodo Successo in 3 Passi.
          </p>
        </div>
      </section>

      {/* ── STATUS BLOCKS ──────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Area Free */}
            <div className="card-editorial p-12 flex flex-col justify-between bg-hub-white border-2 border-hub-border group">
              <div>
                <div className="w-16 h-16 bg-hub-gold/10 rounded-2xl flex items-center justify-center text-hub-gold mb-8 group-hover:bg-hub-gold group-hover:text-white transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-medium mb-6">Area Free</h3>
                <p className="text-hub-ink-muted text-base leading-relaxed mb-10 font-light">
                  Accesso gratuito riservato agli iscritti alla newsletter "Un Passo Avanti". Qui troverai l'estratto del libro, schede operative e materiali pratici per iniziare.
                </p>
              </div>
              <div className="pt-8 border-t border-hub-border">
              <div className="flex flex-col items-center">
                <div className="w-full bg-hub-gold/10 text-hub-gold text-center py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-gold/20">
                  Accesso in preparazione
                </div>
                <p className="text-[10px] font-serif italic text-hub-ink/40 mt-4 text-center">
                  Sarai avvisato via email non appena i materiali saranno pronti.
                </p>
              </div>
            </div>

            {/* Area Premium */}
            <div className="card-editorial p-12 flex flex-col justify-between bg-hub-charcoal text-white group">
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-hub-gold mb-8 group-hover:bg-hub-gold group-hover:text-hub-ink transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-medium mb-6 text-white">Area Premium</h3>
                <p className="text-white/40 text-base leading-relaxed mb-10 font-light">
                  Uno spazio dedicato a chi vuole approfondire con corsi, masterclass e strumenti avanzati. L'Area Premium sarà attivata in una fase successiva del lancio.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full bg-white/5 text-white/30 text-center py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-white/10">
                  Progetto Futuro
                </div>
                <p className="text-[10px] font-serif italic text-white/20 mt-4 text-center">
                  I contenuti avanzati saranno sbloccati nella fase post-lancio.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────── */}
      <section className="py-24 bg-hub-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl">
             <div className="p-10 text-center border-b border-hub-border bg-hub-cream/20">
                <p className="text-hub-ink-muted text-sm font-light">Iscriviti per essere avvisato quando l'Area Riservata sarà operativa.</p>
             </div>
             <NewsletterCTA />
          </div>
        </div>
      </section>
    </main>
  );
}
