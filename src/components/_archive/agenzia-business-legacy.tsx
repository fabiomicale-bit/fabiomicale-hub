/**
 * ARCHIVIO LEGACY — Agenzia Business
 *
 * Sezioni rimosse durante il refactoring Fase 3 (refactor/3-passi-positioning).
 * NON importare questo file in produzione.
 * Conservato per eventuale reintroduzione come componenti dedicati.
 *
 * Sezioni archiviate:
 * 1. Hero custom con 2 CTA inline
 * 2. "Il Sistema Unico" — griglia 3 card operative
 * 3. "Casi di Successo" — 3 numeri placeholder (NON verificati da Fabio)
 * 4. CTA finale standalone
 */

import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO LEGACY
// ─────────────────────────────────────────────────────────────────────────────
export function AgenziaBusinessHeroLegacy() {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-hub-bg-alt">
      <div className="absolute inset-0 bg-grid-black/[0.02]" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hub-gold/5 border border-hub-gold/10 text-hub-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
          Agenzia di Sviluppo e Automazione Business
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 font-serif uppercase leading-tight text-hub-ink">
          Agenzia Business: <br />
          <span className="italic text-hub-gold font-light lowercase">Lead Generation AI.</span>
        </h1>
        <p className="text-xl text-hub-ink-muted max-w-2xl mx-auto mb-12 font-serif italic font-light leading-relaxed">
          Sviluppiamo e gestiamo sistemi completi di acquisizione che integrano Pubblicità, Conversione e AI per trasformare ogni contatto in un appuntamento commerciale.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/agenzia-business/contatti" className="btn-gold px-12 py-5">
            Richiedi un&apos;Analisi Strategica
          </Link>
          <a href="#servizi" className="inline-flex items-center justify-center px-8 py-4 text-hub-ink font-bold text-[11px] uppercase tracking-widest border-b-2 border-hub-gold/10 hover:border-hub-gold transition-all">
            Scopri il Sistema
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. "IL SISTEMA UNICO" — griglia 3 card operative
//    Valutare reintroduzione come componente OperationalLevers riusabile.
// ─────────────────────────────────────────────────────────────────────────────
export function AgenziaBusinessSistemaLegacy() {
  return (
    <section id="servizi" className="py-32 px-6 bg-hub-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif italic text-hub-ink mb-6">
              Un approccio integrato <br /><span className="text-hub-gold font-light">senza punti di interruzione.</span>
            </h2>
            <p className="text-hub-ink-muted text-lg font-serif italic font-light">
              Smantelliamo l&apos;inefficienza delle agenzie tradizionali offrendo un unico flusso tecnologico che copre l&apos;intero viaggio del cliente.
            </p>
          </div>
          <div className="text-hub-gold font-serif italic text-6xl opacity-10 hidden lg:block">Architettura</div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Traffico Strategico",
              desc: "Gestione Meta, Google e TikTok con focus ossessivo sul rendimento e sulla qualità del contatto, non solo sul volume di traffico.",
              icon: "🎯"
            },
            {
              title: "Protocolli di Conversione",
              desc: "Pagina di atterraggio e percorsi di prenotazione studiati per ridurre l'attrito e massimizzare la trasformazione in appuntamenti.",
              icon: "🏛️"
            },
            {
              title: "Automazioni AI",
              desc: "Gestione contatti tramite AI per risposte istantanee, follow-up automatici e qualificazione chirurgica h24.",
              icon: "⚙️"
            }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-hub-white border border-hub-border rounded-[40px] hover:border-hub-gold/30 transition-all group">
              <div className="text-4xl mb-8">{item.icon}</div>
              <h3 className="text-xl font-bold text-hub-ink mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-hub-ink-muted text-sm leading-relaxed font-serif italic font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. "CASI DI SUCCESSO" — 3 numeri
//    NOTA: KPI NON verificati da Fabio (+148%, 320h, -58%).
//    Da rifornire con dati certificati. Ref: CONTENT_TODO.md → Agenzia Business
// ─────────────────────────────────────────────────────────────────────────────
export function AgenziaBusinessCasiSuccessoLegacy() {
  return (
    <section className="py-32 px-6 bg-hub-charcoal text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-hub-gold blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-20">
          <span className="text-hub-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Risultati Certificati</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Casi di <span className="text-hub-gold font-light">Successo.</span></h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-serif italic font-light">Non vendiamo promesse, ma protocolli testati che generano numeri misurabili ogni singolo mese.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              sector: "Real Estate Luxury",
              result: "+148%",
              metric: "Contatti Qualificati",
              desc: "Implementazione del Sistema Unico per un gruppo immobiliare di alto livello. Da gestione manuale disordinata a flusso costante di appuntamenti.",
              cta: "Percorsi di Conversione"
            },
            {
              sector: "Cliniche Specialistiche",
              result: "320h",
              metric: "Tempo Risparmiato/Mese",
              desc: "Integrazione di Automazioni AI per il triage e la prenotazione automatica. Zero lavoro manuale per la segreteria nella fase di qualificazione.",
              cta: "Protocollo Automazione AI"
            },
            {
              sector: "Servizi B2B Professionali",
              result: "-58%",
              metric: "Costo per Contatto",
              desc: "Ottimizzazione capillare delle campagne Meta e Google. Maggiore qualità con un investimento pubblicitario ottimizzato del 40%.",
              cta: "Campagne ad alto Rendimento"
            }
          ].map((study, i) => (
            <div key={i} className="group cursor-default">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-white/10" /> {study.sector}
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-6xl md:text-7xl font-serif font-medium text-white group-hover:text-hub-gold transition-colors duration-500">{study.result}</span>
                <span className="text-xs uppercase tracking-widest text-hub-gold font-bold">{study.metric}</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-8 font-serif italic font-light">
                &ldquo;{study.desc}&rdquo;
              </p>
              <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                Soluzione: {study.cta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. CTA FINALE STANDALONE
// ─────────────────────────────────────────────────────────────────────────────
export function AgenziaBusinessCTALegacy() {
  return (
    <section className="py-40 px-6 bg-hub-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic text-hub-ink mb-10">
          Inizia a ricevere <br /> <span className="text-hub-gold">Appuntamenti</span> non problemi.
        </h2>
        <p className="text-hub-ink-muted text-xl mb-12 font-serif italic font-light">
          Analizziamo il tuo attuale processo di acquisizione e strutturiamo un piano d&apos;azione personalizzato per implementare il Sistema Unico nel tuo business.
        </p>
        <Link href="/agenzia-business/contatti" className="btn-gold px-20 py-6">
          Prenota Analisi Strategica
        </Link>
        <p className="text-[10px] text-hub-ink/20 mt-8 uppercase tracking-[0.3em] font-black">Disponibilità limitata per nuovi partner mensili</p>
      </div>
    </section>
  );
}
