import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerChiE from "@/components/PerChiE";
import ComePossoAiutarti from "@/components/ComePossoAiutarti";
import ChiSonoPreview from "@/components/ChiSonoPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fabio Micale | AI per Professionisti Over 40",
  description:
    "Aiuto i professionisti over 40 a usare l'AI per restare competitivi e costruire nuovi redditi. Strumenti concreti, metodo testato. Niente hype.",
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

      {/* Sezione: È per te? */}
      <section className="py-20 px-6 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center text-[#111111] mb-4">
            Fa per te?
          </h2>
          <p className="text-center text-[#555555] mb-12 text-lg">
            Dipende da dove sei adesso.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* È per te */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5]">
              <div className="text-2xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-[#111111] mb-6">È per te se…</h3>
              <ul className="space-y-3 text-[#555555]">
                <li className="flex gap-3"><span className="text-[#2E7D32] font-bold mt-0.5">✓</span>Hai più di 40 anni e senti che il mondo digitale cambia troppo in fretta</li>
                <li className="flex gap-3"><span className="text-[#2E7D32] font-bold mt-0.5">✓</span>Vuoi usare l&apos;AI nel tuo lavoro ma non sai da dove iniziare senza perdere tempo</li>
                <li className="flex gap-3"><span className="text-[#2E7D32] font-bold mt-0.5">✓</span>Cerchi strumenti concreti, non teorie o corsi da 200 ore</li>
                <li className="flex gap-3"><span className="text-[#2E7D32] font-bold mt-0.5">✓</span>Vuoi costruire qualcosa di tuo, ma con metodo e senza buttare via l&apos;esperienza che hai</li>
                <li className="flex gap-3"><span className="text-[#2E7D32] font-bold mt-0.5">✓</span>Preferisci una persona che ci è passata a un guru da palcoscenico</li>
              </ul>
            </div>
            {/* Non è per te */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5]">
              <div className="text-2xl mb-4">✕</div>
              <h3 className="text-xl font-bold text-[#111111] mb-6">Non è per te se…</h3>
              <ul className="space-y-3 text-[#555555]">
                <li className="flex gap-3"><span className="text-[#555555] font-bold mt-0.5">✕</span>Cerchi la formula magica per diventare ricco in 30 giorni</li>
                <li className="flex gap-3"><span className="text-[#555555] font-bold mt-0.5">✕</span>Vuoi contenuti sull&apos;ultima hype AI senza capire come usarla davvero</li>
                <li className="flex gap-3"><span className="text-[#555555] font-bold mt-0.5">✕</span>Non sei disposto a mettere in gioco almeno un&apos;ora a settimana</li>
                <li className="flex gap-3"><span className="text-[#555555] font-bold mt-0.5">✕</span>Pensi che a 40+ anni sia troppo tardi per cambiare qualcosa</li>
                <li className="flex gap-3"><span className="text-[#555555] font-bold mt-0.5">✕</span>Preferisci teorie motivazionali a strumenti pratici e misurabili</li>
              </ul>
            </div>
          </div>
          {/* CTA sotto */}
          <div className="text-center mt-12">
            <p className="text-[#555555] mb-6 text-lg">Hai letto fino a qui. Buon segno.</p>
            <a href="#newsletter" className="inline-block bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1B5E20] transition-colors">
              Iscriviti alla newsletter gratuita →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
