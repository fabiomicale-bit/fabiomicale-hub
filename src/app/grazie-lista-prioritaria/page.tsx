import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sei nella lista prioritaria",
  description:
    "Conferma di iscrizione alla lista prioritaria di Successo in 3 Passi — Edizione 2026.",
  alternates: {
    canonical: "https://www.fabiomicale.com/grazie-lista-prioritaria",
  },
  robots: { index: false, follow: false },
};

export default function GrazieListaPrioritariaPage() {
  return (
    <main className="min-h-screen bg-hub-bg px-6 py-40 text-hub-ink">
      <section className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-hub-gold/10">
          <svg
            className="h-8 w-8 text-hub-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold">
          Conferma ricevuta
        </p>
        <h1 className="mb-6 text-4xl font-serif font-medium leading-tight md:text-6xl">
          Sei nella lista prioritaria.
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-hub-ink-muted">
          Ti avviserò quando ci saranno aggiornamenti sulla nuova edizione di
          “Successo in 3 Passi” e sui materiali pratici collegati al metodo.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/estratto"
            className="btn-gold px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            Leggi l&apos;estratto gratuito
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border border-hub-border bg-hub-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-hub-ink transition-colors hover:border-hub-gold"
          >
            Vai al blog
          </Link>
        </div>
      </section>
    </main>
  );
}
