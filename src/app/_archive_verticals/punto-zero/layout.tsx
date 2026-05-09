import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Punto Zero | Reset Strategico e Rivincita Professionale — Fabio Micale",
  description: "Il punto di ripartenza per chi vuole eliminare il caos e ricostruire l'autorità. Un protocollo di ingegneria personale per trovare la tua nuova direzione.",
};

export default function PuntoZeroLayout({
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
