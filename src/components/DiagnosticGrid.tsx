import Link from "next/link";
import { diagnosticCards } from "@/content/diagnostic-cards";

export default function DiagnosticGrid() {
  const [step1, step2, step3a, step3b] = diagnosticCards;

  return (
    <section className="py-24 px-6 bg-hub-bg-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink leading-tight">
            Da quale passo ripartire?
          </h2>
          <p className="mt-4 text-hub-ink-muted font-light max-w-xl mx-auto">
            Ogni problema ha il suo passo. Scegli quello che descrive meglio la tua situazione.
          </p>
        </div>

        {/* Top row: Passo 1 + Passo 2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[step1, step2].map((card) => (
            <DiagnosticCard key={card.vertical} card={card} />
          ))}
        </div>

        {/* Bottom row: Passo 3 — due sotto-card */}
        <div className="rounded-3xl border border-hub-border bg-hub-white p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-2">
            Passo 3 — Mantieni il Controllo nel Tempo
          </p>
          <p className="text-hub-ink-muted text-sm font-light mb-8 max-w-lg">
            Il terzo passo ha due motori. Scegli quello che corrisponde alla tua esigenza di continuità.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[step3a, step3b].map((card) => (
              <DiagnosticSubCard key={card.vertical} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticCard({
  card,
}: {
  card: (typeof diagnosticCards)[0] | (typeof diagnosticCards)[1];
}) {
  return (
    <div className="group rounded-3xl border border-hub-border bg-hub-white p-10 flex flex-col hover:border-hub-gold/30 transition-all duration-300">
      <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
        {card.eyebrow}
      </p>
      <h3 className="text-xl font-serif font-medium text-hub-ink mb-3 leading-snug">
        {card.problem}
      </h3>
      <p className="text-hub-ink-muted text-sm font-light leading-relaxed flex-1">
        {card.solution}
      </p>
      <Link
        href={card.href}
        className="mt-8 btn-gold inline-block px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] self-start"
      >
        {card.ctaLabel}
      </Link>
    </div>
  );
}

function DiagnosticSubCard({
  card,
}: {
  card: (typeof diagnosticCards)[2] | (typeof diagnosticCards)[3];
}) {
  return (
    <div className="group rounded-2xl border border-hub-border bg-hub-bg p-8 flex flex-col hover:border-hub-gold/30 transition-all duration-300">
      <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-3">
        {card.eyebrow}
      </p>
      <h4 className="text-lg font-serif font-medium text-hub-ink mb-2 leading-snug">
        {card.problem}
      </h4>
      <p className="text-hub-ink-muted text-sm font-light leading-relaxed flex-1">
        {card.solution}
      </p>
      <Link
        href={card.href}
        className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-2"
      >
        {card.ctaLabel} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
