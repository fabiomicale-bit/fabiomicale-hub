import type { Metadata } from "next";
import { verticals } from "@/content/verticals";
import { puntoZeroFaqs } from "@/content/faqs";
import EditorialHero from "@/components/EditorialHero";
import MethodReconnect from "@/components/MethodReconnect";
import CrossLinkInline from "@/components/CrossLinkInline";
import MethodPillars from "@/components/MethodPillars";
import ProofRibbon from "@/components/ProofRibbon";
import FAQSection from "@/components/FAQSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import CrossLinkFooter from "@/components/CrossLinkFooter";

const v = verticals["punto-zero"];

export const metadata: Metadata = {
  title: "Punto Zero | Passo 1 del Metodo Successo in 3 Passi — Fabio Micale",
  description:
    "Ricostruire identità e direzione dopo i 40. Punto Zero è il Passo 1 del Metodo Successo in 3 Passi: ferma il caos, riconosci dove sei davvero, riparti con un sistema.",
  alternates: { canonical: "https://www.fabiomicale.com/punto-zero" },
  openGraph: {
    title: "Punto Zero — Passo 1 del Metodo Successo in 3 Passi",
    description:
      "Passo 1 del Metodo Successo in 3 Passi. Ricostruire identità e direzione dopo i 40.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punto Zero — Passo 1 del Metodo",
    description:
      "Passo 1 del Metodo Successo in 3 Passi. Ricostruire identità e direzione dopo i 40.",
  },
};

export default function PuntoZeroPage() {
  return (
    <main className="min-h-screen bg-hub-bg">
      <EditorialHero
        variant="vertical"
        eyebrow={v.eyebrow}
        title={v.heroTitle}
        titleAccent={v.heroAccent}
        subtitle={v.heroSubtitle}
        primaryCTA={v.primaryCTA}
      />
      <MethodReconnect step={1} domain={v.methodReconnectDomain} />
      <CrossLinkInline />
      <MethodPillars context="punto-zero" />
      <ProofRibbon filter="punto-zero" />
      <FAQSection
        items={puntoZeroFaqs}
        theme="hub"
        title="Domande sul Reset"
        subtitle="Svuotiamo il campo da ogni dubbio per ripartire con precisione."
      />
      <NewsletterCTA />
      <CrossLinkFooter currentVertical="punto-zero" />
    </main>
  );
}
