import type { Metadata } from "next";
import Link from "next/link";
import EbookForm from "@/components/EbookForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Impresa Liquida | Automazione Aziendale e Libertà Operativa — Fabio Micale",
  description: "Trasforma la tua ditta in un sistema autonomo. Protocolli di ingegneria gestionale e AI per liberare il tuo tempo e scalare il business senza la tua presenza costante.",
  openGraph: {
    title: "Impresa Liquida — Ingegneria della Libertà",
    description: "Il protocollo per liberare l'imprenditore dalla Sindrome dell'Intrappolamento Operativo.",
  },
};

const liquidaFaqs: FAQItem[] = [
  { 
    question: "Devo stravolgere il mio attuale organico?", 
    answer: "No. L'obiettivo dell'Impresa Liquida è potenziare le persone che già lavorano con te. Automatizziamo i processi ripetitivi e codifichiamo le decisioni, affinché il tuo staff possa operare con autonomia e tu possa finalmente delegare con serenità." 
  },
  { 
    question: "Quanto tempo serve per vedere i primi effetti dello 'svincolo'?", 
    answer: "Già nei primi 60 giorni implementiamo i 'cruscotti di controllo' che ti permettono di avere visibilità totale senza micro-management. La transizione completa verso un'impresa realmente liquida richiede solitamente un percorso semestrale." 
  },
  { 
    question: "È un metodo applicabile anche in settori non digitali?", 
    answer: "Certamente. Abbiamo implementato il protocollo in aziende manifatturiere, studi professionali e retail. Ogni attività che ha dei processi ripetitivi può essere ingegnerizzata per funzionare in modo più fluido e autonomo." 
  },
  { 
    question: "Cosa si intende per 'Titolare Opzionale'?", 
    answer: "Significa che l'azienda è in grado di produrre utile, gestire le urgenze e crescere anche se tu decidi di assentarti per un mese. Il tuo ruolo si sposta dalla gestione operativa alla visione strategica." 
  },
  { 
    question: "La mia presenza sarà ancora necessaria fisicamente in ufficio?", 
    answer: "L'obiettivo è renderti 'opzionale'. Potrai decidere di essere presente per piacere strategico o per coordinamento ad alto livello, ma non per necessità operativa. Il sistema gestirà il flusso quotidiano in tua assenza." 
  },
  { 
    question: "Come reagirà il mio team a questi cambiamenti?", 
    answer: "Il protocollo viene presentato come un potenziamento professionale, non una minaccia. Liberiamo i tuoi collaboratori dai compiti alienanti e ripetitivi, permettendo loro di concentrarsi su attività a maggior valore aggiunto e responsabilità." 
  },
  { 
    question: "Posso vendere l'azienda più facilmente dopo il protocollo?", 
    answer: "Decisamente sì. Un'impresa che funziona senza il titolare vale molto di più sul mercato poiché il rischio di transizione per un acquirente è quasi nullo. Stai trasformando un lavoro in un asset finanziario appetibile." 
  }
];

