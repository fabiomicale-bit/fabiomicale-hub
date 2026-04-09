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
          <div className="badge border-white/20 text-white/60 mb-8 mx-auto tracking-[0.4em]">Stato: Eredità & Condivisione</div>
          <h1 className="text-5xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Dalla <span className="italic">Crisi</span> alla <br />
            <span className="text-white/40">Eredità Punto Zero.</span>
          </h1>
          <p className="text-xl text-white/30 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Nessuna formula magica. Solo la condivisione di un percorso di rinascita e resilienza per chi deve azzerare il caos e ripartire. Questo è il mio lascito: un protocollo di ricostruzione umana e professionale che presto diventerà una community autogestita.
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
                Non è consulenza. <br /><span className="italic text-white/40">È un passaggio di testimone.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                Il Punto Zero è il laboratorio di chi ha deciso di vincere veramente contro le avversità. Non ti insegno a gestire il business — per quello ci sono i miei advisory professionali. Qui ti trasmetto la forza di estirpare ciò che ti rallenta.
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
            Inizia dal <br /><span className="italic text-[#F5A623]">Manifesto del Punto Zero.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
            Ho sintetizzato i primi passi della diagnosi in un breve report strategico. Scaricalo ora e inizia a misurare il tuo grado di chiarezza professionale.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link 
              href="/risorse?dl=punto-zero" 
              className="btn-gold px-12 py-5 text-xs tracking-widest font-bold"
            >
              SCARICA IL REPORT
            </Link>
            <div className="text-[10px] uppercase font-bold text-white/20 tracking-widest italic">
              Oltre 1.500 imprenditori hanno già iniziato il reset.
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 border-t border-white/5 bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif leading-tight">
            Verso la <br /><span className="italic text-white/40">Community Punto Zero.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Questo percorso è nato da una mia passione e necessità. Il mio obiettivo è trasformarlo in uno spazio dove chi ha vinto può guidare chi sta iniziando. Entra nel Manifesto per far parte del futuro.
          </p>
          <Link
            href="/contatti?ref=punto-zero-final"
            className="btn-gold px-12 py-5 text-sm tracking-[0.3em] font-bold"
          >
            SCOPRI COME PARTECIPARE
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
