"use client";

import Link from "next/link";



const caseStudies = [
  {
    id: "mepa-asl",
    category: "MEPA Elite",
    title: "Fornitura Arredi Ospedalieri",
    client: "ASL Roma 2",
    value: "€ 450.000",
    result: "Aggiudicata gara PA dopo anni di esclusioni formali. Abilitazione ottenuta in 10 giorni.",
    serviceQuality: "Precisione millimetrica nella gestione del plico telematico.",
    icon: "🏛️"
  },
  {
    id: "impresa-costruzioni",
    category: "Impresa Liquida",
    title: "Sistematizzazione PMI Edile",
    client: "Marco, Imprenditore",
    value: "Velocità +500%",
    result: "I preventivi ora escono in 20 minuti invece di 3 ore. Controllo totale dei cantieri da remoto.",
    serviceQuality: "Supporto tecnico costante e risolutivo su ogni intoppo operativo.",
    icon: "🏗️"
  },
  {
    id: "mepa-cloud",
    category: "MEPA Elite",
    title: "Infrastruttura Server e Cloud",
    client: "Regione Lazio",
    value: "€ 2.150.000",
    result: "Gestione di un bando complesso su Sistema Dinamico (SDA) con zero errori formali.",
    serviceQuality: "Capacità di analisi fuori dal comune: hanno trovato opportunità che ignoravamo.",
    icon: "⚙️"
  },
  {
    id: "ingegneria-ai",
    category: "Sistemi AI",
    title: "Automazione Pre-Calcolo",
    client: "Roberto, Ingegnere",
    value: "Asset Scalabile",
    result: "Costruito in 3 settimane un sistema di monitoraggio costi che prima richiedeva un consulente esterno.",
    serviceQuality: "Processi fluidi e comunicazione no-bullshit. Esattamente quello che ci serviva.",
    icon: "🤖"
  },
  {
    id: "mepa-milano",
    category: "MEPA Elite",
    title: "Servizi di Sanificazione",
    client: "Comune di Milano",
    value: "€ 1.200.000",
    result: "Contratto triennale blindato grazie a un'offerta tecnica ingegnerizzata su misura.",
    serviceQuality: "Hanno sbloccato un bando inaccessibile trasformandolo in un asset aziendale.",
    icon: "🧹"
  },
  {
    id: "mepa-cultura",
    category: "MEPA Elite",
    title: "Digitalizzazione Archivi",
    client: "Ministero Cultura",
    value: "€ 720.000",
    result: "Accesso rapido al bando e supporto totale nell'invio del plico telematico.",
    serviceQuality: "Abbiamo delegato tutto il processo e il risultato è stato impeccabile.",
    icon: "📚"
  }
];

const feedbackOptions = [
  {
    id: "service-feedback",
    title: "Lascia un Feedback",
    description: "Hai lavorato con me su MEPA Elite o Impresa Liquida? La tua esperienza aiuta altri imprenditori.",
    cta: "INVIA TESTIMONIANZA",
    href: "mailto:feedback@fabiomicale.com?subject=Testimonianza Sistemi Professionali"
  },
  {
    id: "book-feedback",
    title: "Recensisci il Libro",
    description: "Hai letto 'Successo in 3 Passi'? Aiuta la community lasciando una recensione su Amazon.",
    cta: "RECENSISCI SU AMAZON",
    href: "https://www.amazon.it/review/create-review/?asin=153755087X"
  }
];

export default function RecensioniPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#F5A623]/20">
      

      {/* ── HERO: RISULTATI ────────────────────────────────────── */}
      <section className="pt-44 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#F5A623] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="badge mb-8 mx-auto">Wall of Success 2025</div>
          <h1 className="text-5xl md:text-8xl font-light leading-tight tracking-tight mb-8 font-serif">
            L&apos;unica metrica: <br />
            <span className="italic text-[#F5A623]">Risultati Reali.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed font-light max-w-2xl mx-auto">
            Dietro ogni numero c&apos;è un&apos;architettura operativa che ha trasformato la complessità in profitto e tempo libero.
          </p>
        </div>
      </section>

      {/* ── GRIGLIA CASI STUDIO ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="card-premium p-10 flex flex-col group hover:bg-white/[0.04] transition-all duration-500 border-white/5"
              >
                <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">{study.icon}</div>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                    study.category.includes('MEPA') 
                      ? 'bg-[#2E7D32]/10 border-[#2E7D32]/20 text-[#2E7D32]' 
                      : 'bg-[#F5A623]/10 border-[#F5A623]/20 text-[#F5A623]'
                  }`}>
                    {study.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F5A623] transition-colors leading-tight">
                  {study.title}
                </h3>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold mb-6">{study.client}</p>

                <p className="text-white/40 text-sm font-light leading-relaxed mb-8 flex-1">
                  {study.result}
                </p>

                <div className={`border-l-2 pl-4 py-3 mb-8 ${
                   study.category.includes('MEPA') ? 'border-[#2E7D32]/30 bg-[#2E7D32]/5' : 'border-[#F5A623]/30 bg-[#F5A623]/5'
                }`}>
                  <p className={`font-serif italic text-xs leading-relaxed ${
                    study.category.includes('MEPA') ? 'text-[#2E7D32]' : 'text-[#F5A623]'
                  }`}>
                    &ldquo;{study.serviceQuality}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">Valore / Impatto</span>
                  <span className="text-sm font-bold text-white">{study.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEEDBACK HUB (Secondary) ────────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-10 italic">Hai una storia di successo da condividere?</h2>
          <p className="text-white/40 mb-16 font-light">Il feedback hub è lo spazio dove i nostri partner contribuiscono all&apos;evoluzione del metodo.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {feedbackOptions.map((opt) => (
              <div key={opt.id} className="p-10 card-premium border-white/5 bg-white/[0.01] text-left">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{opt.title}</h3>
                <p className="text-white/30 text-sm font-light leading-relaxed mb-8">{opt.description}</p>
                <a 
                  href={opt.href} 
                  target={opt.href.startsWith('http') ? "_blank" : "_self"}
                  rel={opt.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="text-[#F5A623] text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
                >
                  {opt.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ─────────────────────────────────────────── */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            Vuoi che il prossimo <br /><span className="italic text-[#F5A623]">caso studio</span> sia il tuo?
          </h2>
          <p className="text-white/40 text-lg font-light mb-12">
            Selezioniamo solo progetti con elevato potenziale sistemico. Verifichiamo insieme la compatibilità.
          </p>
          <a href="mailto:info@fabiomicale.com" className="btn-gold px-12 py-5 text-sm tracking-[0.3em] font-bold">
            AVVIA L&apos;ANALISI STRATEGICA
          </a>
        </div>
      </section>

      
    </main>
  );
}
