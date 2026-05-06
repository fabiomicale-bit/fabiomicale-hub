import Link from "next/link";

type VerticalKey =
  | "punto-zero"
  | "impresa-liquida"
  | "fatturato-garantito"
  | "agenzia-business"
  | "book";

interface CrossLinkFooterProps {
  currentVertical: VerticalKey;
}

const allVerticals: { key: Exclude<VerticalKey, "book">; label: string; step: string; href: string }[] = [
  { key: "punto-zero", label: "Punto Zero", step: "Passo 1", href: "/punto-zero" },
  { key: "impresa-liquida", label: "Impresa Liquida", step: "Passo 2", href: "/impresa-liquida" },
  { key: "fatturato-garantito", label: "Fatturato Garantito", step: "Passo 3A", href: "/fatturato-garantito" },
  { key: "agenzia-business", label: "Agenzia Business", step: "Passo 3B", href: "/agenzia-business" },
];

export default function CrossLinkFooter({ currentVertical }: CrossLinkFooterProps) {
  const others = allVerticals.filter((v) => v.key !== currentVertical);

  return (
    <section className="py-20 px-6 bg-hub-bg-alt border-t border-hub-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-3">
            Stai forse risolvendo il problema sbagliato?
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-hub-ink leading-snug max-w-xl">
            Torna alla diagnosi e scegli il passo più adatto.
          </h2>
          <Link
            href="/#metodo"
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold hover:text-hub-gold-dark transition-colors"
          >
            Vai alla diagnosi dei 3 Passi <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((v) => (
            <Link
              key={v.key}
              href={v.href}
              className="group rounded-2xl border border-hub-border bg-hub-white p-6 hover:border-hub-gold/30 transition-all duration-300 flex flex-col gap-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold">
                {v.step}
              </span>
              <span className="text-base font-serif font-medium text-hub-ink group-hover:text-hub-gold transition-colors">
                {v.label} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
