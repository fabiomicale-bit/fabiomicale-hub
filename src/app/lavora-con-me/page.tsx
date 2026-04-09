import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Lavora con Me | Architetture di Crescita — Fabio Micale",
  description:
    "Sistemi operativi per imprenditori e professionisti over 40. Consulenza strategica, automazione AI e protocolli manageriali di alto livello.",
  alternates: { canonical: "https://www.fabiomicale.com/lavora-con-me" },
};

export default function LavoraConMePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO EDITORIALE ─────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Atmosphere */}
        <div className="absolute top-0 left-[-5%] w-[60%] h-[60%] bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Partnership & Sistemi</div>
          <h1 className="text-5xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Architetture di <br /> <span className="italic text-[#F5A623]">Evoluzione.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light">
            Non offro consulenza generica. Ingegnerizzo sistemi che liberano tempo, generano ricchezza liquida e posizionano la tua attività nell&apos;elite del mercato.
          </p>
        </div>
      </section>

      {/* ── I SISTEMI CORE ────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Sistema 1: MEPA */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F5A623] mb-6">Verticale Pubblica Amministrazione</div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 font-serif italic">MEPA Elite™</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                Il protocollo per dominare il mercato degli appalti pubblici senza la burocrazia che uccide i margini. Per aziende che fatturano oltre 1M€.
              </p>
              <Link href="/mepa-elite" className="text-xs font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-2 hover:border-[#F5A623] transition-all">
                ESPLORA IL PROTOCOLLO →
              </Link>
            </div>
            <div className="order-1 md:order-2 card-premium aspect-square flex items-center justify-center bg-white/[0.01]">
              <div className="text-8xl font-serif italic opacity-10">M</div>
            </div>
          </div>

          {/* Sistema 2: Impresa Liquida */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="card-premium aspect-square flex items-center justify-center bg-white/[0.01]">
              <div className="text-8xl font-serif italic opacity-10">L</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2E7D32] mb-6">Efficienza & Delega</div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 font-serif italic">Impresa Liquida™</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                Trasformiamo la tua azienda da un cantiere di problemi a un asset scalabile che funziona senza la tua presenza costante.
              </p>
              <Link href="/impresa-liquida" className="text-xs font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-2 hover:border-[#2E7D32] transition-all">
                SCOPRI IL METODO →
              </Link>
            </div>
          </div>

          {/* Sistema 3: Punto Zero */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-6">Reset Strategico</div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 font-serif italic">Punto Zero™</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                La diagnosi cruda e il reset necessario per chi vuole ricominciare a costruire con lucidità chirurgica.
              </p>
              <Link href="/punto-zero" className="text-xs font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-2 hover:border-white/40 transition-all">
                AVVIA IL RESET →
              </Link>
            </div>
            <div className="card-premium aspect-square flex items-center justify-center bg-white/[0.01]">
              <div className="text-8xl font-serif italic opacity-10">0</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIANZE PREMIUM ────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#111111] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-large opacity-[0.02]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-serif italic text-center text-white mb-20">Voci dall&apos;Evoluzione Alternative</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nome: "Laura B.", ruolo: "Commercialista", testo: "Il Metodo ha azzerato l'ansia da prestazione digitale. Oggi gestisco l'AI, non la subisco." },
              { nome: "Marco V.", ruolo: "Imprenditore", testo: "Impresa Liquida ha ridato vita al mio tempo libero. L'azienda fattura, io respiro." },
              { nome: "Roberto M.", ruolo: "Ingegnere", testo: "Posizionamento chirurgico. In 3 mesi ho raddoppiato l'autorità nel mio settore." },
            ].map((c, i) => (
              <div key={i} className="card-premium p-10 bg-white/[0.02]">
                <div className="text-[#F5A623] mb-6">★★★★★</div>
                <p className="text-white/40 italic text-base leading-relaxed mb-8 font-serif">&ldquo;{c.testo}&rdquo;</p>
                <div>
                  <p className="font-bold text-white text-sm uppercase tracking-widest">{c.nome}</p>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">{c.ruolo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20 font-serif">
            <div className="badge mb-6 mx-auto uppercase">Domande Frequenti</div>
            <h2 className="text-4xl text-white">Chiarimenti Operativi</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#F5A623]/[0.02] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif">
            Costruisci il tuo <br /> <span className="italic text-[#F5A623]">Capolavoro Operativo.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Se senti che è il momento di smettere di rincorrere le emergenze e iniziare a guidare un sistema, la conversazione inizia qui.
          </p>
          <Link
            href="/contatti?ref=lavora-con-me-final"
            className="btn-gold px-12 py-6 text-sm tracking-[0.3em] font-bold"
          >
            RICHIEDI LA TUA CANDIDATURA
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
