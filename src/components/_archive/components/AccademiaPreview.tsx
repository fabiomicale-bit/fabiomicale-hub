import Link from "next/link";

const offerte = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    titolo: "Corsi Online",
    descrizione: "Percorsi strutturati in video per crescere al tuo ritmo. Crescita personale, business con AI, autodisciplina e strategie per Over 40.",
    temi: ["Crescita Personale", "Business con AI", "Autodisciplina", "Obiettivi"],
    status: "coming-soon",
    statusLabel: "In Preparazione",
    cta: "Lista d'Attesa",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    titolo: "Percorso Individuale",
    descrizione: "Sessioni private dedicate a te. Lavoriamo insieme sulla tua strategia, i tuoi blocchi e il tuo piano d'azione con feedback diretto.",
    temi: ["Strategia Personale", "Piano d'Azione", "Responsabilità", "Assetto Mentale"],
    status: "coming-soon",
    statusLabel: "Prossimamente",
    cta: "Prenota una Consulenza",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    titolo: "Gruppi di Lavoro Ristretti",
    descrizione: "Incontri di lavoro intensivi. Massimo 4 partecipanti per sessione per garantire profondità, interazione e risultati tangibili.",
    temi: ["AI nel Lavoro", "Gestione Progetti", "Business Online", "Guida & Gestione"],
    status: "coming-soon",
    statusLabel: "Prossimamente",
    cta: "Info & Candidatura",
  },
];

export default function AccademiaPreview() {
  return (
    <section className="py-32 px-6 bg-hub-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6">Formazione</div>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-hub-ink leading-tight mb-6">
            L&apos;Accademia{" "}
            <span className="italic text-hub-gold">Fabio Micale.</span>
          </h2>
          <p className="text-hub-ink-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Tre formati, un solo obiettivo: darti gli strumenti concreti per vincere nella vita e nel business.
            Niente teoria vuota — solo protocolli testati.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerte.map((o, i) => (
            <div key={i} className="card-editorial p-8 md:p-10 flex flex-col group relative">
              {/* Status ribbon */}
              <div className="absolute top-6 right-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-hub-gold-dark bg-hub-gold/10 border border-hub-gold/15 px-3 py-1.5 rounded-full">
                  {o.statusLabel}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-hub-bg-alt flex items-center justify-center text-hub-gold mb-8 border border-hub-border group-hover:border-hub-gold/30 group-hover:bg-hub-gold/5 transition-all duration-500">
                {o.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-medium text-hub-ink mb-4 group-hover:text-hub-gold transition-colors">
                {o.titolo}
              </h3>
              <p className="text-hub-ink-muted font-light leading-relaxed mb-8 flex-1">
                {o.descrizione}
              </p>

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {o.temi.map((t, j) => (
                  <span key={j} className="text-[9px] font-bold uppercase tracking-[0.15em] text-hub-ink-light bg-hub-bg px-3 py-1.5 rounded-full border border-hub-border">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-hub-border">
                <Link
                  href="/accademia"
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-2 group/link"
                >
                  {o.cta}
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
