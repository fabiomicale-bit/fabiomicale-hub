import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerChiE from "@/components/PerChiE";
import ComePossoAiutarti from "@/components/ComePossoAiutarti";
import ChiSonoPreview from "@/components/ChiSonoPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fabio Micale — AI per Professionisti Over 40",
  description:
    "Strumenti AI concreti per professionisti over 40 che vogliono una nuova fase professionale. Niente teoria. Solo quello che funziona.",
  alternates: { canonical: "https://www.fabiomicale.com" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
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
