import Image from "next/image";
import Link from "next/link";

export default function ChiSonoPreview() {
  return (
    <section id="chi-sono" className="relative py-32 px-6 bg-[#141414] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#2E7D32] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#F5A623] opacity-[0.02] blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side: The Authority */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-square max-w-md">
              
              {/* Decorative Rings (Premium) */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-[#F5A623]/10" />
              <div className="absolute inset-16 rounded-full border border-[#2E7D32]/20" />

              {/* Central Photo with Gold Frame */}
              <div className="absolute inset-20 rounded-full border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0D0D0D]">
                <Image
                  src="/fabio-speech.jpg"
                  alt="Fabio Micale — Il Metodologo in azione"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating Status Badges (Glassmorphism) */}
              <div className="absolute top-10 right-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-2xl animate-fade-in delay-300">
                <div className="text-[10px] uppercase tracking-widest text-[#F5A623] font-bold mb-1">Autorità</div>
                <div className="text-2xl font-bold text-white leading-none">13M+ <span className="text-sm font-normal text-white/40">Budget</span></div>
              </div>

              <div className="absolute bottom-20 -left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-2xl animate-fade-in delay-500">
                <div className="text-[10px] uppercase tracking-widest text-[#2E7D32] font-bold mb-1">Incarichi</div>
                <div className="text-2xl font-bold text-white leading-none">Senior <span className="text-sm font-normal text-white/40">PM</span></div>
              </div>
            </div>
          </div>

          {/* Content Side: The Methodology */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="badge">L&apos;Esperienza al tuo servizio</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight font-serif">
              Metodo, non magia. <br />
              <span className="italic text-[#F5A623]">Sistemi, non opinioni.</span>
            </h2>

            <div className="space-y-6 text-white/50 leading-relaxed text-lg">
              <p>
                La mia formazione è iniziata a 8 anni tra i cantieri di mio padre, dove ho imparato l&apos;ingegneria dei sistemi prima ancora di saperla nominare. Oggi, con 25+ anni di gestione aziendale e un presente da Senior PM per appalti pubblici da milioni di euro, porto nella tua impresa la stessa spietata ricerca dell&apos;efficienza.
              </p>
              <p>
                Come **Advisor in Organizzazione**, non vendo sogni. Implemento protocolli operativi reali — MEPA Elite, Impresa Liquida ed Eredità Punto Zero — progettati per far evolvere il tuo business oltre il limite della tua presenza fisica.
              </p>
            </div>

            {/* Tags Group (Premium Style) */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Imprenditorialità", "Metodologia", "Business Strategy", "Effecienza"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider text-white/40 border border-white/10 px-4 py-2 rounded-lg bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/chi-sono"
              className="mt-12 inline-flex items-center gap-3 text-[#F5A623] hover:text-[#D4891A] font-bold transition-all group tracking-wide uppercase text-xs"
            >
              Scopri la mia metodologia completa
              <div className="w-10 h-px bg-[#F5A623]/30 group-hover:w-16 transition-all" />
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
