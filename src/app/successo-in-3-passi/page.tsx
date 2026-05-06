import type { Metadata } from "next";
import { book } from "@/content/book";
import EditorialHero from "@/components/EditorialHero";
import BookFeature from "@/components/BookFeature";
import MethodPillars from "@/components/MethodPillars";
import ProofRibbon from "@/components/ProofRibbon";
import AuthorBio from "@/components/AuthorBio";
import NewsletterCTA from "@/components/NewsletterCTA";
import CrossLinkFooter from "@/components/CrossLinkFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  url: "https://www.fabiomicale.com/successo-in-3-passi",
  description: book.description[0],
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
  title: "Successo in 3 Passi | Il Libro — Fabio Micale (Edizione 2026)",
  description:
    "Il protocollo ingegneristico per riprendere il controllo del tuo business. 24 capitoli, 27 esercizi, 5 casi studio reali. Edizione definitiva 2026.",
  alternates: { canonical: "https://www.fabiomicale.com/successo-in-3-passi" },
  openGraph: {
    title: "Successo in 3 Passi — Il Libro (Edizione 2026)",
    description:
      "Il protocollo ingegneristico per imprenditori Over 40. 27 esercizi, 5 casi studio, integrazione AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Successo in 3 Passi — Il Libro",
    description:
      "Il protocollo ingegneristico per imprenditori Over 40. Edizione definitiva 2026.",
  },
};

export default function SuccessoIn3PassiPage() {
  return (
    <main className="min-h-screen bg-hub-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EditorialHero
        variant="book"
        eyebrow="Il Libro · Edizione 2026"
        title={book.title}
        subtitle={book.description[1]}
        primaryCTA={{ label: "Prenota la Tua Copia", href: "#estratto" }}
      />
      <BookFeature />
      <MethodPillars context="book" />
      <ProofRibbon />
      <AuthorBio variant="full" />
      <section className="py-16 px-6 bg-hub-bg-alt border-t border-hub-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
            Archivio Storico
          </p>
          <p className="text-hub-ink-muted font-light leading-relaxed">
            Hai letto la prima edizione del 2017? L&apos;edizione 2026 è una riscrittura completa —
            24 capitoli contro i 14 originali, 27 esercizi, integrazione AI. La versione del 2017{" "}
            <a
              href="https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hub-ink border-b border-hub-gold/30 hover:border-hub-gold transition-colors"
            >
              è ancora disponibile su Amazon
            </a>{" "}
            — ma il metodo aggiornato è in queste pagine.
          </p>
        </div>
      </section>
      <NewsletterCTA variant="book-excerpt" />
      <CrossLinkFooter currentVertical="book" />
    </main>
  );
}
