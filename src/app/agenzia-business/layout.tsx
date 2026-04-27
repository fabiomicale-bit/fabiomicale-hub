import { Metadata } from 'next';
import NavbarAgency from "@/components/navbars/NavbarAgency";
import FooterAgency from "@/components/footers/FooterAgency";

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
      <NavbarAgency />
      <main className="flex-grow">
        {children}
      </main>
      <FooterAgency />
    </>
  );
}
