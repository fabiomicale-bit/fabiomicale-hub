import Link from "next/link";

type Step = 1 | 2 | "3A" | "3B";

interface ArticleVerticalCTAProps {
  step: Step;
}

const ctaMeta: Record<
  string,
  { problem: string; stepLabel: string; verticalName: string; href: string; ctaLabel: string }
> = {
  "1": {
    problem: "il tuo problema principale è il caos e la mancanza di direzione personale",
    stepLabel: "Passo 1",
    verticalName: "Punto Zero",
    href: "/punto-zero",
    ctaLabel: "Vai a Punto Zero",
  },
  "2": {
    problem: "la tua azienda dipende troppo da te e manca di struttura operativa",
    stepLabel: "Passo 2",
    verticalName: "Impresa Liquida",
    href: "/impresa-liquida",
    ctaLabel: "Vai a Impresa Liquida",
  },
  "3A": {
    problem: "il tuo fatturato dipende da clienti privati e vuoi aprire la PA",
    stepLabel: "Passo 3A",
    verticalName: "Fatturato Garantito",
    href: "/fatturato-garantito",
    ctaLabel: "Vai a Fatturato Garantito",
  },
  "3B": {
    problem: "la tua acquisizione clienti dipende ancora dal passaparola",
    stepLabel: "Passo 3B",
    verticalName: "Agenzia Business",
    href: "/agenzia-business",
    ctaLabel: "Vai ad Agenzia Business",
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
        <strong className="text-hub-ink">{meta.verticalName}</strong> è l&apos;applicazione operativa di questo passaggio del Metodo.
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
