import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "MEPA Elite | Fabio Micale - Il Tuo Ufficio Gare Personale",
  description: "Vinci Appalti PA Facili. Io gestisco il tuo MEPA, tu incassi i soldi. Delega tutto a un esperto con 25+ anni di esperienza.",
};

export default function MepaLayout({
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

