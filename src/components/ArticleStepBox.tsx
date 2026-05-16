import Link from "next/link";

type Step = 1 | 2 | "3A" | "3B";

interface ArticleStepBoxProps {
  step: Step;
}

const stepMeta: Record<
  string,
  { name: string; description: string; href: string; label: string }
> = {
  "1": {
    name: "Passo 1 — Ferma il Caos",
    description: "Riconoscere il rumore che guida le decisioni e ridurre la reattività.",
    href: "/estratto",
    label: "Scarica l'estratto gratuito",
  },
  "2": {
    name: "Passo 2 — Rimetti Struttura",
    description: "Costruire un'architettura operativa che regge senza dipendere dalla forza di volontà.",
    href: "/estratto",
    label: "Scarica l'estratto gratuito",
  },
  "3A": {
    name: "Passo 3 — Mantieni il Controllo",
    description: "Il terzo passo del Metodo Successo in 3 Passi serve a rivedere, correggere e mantenere nel tempo il percorso iniziato.",
    href: "/estratto",
    label: "Leggi l'estratto gratuito",
  },
  "3B": {
    name: "Passo 3 — Mantieni il Controllo",
    description: "Il terzo passo del Metodo Successo in 3 Passi serve a rivedere, correggere e mantenere nel tempo il percorso iniziato.",
    href: "/estratto",
    label: "Leggi l'estratto gratuito",
  },
};

export default function ArticleStepBox({ step }: ArticleStepBoxProps) {
  const meta = stepMeta[String(step)];
  if (!meta) return null;

  return (
    <aside className="my-10 border-l-2 border-hub-gold pl-6 py-4 bg-hub-cream rounded-r-2xl">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-2">
        Metodo Successo in 3 Passi
      </p>
      <p className="text-sm font-serif font-medium text-hub-ink mb-1">
        {meta.name}
      </p>
      <p className="text-hub-ink-muted text-sm font-light leading-relaxed mb-3">
        {meta.description}
      </p>
      <Link
        href={meta.href}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-1"
      >
        {meta.label} <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}
