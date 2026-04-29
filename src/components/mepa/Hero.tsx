"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-brand-blue pt-40 pb-52 px-4 text-center text-white rounded-b-[100px] relative overflow-hidden transition-all">
      {/* Background Micro-animation */}
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/20 blur-[120px] rounded-full animate-pulse" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <span className="text-brand-green font-black text-xs tracking-[0.6em] uppercase mb-10 block animate-fade-in italic">
          MEPA Elite - Fabio Micale
        </span>
        
        <h1 className="text-6xl md:text-9xl font-black mb-12 leading-[0.9] font-serif italic tracking-tighter transition-all">
          Appalti Pubblici <br className="hidden md:block" /> con MEPA Elite.
        </h1>

        <div className="mb-12 inline-flex items-center gap-4 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Il Tuo Ponte Verso gli Appalti Pubblici</span>
        </div>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-16 px-4">
          Non hai mai approcciato il MEPA per paura della burocrazia? <br className="hidden md:block" />
          <span className="font-bold text-white italic underline decoration-brand-green decoration-4 underline-offset-8">Ti portiamo noi dentro il mercato</span> gestendo ogni singola procedura al posto tuo.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/mepa-elite/contatti" 
            className="bg-brand-green text-white px-14 py-7 rounded-2xl text-sm font-black shadow-2xl hover:bg-green-600 transition-all hover:scale-105 uppercase tracking-widest w-full sm:w-auto"
          >
            Candidati per la Delega →
          </Link>
          <p className="text-[10px] text-blue-300 font-bold uppercase tracking-[0.3em] italic">
            Standard di gestione 2026 attiva
          </p>
        </div>
      </div>
    </section>
  );
}
