import Link from "next/link";

const mainSolutions = [
  {
    id: "zero",
    title: "Reset Strategico",
    brand: "Punto Zero",
    desc: "Il punto di partenza necessario. Dismettiamo il caos operativo e ricostruiamo le fondamenta della tua autorità professionale attraverso il Metodo del Reset.",
    accent: "gold",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "liquida",
    title: "Ingegneria Gestionale",
    brand: "Impresa Liquida (CORE)",
    desc: "Trasformiamo la tua esperienza in un Sistema Operativo autonomo. Applichiamo automazione AI e protocolli di delega per rendere il business scalabile e indipendente dalla tua presenza fisica.",
    accent: "green",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.063.133l-2.333-.311a2 2 0 01-1.361-.834l-3.12-4.161a2 2 0 01-.191-1.637l.482-1.446a3 3 0 00-.214-2.14L4.343 3.343" />
      </svg>
    )
  },
  {
    id: "mepa",
    title: "Market Mastery PA",
    brand: "MEPA Elite",
    desc: "Verticalizzazione estrema per il mercato degli Appalti Pubblici. Ingegnerizziamo la tua presenza sui portali per massimizzare aggiudicazioni e incassi certi.",
    accent: "gold",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function ComePossoAiutarti() {
  return (
    <section id="come-aiuto" className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="badge mb-6">Sistemi di Evoluzione</div>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.1] font-serif">
              Soluzioni concrete per <br />
              <span className="italic text-[#F5A623]">complessità reali.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed border-l border-white/10 pl-8 mb-2">
            Non vendiamo fumo. Implementiamo protocolli operativi che trasformano il tuo modo di fare impresa.
          </p>
        </div>

        {/* Master Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {mainSolutions.map((sol) => (
            <div key={sol.id} className="card-premium p-10 group flex flex-col min-h-[420px]">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${
                sol.accent === 'gold' ? 'bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20' : 'bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/20'
              }`}>
                {sol.icon}
              </div>
              
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-2">{sol.brand}</div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#F5A623] transition-colors">{sol.title}</h3>
              <p className="text-white/40 leading-relaxed flex-1 mb-8">{sol.desc}</p>
              
              <Link href="/soluzioni" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn transition-all">
                Dettagli Soluzione
                <svg className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Support Ecosystem */}
        <div className="pt-20 border-t border-white/5 grid md:grid-cols-3 gap-12">
          <div className="flex gap-6">
            <div className="text-[#F5A623] opacity-50 shrink-0">📖</div>
            <div>
              <h4 className="text-white font-bold mb-2">Il Libro</h4>
              <p className="text-sm text-white/40 mb-4">La tua bussola per l&apos;era del cambiamento digitale.</p>
              <Link href="/il-libro" className="text-xs font-bold text-[#F5A623] hover:underline uppercase tracking-wider">Scopri di più</Link>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-[#F5A623] opacity-50 shrink-0">✉️</div>
            <div>
              <h4 className="text-white font-bold mb-2">Newsletter</h4>
              <p className="text-sm text-white/40 mb-4">Strategie settimanali per menti imprenditoriali.</p>
              <Link href="/#newsletter" className="text-xs font-bold text-[#F5A623] hover:underline uppercase tracking-wider">Iscriviti</Link>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-[#F5A623] opacity-50 shrink-0">🎓</div>
            <div>
              <h4 className="text-white font-bold mb-2">Analisi Strategiche</h4>
              <p className="text-sm text-white/40 mb-4">Analisi e approfondimenti strategici sul mercato.</p>
              <Link href="/blog" className="text-xs font-bold text-[#F5A623] hover:underline uppercase tracking-wider">Leggi il Blog</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
