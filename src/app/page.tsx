import { redirect } from "next/navigation";
export default function HomePage() {
  if (process.env.NODE_ENV === "production") {
    redirect("/maintenance");
  }

  const { Navbar } = require("@/components/Navbar");
  const { Hero } = require("@/components/Hero");
  const { PerChiE } = require("@/components/PerChiE");
  const { ComePossoAiutarti } = require("@/components/ComePossoAiutarti");
  const { ChiSonoPreview } = require("@/components/ChiSonoPreview");
  const { Newsletter } = require("@/components/Newsletter");
  const { Footer } = require("@/components/Footer");
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
