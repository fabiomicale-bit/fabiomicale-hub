import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerChiE from "@/components/PerChiE";
import ComePossoAiutarti from "@/components/ComePossoAiutarti";
import ChiSonoPreview from "@/components/ChiSonoPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fabio Micale — Coach Over 40 nell'Era AI",
  description:
    "Sono Fabio Micale. Coach, imprenditore, autore. Ti aiuto a reinventarti con il mindset giusto e gli strumenti concreti dell'era AI.",
  alternates: { canonical: "/" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://fabiomicale.com/#person",
    name: "Fabio Micale",
    url: "https://fabiomicale.com",
    image: "https://fabiomicale.com/fabio-hero.jpg",
    description:
      "Coach, imprenditore e autore. Aiuta i professionisti over 40 a reinventarsi nell'era dell'AI con metodo, mindset e strumenti concreti.",
    jobTitle: "Coach",
    knowsAbout: ["Intelligenza Artificiale", "Mindset", "Coaching", "Produttività", "Leadership"],
    sameAs: ["https://fabiomicale.com/chi-sono"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://fabiomicale.com/#website",
    name: "Fabio Micale",
    url: "https://fabiomicale.com",
    description: "Coach Over 40 nell'Era AI — mindset, strumenti concreti e metodo per reinventarsi.",
    inLanguage: "it-IT",
    author: { "@id": "https://fabiomicale.com/#person" },
    publisher: { "@id": "https://fabiomicale.com/#person" },
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <PerChiE />
      <ComePossoAiutarti />
      <ChiSonoPreview />
      <Newsletter />
      <Footer />
    </main>
  );
}
