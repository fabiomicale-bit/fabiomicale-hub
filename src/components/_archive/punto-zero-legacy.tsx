/**
 * ARCHIVIO LEGACY — Punto Zero
 *
 * Sezioni rimosse durante il refactoring Fase 3 (refactor/3-passi-positioning).
 * NON importare questo file in produzione.
 * Conservato per eventuale reintroduzione come componenti dedicati.
 *
 * Sezioni archiviate:
 * 1. Hero inline personalizzato (cerchio SVG animato, griglia, eyebrow custom)
 * 2. "Lo Zero non è vuoto" — sezione narrativa con visual decorativo (id="protocollo")
 * 3. "Il Porto" — community card + testimonial card (id="percorso")
 * 4. "Il Libro / EbookForm" — lead magnet sezione con EbookForm variant="editorial" (id="manuale")
 *    → Nota: EbookForm aveva un errore TS pre-esistente (variant="editorial" non valido).
 *      Valutare reintroduzione come variante dedicata di NewsletterCTA.
 *      Ref: CONTENT_TODO.md → Punto Zero
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO LEGACY
// ─────────────────────────────────────────────────────────────────────────────
export function PuntoZeroHeroLegacy() {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-hub-bg">
      <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-hub-gold/[0.05] via-transparent to-transparent opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-black/[0.02]" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-hub-gold/20 bg-hub-gold/5 text-hub-gold mb-8 font-bold tracking-[0.4em] text-[9px] uppercase backdrop-blur-md">
          <span>Oltre il Disallineamento</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 font-serif text-hub-ink">
          Punto Zero: <br />
          <span className="italic text-hub-gold uppercase tracking-tighter">Reset Strategico.</span>
        </h1>
        <p className="text-hub-ink-muted text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light italic font-serif">
          Non è una questione di fare meglio, ma di smettere di fingere che tutto abbia ancora senso.
          Punto Zero è lo spazio tra ciò che eri e ciò che ancora non sai di poter diventare.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="mailto:info@fabiomicale.com" className="btn-gold px-12 py-5">
            ATTRAVERSA LA SOGLIA
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. "LO ZERO NON È VUOTO" — sezione narrativa con visual decorativo
// ─────────────────────────────────────────────────────────────────────────────
export function PuntoZeroNarrativaLegacy() {
  return (
    <section id="protocollo" className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-hub-ink mb-10 font-serif leading-tight">
              Lo Zero non è vuoto. <br />
              <span className="italic text-hub-ink/40">È lo spazio per ricominciare.</span>
            </h2>
            <p className="text-hub-ink-muted text-lg leading-relaxed mb-10 font-light italic font-serif">
              Per anni hai aggiunto competenze e responsabilità. Ora senti il bisogno di togliere.
              Lo Zero è il punto invisibile in cui smetti di spingere e inizi a vedere.
            </p>
            <div className="space-y-8">
              {[
                { t: "La Tabula Rasa", d: "Smettere di inseguire ciò che non senti più tuo per liberare energia vitale." },
                { t: "Audit di Autorità", d: "Analizzare con onestà dove la tua integrità viene sacrificata per l'abitudine." },
                { t: "Protocollo Platino", d: "Costruire un'architettura operativa basata sulla verità e sulla calma." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-hub-gold text-xl font-serif italic opacity-40">0{i + 1}</span>
                  <div>
                    <h3 className="text-hub-ink font-bold mb-2 uppercase tracking-wide">{item.t}</h3>
                    <p className="text-hub-ink-muted text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Visual: cerchio SVG animato */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-hub-gold/5 blur-[100px] rounded-full scale-75 pointer-events-none" />
            <div className="relative w-72 h-72 border border-hub-gold/10 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-56 h-56 border border-hub-gold/20 rounded-full border-dashed" />
              <div className="absolute w-4 h-4 rounded-full bg-hub-gold top-0 shadow-[0_0_15px_rgba(200,164,90,0.5)]" />
            </div>
            <div className="absolute text-5xl font-serif italic text-hub-gold font-light translate-y-1 opacity-60">
              0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. "IL PORTO" — community card + testimonial card
// ─────────────────────────────────────────────────────────────────────────────
export function PuntoZeroPortoLegacy() {
  return (
    <section id="percorso" className="py-32 px-6 bg-hub-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-hub-white border border-hub-border rounded-[50px] shadow-sm">
            <div className="text-hub-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">
              Il Porto
            </div>
            <h3 className="text-3xl font-serif italic mb-6 text-hub-ink">
              Non sei più l&apos;unico a vedere.
            </h3>
            <p className="text-hub-ink-muted leading-relaxed mb-8 font-light italic font-serif">
              Il Porto non è un luogo fisico, ma uno spazio di riconoscimento. Persone diverse,
              storie diverse, ma la stessa frequenza di verità professionale. Qui non serve spiegarsi.
            </p>
            <div className="text-hub-gold font-serif italic">Risonanza tra Pari.</div>
          </div>
          <div className="p-12 bg-hub-charcoal text-white rounded-[50px] shadow-2xl">
            <div className="text-2xl font-serif italic font-light mb-10 leading-snug">
              &quot;Punto Zero non è un corso. È un atto chirurgico di verità che mi ha restituito il
              comando della mia vita.&quot;
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-white/20" />
              <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
                Andrea S. — Strategic Advisor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. "IL LIBRO / EBOOK FORM" — lead magnet con EbookForm
//    NOTA: EbookForm aveva variant="editorial" che causava errore TS.
//    Valutare reintroduzione come variante dedicata di NewsletterCTA.
// ─────────────────────────────────────────────────────────────────────────────
export function PuntoZeroManualeLegecy() {
  // import EbookForm from "@/components/EbookForm"; // decommentare se reintrodotto
  return (
    <section id="manuale" className="py-40 px-6 bg-hub-bg-alt">
      <div className="max-w-4xl mx-auto text-center bg-hub-white border border-hub-border p-12 md:p-24 overflow-hidden relative rounded-[60px] shadow-xl">
        <div className="absolute top-0 right-0 w-full h-full bg-hub-gold/[0.02] blur-[100px] pointer-events-none" />
        <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-hub-gold/20 bg-hub-gold/5 text-hub-gold mb-8 font-bold tracking-[0.4em] text-[9px] uppercase">
          <span>Asset di Supporto</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-light text-hub-ink mb-8 font-serif">
          Il Libro <span className="italic text-hub-gold font-light">Punto Zero</span>
        </h2>
        <p className="text-hub-ink-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light italic font-serif">
          I pilastri fondamentali per guidare il tuo reset. Dalla Soglia alla Chiarezza, il percorso
          completo verso la tua rinascita professionale.
        </p>
        <div className="max-w-md mx-auto w-full text-hub-ink">
          {/* <EbookForm variant="editorial" /> */}
          {/* TODO: sostituire con <NewsletterCTA variant="punto-zero-excerpt" /> */}
        </div>
      </div>
    </section>
  );
}
