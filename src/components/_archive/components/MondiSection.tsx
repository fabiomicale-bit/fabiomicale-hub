import Link from "next/link";

const mondi = [
  {
    sigla: "0",
    nome: "Punto Zero",
    sottotitolo: "Reset & Ripartenza",
    descrizione: "Il luogo di reset per chi ha superato i 40 e sente che può fare molto di più. Il primo passo è accettarlo.",
    href: "/punto-zero",
    colore: "from-[#1A1A1A] to-[#3A3A3A]",
    coloreBordo: "group-hover:border-white/20",
    coloreAccento: "text-white/80",
    stats: "Inizia il reset →",
  },
  {
    sigla: "L",
    nome: "Impresa Liquida",
    sottotitolo: "Autonomia & Sistemi",
    descrizione: "Ingegnerizziamo l'autonomia operativa. Trasformiamo la tua azienda da cantiere permanente ad asset scalabile che gira senza di te.",
    href: "/impresa-liquida",
    colore: "from-[#2E7D32] to-[#43A047]",
    coloreBordo: "group-hover:border-[#2E7D32]/30",
    coloreAccento: "text-[#2E7D32]",
    stats: "Scopri il metodo →",
  },
  {
    sigla: "A",
    nome: "Agenzia Business",
    sottotitolo: "Lead Gen & AI",
    descrizione: "Sistemi di acquisizione clienti basati su AI. Trasformiamo il traffico in appuntamenti commerciali reali — in automatico.",
    href: "/agenzia-business",
    colore: "from-[#2563EB] to-[#1D4ED8]",
    coloreBordo: "group-hover:border-blue-600/30",
    coloreAccento: "text-blue-600",
    stats: "Attiva il sistema →",
  },
  {
    sigla: "F",
    nome: "Fatturato Garantito",
    sottotitolo: "Crescita & Fatturato",
    descrizione: "Nuove fonti di ricavo stabili e prevedibili, gestite da noi con pilota automatico. Senza burocrazia. Senza sforzo aggiuntivo.",
    href: "/fatturato-garantito",
    colore: "from-[#006643] to-[#00895a]",
    coloreBordo: "group-hover:border-[#006643]/30",
    coloreAccento: "text-[#006643]",
    stats: "Scopri come →",
  },
];

export default function MondiSection() {
  return (
    <section className="py-32 px-6 bg-hub-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6">L&apos;Ecosistema</div>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-hub-ink leading-tight mb-6">
            <span className="italic text-hub-gold">L&apos;Ecosistema.</span>
          </h2>
          <p className="text-hub-ink-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Quattro verticali. Un solo obiettivo:{" "}
            <span className="italic text-hub-ink font-medium">un&apos;azienda che produce valore — anche senza di te.</span>
          </p>
        </div>

        {/* Mondi Cards */}
        <div className="space-y-6">
          {mondi.map((m, i) => (
            <Link
              key={i}
              href={m.href}
              className={`card-mondo p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 group cursor-pointer ${m.coloreBordo}`}
            >
              {/* Gradient Sigla */}
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${m.colore} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-700`}>
                <span className="text-3xl md:text-4xl font-serif italic text-white/90">{m.sigla}</span>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-white">{m.nome}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{m.sottotitolo}</span>
                </div>
                <p className="text-white/50 font-light leading-relaxed max-w-xl">
                  {m.descrizione}
                </p>
              </div>

              {/* Stats + Arrow */}
              <div className="flex items-center gap-6 flex-shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hidden lg:block">{m.stats}</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                  <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
