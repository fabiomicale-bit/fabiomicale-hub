import Link from "next/link";



export const metadata = {
  title: "Il Metodo | Fabio Micale — Il Metodo della Crescita",
  description:
    "Un protocollo operativo in 3 fasi per integrare sistemi, tecnologia e mindset. Trasforma la tua vita e il tuo business con un metodo testato.",
  alternates: { canonical: "https://www.fabiomicale.com/il-metodo" },
};

const pilastri = [
  {
    emoji: "🧠",
    label: "Architettura Mentale",
    testo: "Il fondamento. Sostituiamo la reazione al caos con una visione sistemica. Senza il mindset del 'Builder', ogni tecnologia è solo un costo.",
  },
  {
    emoji: "⚡",
    label: "Potenziamento Tecnico",
    testo: "L'acceleratore. Integriamo l'AI non come giocattolo, ma come leva operativa per moltiplicare l'output senza moltiplicare le ore.",
  },
  {
    emoji: "⚙️",
    label: "Eccellenza Sistemica",
    testo: "Il motore. Costruiamo protocolli che lavorano per te. Automazioni, flussi delegabili e strutture indipendenti dalla tua presenza.",
  },
];

const fasi = [
  {
    numero: "01",
    titolo: "Diagnosi",
    testo: "Analizziamo i flussi attuali, identifichiamo i colli di bottiglia. Capisci dove sei per sapere dove puoi arrivare.",
  },
  {
    numero: "02",
    titolo: "Strategia",
    testo: "Progettiamo il tuo nuovo sistema. Definiamo i protocolli e gli strumenti adatti alla tua realtà specifica.",
  },
  {
    numero: "03",
    titolo: "Implementazione",
    testo: "Installiamo gli strumenti. Integriamo AI e automazioni nei tuoi workflow quotidiani. Creiamo valore, non complessità.",
  },
  {
    numero: "04",
    titolo: "Dominio",
    testo: "Monitoriamo i risultati e ottimizziamo. Il sistema regge l'impatto della crescita e ti restituisce libertà.",
  },
];

export default function IlMetodoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-reveal-up">
          <div className="badge-editorial mb-8 mx-auto">Il Metodo</div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Il Sistema di{" "}
            <span className="italic text-hub-gold">Libertà.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Nessuna improvvisazione. Un protocollo ingegneristico per trasformare la tua esperienza in un asset scalabile e autonomo.
          </p>
        </div>
      </section>

      {/* ── I PILASTRI ──────────────────────────────────── */}
      <section className="py-32 px-6 relative bg-hub-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20 mb-32 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="section-label mb-6">Il Principio</div>
              <h2 className="text-4xl font-serif font-medium mb-8">
                Tre pilastri.{" "}
                <span className="text-hub-gold italic">Zero Alibi.</span>
              </h2>
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Dopo 25 anni di business, ho ridotto la complessità a tre elementi fondamentali. Se ne manca uno, non hai un business: hai un lavoro a tempo pieno che ti sta consumando.
              </p>
            </div>

            <div className="grid gap-6">
              {pilastri.map((p, i) => (
                <div key={i} className="card-editorial p-10 flex gap-8 group">
                  <div className="text-4xl shrink-0 grayscale group-hover:grayscale-0 transition-all">{p.emoji}</div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-hub-gold mb-3 uppercase">{p.label}</h3>
                    <p className="text-hub-ink-muted leading-relaxed text-lg font-light">{p.testo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formula visiva */}
          <div className="relative p-12 md:p-20 rounded-[40px] bg-hub-charcoal text-white overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-hub-gold opacity-[0.04] blur-[100px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center">
                <span className="text-white/30 font-bold text-sm tracking-[0.3em] uppercase mb-4">Mindset</span>
                <div className="text-3xl md:text-5xl font-serif italic">Visione</div>
              </div>
              <span className="text-hub-gold text-4xl font-light">+</span>
              <div className="flex flex-col items-center">
                <span className="text-white/30 font-bold text-sm tracking-[0.3em] uppercase mb-4">Tech</span>
                <div className="text-3xl md:text-5xl font-serif italic">Potenza</div>
              </div>
              <span className="text-hub-gold text-4xl font-light">+</span>
              <div className="flex flex-col items-center">
                <span className="text-white/30 font-bold text-sm tracking-[0.3em] uppercase mb-4">Systems</span>
                <div className="text-3xl md:text-5xl font-serif italic">Ordine</div>
              </div>
              <span className="hidden md:block text-hub-gold text-4xl font-light">=</span>
              <div className="bg-hub-gold text-hub-charcoal px-10 py-6 rounded-2xl font-bold text-2xl tracking-[0.1em] uppercase shadow-[0_0_50px_rgba(200,164,90,0.3)]">
                Evoluzione
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE FASI ─────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="section-label justify-center mb-6">Esecuzione</div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
              Il Protocollo di{" "}
              <span className="italic text-hub-gold">Trasformazione.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fasi.map((f, i) => (
              <div key={i} className="card-editorial p-8 group h-full flex flex-col items-start">
                <span className="text-5xl font-serif font-medium text-hub-ink/5 mb-8 group-hover:text-hub-gold/20 transition-colors">{f.numero}</span>
                <h3 className="text-xs font-bold tracking-[0.2em] text-hub-ink-muted mb-4 uppercase group-hover:text-hub-gold transition-colors">{f.titolo}</h3>
                <p className="text-hub-ink-muted text-sm leading-relaxed font-light">{f.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITAZIONE ────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-editorial p-12 md:p-16 relative">
            <p className="text-2xl md:text-3xl font-serif italic text-hub-ink-muted leading-relaxed mb-10">
              &ldquo;Non pensavo fosse per me. Pensavo servisse essere giovani o smanettoni. In sei sessioni ho cambiato completamente il mio modo di lavorare e di pensare il mio business.&rdquo;
            </p>
            <div>
              <p className="text-hub-ink font-bold tracking-widest uppercase text-sm mb-1">Laura B.</p>
              <p className="text-hub-ink-light text-xs font-bold uppercase tracking-[0.2em]">Studio Professionale Certificato</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ───────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight">
            Non restare a guardare mentre{" "}
            <span className="italic text-hub-gold">il mondo accelera.</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Il primo passo è leggere il libro. Il secondo è applicare il metodo. Il terzo è contattarmi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/successo-in-3-passi" className="btn-gold px-12 py-5 text-sm tracking-[0.3em] font-bold">
              Scopri il Libro
            </Link>
            <Link href="/contatti" className="btn-outline px-12 py-5 text-sm tracking-[0.3em] border-white/20 text-white/70 hover:border-hub-gold hover:text-hub-gold">
              Contattami
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
