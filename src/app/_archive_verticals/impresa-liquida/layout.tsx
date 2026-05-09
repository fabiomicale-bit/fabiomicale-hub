import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Impresa Liquida | Ingegneria della Libertà — Fabio Micale",
  description: "Trasforma la tua azienda in un asset autonomo. Protocolli di automazione e scalabilità per imprenditori che vogliono uscire dall'operatività.",
};

export default function ImpresaLayout({
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
