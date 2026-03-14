const services = [
  {
    icon: "📖",
    tag: "Il Libro",
    title: "Leggi il libro",
    desc: "Una guida pratica e diretta per capire come l'AI sta ridisegnando il lavoro — e come posizionarti in anticipo, non in ritardo.",
    cta: "Scopri il libro",
    href: "#libro",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20 hover:border-amber-400/40",
    tag_color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    icon: "✉️",
    tag: "Newsletter gratuita",
    title: "Rimani aggiornato",
    desc: "Ogni settimana: strategie concrete, strumenti AI selezionati, casi reali. Niente fluff. Solo ciò che funziona davvero per i professionisti over 40.",
    cta: "Iscriviti gratis",
    href: "#newsletter",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-400/40",
    tag_color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    featured: true,
  },
  {
    icon: "🎓",
    tag: "Corsi e Masterclass",
    title: "Formazione intensiva",
    desc: "Percorsi strutturati per imparare a usare l'AI nel tuo contesto professionale. Dal mindset agli strumenti, passo dopo passo.",
    cta: "Guarda i corsi",
    href: "#corsi",
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20 hover:border-violet-400/40",
    tag_color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    icon: "🤝",
    tag: "Consulenza 1:1",
    title: "Lavoriamo insieme",
    desc: "Sessioni private per chi vuole un percorso personalizzato. Analisi della situazione, obiettivi chiari, piano d'azione concreto.",
    cta: "Prenota una call",
    href: "#consulenza",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20 hover:border-emerald-400/40",
    tag_color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: "⚡",
    tag: "Servizi AI",
    title: "AI per il tuo business",
    desc: "Implementazione di strumenti e workflow AI nella tua attività. Automazioni, assistenti, processi ottimizzati. Risultati misurabili.",
    cta: "Scopri i servizi",
    href: "#servizi-ai",
    accent: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/20 hover:border-pink-400/40",
    tag_color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
];

export default function ComePossoAiutarti() {
  return (
    <section id="come-aiuto" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Come posso aiutarti</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            Non esiste un solo modo per reinventarsi.{" "}
            <span className="gradient-text">Esiste il tuo.</span>
          </h2>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Ecco da dove puoi iniziare. Ogni percorso è diverso — scegli quello che si adatta al tuo momento.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`card-glow group relative bg-gradient-to-br ${service.accent} border ${service.border} rounded-2xl p-7 transition-all duration-300 flex flex-col ${
                service.featured ? "ring-1 ring-blue-500/30 lg:row-span-1" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Inizia da qui
                </div>
              )}

              {/* Tag */}
              <span
                className={`inline-flex items-center border text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit ${service.tag_color}`}
              >
                {service.icon} <span className="ml-1.5">{service.tag}</span>
              </span>

              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.desc}</p>

              <a
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white group-hover:gap-3 transition-all duration-200"
              >
                {service.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
