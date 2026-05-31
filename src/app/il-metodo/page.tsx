import { Metadata } from "next";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Il Metodo Successo in 3 Passi",
  description: "Ferma il caos, rimetti struttura e mantieni il controllo. Il Metodo Successo in 3 Passi per la rinascita professionale Over 40.",
  alternates: { canonical: "https://www.fabiomicale.com/il-metodo" },
};

export default function MetodoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">La Sequenza del Successo</div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Il successo non è un colpo di fortuna.{" "}
            <span className="italic text-hub-gold">È una sequenza.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Prima fermi il caos. Poi rimetti struttura. Poi impari a mantenere il controllo nel tempo. 
            Questa è la base del Metodo Successo in 3 Passi.
          </p>
        </div>
      </section>

      {/* ── PASSO 1 ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg border-t border-hub-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-hub-gold font-serif italic text-6xl mb-6 opacity-20">01</div>
              <h2 className="text-4xl font-serif font-medium mb-8">Passo 1 — Ferma il caos</h2>
              <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                <p>
                  Quando tutto si muove troppo velocemente, la prima tentazione è aggiungere: nuovi strumenti, nuovi obiettivi, nuovi corsi, nuove strategie. Ma se il sistema è già saturo, aggiungere peggiora il problema.
                </p>
                <p>
                  Il primo passo è fermare il caos: riconoscere il rumore, ridurre la reattività, smettere di inseguire ogni stimolo e tornare a vedere con lucidità.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">Obiettivo:</span>
                <span className="text-hub-ink font-medium">Ritrovare lucidità.</span>
              </div>
            </div>
            <div className="card-editorial p-12 bg-hub-cream/30 border-dashed border-2 border-hub-gold/20 rounded-3xl flex items-center justify-center aspect-square">
              <div className="text-center">
                <div className="w-20 h-20 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-hub-ink-light text-sm italic">"Riconoscere il rumore prima che diventi assordante."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSO 2 ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 card-editorial p-12 bg-hub-ink text-white rounded-3xl flex items-center justify-center aspect-square">
              <div className="text-center">
                <div className="w-20 h-20 bg-hub-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-white/50 text-sm italic">"L'architettura che sostiene la tua evoluzione."</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-hub-gold font-serif italic text-6xl mb-6 opacity-20">02</div>
              <h2 className="text-4xl font-serif font-medium mb-8">Passo 2 — Rimetti struttura</h2>
              <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                <p>
                  Una volta fermato il caos, serve una nuova architettura. Non basta sapere cosa non funziona. Devi costruire routine, criteri, priorità, strumenti e decisioni che ti aiutino a procedere senza ricadere nella confusione.
                </p>
                <p>
                  Qui entrano metodo, organizzazione, intelligenza artificiale e sistemi pratici.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">Obiettivo:</span>
                <span className="text-hub-ink font-medium">Costruire una struttura che ti sostiene.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSO 3 ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg border-b border-hub-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-hub-gold font-serif italic text-6xl mb-6 opacity-20">03</div>
              <h2 className="text-4xl font-serif font-medium mb-8">Passo 3 — Mantieni il controllo</h2>
              <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
                <p>
                  Il problema non è cambiare per qualche giorno. Il problema è mantenere il controllo quando tornano stanchezza, pressione, imprevisti e vecchie abitudini.
                </p>
                <p>
                  Il terzo passo serve a trasformare il metodo in continuità: revisione, disciplina, adattamento, strumenti di controllo e capacità di correggere rotta.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">Obiettivo:</span>
                <span className="text-hub-ink font-medium">Rendere il cambiamento sostenibile.</span>
              </div>
            </div>
            <div className="card-editorial p-12 bg-hub-white border border-hub-border rounded-3xl flex items-center justify-center aspect-square shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-hub-gold/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-hub-ink-light text-sm italic">"La continuità è la forma più alta di forza."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA NELLA PRATICA ─────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Come funziona nella pratica</h2>
            <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
              Il metodo non parte dall&apos;idea di aggiungere altra teoria. Parte da una domanda più semplice: cosa sta occupando spazio, cosa merita attenzione e quale struttura può reggere anche quando il lavoro si accumula.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-hub-border/60 p-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Svuoti</p>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Rendi visibile ciò che hai in testa: attività, urgenze, idee, progetti aperti, decisioni rimandate. Finché tutto resta confuso, tutto sembra importante.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Ordini</p>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Distingui ciò che conta da ciò che distrae. Non si tratta di fare tutto, ma di decidere cosa viene prima, cosa può aspettare e cosa va eliminato.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Rivedi</p>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Controlli se il sistema sta reggendo. La revisione serve a non ricadere nel caos appena la settimana torna piena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUANDO IL METODO DIVENTA NECESSARIO ──────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Quando serve</h2>
            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-medium leading-snug">
                Quando il metodo diventa necessario
              </h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Ci sono momenti in cui lavorare di più non basta. Il problema non è l&apos;impegno, ma l&apos;assenza di una struttura che aiuti a scegliere.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Hai troppe priorità aperte</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Tutto sembra urgente, ma alla fine della settimana resta la sensazione di non aver fatto ciò che contava davvero.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Usi molti strumenti, ma senza sistema</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                App, note, documenti, AI, task list. Gli strumenti aumentano, ma la direzione non diventa più chiara.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Hai esperienza, ma fatichi a trasformarla in metodo</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Dopo i 40 anni il valore non è ricominciare da zero, ma organizzare meglio ciò che hai già imparato.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Parti bene, poi perdi continuità</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Il problema non è iniziare. Il problema è mantenere controllo e direzione quando tornano urgenze, lavoro e imprevisti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COSA CAMBIA QUANDO LO APPLICHI ───────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Cosa cambia</h2>
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-medium leading-snug">
                  Cosa cambia quando il metodo entra nel lavoro
                </h3>
                <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                  Successo in 3 Passi non promette una vita senza caos. Offre una sequenza per riconoscerlo prima, ridurlo meglio e non lasciare che ogni settimana riparta da zero.
                </p>
              </div>
              <ul className="space-y-5 border-t border-hub-border/40 pt-8">
                {[
                  "Le attività diventano più visibili.",
                  "Le priorità diventano più leggibili.",
                  "Gli strumenti smettono di accumularsi senza criterio.",
                  "L'intelligenza artificiale entra in un processo, non in modo casuale.",
                  "La revisione diventa parte del lavoro, non un'aggiunta.",
                ].map((punto) => (
                  <li key={punto} className="flex items-start gap-4 text-hub-ink-muted text-base leading-relaxed font-light">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-hub-gold flex-shrink-0" />
                    {punto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL RUOLO DELL'AI ─────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">L&apos;intelligenza artificiale</h2>
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-medium leading-snug">
                  L&apos;AI funziona meglio quando entra in un metodo
                </h3>
                <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                  L&apos;intelligenza artificiale può aiutare a scrivere, riordinare, sintetizzare, analizzare e produrre. Ma senza criteri rischia di diventare solo un altro strumento da inseguire. Nel metodo Successo in 3 Passi, l&apos;AI non sostituisce l&apos;esperienza: la aiuta a diventare più ordinata, più utilizzabile e più concreta.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-hub-border/40 pt-10">
                <div className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Prima la direzione</p>
                  <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                    Capire cosa conta prima di chiedere all&apos;AI di produrre.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Poi la struttura</p>
                  <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                    Usare l&apos;AI per organizzare, sintetizzare e rendere più leggibile il lavoro.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Infine il controllo</p>
                  <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                    Usare strumenti e revisioni per mantenere continuità nel tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DA DOVE INIZIARE ─────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Da dove iniziare</h2>
            <div className="space-y-8">
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Il primo passo non è cambiare tutto. È fermarsi, vedere con chiarezza cosa sta occupando spazio e iniziare a rimettere ordine. Per questo il metodo è collegato al libro e all&apos;estratto gratuito: non per aggiungere teoria, ma per iniziare da un esercizio concreto.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 pt-2">
                <Link href="/estratto" className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors">
                  Scarica l&apos;estratto gratuito
                </Link>
                <Link href="/successo-in-3-passi" className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors">
                  Scopri il libro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL LIBRO ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-warm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Il Manifesto Operativo</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">
            Il metodo nasce dal libro <br className="hidden md:block" />
            <span className="italic text-hub-gold">Successo in 3 Passi.</span>
          </h2>
          <p className="text-lg text-hub-ink-muted leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Il libro è il manifesto completo del metodo. Il sito ne è l'estensione pratica: articoli, esercizi, strumenti, area riservata e contenuti futuri nascono da questa struttura.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/estratto" className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
              Prova il primo passo
            </Link>
            <Link href="/successo-in-3-passi" className="btn-outline px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
              Scopri il libro
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl">
            <NewsletterCTA />
          </div>
        </div>
      </section>
    </main>
  );
}
