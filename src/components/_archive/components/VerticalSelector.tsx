import Link from "next/link";

const verticals = [
  {
    id: "mepa",
    title: "MEPA Elite",
    subtitle: "Mercato da 113 Miliardi €",
    description: "Sblocca il fatturato della Pubblica Amministrazione. Ingegnerizziamo l'accesso a 113 Miliardi di euro di appalti pubblici (Dati 2025) con un sistema chiavi in mano. Zero burocrazia per te, solo incassi.",
    link: "/mepa-elite",
    cta: "PRENDI LA TUA FETTA →",
    icon: "💰",
    gradient: "from-[#F5A623]/20 to-transparent",
    featured: true,
  },
  {
    id: "impresa",
    title: "Impresa Liquida",
    subtitle: "Scalabilità e Automazione",
    description: "Trasforma il tuo business in un sistema autonomo. Protocolli di automazione per uscire dall'operatività e scalare senza limiti.",
    link: "/impresa-liquida",
    cta: "Ottimizza il Business",
    icon: "⚙️",
    gradient: "from-[#2E7D32]/10 to-transparent",
  },
  {
    id: "puntozero",
    title: "Punto Zero",
    subtitle: "Reset Strategico & Rivincita",
    description: "Il punto di ripartenza per chi vuole eliminare il caos e ricostruire la propria autorità. Un protocollo di ingegneria personale per trovare la tua nuova direzione.",
    link: "/punto-zero",
    cta: "INIZIA IL RESET →",
    icon: "🎯",
    gradient: "from-blue-500/10 to-transparent",
  },
];

export default function VerticalSelector() {
  return (
    <section className="py-24 px-6 bg-[#0D0D0D] relative overflow-hidden" id="direzioni">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="badge mb-6 mx-auto">Scegli la tua direzione</div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight font-serif mb-6">
            Sistemi su misura per <br />
            <span className="italic text-[#F5A623]">obiettivi chirurgici.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Identifica la tua esigenza attuale. Ogni percorso utilizza la nostra metodologia proprietaria per garantire risultati misurabili.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {verticals.map((v) => (
            <div 
              key={v.id}
              className={`group relative p-12 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-start overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="text-5xl mb-10 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                {v.icon}
              </div>
              
              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#F5A623] font-bold mb-3">
                  {v.subtitle}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 font-serif italic tracking-tight">
                  {v.title}
                </h3>
                <p className="text-white/40 leading-relaxed mb-10 font-light text-sm">
                  {v.description}
                </p>
              </div>

              <Link 
                href={v.link}
                className="mt-auto relative z-10 inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#F5A623] transition-colors"
              >
                {v.cta}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
