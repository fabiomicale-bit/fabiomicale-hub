import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grazie! L'estratto è in arrivo",
  description:
    "Controlla la tua email: l'estratto gratuito di Successo in 3 Passi è in arrivo.",
  robots: { index: false, follow: false },
};

export default function GrazieEstrattoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">

        {/* Icona conferma */}
        <div className="w-20 h-20 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-hub-ink">
          Il primo passo è fatto.
        </h1>

        <p className="text-xl text-hub-ink-muted font-light leading-relaxed mb-4">
          L&apos;estratto è in arrivo nella tua email.
        </p>
        <div className="p-6 bg-hub-cream rounded-2xl border border-hub-border mb-16">
          <p className="text-sm text-hub-ink-muted leading-relaxed">
            Controlla anche <span className="font-medium text-hub-ink">Spam</span> o <span className="font-medium text-hub-ink">Promozioni</span> se non lo trovi entro pochi minuti.
          </p>
        </div>

        {/* Sezioni di continuazione */}
        <div className="space-y-6 text-left mb-16">
          <div className="p-8 bg-hub-white border border-hub-border rounded-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold mb-3">Prossimo passo</p>
            <p className="text-hub-ink font-light mb-4">
              Mentre aspetti, puoi leggere come funziona il Metodo.
            </p>
            <Link href="/il-metodo" className="text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold border-b border-hub-gold/30 hover:border-hub-gold transition-colors pb-0.5">
              Scopri il Metodo Successo in 3 Passi →
            </Link>
          </div>

          <div className="p-8 bg-hub-white border border-hub-border rounded-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold mb-3">Il progetto</p>
            <p className="text-hub-ink font-light mb-4">
              Vuoi capire meglio chi c&apos;è dietro il progetto?
            </p>
            <Link href="/chi-sono" className="text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold border-b border-hub-gold/30 hover:border-hub-gold transition-colors pb-0.5">
              Leggi la storia di Fabio →
            </Link>
          </div>
        </div>

        <p className="text-hub-ink-muted text-sm font-light leading-relaxed max-w-md mx-auto">
          Se hai scelto di iscriverti anche a <span className="font-medium text-hub-ink italic">Un Passo Avanti</span>, riceverai la newsletter nei prossimi aggiornamenti. In ogni caso, l&apos;estratto è in arrivo nella tua email.
        </p>
      </div>
    </main>
  );
}
