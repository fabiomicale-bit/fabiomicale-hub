// Server Component — NO 'use client'
// Structured Data (Schema.org) globale del sito

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.fabiomicale.com/#person",
  name: "Fabio Micale",
  url: "https://www.fabiomicale.com",
  image: "https://www.fabiomicale.com/og-image.jpg",
  jobTitle: "Consulente AI per Professionisti",
  description:
    "Aiuto i professionisti over 40 a usare l'AI per costruire una nuova fase professionale.",
  knowsAbout: ["Intelligenza Artificiale", "Mindset", "Coaching", "Produttività", "Leadership"],
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
  description: "AI per Professionisti Over 40 — strumenti concreti e metodo per reinventarsi.",
  inLanguage: "it-IT",
  author: { "@id": "https://www.fabiomicale.com/#person" },
  publisher: { "@id": "https://www.fabiomicale.com/#person" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.fabiomicale.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
    </>
  );
}
