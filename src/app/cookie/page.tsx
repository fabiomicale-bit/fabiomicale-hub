import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Fabio Micale",
  description: "Informativa sui cookie di Fabio Micale.",
};

export default function CookiePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      
      <section className="pt-44 pb-32 px-6 max-w-3xl mx-auto animate-fade-in">
        <div className="badge mb-8">Tracciamento & Trasparenza</div>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-12 font-serif italic">Cookie Policy</h1>
        
        <div className="space-y-12 text-white/50 leading-relaxed font-light">
          <div>
             <p className="italic text-sm mb-10 text-white/30 tracking-widest">ULTIMO AGGIORNAMENTO: 09 APRILE 2024</p>
             
             <h2 className="text-2xl font-serif text-white mb-6 italic">1. Gestione del Consenso Tecnico</h2>
             <p>
               Questo sito utilizza cookie tecnici strettamente necessari al funzionamento della piattaforma. Questi non richiedono il consenso dell&apos;utente in quanto garantiscono la corretta fruizione dei contenuti e il mantenimento della sessione.
             </p>
          </div>

          <div>
             <h2 className="text-2xl font-serif text-white mb-6 italic">2. Intelligence Analitica di Terze Parti</h2>
             <p>
               Potremmo utilizzare strumenti statistici (Google Analytics, Meta Pixel) per mappare il comportamento dell&apos;elite di utenti che naviga l&apos;hub. Questo ci permette di ottimizzare l&apos;architettura informativa e offrire contenuti di sempre maggior valore strategico.
             </p>
          </div>

          <div>
             <h2 className="text-2xl font-serif text-white mb-6 italic">3. Controllo del Proprio Profilo Digitale</h2>
             <p>
               Hai il controllo totale sulla tua navigazione. Puoi cancellare i cookie esistenti dal tuo browser o impostare il blocco preventivo. Nota: la disattivazione dei cookie tecnici potrebbe limitare l&apos;accesso ad alcune aree riservate come il Caveau Risorse.
             </p>
          </div>

          <div className="mt-20 p-8 card-premium bg-white/[0.01]">
            <p className="text-xs text-white/30 leading-relaxed font-bold tracking-wider uppercase">
              Compliance: Fabio Micale integra soluzioni Consent Management Platform certificate per garantire il rispetto del diritto alla riservatezza di ogni visitatore.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
