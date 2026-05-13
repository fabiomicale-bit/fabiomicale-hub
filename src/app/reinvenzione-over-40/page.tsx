import type { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Reinvenzione Professionale Over 40 | Guida Strategica — Fabio Micale",
  description:
    "Guida per reinventarsi professionalmente dopo i 40 anni. Ingegnerizza la tua esperienza e potenziala con l'AI. Il protocollo di Fabio Micale.",
  alternates: { canonical: "https://www.fabiomicale.com/reinvenzione-over-40" },
};

export default function ReinvenzioneOver40Page() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      

      {/* ── HERO EDITORIALE ─────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Guida Strategica</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Reinvenzione <br /> <span className="italic text-[#F5A623]">Professionale Over 40.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light">
            La tua esperienza non è un peso. È l&apos;asset più prezioso che possiedi. <br />
            Impariamo a ingegnerizzarla per il mercato di oggi.
          </p>
        </div>
      </section>

      {/* ── IL VANTAGGIO ASIMMETRICO ─────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="badge border-[#F5A623]/20 text-[#F5A623]/60 mb-8 uppercase tracking-widest">Il Vantaggio Asimmetrico</div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            Perché non devi <br /><span className="italic text-white/40">ricominciare da zero.</span>
          </h2>
          <div className="space-y-8 text-white/40 text-lg leading-relaxed font-light">
            <p>
              A 25 anni hai energia ma nessun contesto. Impari bruciando risorse e commettendo errori che un occhio esperto vede a chilometri di distanza.
            </p>
            <p>
              A 40+ anni hai risolto il problema del contesto. Hai un network reale, una reputazione costruita e pattern riconoscibili su ciò che funziona. Il tuo problema non è l&apos;età, è il modello mentale che ti costringe a pensare come un principiante.
            </p>
            <p className="text-white border-l-2 border-[#F5A623] pl-8 py-4 italic font-serif">
              &ldquo;La reinvenzione dopo i 40 non è un restart. È un restack: potenziamo la tua struttura esistente con l&apos;AI e nuovi sistemi di posizionamento.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── I 3 ERRORI ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 font-serif">
            <h2 className="text-4xl text-white italic">I Blocchi dell&apos;Evoluzione</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "L'Alfabetizzazione Tecnica", d: "Credere di dover diventare un programmatore. Devi solo capire come applicare i tool, non come scriverli." },
              { t: "Il Complesso del Junior", d: "Confrontarsi con i 25enni sui loro termini. Loro hanno la velocità, tu hai la strategia. Vincere sul terreno della competenza." },
              { t: "L'Attesa Infinita", d: "Aspettare il 'momento giusto'. Ogni mese di attesa aumenta esponenzialmente il gap competitivo." }
            ].map((err, i) => (
              <div key={i} className="card-premium p-10 h-full group">
                <div className="text-[#F5A623] text-2xl font-serif italic mb-6 opacity-30 group-hover:opacity-100 transition-all">0{i+1}</div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{err.t}</h3>
                <p className="text-white/30 text-base leading-relaxed font-light">{err.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IL METODO IN 3 FASI ──────────────────────────────────── */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="badge mb-12 uppercase tracking-widest">Il Percorso</div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-16 font-serif">L&apos;Ingegneria della <br /><span className="italic">Nuova Carriera.</span></h2>
          
          <div className="space-y-20 relative before:absolute before:left-0 before:top-4 before:bottom-4 before:w-px before:bg-white/5">
            {[
              { f: "Asset Mapping", d: "Facciamo un inventario chirurgico di network, reputazione e competenze sottovalutate." },
              { f: "AI Amplification", d: "Inseriamo l'AI non come sostituto, ma come acceleratore della tua produzione professionale." },
              { f: "Market Repositioning", d: "Ridisegniamo il tuo profilo per essere percepito come l'élite che usa la tecnologia, non che la subisce." }
            ].map((step, i) => (
              <div key={i} className="pl-12 relative">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_15px_rgba(245,166,35,0.5)]" />
                <h3 className="text-2xl font-serif italic text-white mb-4">{step.f}</h3>
                <p className="text-white/40 text-lg leading-relaxed font-light">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#141414] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif">
            Il tuo secondo tempo <br /> <span className="italic text-[#F5A623]">inizia adesso.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Non buttare via la tua storia. Trasformala nel tuo futuro. Inizia con una diagnosi strategica della tua situazione attuale.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/estratto"
              className="btn-gold px-12 py-6 text-sm tracking-[0.3em] font-bold"
            >
              SCARICA L&apos;ESTRATTO GRATUITO
            </Link>
            <Link
              href="/contatti"
              className="px-12 py-6 text-xs tracking-[0.3em] font-bold border border-white/10 hover:border-white/30 transition-all rounded-xl uppercase flex items-center justify-center"
            >
              CONTATTAMI
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
