import type { Metadata } from "next";
import { verticals } from "@/content/verticals";
import { agencyFaqs } from "@/content/faqs";
import EditorialHero from "@/components/EditorialHero";
import MethodReconnect from "@/components/MethodReconnect";
import CrossLinkInline from "@/components/CrossLinkInline";
import MethodPillars from "@/components/MethodPillars";
import ProofRibbon from "@/components/ProofRibbon";
import FAQSection from "@/components/FAQSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import CrossLinkFooter from "@/components/CrossLinkFooter";

const v = verticals["agenzia-business"];

export const metadata: Metadata = {
  title: "Agenzia Business | Passo 3B del Metodo Successo in 3 Passi — Fabio Micale",
  description:
    "Acquisisci clienti con sistemi AI, non con la fortuna. Agenzia Business è il Passo 3B del Metodo Successo in 3 Passi: lead generation automatizzata per professionisti e imprenditori che vogliono smettere di dipendere dal passaparola.",
  alternates: { canonical: "https://www.fabiomicale.com/agenzia-business" },
  openGraph: {
    title: "Agenzia Business — Passo 3B del Metodo Successo in 3 Passi",
    description:
      "Passo 3B del Metodo Successo in 3 Passi. Acquisire clienti con sistemi AI, non con la fortuna.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenzia Business — Passo 3B del Metodo",
    description:
      "Passo 3B del Metodo Successo in 3 Passi. Acquisire clienti con sistemi AI, non con la fortuna.",
  },
};

export default function AgenziaBusinessPage() {
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
      <MethodReconnect step="3B" domain={v.methodReconnectDomain} />
      <CrossLinkInline />
      <MethodPillars context="agenzia-business" />
      <ProofRibbon filter="agenzia-business" />
      <FAQSection
        items={agencyFaqs}
        theme="agency"
        title="Domande sul Sistema"
        subtitle="Analizziamo le dinamiche dell'acquisizione contatti tramite AI."
      />
      <NewsletterCTA />
      <CrossLinkFooter currentVertical="agenzia-business" />
    </main>
  );
}
