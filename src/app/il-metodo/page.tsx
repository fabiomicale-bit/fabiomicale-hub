import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Il Metodo — Fabio Micale",
  description:
    "Non esiste una formula magica. Esiste un approccio strutturato basato su Mindset, Tecnologia e Sistemi per reinventarsi nell'era AI.",
};

const pilastri = [
  {
    emoji: "🧠",
    label: "MINDSET",
    testo:
      "Il punto di partenza. Senza il mindset giusto, gli strumenti migliori del mondo non servono a nulla. Si tratta di smettere di subire il cambiamento e iniziare a guidarlo.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    emoji: "⚡",
    label: "TECNOLOGIA",
    testo:
      "L'acceleratore. L'AI e gli strumenti digitali non sostituiscono l'esperienza — la moltiplicano. Chi li padroneggia ha un vantaggio competitivo reale.",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    emoji: "⚙️",
    label: "SISTEMI",
    testo:
      "Il motore. Non basta sapere cosa fare — bisogna costruire sistemi che lavorano anche quando tu non puoi. Automazioni, processi, strutture.",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
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
    <main className="min-h-screen">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Approccio strutturato
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Il Metodo
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed">
            Non esiste una formula magica. Esiste un{" "}
            <span className="gradient-text font-semibold">approccio che funziona.</span>
          </p>
        </div>
      </section>

      {/* ── 2. IL PRINCIPIO BASE ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il principio base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Tre elementi.{" "}
              <span className="gradient-text">Un risultato.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-[1.05rem]">
              <p>
                Dopo anni di esperienza sul campo ho capito che
                la reinvenzione professionale non è un evento —
                è un processo. E ogni processo che funziona
                ha una struttura precisa.
              </p>
              <p>
                Il mio metodo si basa su tre pilastri fondamentali
                che devono agire insieme. Manca uno?{" "}
                <span className="text-slate-200">Il sistema non funziona.</span>
              </p>
            </div>
          </div>

          {/* 3 card pilastri */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pilastri.map((p) => (
              <div
                key={p.label}
                className={`card-glow group bg-gradient-to-b ${p.color} border ${p.border} rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300`}
              >
                <div className="text-4xl mb-5">{p.emoji}</div>
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-3 ${p.accent}`}>
                  {p.label}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">{p.testo}</p>
              </div>
            ))}
          </div>

          {/* Formula visiva */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-center py-8 px-6 bg-white/[0.02] border border-white/8 rounded-2xl">
            {["MINDSET", "TECNOLOGIA", "SISTEMI"].map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="gradient-text font-bold text-lg sm:text-xl tracking-wide">
                  {item}
                </span>
                {i < 2 && (
                  <span className="text-slate-600 font-light text-2xl">+</span>
                )}
              </span>
            ))}
            <span className="text-slate-600 font-light text-2xl mx-1">=</span>
            <span className="text-white font-bold text-lg sm:text-xl tracking-wide">
              REINVENZIONE
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. LE 4 FASI ─────────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il percorso</span>
              <div className="w-8 h-px bg-blue-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Come funziona in pratica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fasi.map((f) => (
              <div
                key={f.numero}
                className="card-glow group bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-bold gradient-text leading-none shrink-0 select-none">
                    {f.numero}
                  </span>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">
                      {f.titolo}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-[0.95rem]">{f.testo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PER CHI FUNZIONA ──────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Per chi è</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            Questo metodo funziona se...
          </h2>
          <div className="space-y-4">
            {perChi.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/8 rounded-xl hover:border-blue-500/20 transition-colors duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 hero-glow opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Pronto a iniziare?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Il primo passo è capire dove sei e dove vuoi arrivare.{" "}
            <span className="text-slate-300">Parliamone senza impegno.</span>
          </p>
          <a
            href="https://calendly.com/fabiomicale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
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
