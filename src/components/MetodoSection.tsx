import Link from "next/link";

const passi = [
  {
    numero: "01",
    titolo: "Ferma il Caos",
    descrizione: "Prima di aggiungere nuove cose, devi smettere di reagire a tutto. Questo passo serve a riconoscere il rumore, bloccare la dispersione e ritrovare lucidità.",
    collegamento: "→ Ritrova lucidità",
    href: "/il-metodo",
    accent: "hub-gold",
  },
  {
    numero: "02",
    titolo: "Rimetti Struttura",
    descrizione: "Una volta fermato il caos, serve una nuova architettura. Routine, priorità, strumenti, decisioni, competenze e AI devono lavorare dentro un sistema.",
    collegamento: "→ Costruisci il sistema",
    href: "/il-metodo",
    accent: "hub-ink",
  },
  {
    numero: "03",
    titolo: "Mantieni il Controllo",
    descrizione: "Il cambiamento non serve se dura tre giorni. Il terzo passo serve a costruire continuità, disciplina, revisione e capacità di adattamento nel tempo.",
    collegamento: "→ Mantieni la rotta",
    href: "/il-metodo",
    accent: "hub-charcoal",
  },
];

export default function MetodoSection() {
  return (
    <section className="py-32 px-6 bg-hub-bg-alt relative overflow-hidden">
      {/* Subtle decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6">Il Metodo</div>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-hub-ink leading-tight mb-6">
            Il Metodo:{" "}
            <span className="italic text-hub-gold">3 Passi.</span>
          </h2>
          <p className="text-hub-ink-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Un protocollo ingegneristico che si ripete in ogni ciclo di evoluzione — personale e professionale.
            Ogni passo ha un mondo dedicato.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-[60px] left-0 w-full h-px bg-hub-border hidden lg:block" />

          <div className="grid lg:grid-cols-3 gap-10 relative z-10">
            {passi.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Step Number */}
                <div className="w-[120px] h-[120px] rounded-full bg-hub-white border border-hub-border flex items-center justify-center mb-10 group-hover:border-hub-gold/40 group-hover:shadow-[0_10px_40px_rgba(200,164,90,0.1)] transition-all duration-700">
                  <span className="text-4xl font-serif italic text-hub-gold">{p.numero}</span>
                </div>

                {/* Content Card */}
                <div className="card-editorial p-8 w-full h-full flex flex-col">
                  <h3 className="text-xl font-bold text-hub-ink mb-4 uppercase tracking-wider">{p.titolo}</h3>
                  <p className="text-hub-ink-muted font-light leading-relaxed mb-8 flex-1">{p.descrizione}</p>

                  {/* Link to Mondo */}
                  <div className="pt-6 border-t border-hub-border">
                    <Link
                      href={p.href}
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-2 group/link"
                    >
                      {p.collegamento}
                      <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
