import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 bg-[#0D0D0D]">
      
      {/* Background Ambience Premium */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-40" />
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#2E7D32] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#F5A623] opacity-[0.04] blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copywriting Inbound */}
          <div className="max-w-2xl">
            {/* Badge Status Ultra-Premium */}
            <div className="animate-fade-in-up badge mb-12">
              <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse shadow-[0_0_10px_#F5A623]" />
              Advisor in Sistemi Operativi & AI
            </div>

            {/* Headline: La Promessa Sfatata */}
            <h1 className="animate-fade-in-up delay-100 text-6xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-tight text-white mb-10 font-serif text-balance">
              L&apos;Ingegneria <br />
              <span className="italic text-[#F5A623]">della</span> Visione <br />
              <span className="font-sans font-extrabold tracking-tighter uppercase">Strategica.</span>
            </h1>

            {/* Subtitle: Il Metodo Ingegneristico */}
            <p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-white/40 leading-relaxed mb-14 max-w-xl font-light">
              Progetto architetture operative che trasformano la competenza in asset scalabili. Dagli appalti pubblici all&apos;automazione d&apos;impresa: proteggo il tuo tempo attraverso sistemi intelligenti.
            </p>

            {/* Inbound CTA Group */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <Link
                href="/soluzioni"
                className="btn-gold group"
              >
                Inizia il Reset
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/chi-sono"
                className="inline-flex items-center gap-3 text-white/30 hover:text-[#F5A623] transition-all duration-300 text-sm font-bold tracking-[0.3em] uppercase py-4 group"
              >
                La Metodologia
                <span className="w-0 group-hover:w-8 h-px bg-[#F5A623] transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Visual Authority */}
          <div className="animate-fade-in-up delay-200 relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative animate-float">
                {/* Glow multi-layer dietro la foto */}
                <div className="absolute inset-0 bg-[#F5A623]/20 blur-[100px] rounded-full scale-110 opacity-30" />
                <div className="absolute inset-0 bg-[#2E7D32]/10 blur-[60px] rounded-full translate-x-10 translate-y-10 opacity-20" />
                
                <Image
                  src="/fabio-hero-transparent.png"
                  alt="Fabio Micale — Architect in Business Systems"
                  width={650}
                  height={800}
                  priority
                  className="relative z-10 w-full h-auto max-h-[800px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] transform scale-x-[-1]"
                />
                
                {/* Dissolvenza inferiore Ultra-Deep */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-20" />
                
                {/* Floating Credit Card Style Element */}
                <div className="absolute -left-12 bottom-32 z-30 glass-gold p-8 rounded-[32px] shadow-2xl hidden xl:block animate-float delay-500">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <svg className="w-7 h-7 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1">Status: Operativo</div>
                      <div className="text-white font-bold text-lg font-serif italic">Impresa Liquida</div>
                    </div>
                  </div>
                  <div className="text-xs text-white/40 leading-relaxed max-w-[200px] font-light">
                    Protocolli di automazione per eliminare la schiavitù operativa.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
