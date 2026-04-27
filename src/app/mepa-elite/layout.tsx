import { Metadata } from 'next';
import NavbarMepa from "@/components/navbars/NavbarMepa";
import FooterMepa from "@/components/footers/FooterMepa";

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
      <NavbarMepa />
      <main className="flex-grow">
        {children}
      </main>
      <FooterMepa />
    </>
  );
}
