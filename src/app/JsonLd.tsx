// Server Component — NO 'use client'
// Structured Data (Schema.org) globale del sito

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.fabiomicale.com/#person",
  name: "Fabio Micale",
  url: "https://www.fabiomicale.com",
  image: "https://www.fabiomicale.com/og-image.jpg",
  jobTitle: "Autore e Formatore",
  description:
    "Fabio Micale è autore e formatore. Autore di «Successo in 3 Passi», aiuta professionisti Over 40 a fermare il caos, rimettere struttura e costruire una nuova direzione professionale nell'era dell'intelligenza artificiale.",
  knowsAbout: [
    "Crescita personale",
    "Metodo e struttura professionale",
    "Intelligenza artificiale applicata al lavoro",
    "Formazione per professionisti Over 40",
    "Autodisciplina e produttività",
    "Reinvenzione professionale",
    "Scrittura e divulgazione",
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
    "Sito editoriale di Fabio Micale, autore di Successo in 3 Passi. Metodo, formazione e strumenti pratici per la crescita professionale dei professionisti Over 40 nell'era dell'intelligenza artificiale.",
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
