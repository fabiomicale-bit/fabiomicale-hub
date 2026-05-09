"use client";

import Image from "next/image";

export default function ServiceInfo() {
  return (
    <section className="py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto bg-white rounded-[60px] shadow-3xl border border-slate-100 p-12 md:p-24 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-brand-blue/5 transition-colors" />
        
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-6 block italic">Semplificazione Totale</span>
            <h2 className="text-4xl font-serif italic text-slate-900 mb-8 leading-tight">Perché la Delega è la tua arma segreta?</h2>
            
            <div className="space-y-10">
               <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 font-bold text-brand-blue border border-slate-100">01</div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tighter">Abilitazione Diretta</h4>
                     <p className="text-sm text-slate-500 leading-relaxed font-medium">Non sei ancora sul MEPA? Gestiamo noi tutta la pratica di ingresso e abilitazione ai bandi specifici per la tua categoria.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 font-bold text-brand-blue border border-slate-100">02</div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tighter">Gestione Totale PCP/FVOE</h4>
                     <p className="text-sm text-slate-500 leading-relaxed font-medium">Eliminiamo la complessità tecnica. Carichiamo documenti e offerte al posto tuo, garantendo conformità assoluta fin dalla prima gara.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 font-bold text-brand-blue border border-slate-100">03</div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tighter">Strategia d'Ingresso</h4>
                     <p className="text-sm text-slate-500 leading-relaxed font-medium">Non lanciamo freccette nel buio. Analizziamo il tuo settore e ti portiamo solo davanti agli acquisti diretti dove hai reali margini di vincita.</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-200 relative">
             <div className="aspect-video bg-white rounded-3xl shadow-2xl mb-8 flex items-center justify-center overflow-hidden relative border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent" />
                <div className="text-center px-8 z-10">
                  <div className="text-brand-green font-black text-5xl mb-4 italic font-serif">2026 Ready</div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Interoperabilità ANAC Attiva</p>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
                   <span>Monitoraggio Gare</span>
                   <span className="text-brand-green">Attivo</span>
                </div>
                <div className="w-full bg-white h-2 rounded-full overflow-hidden border border-slate-100">
                   <div className="bg-brand-green h-full w-[85%]" />
                </div>
                <p className="text-[10px] italic text-slate-400">Collaboratore Delegato MEPA Elite - Fabio Micale</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
