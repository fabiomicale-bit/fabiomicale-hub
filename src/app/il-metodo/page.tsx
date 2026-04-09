import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Il Metodo | Fabio Micale — Sistemi di Evoluzione Imprenditoriale",
  description:
    "Un protocollo operativo in 4 fasi per integrare sistemi, tecnologia e mindset. Trasforma la tua azienda in un ecosistema autonomo.",
  alternates: { canonical: "https://www.fabiomicale.com/il-metodo" },
};

const pilastri = [
  {
    emoji: "🧠",
    label: "ARCHITETTURA MENTALE",
    testo:
      "Il fondamento. Sostituiamo la reazione al caos con una visione sistemica. Senza il mindset del 'Builder', ogni tecnologia è solo un costo.",
  },
  {
    emoji: "⚡",
    label: "POTENZIAMENTO TECNICO",
    testo:
      "L'acceleratore. Integriamo l'AI non come giocattolo, ma come leva operativa per moltiplicare l'output senza moltiplicare le ore.",
  },
  {
    emoji: "⚙️",
    label: "ECCELLENZA SISTEMICA",
    testo:
      "Il motore. Costruiamo protocolli che lavorano per te. Automazioni, flussi delegabili e strutture indipendenti dalla tua presenza.",
  },
];

const fasi = [
  {
    numero: "01",
    titolo: "DIAGNOSI SPETTRALE",
    testo:
      "Analizziamo i flussi attuali, identifichiamo i colli di bottiglia e i leak di fatturato. Capisci dove sei per sapere dove puoi arrivare.",
  },
  {
    numero: "02",
    titolo: "INGEGNERIA STRATEGICA",
    testo:
      "Progettiamo il tuo nuovo sistema operativo. Definiamo i protocolli MEPA Elite, Impresa Liquida o Punto Zero adatti alla tua realtà.",
  },
  {
    numero: "03",
    titolo: "IMPLEMENTAZIONE NATIVA",
    testo:
      "Installiamo gli strumenti. Integriamo AI e automazioni direttamente nei tuoi workflow quotidiani. Creiamo valore, non complessità.",
  },
  {
    numero: "04",
    titolo: "CONTROLLO E SCALA",
    testo:
      "Monitoriamo i risultati e ottimizziamo i processi. Ti assicuro che il sistema regga l'impatto della crescita e ti restituisca libertà.",
  },
];

export default function IlMetodoPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Background visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_metodo.jpg"
            alt="Architettura del Metodo"
            fill
            className="object-cover object-center opacity-10 grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Framework Certificato</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Costruiamo il tuo <br />
            <span className="italic text-[#F5A623]">Sistema di Libertà.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            Nessuna improvvisazione. Un protocollo ingegneristico per trasformare la tua esperienza in una macchina da guerra autonoma.
          </p>
        </div>
      </section>

      {/* ── 2. I PILASTRI ─────────────────────────────────────────── */}
      <section className="py-32 px-6 relative bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20 mb-32 items-start">
            <div className="sticky top-32">
              <div className="badge mb-6">Il Principio</div>
              <h2 className="text-4xl font-light font-serif italic mb-8">Tre pilastri. <br /><span className="text-white not-italic font-sans font-bold text-5xl">Zero Alibi.</span></h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Dopo 25 anni di business, ho ridotto la complessità a tre elementi fondamentali. Se ne manca uno, non hai un business: hai un lavoro a tempo pieno che ti sta consumando.
              </p>
            </div>

            <div className="grid gap-6">
              {pilastri.map((p, i) => (
                <div key={i} className="card-premium p-10 flex gap-8 group">
                  <div className="text-4xl shrink-0 grayscale group-hover:grayscale-0 transition-all">{p.emoji}</div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-[#F5A623] mb-3 uppercase">{p.label}</h3>
                    <p className="text-white/50 leading-relaxed text-lg font-light">{p.testo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formula visiva Premium */}
          <div className="relative p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#F5A623] opacity-[0.03] blur-[100px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm tracking-[0.3em] opacity-30 uppercase mb-4">Mindset</span>
                <div className="text-3xl md:text-5xl font-serif italic text-white">Visione</div>
              </div>
              <span className="text-[#F5A623] text-4xl font-light">+</span>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm tracking-[0.3em] opacity-30 uppercase mb-4">Tech</span>
                <div className="text-3xl md:text-5xl font-serif italic text-white">Potenza</div>
              </div>
              <span className="text-[#F5A623] text-4xl font-light">+</span>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm tracking-[0.3em] opacity-30 uppercase mb-4">Systems</span>
                <div className="text-3xl md:text-5xl font-serif italic text-white">Ordine</div>
              </div>
              <span className="hidden md:block text-[#F5A623] text-4xl font-light">=</span>
              <div className="bg-[#F5A623] text-[#0D0D0D] px-10 py-6 rounded-2xl font-bold text-2xl tracking-[0.1em] uppercase shadow-[0_0_50px_rgba(245,166,35,0.2)]">
                EVOLUZIONE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. LE FASI ───────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="badge mb-6">Execution</div>
            <h2 className="text-4xl md:text-6xl font-light text-white font-serif italic">
              Il Protocollo di <span className="not-italic font-bold">Trasformazione.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fasi.map((f, i) => (
              <div key={i} className="card-premium p-8 group h-full flex flex-col items-start transition-all hover:bg-white/[0.04]">
                <span className="text-5xl font-bold text-white/5 mb-8 group-hover:text-[#F5A623]/20 transition-colors">{f.numero}</span>
                <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 mb-4 uppercase group-hover:text-[#F5A623] transition-colors">{f.titolo}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-light">{f.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CITAZIONE / SOCIAL PROOF ────────────────────────── */}
      <section className="py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 md:p-16 border-l-2 border-[#F5A623]/30 bg-white/[0.01]">
            <svg className="absolute top-8 left-8 w-12 h-12 text-[#F5A623] opacity-10" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8v8H6v8h8v-8h-4V8h4V4H6v4h4zm16 0v8h-4v8h8v-8h-4V8h4V4h-8v4h4z" />
            </svg>
            <p className="text-2xl md:text-3xl font-serif italic text-white/70 leading-relaxed mb-10">
              &ldquo;Non pensavo fosse per me. Pensavo servisse essere giovani o smanettoni. In sei sessioni ho cambiato completamente il mio modo di lavorare e di pensare il mio business.&rdquo;
            </p>
            <div>
              <p className="text-white font-bold tracking-widest uppercase text-sm mb-1">Laura B.</p>
              <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">Studio Professionale Certificato</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#141414] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 font-serif">
            Non restare a guardare mentre <br />
            <span className="italic text-[#F5A623]">il mondo accelera.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Il primo passo è una diagnosi gratuita. Capiamo insieme se il tuo business è pronto per diventare un sistema operativo.
          </p>
          <a
            href="https://calendly.com/fabiomicale"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-12 py-5 text-sm tracking-[0.3em] font-bold"
          >
            PRENOTA CALL DIAGNOSTICA
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
