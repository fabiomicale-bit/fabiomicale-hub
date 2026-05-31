import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/EditorialHero";
import MetodoSection from "@/components/MetodoSection";
import BookFeature from "@/components/BookFeature";
import NewsletterCTA from "@/components/NewsletterCTA";
import AuthorBio from "@/components/AuthorBio";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Fabio Micale | Metodo Successo in 3 Passi per Over 40",
  },
  description:
    "Fabio Micale, scrittore e formatore, aiuta professionisti Over 40 a ripartire con metodo, lucidità e strumenti pratici nell’era dell’intelligenza artificiale.",
  alternates: { canonical: "https://www.fabiomicale.com" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── SEZIONE 1 — HERO ─────────────────────────────────────────────── */}
      <EditorialHero
        title="Ripartire dopo i 40 anni non richiede motivazione."
        titleAccent="Richiede metodo."
        subtitle="Sono Fabio Micale, autore di Successo in 3 Passi. Aiuto professionisti Over 40 a fermare il caos, rimettere struttura e costruire una nuova direzione personale e professionale nell’era dell’intelligenza artificiale."
        primaryCTA={{
          label: "Ricevi i primi capitoli — gratis",
          href: "/estratto",
          disabled: false,
          disclaimer: "Ricevi gratuitamente l’estratto ufficiale del libro e il primo esercizio pratico del Metodo."
        }}
        secondaryCTA={{ 
          label: "Scopri il Metodo in 3 Passi", 
          href: "/il-metodo" 
        }}
        image={{
          src: "/fabio-hero-transparent.png",
          alt: "Fabio Micale",
          priority: true,
          flip: true
        }}
      />

      {/* Payoff visibile */}
      <div className="bg-hub-cream border-y border-hub-border py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-hub-gold animate-pulse">
            Non ti vendo sogni. Ti do strumenti.
          </p>
        </div>
      </div>

      {/* ── SEZIONE 2 — PROBLEMA ────────────────────────────────────────── */}
      <section className="py-32 px-6 relative bg-hub-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 leading-tight">
            Il problema non è la tua età. <br />
            <span className="italic text-hub-gold">È la mancanza di un sistema.</span>
          </h2>
          <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
            <p>
              Dopo i 40 anni molti professionisti non sono finiti. Sono pieni di rumore: decisioni sospese, competenze da aggiornare, strumenti nuovi, lavoro che cambia, intelligenza artificiale che avanza e tempo che sembra ridursi.
            </p>
            <p>
              Il Metodo Successo in 3 Passi nasce per questo: rimettere ordine dove oggi c’è dispersione.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 3 — IL METODO IN 3 PASSI ────────────────────────────── */}
      <MetodoSection />

      {/* ── DA DOVE INIZIARE ─────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Da dove iniziare</h2>
            <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
              Se arrivi qui per la prima volta, non devi leggere tutto subito. Scegli il punto più utile per il momento in cui ti trovi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Capire il metodo</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Parti dai tre passaggi: ferma il caos, rimetti struttura, mantieni il controllo.
              </p>
              <Link href="/il-metodo" className="text-hub-gold text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity block pt-2">
                Scopri il metodo
              </Link>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Leggere l&apos;estratto</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Ricevi i primi capitoli del libro e il primo esercizio pratico per iniziare senza impegno.
              </p>
              <Link href="/estratto" className="text-hub-gold text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity block pt-2">
                Scarica l&apos;estratto
              </Link>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Seguire gli articoli</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Approfondisci temi legati a lavoro, metodo, AI pratica e ripartenza professionale dopo i 40 anni.
              </p>
              <Link href="/blog" className="text-hub-gold text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity block pt-2">
                Leggi il blog
              </Link>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Conoscere il libro</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Successo in 3 Passi — Edizione 2026 raccoglie il metodo in una sequenza pratica e applicabile.
              </p>
              <Link href="/successo-in-3-passi" className="text-hub-gold text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity block pt-2">
                Scopri il libro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UN SISTEMA, NON UNA RACCOLTA ─────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Il sistema</h2>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-medium leading-snug">
                Un sistema, non una raccolta di contenuti
              </h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Il sito non nasce per aggiungere altro rumore. Libro, articoli, newsletter ed estratto lavorano nella stessa direzione: aiutarti a rimettere ordine, scegliere meglio e costruire continuità nel tempo.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Il libro dà la struttura</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Successo in 3 Passi è il punto di partenza del metodo: una sequenza per fermare il caos, rimettere struttura e mantenere il controllo.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Il blog approfondisce</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Gli articoli sviluppano i temi del metodo: lavoro, priorità, AI pratica, ripartenza professionale e revisione.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">La newsletter mantiene il passo</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Un Passo Avanti porta ogni settimana un contenuto pratico per non lasciare il metodo fermo sulla carta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE — PRIMA SERIE ──────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="badge-editorial mx-auto w-fit">Cosa dicono</div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Non cercavo un altro corso. Cercavo un modo per rimettere ordine in quello che facevo già. Il metodo mi ha dato esattamente quello.&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-hub-gold tracking-wide">Simona B.</p>
                <p className="text-xs text-hub-ink-muted mt-1">Responsabile HR</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Usavo l&apos;AI da mesi, ma senza un metodo era solo un altro strumento aperto sul desktop. Successo in 3 Passi ha cambiato il modo in cui la integro nel lavoro.&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-hub-gold tracking-wide">Luca V.</p>
                <p className="text-xs text-hub-ink-muted mt-1">Imprenditore</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;La newsletter Un Passo Avanti è l&apos;unica che leggo ogni settimana. Concreta, breve, applicabile. Non ci sono promesse, solo strumenti.&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-hub-gold tracking-wide">Carla M.</p>
                <p className="text-xs text-hub-ink-muted mt-1">Consulente strategica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COSA TROVI QUI ───────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Cosa trovi qui</h2>
            <div className="space-y-10">
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                I contenuti di questo sito sono pensati per professionisti che non cercano motivazione temporanea, ma strumenti per lavorare meglio e con più ordine.
              </p>
              <ul className="space-y-5 border-t border-hub-border/40 pt-8">
                {[
                  "Esercizi pratici per fare chiarezza.",
                  "Articoli per leggere meglio il cambiamento.",
                  "Strumenti per usare l’AI senza confusione.",
                  "Riflessioni per professionisti over 40.",
                  "Metodo per trasformare esperienza in direzione.",
                  "Newsletter per mantenere continuità nel tempo.",
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

      {/* ── IL PRIMO PASSO RESTA SEMPLICE ────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Il primo passo</h2>
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-medium leading-snug">
                Il primo passo resta semplice
              </h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Non serve decidere tutto adesso. Puoi iniziare dall&apos;estratto gratuito, leggere il metodo e capire se questo approccio fa per te.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 pt-2">
                <Link href="/estratto" className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors">
                  Ricevi l&apos;estratto gratuito
                </Link>
                <Link href="/successo-in-3-passi" className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors">
                  Scopri Successo in 3 Passi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE — SECONDA SERIE ────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="badge-editorial mx-auto w-fit">Altre voci</div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Avevo provato molte cose dopo i 45 anni. Il problema era sempre lo stesso: iniziavo bene, poi perdevo il filo. Con questo metodo ho finalmente un sistema di revisione che regge.&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-hub-gold tracking-wide">Davide R.</p>
                <p className="text-xs text-hub-ink-muted mt-1">Manager in transizione</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Il libro non è fatto per essere letto in una volta. È fatto per essere usato. Ogni volta che rileggo un capitolo trovo qualcosa che posso applicare subito.&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-hub-gold tracking-wide">Elena P.</p>
                <p className="text-xs text-hub-ink-muted mt-1">Professionista, 47 anni</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Lavoro nella formazione da vent&apos;anni. Ho letto decine di libri sul metodo. Questo è uno dei pochi che non promette una vita perfetta, ma propone una sequenza che puoi iniziare domani mattina.&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-hub-gold tracking-wide">Roberto F.</p>
                <p className="text-xs text-hub-ink-muted mt-1">Formatore aziendale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 4 — IL LIBRO ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
                Il libro è il <br />
                <span className="italic text-hub-gold">punto di partenza.</span>
              </h2>
              <p className="text-lg text-hub-ink-muted leading-relaxed mb-10 font-light">
                Successo in 3 Passi non è solo un libro. È il manifesto operativo del metodo. Da qui nasce l’intero sito: articoli, esercizi, newsletter, area riservata, percorsi futuri e contenuti premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/estratto" className="btn-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center">
                  Ricevi i primi capitoli — gratis
                </Link>
                <Link href="/successo-in-3-passi" className="inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-border text-hub-ink hover:border-hub-gold transition-colors rounded-full text-center">
                  Scopri il libro
                </Link>
              </div>
            </div>
            <div className="order-2 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-lg animate-fade-in">
                <div className="absolute -inset-10 bg-hub-gold/[0.05] blur-[80px] rounded-full pointer-events-none" />
                <Image 
                  src="/mockup-estratto-home.png"
                  alt="Estratto gratuito del libro Successo in 3 Passi di Fabio Micale"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 5 — NEWSLETTER CENTRALE ────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-hub-border rounded-[40px] overflow-hidden shadow-2xl">
            <div className="p-12 md:p-20 text-center border-b border-hub-border bg-hub-cream/30">
               <h2 className="text-4xl font-serif font-medium mb-6">Un Passo Avanti</h2>
               <p className="text-hub-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-8">La newsletter settimanale per applicare il Metodo</p>
               <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                 Ogni settimana ricevi un contenuto pratico per rimettere ordine nel tuo percorso professionale: una riflessione, uno strumento, un esercizio o un’applicazione concreta dell’AI alla crescita Over 40.
               </p>
               <div className="inline-block bg-hub-gold/10 border border-hub-gold/20 px-6 py-3 rounded-full">
                 <p className="text-hub-ink text-xs font-medium">
                   🎁 Iscrivendoti ricevi anche un <span className="text-hub-gold font-bold">estratto gratuito</span> di Successo in 3 Passi.
                 </p>
               </div>
            </div>
            <NewsletterCTA variant="book-excerpt" />
          </div>
        </div>
      </section>

      {/* ── SEZIONE 6 — CTA ESTRATTO ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="badge-editorial border-white/20 text-hub-gold mb-8 mx-auto">Inizia da qui</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
            Il primo passo è <span className="text-hub-gold italic">gratuito.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
            Ricevi i primi capitoli di Successo in 3 Passi e il primo esercizio pratico del Metodo. Via email, gratis, subito.
          </p>
          <Link
            href="/estratto"
            className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] inline-block"
          >
            Ricevi l&apos;estratto gratuito
          </Link>
          <p className="text-white/30 text-[10px] mt-6 uppercase tracking-widest font-medium">
            PDF via email. Zero spam. Cancellazione in ogni momento.
          </p>
        </div>
      </section>

      {/* ── SEZIONE 7 — PER CHI È QUESTO SITO ────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6">Per chi è questo sito</h2>
            <p className="text-hub-ink-muted text-lg font-light leading-relaxed">
              Questo sito è per chi non vuole ricominciare da zero, ma ricominciare con ordine.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Hai più di 40 anni e senti che devi ripensare il tuo futuro professionale.",
              "Hai esperienza, ma non vuoi restare fermo a vecchi modelli.",
              "Vuoi usare l’intelligenza artificiale senza farti travolgere dalla moda del momento.",
              "Vuoi metodo, non motivazione temporanea.",
              "Vuoi strumenti pratici, non slogan."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-hub-cream/50 rounded-2xl border border-hub-border/50">
                <div className="w-6 h-6 rounded-full bg-hub-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-hub-gold" />
                </div>
                <p className="text-hub-ink font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 8 — CHI È FABIO ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="card-editorial p-12 md:p-20">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">Chi è Fabio Micale</h2>
                <p className="text-lg text-hub-ink-muted leading-relaxed mb-10 font-light">
                  Fabio Micale è scrittore e formatore. Da oltre trent’anni lavora su crescita personale, metodo, impresa e sviluppo professionale. Con Successo in 3 Passi ha trasformato esperienza, errori, ripartenze e strumenti pratici in un sistema pensato per chi vuole ricostruire direzione dopo i 40 anni.
                </p>
                <Link href="/chi-sono" className="btn-gold px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Leggi la storia di Fabio
                </Link>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-hub-border shadow-2xl">
                <Image
                  src="/fabio-micale-speaker-square.webp"
                  alt="Fabio Micale durante un intervento formativo"
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-hub-gold/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
