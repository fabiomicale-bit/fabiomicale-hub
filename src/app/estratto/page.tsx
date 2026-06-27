import type { Metadata } from "next";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Scarica l'estratto gratuito di Successo in Tre Passi",
  description:
    "Ricevi gratis i primi capitoli di Successo in Tre Passi — Edizione 2026 e scopri il metodo per fermare il caos, rimettere struttura e mantenere il controllo.",
  keywords: [
    "estratto gratuito",
    "Successo in Tre Passi",
    "primi capitoli",
    "metodo per chi ha superato i quaranta",
    "fermare il caos",
    "rimettere struttura",
    "mantenere il controllo",
  ],
  alternates: { canonical: "https://www.fabiomicale.com/estratto" },
  openGraph: {
    title: "Scarica l'estratto gratuito di Successo in Tre Passi",
    description:
      "Ricevi gratis i primi capitoli di Successo in Tre Passi — Edizione 2026 e scopri il metodo per fermare il caos, rimettere struttura e mantenere il controllo.",
    url: "https://www.fabiomicale.com/estratto",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarica l'estratto gratuito di Successo in Tre Passi",
    description:
      "Ricevi gratis i primi capitoli di Successo in Tre Passi — Edizione 2026 e scopri il metodo per fermare il caos, rimettere struttura e mantenere il controllo.",
    images: ["/og-image.jpg"],
  },
};

export default function EstrattoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-editorial opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-hub-bg via-hub-bg/80 to-hub-bg" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Edizione 2026</div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.05] tracking-tight mb-6">
            I primi capitoli di{" "}
            <Link href="/successo-in-3-passi" className="italic text-hub-gold hover:underline underline-offset-4">Successo in Tre Passi.</Link>{" "}
            Gratis.
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light mb-10">
            Ricevi l&apos;estratto gratuito del libro e il primo passo pratico per ricostruire direzione, competenze e reddito con metodo e AI.
          </p>
          <Link
            href="#estratto"
            className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] inline-block"
          >
            Inviami l&apos;estratto gratuito
          </Link>
          <p className="text-hub-ink-light text-[10px] mt-4 uppercase tracking-widest font-medium">
            Riceverai il PDF via email. Zero spam. Cancellazione possibile in ogni momento.
          </p>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────── */}
      <NewsletterCTA variant="book-excerpt" />

      {/* ── COSA RICEVI ──────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium">Cosa trovi nell&apos;estratto gratuito</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Estratto gratuito in PDF",
                desc: "I primi capitoli di Successo in 3 Passi — Edizione 2026, pronti da leggere sul tuo dispositivo.",
              },
              {
                title: "Una prima mappa del Metodo",
                desc: "Non un riassunto promozionale, ma un ingresso concreto nel percorso: fermare il caos, scegliere una direzione, mantenere il controllo.",
              },
              {
                title: "Un esercizio pratico iniziale",
                desc: "Una traccia semplice per cominciare a rimettere ordine nel tuo lavoro, nelle priorità e nelle decisioni.",
              },
              {
                title: "Un invito a continuare il percorso",
                desc: "Se lo desideri, puoi ricevere anche la newsletter “Un Passo Avanti”, con contenuti pratici per applicare il Metodo dopo i quaranta.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-hub-white rounded-2xl border border-hub-border"
              >
                <div className="w-8 h-8 rounded-full bg-hub-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-hub-ink mb-1">{item.title}</h3>
                  <p className="text-sm text-hub-ink-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PER CHI È ─────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-4">Per chi è questo estratto</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Hai superato i quaranta o i cinquanta anni e senti che è arrivato il momento di ripensare la tua direzione professionale — non per paura, ma per scelta.",
              "Hai esperienza, competenze, e qualcosa da costruire. Ma il rumore attorno è troppo e il metodo ti manca.",
              "Vuoi usare l'intelligenza artificiale in modo pratico e operativo, non come argomento di conversazione.",
              "Cerchi strumenti concreti e una sequenza chiara — non motivazione vuota, non slogan, non soluzioni magiche.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-hub-cream/50 rounded-2xl border border-hub-border/50"
              >
                <div className="w-6 h-6 rounded-full bg-hub-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-hub-gold font-bold text-[10px]">{i + 1}</span>
                </div>
                <p className="text-sm text-hub-ink font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHI È FABIO ──────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <span className="text-hub-gold font-serif text-3xl">FM</span>
          </div>
          <h2 className="text-3xl font-serif font-medium mb-8">Chi è Fabio Micale</h2>
          <p className="text-lg text-hub-ink-muted leading-relaxed font-light mb-8">
            Fabio Micale è autore e formatore. Aiuta persone adulte, professionisti e over 40 a ricostruire metodo, direzione e competenze pratiche in una fase storica dominata dall&apos;intelligenza artificiale.
          </p>
          <div className="inline-block border-t border-hub-border pt-6">
            <p className="text-hub-gold text-[11px] font-bold uppercase tracking-[0.6em]">
              Non ti vendo sogni. Ti do strumenti.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER MINIMO ─────────────────────────────────────── */}
      <footer className="py-12 px-6 bg-hub-bg border-t border-hub-border text-center">
        <div className="flex justify-center gap-8 mb-6">
          <Link href="/privacy" className="text-hub-ink/50 hover:text-hub-ink text-[10px] font-bold uppercase tracking-widest transition-colors">
            Privacy
          </Link>
          <Link href="/cookies" className="text-hub-ink/50 hover:text-hub-ink text-[10px] font-bold uppercase tracking-widest transition-colors">
            Cookie
          </Link>
        </div>
        <p className="text-hub-ink/30 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Fabio Micale — Tutti i diritti riservati
        </p>
      </footer>
    </main>
  );
}
