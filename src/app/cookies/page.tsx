import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Fabio Micale",
  description: "Informativa estesa sull'uso dei cookie del portale di Fabio Micale.",
};

export default function CookiePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      
      <section className="pt-44 pb-32 px-6 max-w-3xl mx-auto animate-fade-in">
        <div className="badge mb-8">Trasparenza</div>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-12 font-serif italic">Cookie Policy</h1>
        
        <div className="space-y-12 text-white/50 leading-relaxed font-light text-sm">
          <div>
            <p className="italic text-xs mb-10 text-white/30 tracking-widest uppercase font-bold">Ultimo Aggiornamento: 29 Aprile 2026</p>
            
            <h2 className="text-2xl font-serif text-white mb-6 italic">Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. 
              Questo sito utilizza diverse tipologie di cookie per migliorare l&apos;esperienza di navigazione e analizzare il traffico.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">1. Cookie Tecnici (Necessari)</h2>
            <p>
              Questi cookie sono indispensabili per il corretto funzionamento del sito. Consentono la navigazione tra le pagine e l&apos;accesso alle aree protette. Senza questi cookie, il sito non potrebbe funzionare correttamente.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">2. Cookie di Analisi (Statistici)</h2>
            <p className="mb-4">
              Utilizziamo <strong>Google Analytics 4 (GA4)</strong> per capire come gli utenti interagiscono con il portale. Questi dati ci aiutano a migliorare i contenuti e la struttura del sito.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>I dati sono raccolti in forma aggregata e anonimizzata.</li>
              <li>Google non associa il tuo indirizzo IP a nessun altro dato posseduto da Google.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">3. Cookie di Marketing e Profilazione</h2>
            <p>
              Utilizziamo il <strong>Meta Pixel (Facebook)</strong> per misurare l&apos;efficacia delle nostre comunicazioni sui social media e per mostrarti contenuti pertinenti ai tuoi interessi. 
              Questi cookie tracciano le conversioni e ci aiutano a ottimizzare i costi delle nostre iniziative editoriali.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">4. Gestione del Consenso</h2>
            <p>
              L&apos;utente può gestire le preferenze relative ai cookie direttamente all&apos;interno del proprio browser. È possibile eliminare i cookie installati in passato e disabilitare il tracciamento futuro. 
              Tuttavia, disabilitando i cookie tecnici, alcune funzionalità del sito potrebbero risultare compromesse.
            </p>
          </div>

          <div className="mt-20 p-8 card-premium bg-white/[0.01] border border-white/5 rounded-2xl">
            <p className="text-xs text-white/30 leading-relaxed font-bold tracking-wider uppercase">
              Contatti: Per domande sulla gestione dei cookie, scrivi a: <strong>info@fabiomicale.com</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
