import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EbookForm from '@/components/EbookForm'
import QuestionarioForm from '@/components/QuestionarioForm'

export const metadata: Metadata = {
  title: 'Risorse Gratuite | Fabio Micale',
  description: "Strumenti gratuiti per professionisti over 40 che vogliono usare l'AI senza perdere tempo. Ebook, questionario di profilazione e molto altro.",
  alternates: { canonical: 'https://www.fabiomicale.com/risorse' },
}

export default function RisorsePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO CAVEAU ─────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Deep ambient light */}
        <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.025]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Caveau Digitale: Accesso Riservato</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Asset Strategici & <br /> <span className="italic text-[#F5A623]">Intelligence.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light">
            Strumenti ingegnerizzati per l&apos;imprenditore che cerca chiarezza operativa. <br />
            Nessuna teoria, solo protocolli pronti all&apos;implementazione.
          </p>
        </div>
      </section>

      {/* ── SEZIONE ASSET ────────────────────────────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* ASSET 1: IL MANIFESTO */}
            <article className="card-premium p-10 md:p-16 flex flex-col group h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/[0.05] blur-[40px] rounded-full group-hover:bg-[#F5A623]/[0.1] transition-all" />
              
              <div className="mb-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5A623] mb-4">Protocollo Start</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif italic">
                  Il Manifesto del <br />Punto Zero™
                </h2>
                <p className="text-white/40 text-lg leading-relaxed font-light mb-8">
                  La diagnosi fondamentale per azzerare il caos. Capisci come smontare le vecchie convinzioni e ripartire con un sistema operativo certo.
                </p>
                <ul className="space-y-4 mb-12">
                   {["I 3 pilastri della chiarezza", "Diagnosi dello spreco operativo", "Mappa della ripartenza"].map((li, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                       {li}
                     </li>
                   ))}
                </ul>
              </div>

              <div className="mt-auto pt-10 border-t border-white/5">
                <EbookForm />
              </div>
            </article>

            {/* ASSET 2: L'AUDIT STRATEGICO */}
            <article className="card-premium p-10 md:p-16 flex flex-col group h-full relative overflow-hidden bg-white/[0.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.05] blur-[40px] rounded-full group-hover:bg-white/[0.1] transition-all" />
              
              <div className="mb-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4">Analisi Personalizzata</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif italic">
                  Audit Strategico <br />Di Evoluzione
                </h2>
                <p className="text-white/40 text-lg leading-relaxed font-light mb-8">
                  Ricevi una diagnosi cruda sulla tua situazione attuale. Compila i dati e ricevi via email l&apos;analisi personalizzata da Fabio Micale.
                </p>
                <ul className="space-y-4 mb-12">
                   {["Profilazione del blocco critico", "Individuazione leve di tempo", "Risposta personale entro 48h"].map((li, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                       {li}
                     </li>
                   ))}
                </ul>
              </div>

              <div className="mt-auto pt-10 border-t border-white/5">
                <QuestionarioForm />
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/10 mt-6 text-center font-bold">
                  Nessuna vendita aggressiva • Solo Analisi Concreta
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── CHIUSURA / CONTATTI ──────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/30 text-lg mb-8 font-light italic serif">
            Hai domande specifiche su questi asset o sulla tua situazione?
          </p>
          <Link
            href="/contatti"
            className="text-[#F5A623] text-[11px] font-bold uppercase tracking-[0.4em] hover:tracking-[0.5em] transition-all border-b border-[#F5A623]/20 pb-2"
          >
            PARLA CON FABIO →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
