"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChiSiamoPage() {
  return (
    <div className="bg-white">
      {/* 🏙️ INTRO: LA RETE D'ELITE */}
      <section className="pt-40 pb-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-6 block italic">L'Autorità della Squadra</span>
           <h1 className="text-5xl md:text-8xl font-serif italic text-slate-900 leading-[0.9] tracking-tighter">
             Chi Siamo.
           </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Immagine Founder */}
          <div className="relative group flex items-center justify-center lg:justify-start">
             <div className="aspect-[4/5] w-full max-w-md bg-slate-100 rounded-[60px] relative overflow-hidden shadow-2xl border-8 border-white transform -rotate-3 transition-transform group-hover:rotate-0 duration-500">
                <Image 
                  src="/foto fabio cravatta no sfondo.png" 
                  alt="Fabio Micale - Fondatore" 
                  fill 
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-brand-blue p-10 rounded-[32px] shadow-2xl text-white transform rotate-3">
                <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Fondatore & Direttore</div>
                <div className="text-2xl font-serif italic">Fabio Micale</div>
             </div>
          </div>

          {/* Visione e Metodo */}
          <div>
            <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-6 block">La Nostra Visione</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-10 leading-tight">
               Oltre la Consulenza: <br /> Un <span className="text-brand-blue">Dipartimento</span> al Tuo Fianco.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
               <p>
                  MEPA Elite non è il lavoro di un singolo professionista, ma la sintesi di una **Rete di Specialisti** coordinati da Fabio Micale. Abbiamo capito che per vincere davvero negli appalti pubblici, non serve un "esperto generico", ma una squadra che copra ogni centimetro del processo.
               </p>
               <p>
                  Siamo nati per dare alle PMI italiane la stessa forza d'urto burocratica delle grandi multinazionali. Con oltre 25 anni di esperienza collettiva, trasformiamo il portale MEPA da un incubo amministrativo a un motore di fatturato costante.
               </p>
               <p className="italic font-medium text-slate-700">
                  "Non siamo fornitori di servizi, siamo l'estensione operativa della tua azienda."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 👥 LA SQUADRA DI SPECIALISTI */}
      <section className="py-32 bg-slate-50 rounded-[100px] mx-4 mb-20 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
               <span className="text-brand-blue font-black text-[10px] tracking-[0.5em] uppercase mb-6 block italic">Competenza Operativa</span>
               <h3 className="text-4xl font-serif italic text-slate-900">Le Figure al Tuo Servizio.</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { 
                   role: "Responsabile Strategia Gare", 
                   desc: "Cura la scrittura tecnica delle offerte e l'analisi dei capitolati complessi per massimizzare il punteggio qualitativo.",
                   icon: "📝"
                 },
                 { 
                   role: "Esperto Conformità Normativa", 
                   desc: "Monitora costantemente le variazioni ANAC e gestisce i fascicoli FVOE, eliminando il rischio di squalifica formale.",
                   icon: "⚖️"
                 },
                 { 
                   role: "Specialista Operativo Portale", 
                   desc: "Responsabile del caricamento in tempo reale e del monitoraggio h24 degli acquisti diretti sotto-soglia.",
                   icon: "⚡"
                 }
               ].map((member, i) => (
                 <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl hover:-translate-y-2 transition-all group">
                    <div className="text-4xl mb-8">{member.icon}</div>
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-4 group-hover:text-brand-blue transition-colors">
                      {member.role}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {member.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 🖼️ AMBIENTE DI LAVORO */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
         <div className="bg-slate-900 rounded-[60px] overflow-hidden relative aspect-[21/9] group">
            <Image 
               src="/fabio studio.jpg" 
               alt="La squadra di MEPA Elite al lavoro" 
               fill 
               className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-20 left-20">
               <h3 className="text-white text-5xl font-serif italic mb-4">Precisione Istituzionale.</h3>
               <p className="text-white/60 text-lg max-w-md font-light">Lavoriamo in ambienti ad alta concentrazione per garantire che nessuna carta, bando o scadenza venga mai mancata.</p>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-serif italic text-slate-900 mb-10">Vuoi che questa squadra lavori per te?</h2>
              <Link href="/mepa-elite/contatti" className="inline-block bg-brand-blue text-white px-16 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10 hover:scale-105">
                 Entra nel Modello Delegato →
              </Link>
          </div>
      </section>
    </div>
  );
}
