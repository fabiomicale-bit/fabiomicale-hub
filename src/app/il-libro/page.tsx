import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Il Libro — Successo in 3 Passi | Fabio Micale",
  description:
    "Non troverai frasi motivazionali. Troverai un metodo reale con 27 esercizi pratici per riprendere il controllo della tua vita.",
  alternates: { canonical: "/il-libro" },
};

const cards = [
  {
    titolo: "Il Metodo",
    testo:
      "3 Passi strutturati che si ripetono ogni volta che la vita porta disordine",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    titolo: "Le Storie",
    testo:
      "5 casi studio reali con dialoghi veri e risultati concreti",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    titolo: "Gli Esercizi",
    testo:
      "27 esercizi guidati con istruzioni dettagliate",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

const passi = [
  {
    numero: "01",
    titolo: "Ferma il caos",
    citazione: "Prima di correre nella direzione giusta, devi smettere di correre in quella sbagliata.",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    numero: "02",
    titolo: "Rimetti struttura",
    citazione: "L'identità viene prima della direzione. La direzione viene prima del piano.",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    numero: "03",
    titolo: "Mantieni il controllo",
    citazione: "Non è la motivazione che cambia le cose. È il sistema.",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
];

const perChiItems = [
  "Hai più di 40 anni e senti che il mercato sta cambiando troppo velocemente",
  "Fai tanto ma non costruisci nulla di solido",
  "Hai paura di scegliere una direzione e perdere le altre",
  "Sai che dovresti cambiare qualcosa ma non sai da dove iniziare",
  "Vuoi capire come usare l'AI senza perdere quello che hai già costruito",
];

export default function IlLibroPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testo */}
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Edizione 2026 — Completamente riscritta
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
                Successo<br />
                <span className="gradient-text">in 3 Passi</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed mb-8">
                Un metodo semplice per riprendere il controllo della tua vita
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Acquista su Amazon
                </a>
                <a
                  href="https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium px-7 py-4 rounded-xl transition-all duration-200 text-base"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Scarica capitolo gratuito
                </a>
              </div>
            </div>

            {/* Copertina */}
            <div className="animate-fade-in-up delay-200 flex justify-center md:justify-end">
              <div className="relative shadow-2xl shadow-blue-900/40 rounded-2xl overflow-hidden">
                <Image
                  src="/copertina-libro.png"
                  alt="Copertina del libro Successo in 3 Passi di Fabio Micale"
                  width={280}
                  height={400}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DI COSA PARLA ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il libro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Un libro{" "}
              <span className="gradient-text">diverso dagli altri</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-[1.05rem]">
              Non troverai frasi motivazionali. Non troverai promesse di trasformazioni rapide.
              Troverai un metodo reale, costruito su esperienza vera, con{" "}
              <span className="text-slate-200 font-medium">27 esercizi pratici</span>{" "}
              che richiedono carta, penna e onestà.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div
                key={c.titolo}
                className={`card-glow group bg-gradient-to-b ${c.color} border ${c.border} rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300`}
              >
                <div className={`mb-5 ${c.accent}`}>{c.icon}</div>
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-3 ${c.accent}`}>
                  {c.titolo}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">{c.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. I TRE PASSI ───────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il metodo</span>
              <div className="w-8 h-px bg-blue-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Il metodo in 3 Passi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {passi.map((p) => (
              <div
                key={p.numero}
                className={`card-glow group bg-white/[0.03] border ${p.border} rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300`}
              >
                <span className={`text-5xl font-bold gradient-text leading-none block mb-5 select-none`}>
                  {p.numero}
                </span>
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${p.accent}`}>
                  {p.titolo}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[0.95rem] italic border-l-2 border-white/10 pl-4">
                  "{p.citazione}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PER CHI È ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Per chi è</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            Questo libro è per te se...
          </h2>
          <div className="space-y-4">
            {perChiItems.map((item) => (
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

      {/* ── 5. SPAZIO LETTORI ────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/10 rounded-2xl p-10 sm:p-14 text-center">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Area lettori
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Sei già un lettore?
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-8 max-w-xl mx-auto">
              Inviami i tuoi esercizi. Riceverai il{" "}
              <span className="text-slate-200 font-medium">Dossier Professionale</span>{" "}
              con i moduli avanzati per approfondire ogni passaggio del libro. E in alcuni
              casi, una risposta diretta da me.
            </p>
            <a
              href="mailto:libro.successointrepassi@fabiomicale.com"
              className="block text-blue-400 hover:text-blue-300 font-mono text-lg font-medium mb-8 transition-colors duration-200 break-all"
            >
              libro.successointrepassi@fabiomicale.com
            </a>
            <a
              href="mailto:libro.successointrepassi@fabiomicale.com"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 text-base"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Scrivimi ora
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 hero-glow opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Pronto a iniziare?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Il metodo è semplice.{" "}
            <span className="text-slate-300">Metterlo in pratica è la parte interessante.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Acquista su Amazon
            </a>
            <a
              href="/lavora-con-me"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Scopri come lavorare con me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
