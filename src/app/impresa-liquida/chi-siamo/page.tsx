import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi Siamo | Impresa Liquida — Ingegneria della Libertà",
  description: "L'approccio ingegneristico di Fabio Micale per l'autonomia aziendale. Trasformiamo ditte padronali in asset liquidi e indipendenti.",
};

export default function ChiSiamoPage() {
  return (
    <div className="bg-[#FDFDFD] text-[#111827] selection:bg-[#065F46]/10">

      {/* ── SEZIONE HERO: IDENTITÀ & VALORE ────────────────────── */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#065F46] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full border border-[#065F46]/10 bg-[#065F46]/5 text-[#065F46] mb-10 font-serif italic tracking-wide text-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
            <span>Esperienza al fianco dell&apos;Impresa</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight mb-16 font-serif text-[#0A0A0A]">
            La nostra <br /><span className="italic text-[#065F46]">identità.</span>
          </h1>
        </div>
      </section>

      {/* ── IL CUORE: PERCHÉ SCEGLIERE NOI (ECCELLENZA OPERATIVA) ── */}
      <section className="py-32 px-6 bg-white border-b border-black/5 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Image Column with MEPA Stats Overlay */}
            <div className="relative group animate-fade-in-up">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-black/5 shadow-2xl relative">
                <Image 
                  src="/foto fabio cravatta no sfondo.png" 
                  alt="Fabio Micale — Ingegneria della Libertà" 
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Overlay Badge matching MEPA structure */}
              <div className="absolute -bottom-10 -right-10 bg-[#065F46] p-10 rounded-[32px] shadow-2xl">
                <div className="text-6xl font-serif text-white mb-2 italic">25+</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">Anni di Strategia</div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#065F46]/5 text-[#065F46] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                Parliamo la tua stessa lingua
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0A0A0A] mb-10 font-serif leading-tight">
                Esperienza Reale. <br /><span className="italic text-black/30">Al fianco dell&apos;imprenditore.</span>
              </h2>
              
              <div className="space-y-8 text-black/70 text-xl leading-relaxed font-light italic font-serif">
                <p>
                  Sono <span className="text-[#0A0A0A] font-black uppercase text-base not-italic">Fabio Micale</span>. So cosa significa costruire un&apos;azienda partendo da zero e quanto possa essere tossica la gestione operativa h24.
                </p>
                <p>
                  Negli ultimi due decenni ho aiutato decine di imprenditori solidi — dai titolari di fabbriche ai direttori di uffici professionali — a staccarsi dal &quot;caos del quotidiano&quot;. 
                </p>
                <p>
                  Non sono un semplice consulente, sono un progettista di sistemi: il mio obiettivo è rendere la tua azienda un asset liquido che produce valore anche quando non sei presente fisicamente in sede.
                </p>
              </div>

              {/* Lower Stats Grid matching MEPA structure */}
              <div className="mt-16 grid grid-cols-2 gap-10 border-t border-black/5 pt-16">
                 <div className="flex flex-col">
                    <h3 className="text-2xl font-serif italic mb-2">Sistemi di Intelligenza</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">Integrazione Tecnologica</p>
                    <p className="text-black/50 font-serif italic leading-relaxed">
                      Progettisti di soluzioni sintetiche e assistenti digitali integrati nel sistema operativo della tua impresa.
                    </p>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[#065F46] font-serif italic text-5xl">Zero</span>
                    <span className="text-[11px] text-black/40 uppercase tracking-[0.2em] font-black mt-3">Imprevisti Inutili</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL MANIFESTO: FLUIDITÀ & RIGORE ──────────────────────── */}
      <section className="py-40 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-serif font-light text-[#0A0A0A] mb-12 italic">
              Squadra e Rete d&apos;Eccellenza
            </h2>
            <p className="text-xl text-black/50 font-serif leading-relaxed max-w-3xl mx-auto mb-24 opacity-80 italic">
              Non siamo un singolo consulente, ma un organismo multidisciplinare di professionisti dedicati alla tua libertà. Ogni area è presidiata da specialisti del settore.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Analisi", d: "Scomponiamo l'azienda in processi atomici per individuare dove si perde il tuo tempo." },
              { t: "Codifica", d: "Trasformiamo le tue competenze in protocolli operativi che il team può seguire in autonomia." },
              { t: "IA & Automazione", d: "Integriamo l'intelligenza artificiale per delegare i compiti ripetitivi e di controllo." }
            ].map((item, i) => (
              <div key={i} className="p-12 border border-black/5 rounded-[40px] bg-white hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-[#065F46]/5 flex items-center justify-center text-[#065F46] font-serif italic mb-8 group-hover:bg-[#065F46] group-hover:text-white transition-colors">
                  0{i+1}
                </div>
                <h4 className="text-[#0A0A0A] font-bold text-xl mb-6 uppercase tracking-tight">{item.t}</h4>
                <p className="text-sm text-black/50 leading-relaxed font-serif italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SQUADRA & NETWORK: AUTORITÀ COLLETTIVA ────────────────── */}
      <section className="py-40 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#065F46] opacity-[0.02] blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#065F46] mb-8 block">Oltre il Consulente</span>
              <h2 className="text-5xl md:text-7xl font-light text-[#0A0A0A] font-serif leading-tight mb-10">
                Lavoriamo come <br /><span className="italic text-[#065F46]">una squadra.</span>
              </h2>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-6 group">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#065F46] group-hover:scale-150 transition-transform" />
                    <div>
                      <h3 className="text-2xl font-serif italic mb-2">Ingegneria dei Processi</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">Ottimizzazione Strutturale</p>
                      <p className="text-black/50 font-serif italic leading-relaxed">
                        Specialisti nella mappatura e nell&apos;automazione dei flussi aziendali per eliminare i colli di bottiglia umani.
                      </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-6 group">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#065F46] group-hover:scale-150 transition-transform" />
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">Integrazione Sistemi IA</div>
                      <div className="text-xs text-black/30 font-serif italic mt-1">Sviluppo di agenti autonomi per il monitoraggio aziendale.</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-6 group">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#065F46] group-hover:scale-150 transition-transform" />
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">Tutela Legale e Compliance</div>
                      <div className="text-xs text-black/30 font-serif italic mt-1">Protezione del patrimonio e dei protocolli aziendali.</div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square rounded-[60px] bg-[#F9FAFB] border border-black/5 flex items-center justify-center p-20 overflow-hidden relative">
                  <Image 
                    src="/logos/impresa-liquida-premium.png" 
                    alt="La Rete" 
                    fill
                    className="object-contain p-24 opacity-5 grayscale"
                  />
                  <div className="grid grid-cols-2 gap-8 relative z-10 w-full">
                     {[1,2,3,4].map((i) => (
                       <div key={i} className="aspect-square rounded-3xl bg-white shadow-xl shadow-black/5 border border-black/[0.03] p-6 flex flex-col justify-between">
                          <div className="w-8 h-8 rounded-full bg-[#065F46]/5 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                          </div>
                          <div className="text-[9px] font-bold tracking-widest text-black/40 uppercase">Advisory {i}</div>
                       </div>
                     ))}
                  </div>
               </div>
               {/* Floating Tag */}
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-black/5">
                  <div className="text-xs font-bold tracking-[0.2em] text-[#065F46] uppercase mb-1">Network Certificato</div>
                  <div className="text-[10px] text-black/30 font-serif italic">12 Specialist Attivi</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-serif italic text-[#0A0A0A] mb-12">Pronto a uscire dalla gabbia operativa?</h2>
           <a href="mailto:info@fabiomicale.com" className="inline-block px-14 py-6 bg-[#065F46] text-white rounded-full text-[11px] tracking-[0.3em] font-bold shadow-xl shadow-[#065F46]/20 transition-transform hover:scale-105">
              PRENOTA LA TUA ANALISI 48H
           </a>
        </div>
      </section>

    </div>
  );
}
