import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MEPA Elite™ | Appalti Pubblici senza Burocrazia — Fabio Micale",
  description:
    "Sblocca il fatturato della Pubblica Amministrazione con il sistema MEPA Elite. Gestiamo noi gare, abilitazioni e burocrazia. Tu incassi.",
  openGraph: {
    title: "MEPA Elite™ — Fabio Micale",
    description: "Il sistema operativo per dominare gli appalti pubblici MEPA.",
  },
};

export default function MepaElitePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#F5A623] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <div className="badge mb-8">Asset Strategico: Fatturato PA</div>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
                Sblocca il cliente <br />
                <span className="italic text-[#F5A623]">più grande del mondo.</span>
              </h1>
              <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-lg font-light">
                Dimentica la burocrazia, i bandi incomprensibili e il rischio di errori formali. Con MEPA Elite™ portiamo la tua azienda nel mercato degli appalti pubblici con un sistema chiavi in mano.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contatti?ref=mepa-elite"
                  className="btn-gold px-12 py-5 text-xs tracking-widest font-bold text-center"
                >
                  CANDIDATI PER MEPA ELITE™
                </Link>
              </div>
            </div>

            {/* Visual placeholder or pattern */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-[#F5A623]/10 blur-[80px] rounded-full" />
              <div className="relative z-10 p-12 rounded-[40px] border border-white/5 bg-white/[0.01] backdrop-blur-xl">
                 <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-12 w-full bg-white/5 rounded-xl animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                    <div className="h-32 w-full bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-xl flex items-center justify-center">
                       <span className="text-[10px] uppercase tracking-widest text-[#F5A623] font-bold">Documentazione Autorizzata</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL PROBLEMA ─────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            Perché l&apos;80% delle aziende <br /><span className="italic text-white/40">rinuncia prima di iniziare.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              { t: "Muro Burocratico", d: "Centinaia di documenti e piattaforme instabili che scoraggiano anche il miglior imprenditore." },
              { t: "Rischio Esclusione", d: "Un solo errore formale e mesi di lavoro vengono cestinati senza appello." },
              { t: "Tempo Dissipato", d: "Giornate intere perse a inseguire PEC e firme digitali invece di produrre valore." }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-[#F5A623] text-2xl font-serif italic mb-6">0{i+1}</div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">{p.t}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IL SISTEMA ELITE ────────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
               <div className="badge mb-8">Il Vostro Ufficio Appalti Esternalizzato</div>
               <h2 className="text-4xl md:text-6xl font-light text-white mb-10 font-serif leading-tight">
                 Noi gestiamo la gara. <br /><span className="italic text-[#F5A623]">Tu gestisci il lavoro.</span>
               </h2>
               <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                 MEPA Elite™ non è una consulenza. È un sistema operativo dove il mio team si prende carico dell&apos;intera procedura: abilitazione, scouting dei bandi, preparazione dei plichi telematici e assistenza post-vittoria.
               </p>
               <ul className="space-y-6 mb-12">
                 {[
                   "Abilitazione ai Bandi MePA specifici per il tuo settore",
                   "Monitoraggio quotidiano delle opportunità tramite i nostri algoritmi",
                   "Predisposizione integrale dell'offerta amministrativa",
                   "Assistenza costante fino all'aggiudicazione definitiva"
                 ].map((li, i) => (
                   <li key={i} className="flex items-center gap-4 text-white/60 font-light translate-x-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                     {li}
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="card-premium p-8 text-center">
                <div className="text-3xl font-bold text-white mb-2 font-serif">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/20">Tranquillità Fiscale</div>
              </div>
              <div className="card-premium p-8 text-center mt-12">
                <div className="text-3xl font-bold text-[#F5A623] mb-2 font-serif">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-white/20">Monitoraggio PA</div>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-3xl font-bold text-white mb-2 font-serif">Zero</div>
                <div className="text-[10px] uppercase tracking-widest text-white/20">Errori Formali</div>
              </div>
              <div className="card-premium p-8 text-center mt-12">
                <div className="text-3xl font-bold text-[#F5A623] mb-2 font-serif">Elite</div>
                <div className="text-[10px] uppercase tracking-widest text-white/20">Accesso Riservato</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif">
            Entra nel mercato <br /><span className="italic text-[#F5A623]">dei grandi volumi.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Selezioniamo solo 2 nuove aziende al mese per il servizio MEPA Elite™ per garantire la massima accuratezza in ogni bando.
          </p>
          <Link
            href="/contatti?ref=mepa-elite-final"
            className="btn-gold px-16 py-6 text-sm tracking-[0.3em] font-bold"
          >
            FISSA UN COLLOQUIO DI QUALIFICA
          </Link>
          <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            Riservato ad Imprenditori pronti a scalare il proprio business tramite Appalti Pubblici
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
