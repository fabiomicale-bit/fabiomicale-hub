import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Il Libro | Successo in 3 Passi — Fabio Micale (Edizione 2026)",
  description:
    "Il protocollo digitale per riprendere il controllo del tuo business. 27 esercizi, 5 casi studio reali. L'edizione definitiva 2026.",
  alternates: { canonical: "https://www.fabiomicale.com/il-libro" },
};

const passi = [
  {
    numero: "I",
    titolo: "Ferma il Caos",
    citazione: "Prima di correre nella direzione giusta, devi accettare di aver corso in quella sbagliata.",
  },
  {
    numero: "II",
    titolo: "Rimetti Struttura",
    citazione: "L'identità precede la direzione. Senza asset, sei solo un passeggero della tua vita.",
  },
  {
    numero: "III",
    titolo: "Dominio Sistemico",
    citazione: "La libertà non è l'assenza di regole, ma la presenza di un sistema che le gestisce per te.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Successo in 3 Passi",
  url: "https://www.fabiomicale.com/il-libro",
  image: "https://www.fabiomicale.com/fabio%20libro.jpg",
  description:
    "Un metodo ingegneristico per riprendere il controllo della tua vita imprenditoriale. 27 esercizi pratici, 5 casi studio reali.",
  inLanguage: "it-IT",
  genre: "Business & Self-Evolution",
  author: {
    "@type": "Person",
    "@id": "https://www.fabiomicale.com/#person",
    name: "Fabio Micale",
    url: "https://www.fabiomicale.com/chi-sono",
  },
};

export default function IlLibroPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.06] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Copy */}
            <div className="animate-reveal-up">
              <div className="badge-editorial mb-10">Il Libro</div>
              <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1] tracking-tight mb-10">
                Successo in{" "}
                <span className="italic text-hub-gold">3 Passi.</span>
              </h1>
              <p className="text-xl md:text-2xl text-hub-ink-muted leading-relaxed mb-14 max-w-lg font-light">
                Il protocollo ingegneristico per riprendere il controllo della tua vita imprenditoriale.{" "}
                <span className="text-hub-ink font-medium">Revisione 2026:</span> integrata con Sistemi Operativi & AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <Link href="#newsletter" className="btn-gold group px-12 py-5">
                  <span>Prenota la Tua Copia</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
                <p className="text-[10px] text-hub-ink-light uppercase tracking-[0.3em] font-bold py-4">Digital Release · 2026</p>
              </div>
            </div>

            {/* Visual: Book Cover */}
            <div className="flex justify-center md:justify-end animate-reveal-up delay-200">
              <div className="relative group">
                <div className="absolute -inset-8 bg-hub-gold/[0.06] blur-[60px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 rounded-3xl overflow-hidden border border-hub-border bg-hub-white shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                  <Image
                    src="/fabio libro.jpg"
                    alt="Successo in 3 Passi Edizione 2026"
                    width={400}
                    height={580}
                    className="group-hover:scale-[1.02] transition-transform duration-1000"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -right-6 top-10 z-20 bg-hub-charcoal text-white p-5 rounded-2xl shadow-2xl rotate-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-hub-gold">Edizione</div>
                  <div className="text-2xl font-serif italic">2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FOCUS CARDS ────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titolo: "Il Protocollo", testo: "3 Passi strutturati che si ripetono in ogni ciclo di evoluzione aziendale.", icon: "📐" },
              { titolo: "Dossier Reali", testo: "5 casi studio spietati con dialoghi originali e strategie di risoluzione applicate.", icon: "📋" },
              { titolo: "Operatività", testo: "27 esercizi guidati per smontare e rimontare la tua identità professionale.", icon: "✏️" },
            ].map((c, i) => (
              <div key={i} className="card-editorial p-10 group h-full">
                <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all">{c.icon}</div>
                <h3 className="text-xl font-serif font-medium text-hub-ink mb-4 group-hover:text-hub-gold transition-colors">{c.titolo}</h3>
                <p className="text-hub-ink-muted text-base leading-relaxed font-light">{c.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. I TRE PASSI ────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="section-label justify-center mb-6">Il Framework</div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium italic leading-tight">
              L&apos;Ingegneria della{" "}
              <span className="not-italic font-bold text-hub-ink">Consapevolezza.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-hub-border hidden lg:block" />

            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              {passi.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-hub-white border border-hub-border flex items-center justify-center text-2xl font-serif italic text-hub-gold mb-10 group-hover:border-hub-gold/40 group-hover:shadow-lg transition-all duration-500">
                    {p.numero}
                  </div>
                  <h3 className="text-2xl font-bold text-hub-ink mb-6 tracking-tight uppercase">{p.titolo}</h3>
                  <div className="relative p-8 card-editorial italic text-hub-ink-muted leading-relaxed font-serif text-lg">
                    &ldquo;{p.citazione}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PER CHI È ─────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="card-editorial p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <div className="badge-editorial mb-8 mx-auto">Per chi è questo libro</div>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-10 leading-tight">
                Trasforma la lettura{" "}
                <span className="italic text-hub-gold">in esecuzione.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
                {[
                  "Imprenditori prigionieri della propria azienda",
                  "Professionisti che non riescono a scalare",
                  "Menti strategiche che vogliono integrare l'AI",
                  "Chiunque senta che il proprio tempo ha più valore",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-hub-gold mt-1">•</span>
                    <span className="text-hub-ink-muted font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-6">
                <a
                  href="mailto:libro.successointrepassi@fabiomicale.com"
                  className="text-lg md:text-xl font-mono text-hub-ink-muted hover:text-hub-gold transition-colors break-all"
                >
                  libro.successointrepassi@fabiomicale.com
                </a>
                <a
                  href="mailto:libro.successointrepassi@fabiomicale.com"
                  className="btn-gold px-12 py-5 text-xs tracking-[0.3em] font-bold"
                >
                  Sblocca il Dossier Avanzato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. EDIZIONE 2017 ──────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 opacity-60 hover:opacity-100 transition-all duration-700">
              <div className="relative p-6 card-editorial rotate-[-1deg]">
                <p className="text-[10px] text-hub-gold font-bold uppercase tracking-widest mb-4">Archivio Storico</p>
                <h4 className="text-xl font-serif text-hub-ink mb-2 italic">Successo in 3 Passi (2017)</h4>
                <p className="text-hub-ink-muted text-xs leading-relaxed">Il seme originale del metodo che ha guidato centinaia di professionisti nell&apos;ultimo decennio.</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="section-label mb-6">L&apos;Origine</div>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">
                Dove tutto{" "}
                <span className="italic text-hub-gold">è iniziato.</span>
              </h2>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-10 font-light">
                L&apos;edizione originale del 2017 di &ldquo;Successo in 3 Passi&rdquo; è ora disponibile come risorsa storica. Un modo per comprendere le radici del metodo prima di affrontare l&apos;edizione definitiva 2026.
              </p>
              <a
                href="https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hub-gold font-bold text-xs uppercase tracking-[0.3em] border-b border-hub-gold/30 pb-2 hover:border-hub-gold transition-all"
              >
                Acquista Edizione 2017 su Amazon →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINALE ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-hub-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 leading-tight">
            Inizia il tuo ciclo{" "}
            <span className="italic text-hub-gold">di evoluzione.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-12 py-5 text-xs tracking-widest font-bold"
            >
              Acquista Edizione 2017
            </a>
            <Link
              href="/accademia"
              className="btn-outline px-12 py-5 text-xs tracking-widest uppercase font-bold border-white/20 text-white/70 hover:border-hub-gold hover:text-hub-gold"
            >
              Esplora l&apos;Accademia
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
