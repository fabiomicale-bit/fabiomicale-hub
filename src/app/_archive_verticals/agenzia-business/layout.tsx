import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Agenzia Business | Sistemi di Acquisizione Clienti AI — Fabio Micale",
  description: "Integrazione di intelligenza artificiale e strategie B2B per la generazione automatica di lead e lo sviluppo del business.",
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      
      <main className="flex-grow">
        {children}
      </main>
      
    </>
  );
}
