import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerChiE from "@/components/PerChiE";
import ComePossoAiutarti from "@/components/ComePossoAiutarti";
import ChiSonoPreview from "@/components/ChiSonoPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
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
