"use client";

import Link from "next/link";

export default function PricingCards() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 transition-all">
          <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-6 block italic">Piani e Investimenti</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-serif">Piani Trasparenti.</h2>
          <p className="text-slate-500 font-medium">Nessun costo nascosto. Scegli la velocità di crescita della tua azienda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Piano Base */}
          <div className="bg-white p-12 md:p-16 rounded-[50px] border border-slate-200 shadow-xl hover:-translate-y-2 transition-transform relative overflow-hidden group flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10 group-hover:bg-brand-blue/5 transition-colors" />
             <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tighter italic">MEPA Elite Base</h3>
                <div className="flex items-baseline gap-2 mb-10">
                   <span className="text-5xl font-black text-brand-blue italic font-serif">497€</span>
                   <span className="text-slate-400 font-bold uppercase text-xs">/mese</span>
                </div>
                <ul className="space-y-5 mb-12 text-sm font-medium text-slate-600">
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Fino a 5 gare gestite/mese</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Ricerca bandi quotidiana</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Abilitazione nuovi bandi</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Assistenza via WhatsApp</li>
                </ul>
             </div>
             <Link href="/mepa-elite/contatti" className="block w-full text-center bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-blue transition-colors outline-none">Scegli Base</Link>
          </div>

          {/* Piano Pro */}
          <div className="bg-white p-12 md:p-16 rounded-[50px] border-4 border-brand-blue shadow-2xl hover:-translate-y-2 transition-transform relative overflow-hidden group flex flex-col justify-between">
             <div className="absolute top-4 right-8 bg-brand-blue text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">Più Popolare</div>
             <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tighter italic">MEPA Elite PRO</h3>
                <div className="flex items-baseline gap-2 mb-2">
                   <span className="text-5xl font-black text-brand-blue italic font-serif">997€</span>
                   <span className="text-slate-400 font-bold uppercase text-xs">/mese</span>
                </div>
                <p className="text-[10px] text-brand-blue font-black uppercase tracking-widest mb-10 italic">+ 10% di Commissione sul Risultato</p>
                <ul className="space-y-5 mb-12 text-sm font-medium text-slate-600">
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Gare illimitate gestite</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Monitoraggio h24 prioritario</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Scrittura offerta tecnica</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Analisi competitors bando</li>
                </ul>
             </div>
             <Link href="/mepa-elite/contatti" className="block w-full text-center bg-brand-blue text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 outline-none">Scegli Pro</Link>
          </div>
        </div>

        {/* Sezione Testimonianze (Social Proof) */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-green font-black text-[10px] uppercase tracking-[0.5em] mb-4 block italic">Dicono di noi</span>
            <h3 className="text-3xl font-serif italic text-slate-900">La Voce di chi ha scelto la Delega.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: "Grazie a MEPA Elite abbiamo sbloccato lavorazioni che prima vedevamo solo col binocolo. Professionalità incredibile nel gestire ogni singola carta.",
                author: "Mario R.",
                role: "EDILIZIA"
              },
              { 
                text: "Fabio e il suo team sono il nostro ufficio gare delegato a tutti gli effetti. Finalmente posso stare in cantiere senza l'ansia di controllare il portale.",
                author: "Luigi B.",
                role: "TERMOIDRAULICA"
              },
              { 
                text: "Il monitoraggio h24 ci ha permesso di vincere 3 acquisti diretti in meno di un mese. L'investimento si è ripagato praticamente da solo.",
                author: "Stefano M.",
                role: "PITTURE E CARTONGESSO"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all h-full group">
                <p className="text-slate-600 italic text-sm leading-relaxed mb-6 font-medium">
                  "{t.text}"
                </p>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-black uppercase text-xs tracking-tighter group-hover:text-brand-blue transition-colors">{t.author}</span>
                  <span className="text-brand-blue font-bold text-[9px] uppercase tracking-widest mt-1 opacity-60">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
