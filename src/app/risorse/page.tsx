import type { Metadata } from 'next'
import Image from 'next/image'
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
    <main className="min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#111111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_risorse.jpg"
            alt="Risorse digitali su scrivania"
            fill
            className="object-cover object-center opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-[#111111]/60 to-[#111111]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            Risorse Gratuite
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Strumenti concreti.
            <br />
            Gratis. Per iniziare adesso.
          </h1>

          <p className="text-[#AAAAAA] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Ho raccolto qui le risorse più utili per professionisti over 40
            che vogliono capire l&apos;AI senza perdere tempo.
            Niente teoria. Solo cose che puoi usare da domani.
          </p>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="text-xl">📦</span>
              <span>2 risorse disponibili</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="text-xl">✅</span>
              <span>100% gratuite</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="text-xl">🎯</span>
              <span>Solo per over 40</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RISORSE ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">

            {/* ── CARD 1: Ebook ─────────────────────────── */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Immagine */}
              <div className="relative w-full aspect-[5/3] bg-[#1A2E1A]">
                <Image
                  src="/cover-ebook-ai.png"
                  alt="Ebook: I 3 Passi per Iniziare con l'AI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenuto */}
              <div className="p-7">
                {/* Badge */}
                <span className="inline-block bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  📘 EBOOK GRATUITO
                </span>

                <h2 className="text-2xl font-bold text-[#111111] mb-3 leading-snug">
                  I 3 Passi per Iniziare con l&apos;AI
                </h2>

                <p className="text-[#555555] text-sm leading-relaxed mb-5">
                  Non sai da dove partire con l&apos;AI? Questo ebook ti dà
                  un metodo semplice e immediato per iniziare — senza
                  corsi da 200 ore, senza diventare un tecnico.
                </p>

                {/* Benefici */}
                <ul className="space-y-2 mb-6">
                  {[
                    "Capisci quale tool AI fa per te in 10 minuti",
                    "Il metodo dei 3 passi che uso ogni giorno",
                    "Esempi reali da professionisti over 40",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#555555]">
                      <span className="text-[#2E7D32] font-bold mt-0.5 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Form inline */}
                <EbookForm />
              </div>
            </div>

            {/* ── CARD 2: Questionario ──────────────────── */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Immagine */}
              <div className="relative w-full aspect-[5/3] bg-[#111111]">
                <Image
                  src="/cover-questionario.png"
                  alt="Analisi Gratuita del Tuo Profilo AI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenuto */}
              <div className="p-7">
                {/* Badge */}
                <span className="inline-block bg-[#FFF8E7] text-[#B8860B] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  🎯 ANALISI GRATUITA
                </span>

                <h2 className="text-2xl font-bold text-[#111111] mb-3 leading-snug">
                  Scopri qual è il percorso giusto per te
                </h2>

                <p className="text-[#555555] text-sm leading-relaxed mb-5">
                  Non tutti partono dallo stesso punto. Compila il questionario
                  in 5 minuti e riceverai via email un&apos;analisi personalizzata
                  con le soluzioni più adatte alla tua situazione.
                </p>

                {/* Benefici */}
                <ul className="space-y-2 mb-6">
                  {[
                    "Identifichi i tuoi blocchi reali con l'AI",
                    "Scopri quale strumento fa per te (ebook, corso, consulenza)",
                    "Ricevi una risposta personale da Fabio entro 48 ore",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#555555]">
                      <span className="text-[#2E7D32] font-bold mt-0.5 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Form questionario */}
                <QuestionarioForm />

                <p className="text-xs text-[#555555]/70 mt-3 text-center">
                  Risponde Fabio personalmente. Nessuna vendita aggressiva.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA FINALE ───────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#F7F7F7] border-t border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#555555] text-lg mb-3">
            Hai domande prima di compilare?
          </p>
          <a
            href="mailto:info@fabiomicale.com"
            className="text-[#2E7D32] font-semibold hover:text-[#1B5E20] underline underline-offset-2 transition-colors"
          >
            Scrivimi direttamente →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
