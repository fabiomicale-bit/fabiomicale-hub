import type { Metadata } from "next";
import EditorialHero from "@/components/EditorialHero";
import ManifestoSection from "@/components/ManifestoSection";
import MethodPillars from "@/components/MethodPillars";
import DiagnosticGrid from "@/components/DiagnosticGrid";
import ProofRibbon from "@/components/ProofRibbon";
import BookFeature from "@/components/BookFeature";
import NewsletterCTA from "@/components/NewsletterCTA";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Fabio Micale | Metodo Successo in 3 Passi",
  description:
    "Ferma il caos. Rimetti struttura. Mantieni il controllo. Il metodo in tre passi per professionisti e imprenditori Over 40.",
  alternates: { canonical: "https://www.fabiomicale.com" },
  openGraph: {
    title: "Fabio Micale | Metodo Successo in 3 Passi",
    description:
      "Ferma il caos. Rimetti struttura. Mantieni il controllo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Micale | Metodo Successo in 3 Passi",
    description:
      "Ferma il caos. Rimetti struttura. Mantieni il controllo.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hub-bg">
      <EditorialHero
        variant="hub"
        title="Non ti vendo sogni."
        titleAccent="Ti do strumenti."
        subtitle="Ferma il caos. Rimetti struttura. Mantieni il controllo. Il metodo in tre passi per ricostruire lavoro, impresa e direzione personale."
        primaryCTA={{ label: "Scopri da quale passo ripartire", href: "#metodo" }}
        secondaryCTA={{ label: "Leggi il manifesto del metodo", href: "/successo-in-3-passi" }}
      />
      <ManifestoSection />
      <section id="metodo">
        <MethodPillars context="hub" />
      </section>
      <DiagnosticGrid />
      <ProofRibbon />
      <BookFeature />
      <NewsletterCTA />
      <AuthorBio variant="short" />
    </main>
  );
}
