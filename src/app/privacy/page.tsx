import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fabio Micale",
  description: "Informativa sulla privacy di Fabio Micale.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      
      <section className="pt-44 pb-32 px-6 max-w-3xl mx-auto animate-fade-in">
        <div className="badge mb-8">Informazioni Legali</div>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-12 font-serif italic">Privacy Policy</h1>
        
        <div className="space-y-12 text-white/50 leading-relaxed font-light">
          <div>
            <p className="italic text-sm mb-10 text-white/30 tracking-widest">ULTIMO AGGIORNAMENTO: 09 APRILE 2024</p>
            
            <h2 className="text-2xl font-serif text-white mb-6 italic">1. Titolare del Trattamento dei Dati</h2>
            <p className="border-l border-white/10 pl-6 py-2">
              Fabio Micale<br />
              Email: info@fabiomicale.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">2. Tipologia di Dati Raccolti</h2>
            <p>
              Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Cookie, Dati di utilizzo, email e nome (tramite l&apos;iscrizione alla newsletter o i form di candidatura).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">3. Finalità del Trattamento</h2>
            <p>
              I Dati dell&apos;Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come per le seguenti finalità: Statistica, Contatto diretto e Gestione della candidatura strategica.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">4. Diritti dell&apos;Utente</h2>
            <p className="mb-6">
              Gli Utenti possono esercitare determinati diritti in riferimento ai Dati trattati dal Titolare. In particolare, l&apos;Utente ha il diritto di:
            </p>
            <ul className="space-y-4 list-none">
              {[
                "revocare il consenso in ogni momento;",
                "opporsi al trattamento dei propri Dati;",
                "accedere ai propri Dati;",
                "verificare e chiedere la rettificazione;",
                "ottenere la limitazione del trattamento;",
                "ottenere la cancellazione o rimozione dei propri Dati Personali."
              ].map((li, i) => (
                <li key={i} className="flex gap-4 items-start">
                   <span className="text-[#F5A623]">•</span>
                   {li}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 p-8 card-premium bg-white/[0.01]">
            <p className="text-xs text-white/30 leading-relaxed font-bold tracking-wider uppercase">
              Nota Legale: Questo documento è una base informativa. Per la piena conformità al GDPR, Fabio Micale si avvale di consulenze specifiche e strumenti di gestione del consenso certificati.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
