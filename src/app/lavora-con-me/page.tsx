import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";

export const metadata = {
  title: "Lavora con Me | Consulenza AI per Professionisti Over 40",
  description:
    "Consulenza AI personalizzata, sessioni 1:1 e masterclass per professionisti over 40. Scopri come posso aiutarti a usare l'AI nel tuo lavoro.",
  alternates: { canonical: "https://www.fabiomicale.com/lavora-con-me" },
};

const opzioni = [
  {
    emoji: "✉️",
    badge: "Inizia qui — Gratis",
    badgeColor: "bg-[#E8F5E9] text-[#2E7D32] border-[#E5E5E5]",
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
    badgeColor: "bg-[#E8F5E9] text-[#2E7D32] border-[#E5E5E5]",
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
    badgeColor: "bg-[#E8F5E9] text-[#2E7D32] border-[#E5E5E5]",
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
    badgeColor: "bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/30",
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
    badgeColor: "bg-[#E8F5E9] text-[#2E7D32] border-[#E5E5E5]",
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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-[#111111]">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-white/20 text-[#AAAAAA] text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full " />
            Percorsi su misura
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Lavora con me: percorsi pratici per usare l&apos;AI nella tua carriera
          </h1>
          <p className="text-xl text-[#AAAAAA] leading-relaxed">
            Non esiste un percorso uguale per tutti.{" "}
            <span className="gradient-text font-semibold">Esiste il tuo.</span>
          </p>
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="pb-16 pt-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4 text-[#555555] leading-relaxed text-[1.05rem]">
            <p>
              Ho costruito questa offerta su un principio semplice:
              ogni persona ha un punto di partenza diverso,
              un obiettivo diverso e risorse diverse.
            </p>
            <p>
              Per questo non vendo pacchetti preconfezionati.
              Ti propongo percorsi che si adattano
              a <span className="text-[#111111] font-medium">dove sei e dove vuoi arrivare.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. LE OPZIONI ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Le opzioni</span>
              <div className="w-8 h-px bg-[#2E7D32]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opzioni.map((o) => (
              <div
                key={o.titolo}
                className={`card-glow group flex flex-col rounded-2xl p-7 border transition-all duration-300 shadow-sm hover:shadow-md ${
                  o.highlight
                    ? "bg-white border-[#2E7D32]/30 ring-1 ring-[#2E7D32]/20 hover:border-[#2E7D32]/50"
                    : "bg-white border-[#E5E5E5] hover:border-[#2E7D32]/30"
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
                <h3 className="text-[#111111] font-semibold text-lg mb-3 leading-snug">
                  {o.titolo}
                </h3>
                <p className="text-[#555555] leading-relaxed text-[0.9rem] flex-1">
                  {o.testo}
                </p>

                {/* nota */}
                {o.nota && (
                  <p className="mt-4 text-xs text-[#555555] italic">{o.nota}</p>
                )}

                {/* cta */}
                {o.href && (
                  <a
                    href={o.href}
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group/cta ${
                      o.highlight
                        ? "text-[#2E7D32] hover:text-[#1B5E20]"
                        : "text-[#555555] hover:text-[#2E7D32]"
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">FAQ</span>
              <div className="w-8 h-px bg-[#2E7D32]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Hai dubbi?
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── 5. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Non sai da dove iniziare?
          </h2>
          <p className="text-[#AAAAAA] text-lg leading-relaxed mb-10">
            Scrivimi. In 15 minuti capiamo insieme qual è il percorso più adatto a te.
          </p>
          <a
            href="mailto:info@fabiomicale.com"
            className="inline-flex items-center gap-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
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
