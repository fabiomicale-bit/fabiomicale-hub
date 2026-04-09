import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Metodo Impresa Liquida™ | Esci dal Cantiere — Fabio Micale",
  description:
    "Trasforma la tua azienda in un asset scalabile che funziona senza di te. Deleghe, processi e controllo di gestione ingegnerizzato.",
  openGraph: {
    title: "Metodo Impresa Liquida™ — Fabio Micale",
    description: "Il protocollo manageriale per liberare l'imprenditore dalla gestione operativa.",
  },
};

export default function ImpresaLiquidaPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2E7D32] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <div className="badge border-[#2E7D32]/30 text-[#2E7D32] mb-8">Asset Strategico: Libertà Operativa</div>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
                Smetti di essere <br />
                <span className="italic text-[#2E7D32]">l&apos;operaio</span> della tua azienda.
              </h1>
              <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-lg font-light">
                Se la tua presenza è indispensabile per ogni decisione, non hai un&apos;impresa: hai un lavoro autonomo ad alto rischio. Impresa Liquida™ è il protocollo per ingegnerizzare la tua libertà.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contatti?ref=impresa-liquida"
                  className="btn-gold px-12 py-5 text-xs tracking-widest font-bold text-center"
                >
                  ENGINEER YOUR FREEDOM
                </Link>
              </div>
            </div>

            {/* Visual: Abstract Nodes */}
            <div className="relative hidden md:flex justify-center">
              <div className="absolute inset-0 bg-[#2E7D32]/10 blur-[80px] rounded-full" />
              <div className="relative z-10 p-16 rounded-[100px] border border-white/5 bg-white/[0.01] flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-20 h-20 rounded-2xl border border-white/10 flex items-center justify-center bg-[#0D0D0D] shadow-2xl group hover:border-[#2E7D32]/50 transition-all">
                        <div className="w-2 h-2 rounded-full bg-[#2E7D32]/40" />
                      </div>
                    ))}
                 </div>
                 {/* Connection lines visual */}
                 <div className="absolute inset-0 p-12 pointer-events-none opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                       <path d="M50 50 L150 150 M150 50 L50 150" stroke="white" strokeWidth="0.5" />
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL PARADOSSO ───────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            La prigione che <br /><span className="italic text-[#2E7D32]">hai costruito tu stesso.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Hai creato un&apos;azienda per essere libero, ma oggi sei l&apos;unico che non può permettersi di spegnere il telefono. Il successo è diventato il tuo più grande limite.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="card-premium p-10 text-left border-l-4 border-l-[#F5A623]">
               <h3 className="text-white text-xl font-bold mb-4">Stato Attuale: Solido</h3>
               <p className="text-white/30 text-sm leading-relaxed font-light mb-6">Processi nella testa dell&apos;imprenditore. Decisioni fatte a braccio. Margini che dipendono dal tuo sforzo diretto. </p>
               <div className="text-[10px] uppercase font-bold text-[#F5A623]">Fragilità estrema</div>
            </div>
            <div className="card-premium p-10 text-left border-l-4 border-l-[#2E7D32]">
               <h3 className="text-white text-xl font-bold mb-4">Evoluzione: Liquida</h3>
               <p className="text-white/30 text-sm leading-relaxed font-light mb-6">Processi codificati. Squadra autonoma. Controllo di gestione predittivo. L&apos;azienda cresce anche quando dormi.</p>
               <div className="text-[10px] uppercase font-bold text-[#2E7D32]">Asset Scalabile</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE 3 FASI DELL'INGEGNERIZZAZIONE ────────────────────── */}
      <section className="py-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="badge border-[#2E7D32]/30 text-[#2E7D32] mb-6">Il Protocollo Operativo</div>
            <h2 className="text-4xl md:text-6xl font-light text-white font-serif">Ingegnerizzare <br /><span className="italic">l&apos;indipendenza.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "I", t: "Scomposizione", d: "Analizziamo ogni ingranaggio della tua attività e lo codifichiamo in processi replicabili." },
              { n: "II", t: "Iniezione di Sistema", d: "Implementiamo strumenti e dashboard per vigilare sull'esecuzione senza doverla supervisionare." },
              { n: "III", t: "Exit Operativo", d: "Formiamo il tuo team al pensiero sistemico. Tu torni a fare l'Imprenditore." }
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center p-12 card-premium group">
                 <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-xl font-serif italic text-[#2E7D32] mb-10 group-hover:bg-[#2E7D32]/10 transition-all">{p.n}</div>
                 <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{p.t}</h3>
                 <p className="text-white/20 text-base font-light italic serif leading-relaxed">&ldquo;{p.d}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif">
            Costruisci il tuo <br /><span className="italic text-[#2E7D32]">secondo tempo.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Il Metodo Impresa Liquida™ è un percorso d&apos;elite, non un corso. Lavoriamo a stretto contatto per smontare e rimontare la tua azienda in un asset di valore.
          </p>
          <Link
            href="/contatti?ref=impresa-liquida-final"
            className="btn-gold px-12 py-5 text-sm tracking-[0.3em] font-bold"
          >
            RICHIEDI LA TUA ANALISI STRATEGICA
          </Link>
          <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            Protocollo limitato a 1 nuova implementazione mensile.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
