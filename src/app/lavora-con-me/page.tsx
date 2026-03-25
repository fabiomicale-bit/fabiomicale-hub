import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";

export const metadata = {
  title: "Lavora con me — Fabio Micale",
  description:
    "Non esiste un percorso uguale per tutti. Newsletter, libro, corsi, consulenza 1:1 e servizi AI per professionisti over 40.",
  alternates: { canonical: "https://www.fabiomicale.com/lavora-con-me" },
};

const opzioni = [
  {
    emoji: "✉️",
    badge: "Inizia qui — Gratis",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    titolo: "Newsletter settimanale",
    testo:
      "Ogni settimana strategie concrete, strumenti AI selezionati e riflessioni dirette. Solo per professionisti over 40 che vogliono fare sul serio.",
    cta: "Iscriviti gratis",
    href: "/#newsletter",
    nota: null,
    highlight: false,
  },
  {
    emoji: "📘",
    badge: "Il punto di partenza",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    titolo: "Successo in 3 Passi",
    testo:
      "La guida pratica per capire come l'AI sta ridisegnando il lavoro e come posizionarti in anticipo. Una lettura che cambia prospettiva.",
    cta: "Scopri il libro",
    href: "/il-libro",
    nota: null,
    highlight: false,
  },
  {
    emoji: "🎓",
    badge: "Formazione intensiva",
    badgeColor: "bg-violet-500/15 text-violet-400 border-violet-500/25",
    titolo: "Corsi e Masterclass",
    testo:
      "Percorsi strutturati per imparare a usare l'AI nel tuo contesto professionale. Dal mindset agli strumenti, passo dopo passo. Gruppi piccoli, massimo 4 persone.",
    cta: null,
    href: null,
    nota: "Vuoi saperne di più? Scrivici a info@fabiomicale.com",
    highlight: false,
  },
  {
    emoji: "🤝",
    badge: "Supporto personalizzato",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/25",
    titolo: "Consulenza 1:1",
    testo:
      "Sessioni private per chi vuole un percorso su misura. Analisi della situazione, obiettivi chiari, piano d'azione concreto. Risultati misurabili.",
    cta: "Prenota una chiamata",
    href: "/contatti",
    nota: "Posti limitati — disponibilità su richiesta",
    highlight: true,
  },
  {
    emoji: "⚡",
    badge: "Per il tuo business",
    badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    titolo: "Servizi AI e Automazioni",
    testo:
      "Implementazione di strumenti e workflow AI nella tua attività. Automazioni, agenti, processi ottimizzati. Per professionisti e piccole imprese che vogliono risultati misurabili.",
    cta: null,
    href: null,
    nota: "Disponibilità limitata — scrivici a info@fabiomicale.com per richiedere info",
    highlight: false,
  },
];

export default function LavoraConMePage() {
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
            Percorsi su misura
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Lavora con me
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed">
            Non esiste un percorso uguale per tutti.{" "}
            <span className="gradient-text font-semibold">Esiste il tuo.</span>
          </p>
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4 text-slate-400 leading-relaxed text-[1.05rem]">
            <p>
              Ho costruito questa offerta su un principio semplice:
              ogni persona ha un punto di partenza diverso,
              un obiettivo diverso e risorse diverse.
            </p>
            <p>
              Per questo non vendo pacchetti preconfezionati.
              Ti propongo percorsi che si adattano
              a <span className="text-slate-200">dove sei e dove vuoi arrivare.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. LE OPZIONI ────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Le opzioni</span>
              <div className="w-8 h-px bg-blue-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opzioni.map((o) => (
              <div
                key={o.titolo}
                className={`card-glow group flex flex-col rounded-2xl p-7 border transition-all duration-300 ${
                  o.highlight
                    ? "bg-gradient-to-b from-blue-900/20 to-transparent border-blue-500/25 hover:border-blue-500/50"
                    : "bg-white/[0.03] border-white/8 hover:border-white/15"
                }`}
              >
                {/* emoji + badge */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{o.emoji}</span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${o.badgeColor}`}>
                    {o.badge}
                  </span>
                </div>

                {/* testo */}
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {o.titolo}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[0.9rem] flex-1">
                  {o.testo}
                </p>

                {/* nota */}
                {o.nota && (
                  <p className="mt-4 text-xs text-slate-500 italic">{o.nota}</p>
                )}

                {/* cta */}
                {o.href && (
                  <a
                    href={o.href}
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group/cta ${
                      o.highlight
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {o.cta}
                    <svg
                      className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">FAQ</span>
              <div className="w-8 h-px bg-blue-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Hai dubbi?
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── 5. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 hero-glow opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Non sai da dove iniziare?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Scrivimi. In 15 minuti capiamo insieme{" "}
            <span className="text-slate-300">qual è il percorso più adatto a te.</span>
          </p>
          <a
            href="mailto:info@fabiomicale.com"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Scrivimi su info@fabiomicale.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
