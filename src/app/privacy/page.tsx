import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Fabio Micale",
  description: "Informativa sulla privacy di Fabio Micale.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-36 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111111] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-[#555555]">
          <p><em>Ultimo aggiornamento: [Inserire Data]</em></p>
          
          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">1. Titolare del Trattamento dei Dati</h2>
          <p>
            Fabio Micale<br />
            [Inserire Indirizzo Fisico/Sede Legale]<br />
            [Inserire P.IVA / CF]<br />
            Email: info@fabiomicale.com
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">2. Tipologia di Dati Raccolti</h2>
          <p>
            Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Cookie, Dati di utilizzo, email e nome (tramite l'iscrizione alla newsletter o il form di contatto).
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">3. Finalità del Trattamento</h2>
          <p>
            I Dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come per le seguenti finalità: Statistica, Contattare l'Utente e Gestione contatti e invio di messaggi.
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mt-8 mb-4">4. Diritti dell'Utente</h2>
          <p>
            Gli Utenti possono esercitare determinati diritti in riferimento ai Dati trattati dal Titolare. In particolare, l'Utente ha il diritto di:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>revocare il consenso in ogni momento;</li>
            <li>opporsi al trattamento dei propri Dati;</li>
            <li>accedere ai propri Dati;</li>
            <li>verificare e chiedere la rettificazione;</li>
            <li>ottenere la limitazione del trattamento;</li>
            <li>ottenere la cancellazione o rimozione dei propri Dati Personali.</li>
          </ul>

          <div className="mt-12 p-6 bg-[#F7F7F7] border border-[#E5E5E5] rounded-xl">
            <p className="text-sm">
              <strong>Nota Legale:</strong> Questo documento redatto è una base di esempio. Per la messa a norma definitiva secondo il GDPR (Regolamento UE 2016/679), si consiglia l'integrazione di un documento generato da servizi professionali come Iubenda o redatto da un legale.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
