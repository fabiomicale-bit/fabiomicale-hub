import { Metadata } from "next";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Area riservata | Fabio Micale",
  description: "Iscriviti alla newsletter Un Passo Avanti, scarica l'estratto gratuito del libro e accedi ai materiali del Metodo Successo in 3 Passi.",
  alternates: { canonical: "https://www.fabiomicale.com/area-riservata" },
};

export default function AreaRiservataPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Laboratorio Digitale</div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Area <span className="italic text-hub-gold">Riservata.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Uno spazio in evoluzione per applicare il Metodo Successo in 3 Passi con estratti, schede operative, newsletter settimanale e contenuti premium.
          </p>
        </div>
      </section>

      {/* ── SEZIONE 1 — ACCESSO FREE / NEWSLETTER ─────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Form Box */}
            <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-center">
              <NewsletterCTA variant="book-excerpt" />
            </div>

            {/* Info Box */}
            <div className="bg-hub-cream p-12 md:p-16 rounded-[40px] border border-hub-border flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-medium mb-8">Entra nell'Area Free</h2>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-10 font-light">
                L'Area Free è il punto di partenza. Iscrivendoti riceverai la newsletter settimanale Un Passo Avanti, un estratto gratuito di Successo in 3 Passi — Edizione 2026 e i primi materiali pratici collegati al metodo.
              </p>
              
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-hub-gold mb-6">Contenuti Previsti:</h3>
              <ul className="space-y-4">
                {[
                  "Estratto gratuito del libro (PDF)",
                  "Newsletter settimanale 'Un Passo Avanti'",
                  "Schede operative e appunti di metodo",
                  "Aggiornamenti esclusivi sul lancio",
                  "Materiali pratici per i 3 passi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-hub-ink/70">
                    <svg className="w-4 h-4 text-hub-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 2 — COSA RICEVI OGNI SETTIMANA ───────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6">Cosa ricevi ogni settimana</h2>
            <p className="text-hub-ink-muted text-lg font-light leading-relaxed">
              Un Passo Avanti non è una newsletter motivazionale. È un contenuto pratico e breve per aiutarti a mantenere continuità.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "Riflessione concreta", d: "Un'analisi diretta sul Metodo Successo in 3 Passi." },
              { t: "Esercizio operativo", d: "Una domanda o un'attività pratica per la tua settimana." },
              { t: "Strumento di metodo", d: "Un tool o una tecnica per rimettere ordine subito." },
              { t: "AI Pratica", d: "Applicazioni dell'intelligenza artificiale alla crescita Over 40." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-hub-border hover:shadow-lg transition-all group">
                <h4 className="text-lg font-serif font-medium text-hub-ink mb-3 group-hover:text-hub-gold transition-colors">{item.t}</h4>
                <p className="text-hub-ink-muted text-sm leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 3 — AREA PREMIUM ─────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="badge-editorial border-white/20 text-white/50 mb-8">In Arrivo</div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">Area Premium</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-10 font-light">
                L’area premium sarà lo spazio dedicato a chi vuole andare oltre il libro. Nel tempo verranno sbloccati corsi, ebook, masterclass, community e strumenti pratici per applicare il metodo alla tua crescita professionale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Corsi", "Ebook", "Masterclass", "Community", "Strumenti AI", "Percorsi"].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-hub-gold/30" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] text-center">
              <h3 className="text-2xl font-serif italic mb-6">Resta aggiornato</h3>
              <p className="text-white/40 text-sm mb-8">Ricevi una notifica non appena i primi contenuti premium saranno disponibili.</p>
              <button className="btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
                Ricevi aggiornamenti
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
