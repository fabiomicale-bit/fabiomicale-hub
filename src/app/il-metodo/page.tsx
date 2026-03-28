import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Il Metodo | Come Uso l'AI con i Professionisti Over 40",
  description:
    "Un framework in 3 fasi per integrare l'AI nel tuo lavoro senza perdere tempo. Prenota una call gratuita con Fabio Micale.",
  alternates: { canonical: "https://www.fabiomicale.com/il-metodo" },
};

const pilastri = [
  {
    emoji: "🧠",
    label: "MINDSET",
    testo:
      "Il punto di partenza. Senza il mindset giusto, gli strumenti migliori del mondo non servono a nulla. Si tratta di smettere di subire il cambiamento e iniziare a guidarlo.",
  },
  {
    emoji: "⚡",
    label: "TECNOLOGIA",
    testo:
      "L'acceleratore. L'AI e gli strumenti digitali non sostituiscono l'esperienza — la moltiplicano. Chi li padroneggia ha un vantaggio competitivo reale.",
  },
  {
    emoji: "⚙️",
    label: "SISTEMI",
    testo:
      "Il motore. Non basta sapere cosa fare — bisogna costruire sistemi che lavorano anche quando tu non puoi. Automazioni, processi, strutture.",
  },
];

const fasi = [
  {
    numero: "01",
    titolo: "FERMATI E OSSERVA",
    testo:
      "Prima di correre, capisci dove sei davvero. Analisi della situazione attuale, identificazione dei punti di forza reali e dei blocchi nascosti.",
  },
  {
    numero: "02",
    titolo: "DEFINISCI LA DIREZIONE",
    testo:
      "Un obiettivo vago produce risultati vaghi. Definiamo insieme una direzione chiara, misurabile e realistica nel tuo contesto specifico.",
  },
  {
    numero: "03",
    titolo: "COSTRUISCI GLI STRUMENTI",
    testo:
      "Selezioniamo e implementiamo gli strumenti digitali e AI più adatti al tuo caso. Niente tecnologia per la tecnologia — solo ciò che crea valore reale.",
  },
  {
    numero: "04",
    titolo: "ESEGUI E ITERA",
    testo:
      "L'esecuzione è dove la maggior parte fallisce. Ti accompagno nella fase operativa, con controllo costante e aggiustamenti in corsa.",
  },
];

const perChi = [
  "Hai più di 40 anni e vuoi restare competitivo nel nuovo mercato",
  "Sei disposto a mettere in discussione il tuo modo di lavorare",
  "Cerchi risultati concreti, non motivazione temporanea",
];

export default function IlMetodoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-[#111111]">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-white/20 text-[#AAAAAA] text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full " />
            Approccio strutturato
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Il metodo: 3 passi per usare l&apos;AI senza impazzire
          </h1>
          <p className="text-xl text-[#AAAAAA] leading-relaxed">
            Non esiste una formula magica. Esiste un{" "}
            <span className="gradient-text font-semibold">approccio che funziona.</span>
          </p>
        </div>
      </section>

      {/* ── 2. IL PRINCIPIO BASE ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Il principio base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-6 leading-tight">
              Tre elementi.{" "}
              <span className="gradient-text">Un risultato.</span>
            </h2>
            <div className="space-y-4 text-[#555555] leading-relaxed text-[1.05rem]">
              <p>
                Dopo anni di esperienza sul campo ho capito che
                il{" "}
                <Link href="/reinvenzione-over-40" className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors">
                  percorso di reinvenzione professionale
                </Link>{" "}
                non è un evento — è un processo. E ogni processo che funziona
                ha una struttura precisa.
              </p>
              <p>
                Il mio metodo si basa su tre pilastri fondamentali
                che devono agire insieme. Manca uno?{" "}
                <span className="text-[#111111]">Il sistema non funziona.</span>{" "}
                Capire come{" "}
                <Link href="/ai-per-professionisti" className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors">
                  usare l&apos;AI come strumento di lavoro
                </Link>{" "}
                è il secondo pilastro.
              </p>
            </div>
          </div>

          {/* 3 card pilastri */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pilastri.map((p) => (
              <div
                key={p.label}
                className="card-glow group bg-white border border-[#E5E5E5] rounded-2xl p-8 hover:border-[#2E7D32]/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-4xl mb-5">{p.emoji}</div>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-3 text-[#2E7D32]">
                  {p.label}
                </h3>
                <p className="text-[#555555] leading-relaxed text-[0.95rem]">{p.testo}</p>
              </div>
            ))}
          </div>

          {/* Formula visiva */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-center py-8 px-6 bg-[#F7F7F7] border border-[#E5E5E5] rounded-2xl">
            {["MINDSET", "TECNOLOGIA", "SISTEMI"].map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="gradient-text font-bold text-lg sm:text-xl tracking-wide">
                  {item}
                </span>
                {i < 2 && (
                  <span className="text-[#555555] font-light text-2xl">+</span>
                )}
              </span>
            ))}
            <span className="text-[#555555] font-light text-2xl mx-1">=</span>
            <span className="text-[#111111] font-bold text-lg sm:text-xl tracking-wide">
              REINVENZIONE
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. LE 4 FASI ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Il percorso</span>
              <div className="w-8 h-px bg-[#2E7D32]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Come funziona in pratica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fasi.map((f) => (
              <div
                key={f.numero}
                className="card-glow group bg-white border border-[#E5E5E5] rounded-2xl p-8 hover:border-[#2E7D32]/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-bold gradient-text leading-none shrink-0 select-none">
                    {f.numero}
                  </span>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-[#2E7D32] mb-2">
                      {f.titolo}
                    </h3>
                    <p className="text-[#555555] leading-relaxed text-[0.95rem]">{f.testo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PER CHI FUNZIONA ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Per chi è</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-10 leading-tight">
            Questo metodo funziona se...
          </h2>
          <div className="space-y-4">
            {perChi.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#2E7D32]/30 transition-colors duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-[#E8F5E9] border border-[#E5E5E5] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#111111] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Pronto a iniziare?
          </h2>
          <p className="text-[#AAAAAA] text-lg leading-relaxed mb-10">
            Il primo passo è capire dove sei e dove vuoi arrivare. Parliamone senza impegno.
          </p>
          <a
            href="https://calendly.com/fabiomicale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            Prenota una chiamata gratuita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
