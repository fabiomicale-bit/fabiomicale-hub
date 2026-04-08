import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookie Policy | Fabio Micale",
  description: "Informativa sui cookie di Fabio Micale.",
};

export default function CookiePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-36 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111111] mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg text-[#555555]">
          <p><em>Ultimo aggiornamento: [Inserire Data]</em></p>
          
          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">Cos'è un Cookie?</h2>
          <p>
            Un cookie è un piccolo file di testo che i siti web salvano sul tuo computer o dispositivo mobile mentre li visiti. Grazie ai cookie il sito ricorda le tue azioni e preferenze in modo che tu non debba reinserirle quando torni sul sito o navighi da una pagina all'altra.
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">Cookie Tecnici (Essenziali)</h2>
          <p>
            Questo sito utilizza cookie tecnici strettamente necessari al funzionamento della piattaforma. Questi cookie non richiedono il consenso preventivo dell'utente in quanto indispensabili per erogare il servizio richiesto (es. mantenimento della sessione).
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">Cookie Analitici e di Terze Parti</h2>
          <p>
            Questo sito potrebbe utilizzare strumenti statistici o di marketing (ad esempio Google Analytics, Meta Pixel) per migliorare la fruizione dei contenuti e inviare informazioni commerciali pertinenti.
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">Come gestire i Cookie</h2>
          <p>
            Puoi controllare e/o verificare i cookie come vuoi. Puoi cancellare i cookie già presenti nel computer e impostare quasi tutti i browser in modo da bloccarne l'installazione. Se scegli questa opzione, dovrai però modificare manualmente alcune preferenze ogni volta che visiti il sito ed è possibile che alcuni servizi o determinate funzioni non siano disponibili.
          </p>

          <div className="mt-12 p-6 bg-[#F7F7F7] border border-[#E5E5E5] rounded-xl">
            <p className="text-sm">
              <strong>Nota Legale:</strong> In base all'utilizzo effettivo di tracker pubblicitari, sarà necessario integrare un banner di blocco preventivo dei cookie (Consent Management Platform) come Iubenda o Cookiebot.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
