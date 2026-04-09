import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-32 pb-20 bg-[#0D0D0D]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2E7D32] opacity-[0.07] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F5A623] opacity-[0.05] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copywriting Inbound */}
          <div className="max-w-2xl">
            {/* Badge Status */}
            <div className="animate-fade-in-up inline-flex items-center gap-3 border border-[rgba(245,166,35,0.3)] bg-[rgba(245,166,35,0.05)] text-[#F5A623] text-[10px] font-bold px-4 py-2 rounded-full mb-10 tracking-[0.2em] uppercase">
              <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
              Il Metodologo della Crescita
            </div>

            {/* Headline: La Promessa */}
            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-8 font-serif">
              Smetti di lavorare <br />
              <span className="italic text-[#F5A623]">per</span> l&apos;azienda. <br />
              <span className="font-sans font-bold">Falla lavorare per te.</span>
            </h1>

            {/* Subtitle: Il Metodo */}
            <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-[rgba(255,255,255,0.5)] leading-relaxed mb-12 max-w-xl">
              Non sono un coach. Sono un **Advisor in Organizzazione** con 25+ anni di esperienza in cantieri e appalti pubblici. Attraverso sistemi operativi scalabili, sblocco il fatturato PA e ingegnerizzo la tua libertà operativa.
            </p>

            {/* Inbound CTA Group */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-6 items-start">
              <Link
                href="/soluzioni"
                className="group relative inline-flex items-center gap-4 bg-[#F5A623] hover:bg-[#D4891A] text-[#0D0D0D] font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-2xl shadow-[#F5A623]/20 hover:-translate-y-1"
              >
                Scopri le Soluzioni
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/chi-sono"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white border-b border-white/10 hover:border-[#F5A623] py-4 transition-all duration-300 text-sm font-semibold tracking-wider uppercase"
              >
                La mia storia
              </Link>
            </div>

            {/* Social Proof: Numeri di Autorità */}
            <div className="animate-fade-in-up delay-400 mt-16 flex flex-wrap gap-12 border-t border-white/5 pt-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white mb-1">25+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Anni di Esperienza</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white mb-1">13Mil+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Budget Gestito (€)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white mb-1">150+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Progetti Realizzati</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Authority */}
          <div className="animate-fade-in-up delay-200 relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow dietro la foto */}
                <div className="absolute inset-0 bg-[#F5A623]/10 blur-[80px] rounded-full scale-110 opacity-30 animate-pulse" />
                
                <Image
                  src="/fabio-hero-transparent.png"
                  alt="Fabio Micale — Il Metodologo della Crescita"
                  width={650}
                  height={800}
                  priority
                  className="relative z-10 w-full h-auto max-h-[750px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform scale-x-[-1]"
                />
                
                {/* Dissolvenza inferiore per integrazione dark */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D0D0D] to-transparent z-20" />
                
                {/* Elemento flottante: Credibilità */}
                <div className="absolute -left-10 bottom-20 z-30 bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl hidden xl:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Metodo Certificato</div>
                      <div className="text-white font-bold text-sm italic serif">Sistemi Operativi Imprenditoriali</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-white/50 leading-relaxed max-w-[180px]">
                    Soluzioni dirette per Fatturato, Tempo e Chiarezza Strategica.
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
