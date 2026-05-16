import Link from "next/link";

type Step = 1 | 2 | "3A" | "3B";

interface ArticleVerticalCTAProps {
  step: Step;
}

const ctaMeta: Record<
  string,
  { problem: string; stepLabel: string; href: string; ctaLabel: string }
> = {
  "1": {
    problem: "il tuo problema principale è il caos e la mancanza di direzione personale",
    stepLabel: "Passo 1",
    href: "/estratto",
    ctaLabel: "Scarica l'estratto gratuito",
  },
  "2": {
    problem: "la tua azienda dipende troppo da te e manca di struttura operativa",
    stepLabel: "Passo 2",
    href: "/estratto",
    ctaLabel: "Scarica l'estratto gratuito",
  },
  "3A": {
    problem: "mantenere il controllo nel tempo richiede un sistema di revisione, non solo volontà",
    stepLabel: "Passo 3",
    href: "/estratto",
    ctaLabel: "Scarica l'estratto gratuito",
  },
  "3B": {
    problem: "mantenere il controllo nel tempo richiede un sistema di revisione, non solo volontà",
    stepLabel: "Passo 3",
    href: "/estratto",
    ctaLabel: "Scarica l'estratto gratuito",
  },
};

export default function ArticleVerticalCTA({ step }: ArticleVerticalCTAProps) {
  const meta = ctaMeta[String(step)];
  if (!meta) return null;

  return (
    <div className="my-12 rounded-3xl border border-hub-border bg-hub-bg-alt p-10">
      <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
        Il tuo prossimo passo
      </p>
      <h3 className="text-xl md:text-2xl font-serif font-medium text-hub-ink mb-4 leading-snug">
        Hai capito che {meta.problem}?
      </h3>
      <p className="text-hub-ink-muted text-sm font-light leading-relaxed mb-8">
        Allora il <strong className="text-hub-ink">{meta.stepLabel}</strong> è dove devi guardare.{" "}
        Inizia dall&apos;estratto gratuito per capire il Metodo Successo in 3 Passi.
      </p>
      <Link
        href={meta.href}
        className="btn-gold inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
      >
        {meta.ctaLabel} →
      </Link>
    </div>
  );
}
