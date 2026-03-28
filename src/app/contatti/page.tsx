import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contatti | Scrivi a Fabio Micale",
  description:
    "Scrivimi per collaborazioni, consulenze AI o domande sul metodo. Rispondo a tutti entro 48 ore.",
  alternates: { canonical: "https://www.fabiomicale.com/contatti" },
};

const scrivimiSe = [
  "Hai più di 40 anni e vuoi capire come usare l'AI nel tuo lavoro",
  "Stai attraversando una transizione professionale e cerchi una guida concreta",
  "Vuoi implementare automazioni o agenti AI nella tua azienda",
  "Sei interessato a una consulenza 1:1 o a una masterclass",
  "Hai letto il mio libro e vuoi approfondire il percorso",
];

const nonScrivimiSe = [
  "Cerchi soluzioni magiche o risultati istantanei senza impegno",
  "Vuoi solo motivazione temporanea senza un piano concreto",
  "Non sei disposto a mettere in discussione il tuo modo di lavorare",
  "Stai cercando qualcuno che faccia tutto al posto tuo",
];

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-[#1A2E1A]">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-[#43A047]/40 text-[#A5D6A7] text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A5D6A7] animate-pulse" />
            Contatto diretto
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Contatti
          </h1>
          <p className="text-xl text-[#A5D6A7] leading-relaxed">
            Parliamoci.{" "}
            <span className="gradient-text font-semibold">Senza impegno.</span>
          </p>
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="pb-20 pt-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Chi sono</span>
          </div>
          <div className="space-y-4 text-[#5A6B5A] leading-relaxed text-[1.05rem]">
            <p>
              Sono <span className="text-[#1A1A1A] font-medium">Fabio Micale</span> — coach, imprenditore e autore
              con oltre 25 anni di esperienza professionale.
            </p>
            <p>
              Aiuto professionisti e imprenditori over 40
              a reinventarsi nell&apos;era dell&apos;AI: con il mindset giusto,
              gli strumenti concreti e i sistemi che lavorano
              anche quando tu non puoi.
            </p>
            <p>
              Offro consulenze 1:1, masterclass in piccoli gruppi,
              corsi pratici sull&apos;uso dell&apos;AI nel business
              e servizi di automazione e implementazione
              di agenti AI per aziende e professionisti.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3+4. SCRIVIMI SE / NON SCRIVIMI SE ──────────────────── */}
      <section className="py-16 px-6 bg-[#F4F7F4]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Scrivimi se */}
          <div className="bg-white border border-[#D4E4D4] rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] border border-[#D4E4D4] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-[#1A1A1A] font-bold text-xl">Scrivimi se...</h2>
            </div>
            <ul className="space-y-4">
              {scrivimiSe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8F5E9] border border-[#D4E4D4] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#5A6B5A] leading-relaxed text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non scrivermi se */}
          <div className="bg-white border border-[#D4E4D4] rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-[#1A1A1A] font-bold text-xl">Non scrivermi se...</h2>
            </div>
            <ul className="space-y-4">
              {nonScrivimiSe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#5A6B5A] leading-relaxed text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── 5. CONTATTO ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Come raggiungermi</span>
            <div className="w-8 h-px bg-[#2E7D32]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">
            Come raggiungermi
          </h2>
          <p className="text-[#5A6B5A] leading-relaxed text-[1.05rem] mb-10">
            Il modo più diretto per contattarmi è via email.{" "}
            <span className="text-[#1A1A1A]">Rispondo personalmente a ogni messaggio entro 48 ore.</span>
          </p>

          {/* Email grande */}
          <a
            href="mailto:info@fabiomicale.com"
            className="inline-block text-2xl sm:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity duration-200 mb-10 tracking-tight"
          >
            info@fabiomicale.com
          </a>

          <p className="text-[#5A6B5A] text-sm mb-6">
            Oppure scrivimi direttamente cliccando qui sotto
          </p>

          <a
            href="mailto:info@fabiomicale.com"
            className="inline-flex items-center gap-3 bg-[#2E7D32] hover:bg-[#43A047] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Scrivimi ora
          </a>
        </div>
      </section>

      {/* ── 6. NOTA FINALE ───────────────────────────────────────── */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#5A6B5A]/60 text-sm italic leading-relaxed">
            &ldquo;Non ho un centralino. Non ho assistenti virtuali.
            Quando scrivi, rispondo io.&rdquo;
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
