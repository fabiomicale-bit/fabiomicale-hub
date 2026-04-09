import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerChiE from "@/components/PerChiE";
import ComePossoAiutarti from "@/components/ComePossoAiutarti";
import ChiSonoPreview from "@/components/ChiSonoPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fabio Micale | AI per Professionisti Over 40",
  description:
    "Aiuto i professionisti over 40 a usare l'AI per restare competitivi e costruire nuovi redditi. Strumenti concreti, metodo testato. Niente hype.",
  alternates: { canonical: "https://www.fabiomicale.com" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <PerChiE />
      <ComePossoAiutarti />
      <ChiSonoPreview />

      {/* ── SEZIONE: RISULTATI REALI ────────────────────────────── */}
      <section className="py-32 px-6 bg-[#0D0D0D] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-[#2E7D32] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="badge mb-6 mx-auto">Asset di Successo</div>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight font-serif mb-6">
              Case Studies: <br />
              <span className="italic text-[#F5A623]">Intelligence Applicata.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Nomi cambiati per privacy. Strategie reali. Risultati misurabili.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Laura */}
            <div className="card-premium p-10 flex flex-col group hover:bg-white/[0.04] transition-all duration-500">
              <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">📊</div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Studio professionale
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">Laura</h3>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-bold">Commercialista, 51 anni</p>
              
              <div className="border-l border-[#2E7D32]/30 pl-4 py-2 mb-8 bg-[#2E7D32]/5">
                <p className="text-[#2E7D32] font-semibold text-sm italic">
                  &ldquo;Passava 3 ore al giorno su task ripetitivi. Oggi ne passa meno di una.&rdquo;
                </p>
              </div>
              
              <p className="text-white/40 text-sm leading-relaxed flex-1 font-light">
                Laura gestisce uno studio con due collaboratori. In sei sessioni abbiamo mappato le sue task ad alto sforzo e basso valore. Risultato: 2 ore e mezza risparmiate ogni giorno, reinvestite in business development.
              </p>
            </div>

            {/* Card 2 — Marco */}
            <div className="card-premium p-10 flex flex-col group hover:bg-white/[0.04] transition-all duration-500 bg-white/[0.02]">
              <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">🏗️</div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  PMI — Costruzioni
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">Marco</h3>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-bold">Imprenditore, 47 anni</p>
              
              <div className="border-l border-[#2E7D32]/30 pl-4 py-2 mb-8 bg-[#2E7D32]/5">
                <p className="text-[#2E7D32] font-semibold text-sm italic">
                  &ldquo;I preventivi escono in 20 minuti invece di 3 ore.&rdquo;
                </p>
              </div>
              
              <p className="text-white/40 text-sm leading-relaxed flex-1 font-light">
                Abbiamo iniziato dai preventivi e gare d&apos;appalto. Oggi usa lo stesso approccio per capitolati, email ai fornitori e report di avanzamento cantieri. Velocità quintuplicata.
              </p>
            </div>

            {/* Card 3 — Roberto */}
            <div className="card-premium p-10 flex flex-col group hover:bg-white/[0.04] transition-all duration-500">
              <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">⚙️</div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Libero professionista
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">Roberto</h3>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-bold">Ingegnere, 44 anni</p>
              
              <div className="border-l border-[#2E7D32]/30 pl-4 py-2 mb-8 bg-[#2E7D32]/5">
                <p className="text-[#2E7D32] font-semibold text-sm italic">
                  &ldquo;Costruito in 3 settimane ciò che prima richiedeva un consulente.&rdquo;
                </p>
              </div>
              
              <p className="text-white/40 text-sm leading-relaxed flex-1 font-light">
                In tre settimane ha costruito un sistema completo di monitoraggio costi — su misura per il suo lavoro, eliminando la necessità di consulenze software costose ed esterne.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <a href="/lavora-con-me" className="btn-gold px-12 py-5 text-sm tracking-[0.2em] font-bold">
              VUOI UN RISULTATO SIMILE? PARLIAMONE →
            </a>
          </div>
        </div>
      </section>

      {/* ── CROSS-LINK RISORSE (Premium Band) ──────────────────── */}
      <div className="bg-[#141414] py-16 px-6 text-center border-y border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
        <p className="text-white/30 mb-6 font-light italic serif text-lg">Hai bisogno di strumenti più specifici per la tua realtà?</p>
        <a href="/risorse" className="text-[#F5A623] font-bold text-xs uppercase tracking-[0.4em] hover:tracking-[0.5em] transition-all">
          Accedi al Caveau delle Strategie →
        </a>
      </div>

      {/* ── SEZIONE: È PER TE? (The Selection) ────────────────── */}
      <section className="py-32 px-6 bg-[#0D0D0D] relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <div className="badge mb-6 mx-auto">Matching & Compatibilità</div>
            <h2 className="text-4xl md:text-5xl font-light text-white font-serif italic mb-6">
              Fa per te? <br /><span className="not-italic font-bold">Dipende da dove sei.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* È per te */}
            <div className="card-premium p-12 border-l-2 border-l-[#2E7D32]/50 group">
              <div className="w-12 h-12 rounded-full bg-[#2E7D32]/10 flex items-center justify-center mb-8 border border-[#2E7D32]/20">
                <span className="text-[#2E7D32] font-bold">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-10 tracking-tight font-serif italic text-[#F5A623]">È per te se…</h3>
              <ul className="space-y-6 text-white/40 font-light">
                {[
                  "Vuoi trasformare il tuo business in un sistema autonomo e scalabile (Impresa Liquida™)",
                  "Hai bisogno di dominare il mercato degli appalti pubblici con precisione chirurgica (MEPA Elite™)",
                  "Cerchi un reset strategico per ritrovare chiarezza e autorità (Punto Zero™)",
                  "Preferisci l'ingegneria dei sistemi all'ultimo 'hype' tecnologico",
                  "Hai superato i 40 anni e cerchi un vantaggio competitivo basato sulla tua esperienza reale"
                ].map((li, i) => (
                  <li key={i} className="flex gap-4 items-start group-hover:text-white/60 transition-colors">
                    <span className="text-[#F5A623] mt-1.5">•</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Non è per te */}
            <div className="card-premium p-12 border-l-2 border-l-white/10 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <span className="text-white/40 font-bold">✕</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-10 tracking-tight font-serif italic">Non è per te se…</h3>
              <ul className="space-y-6 text-white/30 font-light">
                {[
                  "Cerchi la formula magica per arricchirti in 30 giorni senza sistemi",
                  "Non sei disposto a investire tempo per delegare o sistematizzare i tuoi processi",
                  "Pensi che l'AI sia solo un giocattolo e non un asset strategico per il tuo posizionamento",
                  "Preferisci restare schiavo dell'operatività tattica invece di guidare la tua visione",
                  "Cerchi un coach motivazionale invece di un Metodologo della Crescita"
                ].map((li, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-white/10 mt-1.5">•</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Finale Sottesa */}
          <div className="text-center mt-20">
            <p className="text-white/20 mb-10 text-lg font-serif italic border-b border-white/5 pb-10 max-w-lg mx-auto">
              Se sei arrivato a leggere questa riga, probabilmente siamo pronti per lavorare.
            </p>
            <a href="#newsletter" className="btn-gold px-12 py-5 text-sm tracking-[0.2em] font-bold">
              ISCRIVITI ALL&apos;INTELLIGENCE →
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
