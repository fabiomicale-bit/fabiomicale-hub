import type { Metadata } from "next";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Lista prioritaria — Successo in 3 Passi",
  description:
    "Entra nella lista prioritaria gratuita per ricevere aggiornamenti, materiali extra e accesso anticipato ai contenuti pratici di Successo in 3 Passi — Edizione 2026.",
  alternates: {
    canonical:
      "https://www.fabiomicale.com/successo-in-3-passi/lista-prioritaria",
  },
  openGraph: {
    title: "Lista prioritaria — Successo in 3 Passi | Fabio Micale",
    description:
      "Aggiornamenti sul libro, materiali extra e contenuti pratici collegati al metodo per riorganizzare lavoro, priorità e decisioni dopo i 40 anni.",
    url: "https://www.fabiomicale.com/successo-in-3-passi/lista-prioritaria",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const benefits = [
  "Ricevi aggiornamenti sulla nuova edizione del libro",
  "Accedi prima ai materiali pratici collegati al metodo",
  "Segui il dietro le quinte della costruzione del percorso",
  "Puoi segnalare quali problemi vorresti vedere affrontati nel libro",
];

export default function ListaPrioritariaPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <section className="relative px-6 pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-editorial opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-hub-bg via-hub-bg/95 to-hub-bg" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold">
            Lista prioritaria — Successo in 3 Passi
          </p>
          <h1 className="mx-auto mb-8 max-w-3xl text-4xl font-serif font-medium leading-tight md:text-6xl">
            Il libro per rimettere metodo nel lavoro dopo i 40 anni.
          </h1>
          <div className="mx-auto max-w-2xl space-y-5 text-lg font-light leading-relaxed text-hub-ink-muted">
            <p>
              Sto preparando la nuova edizione di “Successo in 3 Passi”: un
              metodo pratico per riorganizzare lavoro, priorità e decisioni
              con più chiarezza, più struttura e meno improvvisazione.
            </p>
            <p>
              Dopo i 40 anni non basta più contare sulla motivazione. Serve un
              sistema che tenga anche quando la settimana si complica.
            </p>
            <p>
              Entrando nella lista prioritaria riceverai aggiornamenti sul
              libro, materiali extra e accesso anticipato ai contenuti pratici
              del metodo.
            </p>
          </div>
          <Link
            href="#avviso-lancio"
            className="btn-gold mt-10 inline-block px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            Entra nella lista prioritaria
          </Link>
        </div>
      </section>

      <section className="border-y border-hub-border/50 bg-hub-bg-alt px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold">
              Cosa ricevi
            </p>
            <h2 className="text-3xl font-serif font-medium leading-tight md:text-4xl">
              Una lista gratuita per seguire il libro mentre prende forma.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-start gap-5 border border-hub-border bg-hub-white p-6"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-hub-gold/10 text-xs font-bold text-hub-gold">
                  {index + 1}
                </div>
                <p className="self-center text-sm font-light leading-relaxed text-hub-ink-muted">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA variant="book-waitlist" />
    </main>
  );
}
