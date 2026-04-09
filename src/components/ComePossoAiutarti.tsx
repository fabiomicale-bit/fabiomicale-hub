import Link from "next/link";

const mainSolutions = [
  {
    id: "mepa",
    title: "Lifecycle Appalti Pubblici",
    brand: "MEPA Elite™",
    desc: "Il sistema operativo per gestire l'intera filiera PA: dall'abilitazione portale alla ricerca gare, fino all'aggiudicazione e all'incasso certo dei pagamenti.",
    accent: "gold",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "liquida",
    title: "Ingegneria Gestionale",
    brand: "Impresa Liquida™",
    desc: "Esci dall'operatività fisica e dal cantiere. Applichiamo protocolli di organizzazione e automazione AI per rendere il tuo business autonomo e scalabile.",
    accent: "green",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: "zero",
    title: "Eredità Punto Zero™",
    brand: "Condivisione di Percorso",
    desc: "Oltre la consulenza. La condivisione di un percorso di resilienza e ricostruzione umana per chi deve azzerare il caos e ripartire da basi solide.",
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
              <h4 className="text-white font-bold mb-2">Insights</h4>
              <p className="text-sm text-white/40 mb-4">Analisi e approfondimenti strategici sul mercato.</p>
              <Link href="/blog" className="text-xs font-bold text-[#F5A623] hover:underline uppercase tracking-wider">Leggi il Blog</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
