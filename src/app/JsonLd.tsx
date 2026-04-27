// Server Component — NO 'use client'
// Structured Data (Schema.org) globale del sito

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.fabiomicale.com/#person",
  name: "Fabio Micale",
  url: "https://www.fabiomicale.com",
  image: "https://www.fabiomicale.com/og-image.jpg",
  jobTitle: "Expert Advisor in Organizzazione d'Impresa e Appalti Pubblici",
  description:
    "30 anni di esperienza operativa nella gestione d'impresa, edilizia e appalti pubblici. Fondatore di MEPA Elite e Impresa Liquida. Ha gestito oltre 13.000.000€ di budget, 150+ cantieri e 30+ appalti pubblici aggiudicati.",
  knowsAbout: [
    "Appalti Pubblici",
    "MEPA",
    "Gestione Aziendale",
    "Organizzazione d'Impresa",
    "Edilizia e Impiantistica",
    "Senior Project Management",
    "Impresa Liquida",
    "Automazione con AI",
    "Scalabilità del Fatturato",
  ],
  hasCredential: [
    "Senior Project Manager - Appalti Pubblici e Privati dal 2019",
    "Gestione Organizzativa Aziendale dal 1996",
    "13.000.000€+ di Budget Gestito",
    "150+ Cantieri Realizzati",
    "30+ Appalti Pubblici Aggiudicati (MEPA/Consob)",
  ],
  sameAs: [
    "https://www.linkedin.com/in/fabiomicale/",
    "https://www.instagram.com/fabiomicale1/",
    "https://www.youtube.com/@FabioMicale",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.fabiomicale.com/#website",
  name: "Fabio Micale",
  url: "https://www.fabiomicale.com",
  description:
    "Expert Advisor in Organizzazione d'Impresa e Appalti Pubblici. Sistemi operativi per scalare il fatturato (MEPA Elite) e liberare il tempo (Impresa Liquida). Per imprenditori e professionisti over 40 nei settori Edilizia, Impiantistica e Pubblica Amministrazione.",
  inLanguage: "it-IT",
  author: { "@id": "https://www.fabiomicale.com/#person" },
  publisher: { "@id": "https://www.fabiomicale.com/#person" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.fabiomicale.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.fabiomicale.com/#organization",
  name: "Fabio Micale - Consulenza Strategica",
  url: "https://www.fabiomicale.com",
  founder: { "@id": "https://www.fabiomicale.com/#person" },
  description:
    "Consulenza strategica per PMI e professionisti in Appalti Pubblici e Organizzazione d'Impresa.",
  areaServed: "IT",
  knowsAbout: [
    "Appalti Pubblici MEPA",
    "Organizzazione Aziendale",
    "Impresa Liquida",
    "Senior Project Management",
    "Edilizia e Impiantistica",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sistemi Master",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MEPA Elite",
          description:
            "Lifecycle completo appalti pubblici: dall'abilitazione portale MEPA all'incasso certo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Impresa Liquida",
          description:
            "Organizzazione e automazione operativa con AI per uscire dal cantiere e scalare il business.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agenzia Business",
          description:
            "Sistemi di acquisizione clienti basati su AI, Pubblicità Online e Funnel di Conversione.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Punto Zero",
          description:
            "Protocollo di reset strategico e rivincita professionale per over 40.",
        },
      },
    ],
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
