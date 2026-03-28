const services = [
  {
    icon: "📖",
    tag: "Il Libro",
    title: "Leggi il libro",
    desc: "Una guida pratica e diretta per capire come l'AI sta ridisegnando il lavoro — e come posizionarti in anticipo, non in ritardo.",
    cta: "Scopri il libro",
    href: "/il-libro",
    featured: false,
  },
  {
    icon: "✉️",
    tag: "Newsletter gratuita",
    title: "Rimani aggiornato",
    desc: "Ogni settimana: strategie concrete, strumenti AI selezionati, casi reali. Niente fluff. Solo ciò che funziona davvero per i professionisti over 40.",
    cta: "Iscriviti gratis",
    href: "#newsletter",
    featured: true,
  },
  {
    icon: "🎓",
    tag: "Corsi e Masterclass",
    title: "Formazione intensiva",
    desc: "Percorsi strutturati per imparare a usare l'AI nel tuo contesto professionale. Dal mindset agli strumenti, passo dopo passo.",
    staticText: "Vuoi saperne di più? Scrivici a info@fabiomicale.com",
    featured: false,
  },
  {
    icon: "🤝",
    tag: "Consulenza 1:1",
    title: "Lavoriamo insieme",
    desc: "Sessioni private per chi vuole un percorso personalizzato. Analisi della situazione, obiettivi chiari, piano d'azione concreto.",
    cta: "Prenota una call",
    href: "https://calendly.com/fabiomicale",
    external: true,
    featured: false,
  },
  {
    icon: "⚡",
    tag: "Servizi AI",
    title: "AI per il tuo business",
    desc: "Implementazione di strumenti e workflow AI nella tua attività. Automazioni, assistenti, processi ottimizzati. Risultati misurabili.",
    staticText: "Disponibilita limitata — scrivici a info@fabiomicale.com per richiedere info",
    featured: false,
  },
];

export default function ComePossoAiutarti() {
  return (
    <section id="come-aiuto" className="py-24 px-6 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#2E7D32]" />
          <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Come posso aiutarti</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] leading-tight max-w-xl">
            Non esiste un solo modo per reinventarsi.{" "}
            <span className="gradient-text">Esiste il tuo.</span>
          </h2>
          <p className="text-[#555555] max-w-sm leading-relaxed">
            Ecco da dove puoi iniziare. Ogni percorso è diverso — scegli quello che si adatta al tuo momento.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`card-glow group relative rounded-2xl p-7 border transition-all duration-300 flex flex-col ${
                service.featured
                  ? "bg-white border-[#2E7D32]/30 hover:border-[#2E7D32] ring-1 ring-[#2E7D32]/20 shadow-md"
                  : "bg-white border-[#E5E5E5] hover:border-[#2E7D32]/30 shadow-sm"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Inizia da qui
                </div>
              )}

              {/* Tag */}
              <span className="inline-flex items-center bg-[#E8F5E9] border border-[#E5E5E5] text-[#2E7D32] text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                {service.icon} <span className="ml-1.5">{service.tag}</span>
              </span>

              <h3 className="text-lg font-semibold text-[#111111] mb-2">{service.title}</h3>
              <p className="text-[#555555] text-sm leading-relaxed flex-1">{service.desc}</p>

              {"staticText" in service && service.staticText ? (
                <p className="mt-6 text-sm text-[#555555] leading-relaxed">{service.staticText}</p>
              ) : (
                <a
                  href={service.href}
                  {...("external" in service && service.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#2E7D32] hover:text-[#1B5E20] group-hover:gap-3 transition-all duration-200"
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
