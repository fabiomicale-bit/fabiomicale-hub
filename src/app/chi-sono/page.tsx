import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chi Sono | Fabio Micale — Coach AI Over 40",
  description:
    "Ho 56 anni, lavoro da remoto, uso l'AI ogni giorno. Aiuto professionisti over 40 a non farsi sorpassare dalla rivoluzione digitale. La mia storia.",
  alternates: { canonical: "https://www.fabiomicale.com/chi-sono" },
};

const lezioni = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.228-.608-4.316-1.67-6.11" />
      </svg>
    ),
    titolo: "Non perdere mai il controllo dei punti critici",
    testo: "Chi gestisce senza controllare, prima o poi perde.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    titolo: "Analizza i rischi prima di agire",
    testo: "L'entusiasmo senza metodo brucia energia e risorse.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titolo: "Il tempo è l'unico asset non rinnovabile",
    testo: "Ogni giorno che passa senza costruire qualcosa è un giorno perso.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    titolo: "L'AI amplifica le persone, non le sostituisce",
    testo: "Chi ha esperienza + AI batte chi ha solo AI.",
  },
];

const credenziali = [
  "Coach certificato",
  "Imprenditore",
  "Autore",
  "Project Manager",
  "AI Practitioner",
  "PNL Practitioner",
  "25+ anni di esperienza",
];

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#111111]">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* testo */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-white/20 text-[#AAAAAA] text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full " />
                Storia vera
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
                Chi sono: un professionista over 40 che ha scelto di non restare indietro
              </h1>
              <p className="text-xl text-[#AAAAAA] leading-relaxed">
                Una storia vera.{" "}
                <span className="gradient-text font-semibold">Nessun filtro.</span>
              </p>
            </div>

            {/* foto */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-3xl overflow-hidden border border-[#2E7D32]/30 shadow-2xl shadow-black/40">
                  <Image
                    src="/fabio-chisono.jpg"
                    alt="Fabio Micale, coach e imprenditore over 40"
                    width={480}
                    height={480}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "480px", objectPosition: "top" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LA MIA STORIA ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">La mia storia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-8 leading-tight">
            56 anni.{" "}
            <span className="gradient-text">Tutto vissuto.</span>
          </h2>
          <div className="space-y-5 text-[#555555] leading-relaxed text-[1.05rem]">
            <p>
              Ho 56 anni. Ho fondato aziende, gestito cantieri,
              guidato team, preso decisioni difficili.
              Ho avuto successi che mi hanno dato fiducia
              e fallimenti che mi hanno dato saggezza.
            </p>
            <p>
              Oggi vivo fra due paesi — due mondi diversi,
              due culture diverse, una sola visione:
              costruire qualcosa di solido che duri nel tempo.
            </p>
            <p>
              Non ti racconto una storia di successo lineare.
              Ti racconto una storia vera — con le cadute,
              le ripartenze e le lezioni che solo l&apos;esperienza
              può insegnare.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. IL MOMENTO DI SVOLTA ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Il momento di svolta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-8 leading-tight">
            Quando tutto cambia
          </h2>

          <div className="relative pl-6 border-l border-[#2E7D32]/30">
            <div className="space-y-6 text-[#555555] leading-relaxed text-[1.05rem]">
              <p>
                A un certo punto della vita ti trovi di fronte
                a una scelta: adattarti o restare indietro.
              </p>
              <p>
                Per me quel momento è arrivato quando la vita
                mi ha messo davanti a una sfida personale importante
                e contemporaneamente la rivoluzione dell&apos;AI
                stava cambiando tutto intorno a me.
              </p>
              <p>
                Due eventi che avrebbero potuto fermarmi —
                e invece mi hanno chiarito le idee.
              </p>
              <p>
                Ho capito che il tempo è la risorsa più preziosa.
                E che sprecarlo in attività che non creano valore
                reale non è un&apos;opzione.
              </p>
              <p>
                Ho iniziato a studiare l&apos;intelligenza artificiale
                non come spettatore, ma come{" "}
                <span className="text-[#111111] font-medium">builder</span>{" "}
                — scopri{" "}
                <Link href="/ai-per-professionisti" className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors">
                  come uso l&apos;AI nel mio lavoro quotidiano
                </Link>.
                Ho costruito sistemi di automazione,
                workflow multi-agente, prodotti digitali.
              </p>
              <p>
                E ho capito che questa rivoluzione non è una minaccia
                per chi ha esperienza —{" "}
                <span className="text-[#111111] font-medium">
                  è un&apos;opportunità enorme per chi sa usarla.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. COSA HO IMPARATO ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Lezioni</span>
              <div className="w-8 h-px bg-[#2E7D32]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Le lezioni che porto con me
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {lezioni.map((l) => (
              <div
                key={l.titolo}
                className="card-glow group bg-white border border-[#E5E5E5] rounded-2xl p-7 hover:border-[#2E7D32]/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] border border-[#E5E5E5] flex items-center justify-center text-[#2E7D32] mb-5">
                  {l.icon}
                </div>
                <h3 className="text-[#111111] font-semibold text-lg mb-2 leading-snug">
                  {l.titolo}
                </h3>
                <p className="text-[#555555] leading-relaxed text-[0.95rem]">
                  {l.testo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COSA FACCIO OGGI ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Oggi</span>
            <div className="w-8 h-px bg-[#2E7D32]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-8">
            Come posso aiutarti
          </h2>

          <div className="space-y-5 text-[#555555] leading-relaxed text-[1.05rem] text-left mb-10">
            <p>
              Oggi affianco professionisti e imprenditori over 40
              che vogliono{" "}
              <Link href="/reinvenzione-over-40" className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors">
                reinventarsi professionalmente dopo i 40
              </Link>{" "}
              nell&apos;era dell&apos;AI.
            </p>
            <p>
              Non vendo corsi motivazionali.
              Non prometto trasformazioni rapide.
            </p>
            <p>
              Ti do strumenti concreti, metodo e una guida
              basata su esperienza reale — non teoria.
            </p>
            <p>
              Perché so cosa significa ricominciare.
              E so che si può farlo,{" "}
              <span className="text-[#111111] font-medium">a qualsiasi età.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/lavora-con-me"
              className="inline-flex items-center justify-center gap-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Lavora con me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#come-aiuto"
              className="inline-flex items-center justify-center gap-2 text-[#555555] hover:text-[#111111] border border-[#E5E5E5] hover:border-[#2E7D32]/30 font-medium px-8 py-4 rounded-xl transition-all duration-200"
            >
              Scopri i miei servizi
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. CREDENZIALI ───────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Credenziali</span>
            <div className="w-8 h-px bg-[#2E7D32]" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {credenziali.map((c) => (
              <span
                key={c}
                className="text-sm text-[#2E7D32] bg-[#E8F5E9] border border-[#E5E5E5] px-5 py-2 rounded-full hover:border-[#2E7D32]/30 transition-all duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Vuoi sapere come posso aiutarti?
          </h2>
          <p className="text-[#AAAAAA] text-lg leading-relaxed mb-10">
            Parliamoci. Senza impegno.
          </p>
          <a
            href="mailto:info@fabiomicale.com"
            className="inline-flex items-center gap-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            Scrivimi
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
