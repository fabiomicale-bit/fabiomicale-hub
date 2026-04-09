import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapitoloForm from "@/components/CapitoloForm";

export const metadata = {
  title: "Il Libro | Successo in 3 Passi — Fabio Micale (Edizione 2026)",
  description:
    "Il protocollo digitale per riprendere il controllo del tuo business. 27 esercizi, 5 casi studio reali. L'edizione definitiva 2026.",
  alternates: { canonical: "https://www.fabiomicale.com/il-libro" },
};

const cards = [
  {
    titolo: "Il Protocollo",
    testo:
      "3 Passi strutturati che si ripetono in ogni ciclo di evoluzione aziendale.",
    accent: "gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    titolo: "Dossier Reali",
    testo:
      "5 casi studio spietati con dialoghi originali e strategie di risoluzione applicate.",
    accent: "green",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    titolo: "Operatività",
    testo:
      "27 esercizi guidati per smontare e rimontare la tua identità professionale.",
    accent: "gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

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

const perChiItems = [
  "Imprenditori che si sentono prigionieri della propria azienda",
  "Professionisti che non riescono a tradurre l'esperienza in asset scalabili",
  "Menti strategiche che vogliono integrare l'AI senza perdere l'anima",
  "Chiunque senta che il proprio tempo ha un valore che il mercato non sta ancora pagando",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Successo in 3 Passi",
  url: "https://www.fabiomicale.com/il-libro",
  image: "https://www.fabiomicale.com/copertina-libro.png",
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
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Background Ambience */}
        <div className="absolute top-0 right-0 w-full h-full bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#2E7D32] opacity-[0.01] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Copy */}
            <div className="animate-fade-in-up">
              <div className="badge mb-8">Manifesto dell&apos;Evoluzione</div>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
                Successo in 3 Passi: <br />
                <span className="italic text-[#F5A623]">l&apos;asset digitale.</span>
              </h1>
              <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-lg font-light">
                Il protocollo ingegneristico per riprendere il controllo della tua vita professionale. Niente motivazione, solo sistemi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold px-10 py-5 text-xs tracking-widest font-bold flex justify-center"
                  >
                    ACQUISTA EDIZIONE 2017 (AMAZON)
                  </a>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest text-center">Disponibile Ora — Architettura Originale</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Link
                    href="/recensioni#pre-ordine"
                    className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-10 py-5 text-xs tracking-widest font-bold flex flex-col items-center rounded-lg transition-all shadow-[0_0_20px_rgba(46,125,50,0.3)]"
                  >
                    <span>EDIZIONE 2026 DIGITAL — OMAGGIO</span>
                    <span className="text-[9px] opacity-60 mt-1 font-light italic">Riservato ai partecipanti al Review Program</span>
                  </Link>
                  <p className="text-[10px] text-[#2E7D32] uppercase tracking-[0.2em] font-bold text-center animate-pulse">Community Reward Program</p>
                </div>
              </div>
              
              <div className="mt-12">
                <CapitoloForm />
              </div>
            </div>

            {/* Visual: Book Cover Premium */}
            <div className="flex justify-center md:justify-end animate-fade-in-up delay-200">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#F5A623]/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden border border-white/5 bg-[#0D0D0D]">
                  <Image
                    src="/copertina-libro.png"
                    alt="Copertina del libro Successo in 3 Passi"
                    width={350}
                    height={500}
                    className="group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FOCUS CARD (Glassmorphism) ───────────────────────── */}
      <section className="py-32 px-6 bg-[#0D0D0D] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((c, i) => (
              <div key={i} className="card-premium p-10 group h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:scale-110 ${
                  c.accent === 'gold' ? 'bg-[#F5A623]/5 text-[#F5A623] border-[#F5A623]/20' : 'bg-[#2E7D32]/5 text-[#2E7D32] border-[#2E7D32]/20'
                }`}>
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition-colors">{c.titolo}</h3>
                <p className="text-white/30 text-base leading-relaxed font-light">{c.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. I TRE PASSI (Teatre of Values) ────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="badge mb-6">Il Framework Caratterizzante</div>
            <h2 className="text-4xl md:text-6xl font-light text-white font-serif italic">
              L&apos;Ingegneria della <br /><span className="not-italic font-bold">Consapevolezza.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block" />
            
            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              {passi.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-2xl font-serif italic text-[#F5A623] mb-10 group-hover:border-[#F5A623]/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
                    {p.numero}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">{p.titolo}</h3>
                  <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 italic text-white/40 leading-relaxed font-serif text-lg">
                    &ldquo;{p.citazione}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. AREA LETTORI (Premium Inbound) ────────────────────── */}
      <section className="py-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-[#F5A623] opacity-[0.02] blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="badge mb-8 mx-auto">Area Lettori Esclusiva</div>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                Trasforma la lettura <br /><span className="italic text-[#F5A623]">in esecuzione.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
                Il libro è solo l&apos;inizio. Inviando i tuoi esercizi avrai accesso al <span className="text-white">Dossier Professionale Advanced</span> e a feedback diretti.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <a
                  href="mailto:libro.successointrepassi@fabiomicale.com"
                  className="text-xl md:text-2xl font-mono text-white/60 hover:text-[#F5A623] transition-colors break-all"
                >
                  libro.successointrepassi@fabiomicale.com
                </a>
                <a
                  href="mailto:libro.successointrepassi@fabiomicale.com"
                  className="btn-gold px-12 py-5 text-xs tracking-[0.3em] font-bold"
                >
                  SBLOCCA IL DOSSIER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. EDIZIONE 2017 (Legacy Archive) ────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl rotate-[-2deg]">
                  <p className="text-[10px] text-[#F5A623] font-bold uppercase tracking-widest mb-4">Legacy Asset</p>
                  <h4 className="text-xl font-serif text-white mb-2 italic">Successo in 3 Passi (2017)</h4>
                  <p className="text-white/30 text-xs leading-relaxed">Il seme originale del metodo che ha guidato centinaia di professionisti nell&apos;ultimo decennio.</p>
               </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="badge mb-6">Archivio Storico</div>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                Dove tutto <br /><span className="italic text-[#F5A623]">è iniziato.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                L&apos;edizione originale del 2017 di &ldquo;Successo in 3 Passi&rdquo; è ora disponibile come risorsa storica. Un modo per comprendere le radici del metodo prima di affrontare l&apos;edizione definitiva 2026.
              </p>
              <a 
                href="https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A623] font-bold text-xs uppercase tracking-[0.3em] border-b border-[#F5A623]/30 pb-2 hover:border-[#F5A623] transition-all"
              >
                ACQUISTA EDIZIONE 2017 SU AMAZON →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            Inizia il tuo ciclo <br /><span className="italic text-[#F5A623]">di evoluzione.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-12 py-5 text-xs tracking-widest font-bold"
            >
              ACQUISTA EDIZIONE 2017
            </a>
            <Link
              href="/lavora-con-me"
              className="btn-ghost px-12 py-5 text-xs tracking-widest uppercase font-bold"
            >
              COSTRUISCI IL TUO SISTEMA
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
