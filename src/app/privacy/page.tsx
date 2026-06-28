

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa completa sul trattamento dei dati personali - Fabio Micale.",
  alternates: { canonical: "https://www.fabiomicale.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      
      
      <section className="pt-44 pb-32 px-6 max-w-3xl mx-auto animate-fade-in">
        <div className="badge mb-8">Conformità GDPR</div>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-12 font-serif italic">Privacy Policy</h1>
        
        <div className="space-y-12 text-white/50 leading-relaxed font-light text-sm">
          <div>
            <p className="italic text-xs mb-10 text-white/30 tracking-widest uppercase font-bold">Ultimo Aggiornamento: 29 Aprile 2026</p>
            
            <h2 className="text-2xl font-serif text-white mb-6 italic">1. Titolare del Trattamento</h2>
            <p className="border-l-2 border-hub-gold pl-6 py-2">
              <strong>Fabio Micale</strong><br />
              Sede operativa: Italia<br />
              Email di contatto: <strong>info@fabiomicale.com</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">2. Tipologia di Dati Raccolti</h2>
            <p className="mb-4">
              Questo sito raccoglie dati personali necessari per la fornitura dei servizi editoriali e per l&apos;ottimizzazione dell&apos;esperienza utente:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Dati di contatto: Nome ed Email (tramite newsletter e form).</li>
              <li>Dati di navigazione: Indirizzo IP, tipo di browser, pagine visitate (tramite cookie tecnici e di analisi).</li>
              <li>Dati di marketing: Tracciamento conversioni (tramite Meta Pixel).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">3. Finalità e Base Giuridica</h2>
            <p>
              I dati sono trattati esclusivamente per:
              <br /><br />
              a) Fornire i contenuti richiesti (Newsletter/Articoli).<br />
              b) Analisi statistica anonimizzata del traffico (Google Analytics 4).<br />
              c) Miglioramento delle strategie di comunicazione (Meta Pixel).<br />
              <br />
              La base giuridica è il <strong>consenso dell&apos;interessato</strong> per le attività di marketing e il <strong>legittimo interesse</strong> per le attività tecniche e di sicurezza.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">4. Servizi di Terze Parti</h2>
            <p>
              Il portale si avvale dei seguenti fornitori esterni per il trattamento dei dati:
            </p>
            <ul className="space-y-4 mt-6">
              <li className="p-4 bg-white/[0.03] rounded-lg border border-white/5">
                <strong>Google Analytics 4:</strong> Analisi del traffico web. I dati sono trattati in modo aggregato.
              </li>
              <li className="p-4 bg-white/[0.03] rounded-lg border border-white/5">
                <strong>Meta Pixel:</strong> Ottimizzazione delle campagne pubblicitarie e tracciamento conversioni.
              </li>
              <li className="p-4 bg-white/[0.03] rounded-lg border border-white/5">
                <strong>Resend / Mailchimp:</strong> Gestione dell&apos;invio della newsletter e conservazione dei contatti email.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">5. Conservazione dei Dati</h2>
            <p>
              I dati saranno conservati solo per il tempo strettamente necessario a fornire i servizi richiesti o fino a quando l&apos;interessato non ne richieda la cancellazione.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">6. Diritti dell&apos;Interessato (Artt. 15-22 GDPR)</h2>
            <p>
              In ogni momento, l&apos;utente può richiedere l&apos;accesso, la rettifica o la cancellazione dei propri dati scrivendo a <strong>info@fabiomicale.com</strong>.
            </p>
          </div>
        </div>
      </section>

      
    </main>
  );
}
