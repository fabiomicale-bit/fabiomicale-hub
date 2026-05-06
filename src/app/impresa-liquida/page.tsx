import type { Metadata } from "next";
import { verticals } from "@/content/verticals";
import { liquidaFaqs } from "@/content/faqs";
import EditorialHero from "@/components/EditorialHero";
import MethodReconnect from "@/components/MethodReconnect";
import CrossLinkInline from "@/components/CrossLinkInline";
import MethodPillars from "@/components/MethodPillars";
import ProofRibbon from "@/components/ProofRibbon";
import FAQSection from "@/components/FAQSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import CrossLinkFooter from "@/components/CrossLinkFooter";

const v = verticals["impresa-liquida"];

export const metadata: Metadata = {
  title: "Impresa Liquida | Passo 2 del Metodo Successo in 3 Passi — Fabio Micale",
  description:
    "Rimetti struttura alla tua impresa. Impresa Liquida è il Passo 2 del Metodo Successo in 3 Passi: automatizza i processi, forma il team e costruisci un'azienda che funziona senza la tua presenza costante.",
  alternates: { canonical: "https://www.fabiomicale.com/impresa-liquida" },
  openGraph: {
    title: "Impresa Liquida — Passo 2 del Metodo Successo in 3 Passi",
    description:
      "Passo 2 del Metodo Successo in 3 Passi. Un'impresa che funziona anche senza di te.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impresa Liquida — Passo 2 del Metodo",
    description:
      "Passo 2 del Metodo Successo in 3 Passi. Un'impresa che funziona anche senza di te.",
  },
};

export default function ImpresaLiquidaPage() {
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
      <MethodReconnect step={2} domain={v.methodReconnectDomain} />
      <CrossLinkInline />
      <MethodPillars context="impresa-liquida" />
      <ProofRibbon filter="impresa-liquida" />
      <FAQSection
        items={liquidaFaqs}
        theme="liquida"
        title="Domande sul Protocollo"
        subtitle="Analizziamo le dinamiche della libertà aziendale."
      />
      <NewsletterCTA />
      <CrossLinkFooter currentVertical="impresa-liquida" />
    </main>
  );
}
