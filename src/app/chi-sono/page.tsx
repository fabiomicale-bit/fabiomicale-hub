import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chi Sono | Fabio Micale — La Storia del Metodologo della Crescita",
  description:
    "25 anni di esperienza sul campo, 150+ cantieri, 13M€ di budget gestito. Da imprenditore edile a scrittore e formatore per professionisti Over 40.",
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
  "Metodologo della Crescita",
  "Autore — Successo in 3 Passi",
  "Formatore & Coach",
  "Fondatore MEPA Elite",
  "Fondatore Impresa Liquida",
  "Fondatore Punto Zero",
  "Project Manager Senior",
  "25+ Anni di Management",
  "Budget Gestiti: 13M+",
];

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Copy */}
            <div className="animate-reveal-up">
              <div className="badge-editorial mb-8">La Mia Storia</div>
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
                Un percorso costruito{" "}
                <span className="italic text-hub-gold">senza scorciatoie.</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-hub-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-hub-gold">Metodologo della Crescita</span>
              </div>
              <p className="text-xl text-hub-ink-muted leading-relaxed max-w-lg font-light">
                Dall&apos;esperienza multigenerazionale nei cantieri alla gestione di appalti pubblici milionari. 
                Qui non troverai teoria, solo la realtà spietata di{" "}
                <span className="text-hub-ink font-medium">25 anni di management</span> e organizzazione operativa.
              </p>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center lg:justify-end animate-reveal-up delay-200">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-hub-gold/[0.05] blur-[60px] rounded-full" />
                <Image
                  src="/foto fabio cravatta no sfondo.png"
                  alt="Fabio Micale — Autore e Formatore"
                  width={550}
                  height={700}
                  className="relative z-10 w-full h-auto drop-shadow-2xl grayscale contrast-[1.1]"
                  style={{ transform: "scaleX(-1)" }}
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hub-bg to-transparent z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LA MIA STORIA ──────────────────────────────────── */}
      <section className="py-32 px-6 relative bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div className="flex flex-col gap-4">
              <div className="gold-line" />
              <h2 className="text-2xl font-bold uppercase tracking-widest text-hub-ink-light">La Storia</h2>
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                56 anni. Una missione sola:{" "}
                <span className="italic text-hub-gold">l&apos;Evoluzione.</span>
              </h3>
              <div className="space-y-8 text-hub-ink-muted leading-relaxed text-lg font-light">
                <p>
                  La mia formazione è iniziata a 8 anni, seguendo mio padre — un vero genio degli impianti — tra polvere e cemento. Lì ho capito che un cantiere, come un&apos;azienda, è un organismo vivo che respira coordinazione. Dai 20 anni ho forgiato la mia attitudine nel settore commerciale, per poi passare alla gestione integrale di business dal 1996.
                </p>
                <p>
                  Negli ultimi anni, come Senior Project Manager, ho dominato il mondo degli Appalti Pubblici e Privati, gestendo il ciclo completo: dall&apos;abilitazione MEPA alla vittoria dei bandi, fino all&apos;incasso finale. Ho vissuto sulla mia pelle cosa significa gestire 100+ operai e budget da 13 milioni di euro.
                </p>
                <p>
                  Oggi, dopo aver affrontato il mio &quot;Punto Zero&quot; personale, scrivo libri e formo professionisti che vogliono vincere nella vita e nel business — con sistemi concreti, non con promesse vuote.
                </p>
                <div className="editorial-quote">
                  &ldquo;L&apos;organizzazione non è un costo, è l&apos;unico asset che ti permette di restare libero.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IL PUNTO ZERO ──────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="card-editorial p-12 md:p-20 relative overflow-hidden group">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="badge-editorial mb-8">Il Punto di Svolta</div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 leading-tight">
                  Quando il successo{" "}
                  <span className="italic text-hub-gold">diventa una trappola.</span>
                </h2>
                <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                  <p>
                    C&apos;è un momento nella vita di ogni imprenditore in cui ti accorgi che il tempo è la risorsa più preziosa — e che lo stai sprecando.
                  </p>
                  <p>
                    Ho affrontato il mio punto di rottura — un carcinoma al IV stadio — e ho deciso che non sarei tornato a vivere come prima. Ho integrato la tecnologia non come spettatore, ma come{" "}
                    <span className="text-hub-ink font-medium">Builder</span>. Ho capito che i sistemi e l&apos;AI sono l&apos;unico modo per smettere di essere schiavo della propria azienda.
                  </p>
                  <p>
                    Oggi condivido questa esperienza attraverso i libri, i corsi e la community Punto Zero — per chi vuole fare il suo reset e ripartire più forte.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-hub-border shadow-2xl">
                <Image
                  src="/hero_home.jpg"
                  alt="Architettura Sistemi"
                  fill
                  className="object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.4em] text-hub-ink-muted font-bold border border-hub-border bg-white/80 backdrop-blur-md px-6 py-3 rounded-full">
                    La Rinascita
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. NUMERI ──────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { numero: "1.000.000+", label: "KM Percorsi in Italia", desc: "La misura fisica della gestione capillare dei cantieri." },
              { numero: "30+", label: "Appalti Pubblici Gestiti", desc: "Protocolli istituzionali ad alta complicanza burocratica." },
              { numero: "13M+", label: "Budget Complessivo (€)", desc: "Risorse e logistica in contesti ad alto rischio finanziario." },
            ].map((s, i) => (
              <div key={i} className="text-center p-8 card-editorial group">
                <div className="text-5xl font-serif font-medium text-hub-ink mb-4 group-hover:text-hub-gold transition-colors duration-500">{s.numero}</div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-hub-gold mb-6 font-bold">{s.label}</p>
                <p className="text-hub-ink-muted text-sm leading-relaxed font-light italic">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEZIONI ─────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-label justify-center mb-6">Fondamenta</div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium">
              Cosa porto{" "}
              <span className="italic text-hub-gold">sul tavolo.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lezioni.map((l, i) => (
              <div key={i} className="card-editorial p-10 group">
                <div className="w-14 h-14 rounded-2xl bg-hub-gold/5 flex items-center justify-center text-hub-gold mb-8 group-hover:bg-hub-gold/10 transition-colors border border-hub-gold/10">
                  {l.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium text-hub-ink mb-4 group-hover:text-hub-gold transition-colors">{l.titolo}</h3>
                <p className="text-hub-ink-muted leading-relaxed text-base font-light">{l.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CREDENZIALI ─────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-label justify-center mb-10">Asset & Skillset</div>
          <div className="flex flex-wrap justify-center gap-4">
            {credenziali.map((c, i) => (
              <span
                key={i}
                className="text-xs font-bold uppercase tracking-widest text-hub-ink-muted border border-hub-border px-8 py-4 rounded-xl bg-hub-white hover:bg-hub-gold/5 hover:border-hub-gold/20 hover:text-hub-gold transition-all duration-300 cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ─────────────────────────────────────────── */}
      <section className="py-40 px-6 relative overflow-hidden bg-hub-charcoal text-white">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 leading-tight">
            Sei pronto per{" "}
            <span className="italic text-hub-gold">l&apos;Evoluzione?</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Niente promesse vuote o corsi pre-registrati. Se vuoi crescere davvero, parliamone.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/il-libro" className="btn-gold px-12 py-5 text-sm tracking-[0.2em]">
              Scopri il Libro
            </Link>
            <a href="mailto:info@fabiomicale.com" className="btn-outline px-12 py-5 text-sm tracking-[0.2em] border-white/20 text-white/70 hover:border-hub-gold hover:text-hub-gold">
              Invia un&apos;Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