export default function ImpresaLiquidaPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#111827] selection:bg-[#065F46]/10 font-sans">
      
      {/* ── HERO: ELEGANZA & AUTONOMIA ───────────────────────── */}
      <section className="relative pt-52 pb-40 px-6 overflow-hidden bg-white">
        {/* Deep Premium Background Accents */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#065F46] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[40%] h-[40%] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#065F46]/20 bg-[#065F46]/5 text-[#065F46] mb-12 font-bold tracking-[0.2em] text-[10px] uppercase backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#065F46] shadow-[0_0_10px_rgba(6,95,70,0.5)]" />
                <span>PROTOCOLLO D&apos;ECCELLENZA: INGEGNERIA DELLA LIBERTÀ STRUTTURALE</span>
              </div>
              <h1 className="text-6xl md:text-[92px] font-black leading-[0.9] tracking-tighter mb-12 font-serif text-[#0A0A0A] uppercase">
                Esci dalla <br />
                tua <span className="italic font-light text-[#065F46] lowercase">prigione</span> <br />
                operativa.
              </h1>
              <p className="text-xl text-[#374151] leading-relaxed mb-16 max-w-xl font-medium font-serif opacity-90 border-l-4 border-[#065F46]/20 pl-8">
                Ingegnerizziamo l&apos;autonomia per imprenditori lungimiranti. Trasformiamo la tua ditta in un patrimonio liquido che produce valore mentre torni a casa alle 18:00, grazie all&apos;integrazione dell&apos;Intelligenza Artificiale come tuo &quot;Terzo Socio Silenzioso&quot;.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <a
                  href="#servizi"
                  className="group relative px-14 py-6 bg-[#065F46] text-white rounded-full text-[11px] tracking-[0.3em] font-bold text-center transition-all overflow-hidden shadow-2xl shadow-[#065F46]/20"
                >
                  <span className="relative z-10">VERIFICA STRUTTURALE</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
                <Link href="/impresa-liquida/chi-siamo" className="text-[11px] font-bold tracking-[0.2em] text-[#065F46]/60 hover:text-[#065F46] transition-colors uppercase border-b border-[#065F46]/10 pb-1">
                  Scopri il Metodo
                </Link>
              </div>
            </div>

            {/* Visual: Premium Glass Interface */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-[#065F46]/5 blur-[100px] rounded-full scale-110" />
              <div className="relative z-10 w-full aspect-[4/5] max-w-lg rounded-[60px] border border-white/40 bg-white/40 backdrop-blur-3xl p-1 shadow-[0_32px_120px_rgba(0,0,0,0.08)] overflow-hidden group transition-transform duration-700 hover:scale-[1.02]">
                 <div className="absolute inset-0 bg-grid-black/[0.01]" />
                 <div className="relative h-full w-full p-12 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#065F46] shadow-lg shadow-[#065F46]/30 flex items-center justify-center">
                           <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                        </div>
                        <div className="h-1.5 w-32 bg-[#065F46]/10 rounded-full" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-10 w-full bg-black/5 rounded-2xl" />
                        <div className="h-10 w-4/5 bg-black/[0.03] rounded-2xl" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group/card relative aspect-square rounded-3xl border border-black/[0.03] bg-white/60 p-6 flex flex-col justify-end transition-all hover:bg-[#065F46] group-hover:hover:shadow-xl">
                           <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center group-hover/card:border-white/40">
                              <div className="w-1.5 h-1.5 bg-[#065F46] rounded-full group-hover/card:bg-white animate-pulse" />
                           </div>
                           <div className="mt-4 text-[9px] font-bold tracking-widest text-black/20 uppercase group-hover/card:text-white/60">Flusso {i}</div>
                           <div className="mt-1 text-xs font-serif italic text-black/60 group-hover/card:text-white">Ottimizzato</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-black/[0.03] flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-black/20">
                       <span>Manager Digitale Attivo</span>
                       <div className="flex gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-[#065F46]" />
                          <div className="w-1 h-1 rounded-full bg-[#065F46]/40" />
                          <div className="w-1 h-1 rounded-full bg-[#065F46]/20" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER 01 (DARK STRIP) ───────────────────────────── */}
      <div className="bg-[#0A0A0A] py-10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#065F46] opacity-[0.03] blur-3xl rounded-full -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xs md:text-sm font-black tracking-[0.5em] uppercase leading-relaxed">
            L&apos;impresa non è un lavoro, è un <span className="text-[#065F46]">asset</span> che deve produrre valore senza di te.
          </p>
        </div>
      </div>

      {/* ── IL PUNTO DI ROTTURA (GLASS TEXTURE) ────────────────────── */}
      <section className="py-40 px-6 bg-[#F9FAFB] border-y border-black/[0.03] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-black/[0.01]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#065F46] mb-8 block drop-shadow-sm">Analisi della Condizione</span>
          <h2 className="text-4xl md:text-6xl font-light text-[#0A0A0A] mb-12 font-serif leading-[1.1]">
            Curiamo la <span className="italic text-[#065F46]">Sindrome dell&apos;Imprenditore Intrappolato.</span>
          </h2>
          <p className="text-black/50 text-xl leading-relaxed max-w-2xl mx-auto font-light mb-24 italic font-serif">
            Hai costruito un impero, ma oggi ne sei l&apos;ingranaggio più usurato. Se il tuo telefono smette di squillare, l&apos;azienda si ferma. Questo non è successo, è una auto-detenzione operativa.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="p-12 rounded-[50px] bg-white border border-black/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-2 duration-500">
               <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 font-serif italic text-3xl mb-10 border border-red-100/50 shadow-sm">!</div>
               <h3 className="text-2xl font-serif text-[#0A0A0A] mb-6 italic">Stato di Caos</h3>
               <ul className="space-y-5 text-black/40 text-sm font-light">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-red-400" /> Telefonate ad ogni ora per decisioni banali</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-red-400" /> Urgenze costanti che bloccano la strategia</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-red-400" /> Processi "nella testa" e mai codificati</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-red-400" /> Margini fragili che dipendono dal tuo sforzo</li>
               </ul>
            </div>
            
            <div className="p-12 rounded-[50px] bg-[#065F46] border border-[#065F46]/20 shadow-[0_40px_100px_rgba(6,95,70,0.15)] transition-transform hover:-translate-y-2 duration-500">
               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white font-serif italic text-3xl mb-10 border border-white/10 backdrop-blur-sm">✓</div>
               <h3 className="text-2xl font-serif text-white mb-6 italic">Sistema Liquido</h3>
               <ul className="space-y-5 text-white/60 text-sm font-light">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-white/40" /> Mappa Operativa ingegnerizzata</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-white/40" /> Team autonomo formato alla decisione</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-white/40" /> Cruscotti di controllo predittivi</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-white/40" /> Libertà di tempo e scalabilità garantite</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER 02 (DARK STRIP) ───────────────────────────── */}
      <div className="bg-[#0A0A0A] py-10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#065F46] opacity-[0.03] blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xs md:text-sm font-black tracking-[0.5em] uppercase leading-relaxed">
            Smetti di gestire emergenze, inizia a pilotare <span className="text-[#065F46]">sistemi ingegnerizzati</span>.
          </p>
        </div>
      </div>

      {/* ── DAL CAOS AL SISTEMA (NEW INJECTION) ─────────────────────────── */}
      <section className="py-40 px-6 bg-[#FDFDFD] overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#065F46] mb-8 block">Ingegneria Gestionale</span>
              <h2 className="text-5xl md:text-7xl font-light text-[#0A0A0A] mb-10 font-serif leading-[1.05]">
                La tua <span className="italic text-[#065F46]">Mappa Operativa</span> <br />per lo svincolo totale.
              </h2>
              <p className="text-black/50 text-xl leading-relaxed mb-12 font-light italic font-serif border-l-4 border-[#065F46]/10 pl-8">
                Il caos non si risolve con più fatica, ma con una migliore architettura. Trasformiamo il tuo saper fare in un navigatore satellitare che guida il tuo team verso l&apos;utile, lasciando a te il solo ruolo di armatore della nave.
              </p>
              <div className="space-y-8">
                {[
                  { t: "Eliminazione del Caos Decisionale", d: "Rimuoviamo il collo di bottiglia del titolare tuttofare attraverso protocolli certi." },
                  { t: "Mappatura degli Ingranaggi di Valore", d: "Codifichiamo solo ciò che genera davvero profitto, eliminando gli sprechi operativi." },
                  { t: "Cruscotto di Controllo Predittivo", d: "Monitora l'andamento dell'azienda senza dover supervisionare ogni singola azione." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#065F46] group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(6,95,70,0.3)]" />
                    <div>
                      <h4 className="text-sm font-black text-[#0A0A0A] uppercase tracking-wider mb-2">{item.t}</h4>
                      <p className="text-sm text-black/40 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#065F46]/5 blur-3xl rounded-full group-hover:bg-[#065F46]/10 transition-all duration-1000" />
              <div className="relative p-2 bg-white rounded-[70px] border border-black/5 shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] bg-[#0A0A0A] rounded-[60px] flex flex-col items-center justify-center p-16 text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
                   <div className="relative z-10 w-20 h-20 rounded-full border border-[#065F46]/30 flex items-center justify-center mb-10 bg-[#065F46]/5">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#065F46" strokeWidth="1">
                        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   <h3 className="relative z-10 text-2xl font-serif italic text-white mb-4">Caso di Studio: <br />Ingegneria di Sistema</h3>
                   <p className="relative z-10 text-sm text-white/40 font-light max-w-xs mb-12">Dalla gestione "a braccio" alla Mappa Operativa: come abbiamo liberato 40 ore/settimana a un imprenditore Over 40.</p>
                   <div className="relative z-10 flex gap-6 items-center">
                      <div className="w-12 h-px bg-white/10" />
                      <div className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Mappa Attiva</div>
                      <div className="w-12 h-px bg-white/10" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DAL CAOS ALL'ALGORITMO (REBRANDED) ─────────────────────────── */}
      <section className="py-40 px-6 bg-[#FDFDFD] overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#065F46] mb-8 block">Architettura d&apos;Impresa</span>
              <h2 className="text-5xl md:text-7xl font-light text-[#0A0A0A] mb-10 font-serif leading-[1.05]">
                Il tuo <span className="italic text-[#065F46]">Algoritmo di Pilotaggio</span> <br />per lo svincolo totale.
              </h2>
              <p className="text-black/50 text-xl leading-relaxed mb-12 font-light italic font-serif border-l-4 border-[#065F46]/10 pl-8">
                La dissipazione strategica non si cura con più fatica, ma con una migliore architettura. Trasformiamo il tuo saper fare in un Algoritmo Operativo che guida il team verso l&apos;utile, lasciando a te il solo ruolo di armatore della flotta.
              </p>
              <div className="space-y-8">
                {[
                  { t: "Eliminazione della Dipendenza Nodale", d: "Rimuoviamo il collo di bottiglia del titolare attraverso protocolli di disaccoppiamento." },
                  { t: "Mappatura dei Flussi ad Alto Valore", d: "Ingegnerizziamo solo ciò che genera profitto reale, eliminando le interferenze operative." },
                  { t: "Radar di Controllo Predittivo", d: "Vigila sull'andamento dell'asset senza dover supervisionare ogni singola micro-azione." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#065F46] group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(6,95,70,0.3)]" />
                    <div>
                      <h4 className="text-sm font-black text-[#0A0A0A] uppercase tracking-wider mb-2">{item.t}</h4>
                      <p className="text-sm text-black/40 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#065F46]/5 blur-3xl rounded-full group-hover:bg-[#065F46]/10 transition-all duration-1000" />
              <div className="relative p-2 bg-white rounded-[70px] border border-black/5 shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] bg-[#0A0A0A] rounded-[60px] flex flex-col items-center justify-center p-16 text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
                   <div className="relative z-10 w-20 h-20 rounded-full border border-[#065F46]/30 flex items-center justify-center mb-10 bg-[#065F46]/5">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#065F46" strokeWidth="1">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   <h3 className="relative z-10 text-2xl font-serif italic text-white mb-4">Caso di Studio: <br />Ingegneria di Svincolo</h3>
                   <p className="relative z-10 text-sm text-white/40 font-light max-w-xs mb-12">Dal Rumore Operativo all&apos;Algoritmo di Pilotaggio: come abbiamo liberato 40 ore/settimana a un imprenditore d&apos;eccellenza.</p>
                   <div className="relative z-10 flex gap-6 items-center">
                      <div className="w-12 h-px bg-white/10" />
                      <div className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Sistema Attivo</div>
                      <div className="w-12 h-px bg-white/10" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── I 4 ASSET DELL'INGEGNERIA LIQUIDA (NEW) ────────────────── */}
      <section className="py-40 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#065F46] mb-6 block">Asset Infrastrutturali</span>
            <h2 className="text-5xl md:text-7xl font-light text-[#0A0A0A] font-serif leading-tight">Gli strumenti per <br /><span className="italic text-[#065F46]">l&apos;architettura della libertà.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Protocollo di Disaccoppiamento", d: "Sleghiamo il tuo tempo dal profitto aziendale attraverso l'eliminazione dei nodi di dipendenza dal titolare.", i: "🔗" },
              { t: "Matrice delle Autonomie", d: "Ridefiniamo l'organigramma non per gerarchia, ma per flussi di responsabilità auto-gestiti dal team.", i: "📡" },
              { t: "Algoritmo Operativo 90D", d: "Un framework di gestione che ricalcola le priorità aziendali in tempo reale, come un radar strategico.", i: "🧭" },
              { t: "Cruscotto di Pilotaggio", d: "Tutti i KPI vitali della tua azienda sotto controllo chirurgico, direttamente dal tuo smartphone.", i: "📱" }
            ].map((asset, i) => (
              <div key={i} className="p-10 rounded-[50px] bg-[#F9FAFB] border border-black/[0.03] hover:border-[#065F46]/20 transition-all group flex flex-col h-full">
                <div className="text-4xl mb-10 group-hover:scale-110 transition-transform duration-500">{asset.i}</div>
                <h3 className="text-xl font-black text-[#0A0A0A] uppercase tracking-tighter mb-6 leading-tight h-14 flex items-center">{asset.t}</h3>
                <p className="text-sm text-black/40 font-medium leading-relaxed italic font-serif">&ldquo;{asset.d}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER 04 (DARK STRIP) ───────────────────────────── */}
      <div className="bg-[#0A0A0A] py-10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#065F46] opacity-[0.03] blur-3xl rounded-full -translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xs md:text-sm font-black tracking-[0.5em] uppercase leading-relaxed">
            Non costruire una prigione, edifica un <span className="text-[#065F46]">patrimonio</span> che scala senza il tuo sforzo diretto.
          </p>
        </div>
      </div>

      {/* ── I SERVIZI (EMERALD & GOLD) ────────────────────────────── */}
      <section id="servizi" className="py-48 px-6 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#065F46] mb-6 block">Le Nostre Implementazioni</span>
            <h2 className="text-5xl md:text-7xl font-light text-[#0A0A0A] font-serif leading-tight">Due passi verso <br /><span className="italic text-[#065F46]">la tua autonomia.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Analysis */}
            <div className="group p-14 border border-black/[0.03] bg-[#FDFDFD] rounded-[60px] flex flex-col justify-between hover:border-[#065F46]/20 transition-all shadow-[0_20px_80px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <svg className="w-32 h-32 text-[#065F46]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6h-1v7h6v-1h-5z"/></svg>
               </div>
               <div className="relative z-10">
                  <div className="text-[10px] uppercase font-bold text-black/30 mb-8 tracking-[0.4em]">Fase 01</div>
                  <h3 className="text-4xl font-serif text-[#0A0A0A] mb-8 italic">Verifica di Autonomia Operativa</h3>
                  <p className="text-black/50 text-lg leading-relaxed mb-12 font-light italic font-serif">
                    Un&apos;analisi profonda della tua struttura operativa. Individuiamo i colli di bottiglia e ti consegniamo il tuo &quot;Piano di Svincolo&quot;: la strategia per staccarti dal quotidiano.
                  </p>
                  <div className="text-4xl font-serif text-[#065F46] mb-14 italic tracking-tighter">Primo Passo Strategico</div>
               </div>
               <a href="mailto:info@fabiomicale.com" className="w-full py-6 rounded-full border border-black/10 text-[10px] font-bold tracking-[0.3em] text-center hover:bg-black hover:text-white transition-all">INIZIA LA VERIFICA</a>
            </div>

            {/* Implementation */}
            <div className="group p-14 border border-[#065F46]/20 bg-white rounded-[60px] flex flex-col justify-between hover:border-[#065F46]/40 transition-all shadow-2xl shadow-[#065F46]/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/[0.02] to-transparent pointer-events-none" />
               <div className="relative z-10">
                  <div className="text-[10px] uppercase font-bold text-[#065F46] mb-8 tracking-[0.4em]">Fase 02</div>
                  <h3 className="text-4xl font-serif text-[#0A0A0A] mb-8 italic">Protocollo Impresa Liquida</h3>
                  <p className="text-black/50 text-lg leading-relaxed mb-12 font-light italic font-serif">
                    Ristrutturazione ingegneristica semestrale. Implementazione AI manageriale, codifica dei processi e formazione del team per renderti opzionale.
                  </p>
                  <div className="text-5xl font-serif text-[#065F46] mb-14 italic tracking-tighter">Richiedi Analisi</div>
               </div>
               <a href="mailto:info@fabiomicale.com" className="w-full py-6 rounded-full bg-[#065F46] hover:bg-[#044E39] text-white text-[10px] font-bold tracking-[0.3em] text-center transition-all shadow-xl shadow-[#065F46]/20">ACCEDI AL PROTOCOLLO</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER 05 (DARK STRIP) ───────────────────────────── */}
      <div className="bg-[#0A0A0A] py-10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#065F46] opacity-[0.03] blur-3xl rounded-full translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xs md:text-sm font-black tracking-[0.5em] uppercase leading-relaxed">
            La complessità è il nemico della scalabilità. L&apos;<span className="text-[#065F46]">Algoritmo Operativo</span> è la tua soluzione.
          </p>
        </div>
      </div>

      <FAQSection 
        items={liquidaFaqs} 
        theme="liquida" 
        title="Domande sul Protocollo" 
        subtitle="Analizziamo le dinamiche della libertà aziendale."
      />

      {/* ── BANNER 03 (DARK STRIP) ───────────────────────────── */}
      <div className="bg-[#0A0A0A] py-10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#065F46] opacity-[0.03] blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xs md:text-sm font-black tracking-[0.5em] uppercase leading-relaxed">
            Il tuo secondo tempo inizia quando il tuo sistema diventa finalmente <span className="text-[#065F46]">autonomo</span>.
          </p>
        </div>
      </div>

      {/* ── CTA FINALE: IL SECONDO TEMPO ─────────────────────────── */}
      <section className="py-48 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#065F46] opacity-[0.1] blur-[150px] -translate-x-1/2 rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-light mb-14 font-serif leading-tight">
            Costruisci il tuo <br /><span className="italic text-[#065F46] drop-shadow-lg">secondo tempo.</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-20 max-w-2xl mx-auto font-light italic font-serif">
            Il Metodo Impresa Liquida è riservato a chi ha già una ditta solida ma vuole riprendersi la propria vita. Accettiamo solo 2 nuove implementazioni al trimestre.
          </p>
          <a
            href="mailto:info@fabiomicale.com"
            className="group relative px-16 py-7 bg-[#065F46] text-white rounded-full text-xs tracking-[0.35em] font-bold hover:shadow-[0_20px_80px_rgba(6,95,70,0.4)] transition-all inline-block text-center"
          >
            <span className="relative z-10">RICHIEDI UNA SESSIONE STRATEGICA</span>
            <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
          </a>
        </div>
      </section>

    </main>
  );
}
