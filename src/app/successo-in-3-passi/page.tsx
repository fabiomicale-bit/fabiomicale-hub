import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EditorialHero from "@/components/EditorialHero";
import NewsletterCTA from "@/components/NewsletterCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Successo in 3 Passi — Edizione 2026",
  url: "https://www.fabiomicale.com/successo-in-3-passi",
  description: "Il libro manifesto di Fabio Micale per la rinascita professionale Over 40 nell’era dell’intelligenza artificiale.",
  inLanguage: "it-IT",
  genre: "Business & Self-Evolution",
  author: {
    "@type": "Person",
    "@id": "https://www.fabiomicale.com/#person",
    name: "Fabio Micale",
    url: "https://www.fabiomicale.com/chi-sono",
  },
};

export const metadata: Metadata = {
  title: "Successo in 3 Passi — Edizione 2026 | Fabio Micale",
  description: "Il libro manifesto di Fabio Micale per la rinascita professionale Over 40 nell’era dell’intelligenza artificiale.",
  alternates: { canonical: "https://www.fabiomicale.com/successo-in-3-passi" },
};

export default function SuccessoIn3PassiPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── HERO ─────────────────────────────────────────────── */}
      <EditorialHero
        variant="book"
        eyebrow="Il Libro Manifesto"
        title="Successo in 3 Passi"
        titleAccent="Edizione 2026"
        subtitle="Il metodo pratico per professionisti Over 40 che vogliono fermare il caos, rimettere struttura e costruire una nuova direzione personale e professionale nell’era dell’intelligenza artificiale."
        primaryCTA={{ 
          label: "Estratto disponibile a breve", 
          href: "#estratto",
          disabled: true,
          disclaimer: "I materiali gratuiti saranno attivati nella prossima fase di lancio."
        }}
        image={{
          src: "/book-mockup-3d.png",
          alt: "Copertina 3D Successo in 3 Passi",
          priority: true
        }}
      />

      {/* ── SEZIONE 1 — NON UN LIBRO MOTIVAZIONALE ────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Il Manifesto Operativo</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 leading-tight">
            Non un libro <span className="italic text-hub-gold">motivazionale.</span>
          </h2>
          <p className="text-xl text-hub-ink-muted leading-relaxed font-light">
            Questo libro non nasce per motivarti per qualche ora. Nasce per darti una sequenza pratica: fermare il caos, rimettere struttura e mantenere il controllo. Non promette scorciatoie. Propone un metodo.
          </p>
        </div>
      </section>

      {/* ── SEZIONE 2 — IL METODO IN 3 PASSI ──────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-medium">Il Metodo in 3 Passi</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Ferma il Caos",
                desc: "Prima di crescere devi ridurre il rumore. Questo passo serve a ritrovare lucidità, capire cosa ti blocca e distinguere ciò che conta da ciò che consuma energia."
              },
              {
                step: "02",
                title: "Rimetti Struttura",
                desc: "Trasformi esperienza, errori e obiettivi in un sistema operativo personale: priorità, routine, strumenti, decisioni e azioni concrete."
              },
              {
                step: "03",
                title: "Mantieni il Controllo",
                desc: "Costruisci continuità. Usi metodo, verifica e intelligenza artificiale pratica per non ricadere nella confusione e mantenere la rotta."
              }
            ].map((p, i) => (
              <div key={i} className="card-editorial p-10 flex flex-col h-full bg-hub-white">
                <span className="text-4xl font-serif italic text-hub-gold/30 mb-6">{p.step}</span>
                <h3 className="text-xl font-bold text-hub-ink mb-4 uppercase tracking-wider">{p.title}</h3>
                <p className="text-hub-ink-muted text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 3 — PER CHI È ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6">Per chi è questo libro</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Per professionisti Over 40 che sentono di avere ancora molto da costruire.",
              "Per chi ha esperienza, ma oggi vive troppa confusione.",
              "Per chi vuole usare l’AI senza farsi travolgere dagli slogan.",
              "Per chi non cerca motivazione, ma strumenti.",
              "Per chi vuole ripartire con ordine, metodo e direzione."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-hub-cream/30 rounded-2xl border border-hub-border/50">
                 <svg className="w-5 h-5 text-hub-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
                 <p className="text-sm text-hub-ink font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 4 — COSA TROVI NEL LIBRO ──────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-medium mb-12">Cosa trovi nel libro</h2>
              <ul className="space-y-8">
                {[
                  { t: "Il Metodo Successo in 3 Passi", d: "Spiegato in modo semplice, analitico e immediatamente operativo." },
                  { t: "Esercizi pratici", d: "Attività guidate per rimettere ordine subito nel tuo flusso di lavoro." },
                  { t: "Riflessioni Over 40", d: "Un'analisi specifica per chi deve riprogettare la propria identità professionale." },
                  { t: "AI Pratica", d: "Come usare l’intelligenza artificiale come supporto operativo, non come distrazione." },
                  { t: "Sistemi di controllo", d: "Trasforma caos, esperienza ed errori in una struttura che regge nel tempo." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-hub-gold/10 flex items-center justify-center flex-shrink-0 text-hub-gold font-bold group-hover:bg-hub-gold group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-medium mb-2">{item.t}</h4>
                      <p className="text-hub-ink-muted text-sm leading-relaxed font-light">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full max-w-sm mx-auto">
               <Image 
                src="/book-mockup-3d.png"
                alt="Successo in 3 Passi — Fabio Micale"
                width={450}
                height={600}
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute -inset-10 bg-hub-gold/[0.05] blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 5 — BIO AUTORE ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 grayscale opacity-50">
             <span className="text-hub-gold font-serif text-3xl">FM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">Fabio Micale</h2>
          <p className="text-lg text-hub-ink-muted leading-relaxed font-light mb-10">
            Fabio Micale è scrittore e formatore. È autore del Metodo Successo in 3 Passi, nato per aiutare professionisti Over 40 a ricostruire direzione, metodo e controllo in una fase storica segnata da cambiamento, rumore e intelligenza artificiale. Il suo approccio non parte dalla motivazione, ma dalla costruzione di strumenti pratici.
          </p>
          <div className="inline-block border-t border-hub-border pt-6">
            <p className="text-hub-gold text-[11px] font-bold uppercase tracking-[0.6em]">Non ti vendo sogni. Ti do strumenti.</p>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 6 — CTA FINALE ────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white text-center">
         <div className="max-w-3xl mx-auto">
            <div className="badge-editorial border-white/20 text-hub-gold mb-8 mx-auto">Evoluzione Pubblica</div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Il percorso sta prendendo <span className="text-hub-gold italic">forma.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-16">
              Il libro, l’estratto gratuito e i materiali collegati al Metodo Successo in 3 Passi sono in fase di completamento. Il sito resta live per accompagnare la costruzione pubblica del progetto.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10 items-start mb-16 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="p-10 bg-white/5 rounded-3xl border border-white/10 w-full mb-4">
                   <h3 className="text-xl font-serif mb-4 text-hub-gold">Estratto Gratuito</h3>
                   <p className="text-white/40 text-sm font-light mb-0">Disponibile a breve per gli iscritti alla newsletter.</p>
                   <div className="mt-8 btn-outline border-white/20 text-white/40 w-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] cursor-not-allowed">
                      Presto disponibile
                   </div>
                </div>
                <p className="text-[10px] font-serif italic text-hub-gold/40 px-4">
                  L'estratto sarà inviato automaticamente al completamento della fase di revisione.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-10 bg-white/5 rounded-3xl border border-white/10 w-full mb-4">
                   <h3 className="text-xl font-serif mb-4 text-hub-gold">Il Libro Completo</h3>
                   <p className="text-white/40 text-sm font-light mb-0">L'acquisto sarà attivato al termine della fase di lancio.</p>
                   <div className="mt-8 btn-gold opacity-30 w-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] cursor-not-allowed">
                      Lancio in corso
                   </div>
                </div>
                <p className="text-[10px] font-serif italic text-hub-gold/40 px-4">
                  Sarai avvisato non appena il sistema di pre-ordine sarà operativo.
                </p>
              </div>
            </div>

            <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
              Stiamo lavorando per garantirti la migliore esperienza operativa.
            </p>
         </div>
      </section>

      {/* ── SEZIONE 7 — NEWSLETTER STANDBY ────────────────────────── */}
      <NewsletterCTA />

    </main>
  );
}
