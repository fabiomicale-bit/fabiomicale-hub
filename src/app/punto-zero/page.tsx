import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eredità Punto Zero™ | Condivisione & Rinascita — Fabio Micale",
  description:
    "La condivisione di un percorso di resilienza e ricostruzione. Scopri il Manifesto del Punto Zero per chi desidera azzerare il caos e ripartire su basi solide.",
  openGraph: {
    title: "Eredità Punto Zero™ — Fabio Micale",
    description: "Un percorso di mentorship e condivisione per l'imprenditore che deve rinascere.",
  },
};

export default function PuntoZeroPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Fog/Atmosphere Effect */}
        <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-white/[0.05] via-transparent to-transparent opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.015]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="badge border-white/20 text-white/60 mb-8 mx-auto tracking-[0.4em]">Il Punto della Consapevolezza</div>
          <h1 className="text-5xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            PuntoZero: Il momento in cui capisci che <br />
            <span className="italic text-[#F5A623]">qualcosa non torna più.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Non sei bloccato perché non ti impegni abbastanza. Sei bloccato perché stai usando una mappa incompleta. PuntoZero è il primo passo verso un cambiamento autentico per chi ha già &quot;fatto le cose giuste&quot; ma sente ancora una tensione silenziosa che non può più ignorare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contatti?ref=punto-zero"
              className="btn-gold px-12 py-5 text-xs tracking-widest font-bold text-center"
            >
              ACCEDI ALLA DIAGNOSI
            </Link>
            <a
              href="#ebook"
              className="btn-ghost px-12 py-5 text-xs tracking-widest font-bold"
            >
              SCARICA L&apos;ESTRATTO EBOOK
            </a>
          </div>
        </div>
      </section>

      {/* ── LA DIAGNOSI ─────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
                Vivi una vita che &quot;funziona&quot; <br /><span className="italic text-white/40">ma che non ti attraversa più?</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                Il disallineamento non arriva all&apos;improvviso. Cresce lentamente mentre continui a fare ciò che hai sempre fatto. Smetti di raccontarti che è solo una fase di stanchezza. Il PuntoZero non è la soluzione, è il momento in cui diventi finalmente lucido.
              </p>
              
              <div className="space-y-8">
                {[
                    { t: "Mappa del Disordine", d: "Individuiamo dove il tempo e le risorse vengono dissipati senza ritorno economico." },
                    { t: "Audit Identitario", d: "Capiamo chi sei diventato e se quell'identità è ancora funzionale ai tuoi obiettivi futuri." },
                    { t: "Asset Reset", d: "Decidiamo cosa tenere e cosa cestinare senza pietà per fare spazio al nuovo." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                     <span className="text-[#F5A623] text-xl font-serif italic opacity-40">0{i+1}</span>
                     <div>
                        <h3 className="text-white font-bold mb-2 uppercase tracking-wide">{item.t}</h3>
                        <p className="text-white/30 text-sm font-light leading-relaxed">{item.d}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Abstract Clarity */}
            <div className="relative h-[500px] flex items-center justify-center">
               <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full scale-75 pointer-events-none" />
               <div className="relative w-72 h-72 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="w-56 h-56 border border-white/20 rounded-full border-dashed" />
                 <div className="absolute w-4 h-4 rounded-full bg-[#F5A623] top-0" />
               </div>
               <div className="absolute text-5xl font-serif italic text-white/60">0</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE EBOOK ───────────────────────────────────────── */}
      <section id="ebook" className="py-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center card-premium p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[#F5A623]/[0.02] blur-[100px] pointer-events-none" />
          
          <div className="badge border-white/10 text-white/30 mb-8 mx-auto">Asset Gratuito</div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
            PuntoZero™: <br /><span className="italic text-[#F5A623]">Il Manuale della Ricostruzione Operativa.</span>
          </h2>
          <div className="text-white/40 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light space-y-4">
            <p>
              Ho sintetizzato i 7 pilastri del reset imprenditoriale in un manuale d&apos;azione crudo e senza filtri.
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-3 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 border-l border-white/5 pl-8">
              <li><span className="text-[#F5A623] mr-2">01.</span> Il momento del non-ritorno</li>
              <li><span className="text-[#F5A623] mr-2">02.</span> Il disallineamento</li>
              <li><span className="text-[#F5A623] mr-2">03.</span> Lo Zero: Smettere di fingere</li>
              <li><span className="text-[#F5A623] mr-2">04.</span> Il Porto: Integrazione collettiva</li>
              <li><span className="text-[#F5A623] mr-2">05.</span> Il Percorso: Oltre le scorciatoie</li>
              <li><span className="text-[#F5A623] mr-2">06.</span> La Guida: Attivare la guida interna</li>
              <li><span className="text-[#F5A623] mr-2">07.</span> La Soglia: Responsabilità lucida</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <button 
              disabled={true}
              className="btn-gold px-12 py-5 text-xs tracking-widest font-bold opacity-40 grayscale cursor-not-allowed uppercase"
            >
              Manuale in fase di aggiornamento
            </button>
            <p className="text-[10px] text-[#F5A623] font-bold uppercase tracking-[0.3em] animate-pulse">
              A breve sarà disponibile al download
            </p>
            <div className="text-[10px] uppercase font-bold text-white/20 tracking-widest italic">
              Oltre 1.500 imprenditori hanno già iniziato il reset.
            </div>
          </div>
        </div>
      </section>

      {/* ── VERSO LA COMMUNITY ──────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 font-serif leading-tight">
              Verso l&apos;Ecosistema <br /><span className="italic text-white/40">Punto Zero.</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-2xl mx-auto font-light">
              PuntoZero non è una destinazione finale. È la porta d&apos;ingresso a un ecosistema di rinascita e condivisione.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { 
                t: "La Membership", 
                d: "Confronto e crescita silente tra pari per chi ha già attraversato la Soglia e cerca un Porto sicuro.",
                label: "Relazioni"
              },
              { 
                t: "Il Percorso", 
                d: "Un programma guidato di 8 settimane per applicare i 7 pilastri del reset alla tua realtà specifica.",
                label: "Azione"
              },
              { 
                t: "Il Porto", 
                d: "Ritiri ed eventi dal vivo dove il digitale si ferma e l'integrazione del cambiamento diventa reale.",
                label: "Esperienza"
              }
            ].map((item, i) => (
              <div key={i} className="card-premium p-10 border border-white/5 group hover:border-[#F5A623]/20 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#F5A623] mb-6 font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </div>
                <h3 className="text-2xl font-serif italic text-white mb-4">{item.t}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-light">
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contatti?ref=punto-zero-final"
              className="btn-gold px-12 py-5 text-sm tracking-[0.3em] font-bold"
            >
              SCOPRI COME PARTECIPARE
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
