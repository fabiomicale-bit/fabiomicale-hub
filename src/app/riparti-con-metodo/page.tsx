import type { Metadata } from "next";

const URL = "https://www.fabiomicale.com/riparti-con-metodo";
const TITLE = "Riparti con Metodo | Fabio Micale";
const DESCRIPTION =
  "Percorso di 4 settimane per professionisti over 40 che vogliono fare ordine, scegliere una direzione concreta e costruire un piano sostenibile per ripartire.";
const CTA_HREF =
  "mailto:info@fabiomicale.com?subject=" +
  encodeURIComponent("Riparti con Metodo — Sono interessato") +
  "&body=" +
  encodeURIComponent(
    "Ciao Fabio,\n\nsono interessato a Riparti con Metodo (Beta).\n\nIn breve, la mia situazione:\n\n"
  );

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "it-IT",
  isPartOf: { "@id": "https://www.fabiomicale.com/#website" },
  author: { "@id": "https://www.fabiomicale.com/#person" },
};

const weeks = [
  { n: "1", text: "Fare ordine nella situazione attuale." },
  { n: "2", text: "Capire cosa proteggere, cosa portare con sé e cosa blocca davvero." },
  { n: "3", text: "Costruire e verificare alternative realistiche." },
  { n: "4", text: "Scegliere una direzione e costruire un piano concreto e sostenibile." },
];

const takeaways = [
  "Una situazione più chiara",
  "Priorità più definite",
  "Una direzione scelta",
  "Alternative valutate",
  "Un primo piano operativo",
  "Il prossimo test concreto da fare",
];

const forWho = [
  "hanno esperienza;",
  "sentono che qualcosa non funziona più;",
  "non vogliono buttare via ciò che hanno costruito;",
  "vogliono capire cosa fare prima di compiere mosse grandi;",
  "cercano metodo, non motivazione generica.",
];

const notIs = [
  "terapia",
  "consulenza medica",
  "promessa di lavoro",
  "corso motivazionale",
  "corso generico di AI",
  "scorciatoia per ricominciare da zero",
];

const beta = [
  { k: "4 settimane", v: "Percorso guidato" },
  { k: "5–8 persone", v: "Massimo partecipanti" },
  { k: "€147", v: "Prezzo Beta" },
  { k: "Asincrona", v: "Principalmente asincrona / semi-asincrona" },
];

function Cta() {
  return (
    <a
      href={CTA_HREF}
      data-cta="riparti-interesse"
      className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] inline-block"
    >
      SONO INTERESSATO
    </a>
  );
}

export default function RipartiConMetodoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-editorial opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-hub-bg via-hub-bg/80 to-hub-bg" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Beta</div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.05] tracking-tight mb-6">
            Riparti con <span className="italic text-hub-gold">Metodo</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light mb-6">
            4 settimane per fare ordine, scegliere una direzione e costruire un piano concreto per ripartire.
          </p>
          <p className="text-lg font-serif italic text-hub-ink mb-10">
            Ripartire dopo i 40 anni non richiede motivazione. Richiede metodo.
          </p>
          <Cta />
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="py-24 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">Il problema</h2>
          <div className="space-y-5 text-lg text-hub-ink-muted font-light leading-relaxed">
            <p>
              &laquo;Ho esperienza, ma non riesco a capire con chiarezza cosa fare adesso e come rimettermi in movimento.&raquo;
            </p>
            <p>
              Di solito il problema non è la mancanza di esperienza. Non è nemmeno mancanza di volontà o di capacità.
            </p>
            <p>Quello che manca, spesso, è ordine tra:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>quello che non funziona più;</li>
              <li>ciò che va protetto;</li>
              <li>ciò che sai già fare;</li>
              <li>le alternative possibili;</li>
              <li>il prossimo passo.</li>
            </ul>
            <p>Finché queste cose restano mescolate, ogni decisione sembra troppo grande.</p>
          </div>
        </div>
      </section>

      {/* ── COSA FAREMO ── */}
      <section className="py-24 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center">Cosa faremo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {weeks.map((w) => (
              <div key={w.n} className="p-6 bg-hub-white rounded-2xl border border-hub-border">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold mb-3">
                  Settimana {w.n}
                </p>
                <p className="text-base text-hub-ink font-light leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA PORTI A CASA ── */}
      <section className="py-24 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center">Cosa porti a casa</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {takeaways.map((t) => (
              <div key={t} className="flex items-start gap-4 p-5 bg-hub-white rounded-2xl border border-hub-border">
                <div className="w-7 h-7 rounded-full bg-hub-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-hub-ink font-light leading-relaxed pt-1">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PER CHI È ── */}
      <section className="py-24 px-6 bg-hub-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">Per chi è</h2>
          <p className="text-lg text-hub-ink-muted font-light leading-relaxed mb-5">
            Per professionisti over 40 che:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-hub-ink-muted font-light leading-relaxed mb-8">
            {forWho.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="text-lg text-hub-ink-muted font-light leading-relaxed">
            Se la tua situazione non coincide esattamente con questi esempi, non è un problema: il criterio principale è sentire il bisogno di fare ordine e scegliere il prossimo passo.
          </p>
        </div>
      </section>

      {/* ── COSA NON È ── */}
      <section className="py-24 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-hub-white rounded-2xl border border-hub-border">
            <h2 className="text-2xl font-serif font-medium mb-6">Riparti con Metodo non è:</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-hub-ink-muted font-light leading-relaxed">
              {notIs.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="text-sm text-hub-ink-muted font-light leading-relaxed mt-6">
              L&apos;intelligenza artificiale è uno strumento del percorso, usato dove serve davvero. Non è il prodotto.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMATO BETA ── */}
      <section className="py-24 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center">Formato Beta</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {beta.map((b) => (
              <div key={b.k} className="p-5 bg-hub-white rounded-2xl border border-hub-border text-center">
                <p className="text-2xl font-serif text-hub-gold mb-2">{b.k}</p>
                <p className="text-xs text-hub-ink-muted font-light leading-relaxed">{b.v}</p>
              </div>
            ))}
          </div>
          <p className="max-w-2xl mx-auto text-center text-base text-hub-ink-muted font-light leading-relaxed">
            Il percorso comprende materiale guidato, esercizi, accompagnamento ed eventuali momenti di gruppo. Questa è una versione Beta: serve anche a raccogliere feedback reali per migliorare il percorso.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="py-24 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
            Vuoi capire se Riparti con Metodo può essere adatto alla tua situazione?
          </h2>
          <Cta />
          <p className="text-hub-ink-light text-[10px] mt-4 uppercase tracking-widest font-medium">
            Si apre la tua email: scrivimi due righe sulla tua situazione. Ti rispondo io.
          </p>
        </div>
      </section>
    </main>
  );
}
