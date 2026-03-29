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

      {/* Sezione: Risultati reali */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold tracking-widest text-[#2E7D32] uppercase">
              — Risultati reali —
            </span>
          </div>
          <h2 className="text-4xl font-serif text-center text-[#111111] mb-4">
            Chi ha già fatto questo passo
          </h2>
          <p className="text-center text-[#555555] mb-14 text-lg max-w-2xl mx-auto">
            Nomi cambiati per privacy. Storie vere.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Laura */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 flex flex-col">
              <div className="text-3xl mb-4">📊</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold px-3 py-1 rounded-full">
                  Studio professionale
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-1">Laura</h3>
              <p className="text-sm text-[#555555] mb-4">Commercialista, 51 anni</p>
              <p className="text-[#2E7D32] font-semibold mb-4 text-sm">
                &ldquo;Passava 3 ore al giorno su task ripetitivi. Oggi ne passa meno di una.&rdquo;
              </p>
              <p className="text-[#555555] text-sm leading-relaxed flex-1">
                Laura gestisce uno studio con due collaboratori. In sei sessioni abbiamo mappato le sue task ad alto sforzo e basso valore e costruito un sistema semplice con Claude. Risultato: 2 ore e mezza risparmiate ogni giorno, usate per acquisire tre nuovi clienti.
              </p>
              <blockquote className="mt-6 pt-6 border-t border-[#E5E5E5] text-[#555555] text-sm italic">
                &ldquo;Non pensavo fosse per me. Pensavo servisse essere giovani o smanettoni. Mi sbagliavo.&rdquo;
              </blockquote>
            </div>

            {/* Card 2 — Marco */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 flex flex-col">
              <div className="text-3xl mb-4">🏗️</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold px-3 py-1 rounded-full">
                  PMI — 12 dipendenti
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-1">Marco</h3>
              <p className="text-sm text-[#555555] mb-4">Imprenditore edile, 47 anni</p>
              <p className="text-[#2E7D32] font-semibold mb-4 text-sm">
                &ldquo;I preventivi escono in 20 minuti invece di 3 ore.&rdquo;
              </p>
              <p className="text-[#555555] text-sm leading-relaxed flex-1">
                Diffidente per natura, ha accettato di provare perché perdeva gare d&apos;appalto contro concorrenti più veloci. Abbiamo iniziato dai preventivi. Oggi usa lo stesso approccio per capitolati, email ai fornitori e report di avanzamento cantieri.
              </p>
              <blockquote className="mt-6 pt-6 border-t border-[#E5E5E5] text-[#555555] text-sm italic">
                &ldquo;Mi aspettavo una cosa complicata. Era più semplice di imparare a usare WhatsApp.&rdquo;
              </blockquote>
            </div>

            {/* Card 3 — Roberto */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 flex flex-col">
              <div className="text-3xl mb-4">⚙️</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold px-3 py-1 rounded-full">
                  Libero professionista
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-1">Roberto</h3>
              <p className="text-sm text-[#555555] mb-4">Ingegnere progettista, 44 anni</p>
              <p className="text-[#2E7D32] font-semibold mb-4 text-sm">
                &ldquo;Ha costruito in 3 settimane ciò che prima richiedeva un consulente esterno.&rdquo;
              </p>
              <p className="text-[#555555] text-sm leading-relaxed flex-1">
                Usa Excel da 20 anni ma arrivava sempre al limite. In tre settimane ha costruito un sistema completo di monitoraggio costi e avanzamento cantieri — su misura per il suo lavoro, senza dover assumere nessuno.
              </p>
              <blockquote className="mt-6 pt-6 border-t border-[#E5E5E5] text-[#555555] text-sm italic">
                &ldquo;Ho recuperato competenze che pensavo di non poter mai avere. Ci ho messo tre settimane, non tre anni.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/lavora-con-me" className="inline-block bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1B5E20] transition-colors">
              Vuoi un risultato simile? Parliamone →
            </a>
          </div>
        </div>
      </section>

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
