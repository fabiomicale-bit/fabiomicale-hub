import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "La Storia | Fabio Micale — Il Metodologo della Crescita",
  description:
    "25 anni di esperienza, sistemi operativi di business e una visione chiara: aiutare imprenditori e professionisti ad evolvere nell'era dell'abbondanza digitale.",
  alternates: { canonical: "https://www.fabiomicale.com/chi-sono" },
};

const lezioni = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.228-.608-4.316-1.67-6.11" />
      </svg>
    ),
    titolo: "Controllo dei Punti Critici",
    testo: "In ogni business esistono punti di leva che, se non controllati, diventano punti di rottura. Il sistema vince sempre sull'intuito.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    titolo: "Analisi di Rischio e Rendimento",
    testo: "L'entusiasmo senza metodo è solo consumo di risorse. La vera crescita è figlia di un'analisi spietata dei dati.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titolo: "L'Asset non Rinnovabile",
    testo: "Il tempo è l'unica cosa che non puoi ricomprare. I sistemi operativi servono a riprenderselo, non a occuparlo.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    titolo: "L'Esperienza Potenziata",
    testo: "L'AI non sostituisce la saggezza. La amplifica. Chi ha 25 anni di business alle spalle è il solo che può guidarla davvero.",
  },
];

const credenziali = [
  "Expert Advisor d'Impresa",
  "Fondatore MEPA Elite™",
  "Specialista Appalti Pubblici",
  "Ingegneria Gestionale",
  "Project Manager Senior",
  "Gestione Budget 13M+",
  "25+ Anni di Management",
  "Fondatore Eredità Punto Zero™",
];

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Ambient Lights */}
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#F5A623] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-[#2E7D32] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Copy */}
            <div className="animate-fade-in-up">
              <div className="badge mb-8">Accesso alla Visione</div>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
                Un percorso costruito <br />
                <span className="italic text-[#F5A623]">senza scorciatoie.</span>
              </h1>
              <p className="text-xl text-white/40 leading-relaxed max-w-lg">
                Dall&apos;esperienza multigenerazionale nei cantieri alla gestione di appalti pubblici milionari. Qui non troverai teoria, solo la realtà spietata di <span className="text-white">25 anni di management</span> e organizzazione operativa.
              </p>
            </div>

            {/* Visual (Flipped Transparent Photo) */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-up delay-200">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#F5A623]/10 blur-[80px] opacity-20" />
                <Image
                  src="/foto fabio cravatta no sfondo.png"
                  alt="Fabio Micale — Il Metodologo della Crescita"
                  width={550}
                  height={700}
                  className="relative z-10 w-full h-auto drop-shadow-2xl brightness-110"
                  style={{ transform: "scaleX(-1)" }}
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D0D0D] to-transparent z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LA MIA STORIA (Dark Premium) ────────────────────── */}
      <section className="py-32 px-6 relative bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-[#F5A623] rounded-full" />
              <h2 className="text-2xl font-bold uppercase tracking-widest text-white/20">La Storia</h2>
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl md:text-5xl font-light leading-tight font-serif italic text-[#F5A623]">
                56 anni. Una missione sola: <span className="text-white not-italic font-sans font-bold"> l&apos;Evoluzione Alternativa.</span>
              </h3>
              <div className="space-y-8 text-white/50 leading-relaxed text-lg font-light">
                <p>
                  La mia formazione è iniziata a 8 anni, seguendo mio padre — un vero genio degli impianti — tra polvere e cemento. Lì ho capito che un cantiere, come un&apos;azienda, è un organismo vivo che respira coordinazione. Dai 20 anni ho forgiato la mia attitudine nel settore commerciale, per poi passare alla gestione integrale di business dal 1996.
                </p>
                <p>
                  Negli ultimi anni, come Senior Project Manager, ho dominato il mondo degli Appalti Pubblici e Privati, gestendo il ciclo completo: dall&apos;abilitazione MEPA alla vittoria dei bandi, fino all&apos;incasso finale. Ho vissuto sulla mia pelle cosa significa gestire 100+ operai e budget da 13 milioni di euro.
                </p>
                <p>
                  Oggi, dopo aver affrontato il mio "Punto Zero" personale, non vendo consulenze generiche. Porto un&apos;eredità operativa e sistemi ingegneristici per chi vuole scalare il fatturato senza diventarne schiavo.
                </p>
                <p className="border-l border-[#F5A623]/30 pl-8 italic text-white/80">
                  &ldquo;L&apos;organizzazione non è un costo, è l&apos;unico asset che ti permette di restare libero.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IL MOMENTO DI SVOLTA (Inbound) ───────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0D0D0D] p-12 md:p-20 rounded-[40px] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[#2E7D32] opacity-[0.03] blur-[100px] group-hover:opacity-[0.06] transition-opacity" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="badge mb-8">Il Punto di Rottura</div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight font-serif italic">
                  Quando il successo <br />
                  <span className="text-white not-italic font-bold">diventa una trappola.</span>
                </h2>
                <div className="space-y-6 text-white/40 text-lg leading-relaxed">
                  <p>
                    C&apos;è un momento nella vita di ogni imprenditore in cui ti accorgi che il tempo è la risorsa più preziosa — e che lo stai sprecando.
                  </p>
                  <p>
                    Ho affrontato il mio punto di rottura integrando la tecnologia non come spettatore, ma come <span className="text-white font-bold">Builder</span>. Ho capito che la rivoluzione dei sistemi (e dell&apos;AI) è il solo modo per smettere di essere lo schiavo della propria azienda.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/hero_home.jpg"
                  alt="Architettura Sistemi"
                  fill
                  className="object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/50 font-bold border border-white/20 px-6 py-3 rounded-full backdrop-blur-md">Metodo Operativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. LA METRICA DELLA RESILIENZA (Authority Grid) ──────── */}
      <section className="py-32 px-6 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#F5A623]/20 transition-all group">
              <div className="text-5xl font-bold text-white mb-4 transition-transform group-hover:scale-110 duration-500">1.000.000+</div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5A623] mb-6 font-bold">KM PERCORSI IN ITALIA</p>
              <p className="text-white/30 text-sm leading-relaxed font-light italic">
                La misura fisica della gestione capillare dei cantieri prima di sistematizzare il comando.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#2E7D32]/20 transition-all group">
              <div className="text-5xl font-bold text-white mb-4 transition-transform group-hover:scale-110 duration-500">30+</div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2E7D32] mb-6 font-bold">APPALTI PUBBLICI GESTITI</p>
              <p className="text-white/30 text-sm leading-relaxed font-light italic">
                Gestione di protocolli istituzionali e procedure ad alta complicanza burocratica.
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group">
              <div className="text-5xl font-bold text-white mb-4 transition-transform group-hover:scale-110 duration-500">13M+</div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">BUDGET COMPLESSIVO (€)</p>
              <p className="text-white/30 text-sm leading-relaxed font-light italic">
                Amministrazione di risorse e logistica in contesti ad alto rischio finanziario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. LEZIONI (Cards Premium) ──────────────────────────── */}
      <section className="py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="badge mb-6">Foundations</div>
            <h2 className="text-4xl md:text-5xl font-light text-white font-serif">
              Cosa porto <span className="italic text-[#F5A623]">sul tavolo.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lezioni.map((l, i) => (
              <div key={i} className="card-premium p-10 group hover:border-[#F5A623]/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/5 flex items-center justify-center text-[#F5A623] mb-8 group-hover:bg-[#F5A623]/10 transition-colors border border-[#F5A623]/10">
                  {l.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition-colors">{l.titolo}</h3>
                <p className="text-white/40 leading-relaxed text-base">{l.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CREDENZIALI (Pills Premium) ───────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mb-10">Asset & Skillset</div>
          <div className="flex flex-wrap justify-center gap-4">
            {credenziali.map((c, i) => (
              <span
                key={i}
                className="text-xs font-bold uppercase tracking-widest text-white/50 border border-white/10 px-8 py-4 rounded-xl bg-white/[0.02] hover:bg-[#F5A623]/5 hover:border-[#F5A623]/20 hover:text-[#F5A623] transition-all duration-300 cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE (Authority Closing) ────────────────────────── */}
      <section className="py-40 px-6 relative overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-10 font-serif leading-tight">
            Sei pronto per <br />
            <span className="italic text-[#F5A623]">l&apos;Evoluzione?</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Niente promesse vuote o corsi pre-registrati. Se vuoi implementare questi sistemi nel tuo business, parliamone privatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/soluzioni" className="btn-gold px-12 py-5 text-sm tracking-[0.2em]">
              Vedi le Soluzioni
            </Link>
            <a href="mailto:info@fabiomicale.com" className="btn-ghost px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold">
              Invia un&apos;Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
