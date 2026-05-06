import type { Metadata } from "next";
import { verticals } from "@/content/verticals";
import { mepaFaqs } from "@/content/faqs";
import EditorialHero from "@/components/EditorialHero";
import MethodReconnect from "@/components/MethodReconnect";
import CrossLinkInline from "@/components/CrossLinkInline";
import MethodPillars from "@/components/MethodPillars";
import ProofRibbon from "@/components/ProofRibbon";
import FAQSection from "@/components/FAQSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import CrossLinkFooter from "@/components/CrossLinkFooter";

const v = verticals["fatturato-garantito"];

export const metadata: Metadata = {
  title: "Fatturato Garantito | Passo 3A del Metodo Successo in 3 Passi — Fabio Micale",
  description:
    "Vendi alla Pubblica Amministrazione con un sistema, non con la fortuna. Fatturato Garantito è il Passo 3A del Metodo Successo in 3 Passi: protocollo MEPA Elite per costruire ricavi prevedibili dalla PA.",
  alternates: { canonical: "https://www.fabiomicale.com/fatturato-garantito" },
  openGraph: {
    title: "Fatturato Garantito — Passo 3A del Metodo Successo in 3 Passi",
    description:
      "Passo 3A del Metodo Successo in 3 Passi. Vendere alla PA senza improvvisazione.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatturato Garantito — Passo 3A del Metodo",
    description:
      "Passo 3A del Metodo Successo in 3 Passi. Vendere alla PA senza improvvisazione.",
  },
};

export default function FatturatoGarantitoPage() {
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
      <MethodReconnect step="3A" domain={v.methodReconnectDomain} />
      <CrossLinkInline />
      <MethodPillars context="fatturato-garantito" />
      <ProofRibbon filter="fatturato-garantito" />
      <FAQSection
        items={mepaFaqs}
        theme="mepa"
        title="Domande sul Protocollo MEPA"
        subtitle="Tutto quello che devi sapere prima di partecipare a una gara pubblica."
      />
      <NewsletterCTA />
      <CrossLinkFooter currentVertical="fatturato-garantito" />
    </main>
  );
}
