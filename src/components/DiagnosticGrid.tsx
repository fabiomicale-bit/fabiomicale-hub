import Link from "next/link";
import { diagnosticCards } from "@/content/diagnostic-cards";

export default function DiagnosticGrid() {
  return (
    <section className="py-24 px-6 bg-hub-bg-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink leading-tight">
            I Tre Passi per il Successo
          </h2>
          <p className="mt-4 text-hub-ink-muted font-light max-w-xl mx-auto">
            Ogni fase ha uno scopo preciso. Scopri quale passo manca nella tua struttura.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {diagnosticCards.map((card) => (
            <DiagnosticCard key={card.vertical} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagnosticCard({
  card,
}: {
  card: (typeof diagnosticCards)[number];
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
