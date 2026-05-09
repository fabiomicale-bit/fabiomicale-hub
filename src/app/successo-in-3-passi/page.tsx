import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/EditorialHero";
import NewsletterCTA from "@/components/NewsletterCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Successo in 3 Passi — Edizione 2026",
  url: "https://www.fabiomicale.com/successo-in-3-passi",
  description: "Il libro manifesto di Fabio Micale per la rinascita professionale Over 40 nell’era dell’intelligenza artificiale.",
  inLanguage: "it-IT",
  genre: "Business & Self-Evolution",
  author: {
    "@type": "Person",
    "@id": "https://www.fabiomicale.com/#person",
    name: "Fabio Micale",
    url: "https://www.fabiomicale.com/chi-sono",
  },
};

export const metadata: Metadata = {
  title: "Successo in 3 Passi — Edizione 2026 | Fabio Micale",
  description: "Il libro manifesto di Fabio Micale per la rinascita professionale Over 40 nell’era dell’intelligenza artificiale.",
  alternates: { canonical: "https://www.fabiomicale.com/successo-in-3-passi" },
};

export default function SuccessoIn3PassiPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── HERO ─────────────────────────────────────────────── */}
      <EditorialHero
        variant="book"
        eyebrow="Il Libro Manifesto"
        title="Successo in 3 Passi"
        titleAccent="Edizione 2026"
        subtitle="Il libro manifesto di Fabio Micale per la rinascita professionale Over 40 nell’era dell’intelligenza artificiale."
        primaryCTA={{ label: "Scarica l'estratto gratuito", href: "#estratto" }}
      />

      {/* ── SEZIONE 1 — NON UN LIBRO MOTIVAZIONALE ────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Senza Scorciatoie</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 leading-tight">
            Non un libro <span className="italic text-hub-gold">motivazionale.</span>
          </h2>
          <p className="text-xl text-hub-ink-muted leading-relaxed font-light">
            Questo libro non nasce per motivarti per qualche ora. Nasce per darti una sequenza pratica: fermare il caos, rimettere struttura, mantenere il controllo.
          </p>
        </div>
      </section>

      {/* ── SEZIONE 2 — COSA TROVI NEL LIBRO ──────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-medium mb-12">Cosa trovi nel libro</h2>
              <ul className="space-y-8">
                {[
                  { t: "Il Metodo spiegato", d: "La sequenza completa spiegata in modo semplice e operativo." },
                  { t: "Esercizi pratici", d: "Attività guidate per rimettere ordine subito." },
                  { t: "Riflessioni Over 40", d: "Analisi profonda sulla crescita professionale matura." },
                  { t: "AI Pratica", d: "Strumenti per usare l’AI senza perdere direzione." },
                  { t: "Sistemi di controllo", d: "Un sistema per trasformare esperienza e errori in struttura." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-hub-gold/10 flex items-center justify-center flex-shrink-0 text-hub-gold font-bold group-hover:bg-hub-gold group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-medium mb-2">{item.t}</h4>
                      <p className="text-hub-ink-muted text-sm leading-relaxed font-light">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square card-editorial p-12 flex items-center justify-center bg-hub-white shadow-2xl">
              <div className="text-center">
                <div className="text-[120px] font-serif italic text-hub-gold opacity-10 absolute inset-0 flex items-center justify-center select-none pointer-events-none">Book</div>
                <div className="relative z-10">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-4">Coming 2026</p>
                   <h3 className="text-3xl font-serif mb-6">Successo in 3 Passi</h3>
                   <div className="h-px w-12 bg-hub-gold mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 3 — PER CHI È ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6">Per chi è</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Per chi sente di dover ripartire.",
              "Per chi ha esperienza ma non vuole restare fermo.",
              "Per chi vuole usare l’AI in modo pratico.",
              "Per chi non cerca slogan, ma strumenti.",
              "Per chi vuole ricostruire direzione dopo i 40 anni."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-hub-cream/30 rounded-2xl border border-hub-border/50">
                 <svg className="w-5 h-5 text-hub-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
                 <p className="text-sm text-hub-ink font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 4 — ESTRATTO GRATUITO ────────────────────────── */}
      <section id="estratto" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
           <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl">
              <div className="p-12 md:p-16 text-center border-b border-hub-border bg-hub-cream/20">
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Scarica un estratto gratuito</h2>
                <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-8">
                  Iscrivendoti alla newsletter settimanale Un Passo Avanti ricevi un estratto gratuito del libro e i prossimi aggiornamenti sul lancio di Successo in 3 Passi — Edizione 2026.
                </p>
              </div>
              <NewsletterCTA variant="book-excerpt" />
           </div>
        </div>
      </section>

      {/* ── SEZIONE 5 — OFFERTA LANCIO ────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white text-center">
         <div className="max-w-3xl mx-auto">
            <div className="badge-editorial border-white/20 text-hub-gold mb-8 mx-auto">Offerta Lancio 2026</div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Prendi il controllo della tua <span className="text-hub-gold italic">Evoluzione.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 text-left">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <h3 className="text-xl font-serif mb-4 text-hub-gold">Cosa ottieni oggi:</h3>
                <ul className="space-y-4 text-sm font-light text-white/70">
                  <li className="flex gap-3">
                    <span className="text-hub-gold">✓</span>
                    Libro "Successo in 3 Passi" (Edizione 2026)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-hub-gold">✓</span>
                    Bonus: Operational Checklist 2026 (PDF)
                  </li>
                  <li className="flex gap-3 text-hub-gold font-medium">
                    <span className="">✓</span>
                    Accesso prioritario alla community
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-left">
                <div className="mb-2 text-white/40 line-through text-2xl font-light">€47,00</div>
                <div className="text-6xl font-serif text-hub-gold mb-8">€27,00</div>
                <Link href="https://buy.stripe.com/test_9B68wQ14kgJF3LK7KK5kk00" className="btn-gold inline-block w-full text-center px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Acquista ora in offerta
                </Link>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">Offerta valida per i primi 7 giorni</p>
              </div>
            </div>

            <p className="text-white/40 text-sm font-light leading-relaxed">
              Riceverai immediatamente la conferma e il materiale bonus, mentre il libro completo verrà inviato alla data ufficiale di rilascio.
            </p>
         </div>
      </section>

    </main>
  );
}
