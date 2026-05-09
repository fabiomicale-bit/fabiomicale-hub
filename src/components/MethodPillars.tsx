import Link from "next/link";
import { methodPillars, type MethodContext } from "@/content/method-pillars";

interface MethodPillarsProps {
  context: MethodContext;
}

export default function MethodPillars({ context }: MethodPillarsProps) {
  const data = methodPillars[context];

  return (
    <section className="py-24 px-6 bg-hub-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
            {data.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink leading-tight max-w-2xl">
            {data.title}
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.pillars.map((pillar) => {
            const hasSubVerticals = "subVerticals" in pillar;
            const hasVerticalLink = "verticalHref" in pillar;

            return (
              <div
                key={pillar.number}
                className="group relative p-10 rounded-3xl border border-hub-border bg-hub-white hover:border-hub-gold/30 transition-all duration-300 flex flex-col"
              >
                {/* Step number */}
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-hub-gold mb-6 block">
                  Passo {pillar.number}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-serif font-medium text-hub-ink mb-4 leading-snug">
                  {pillar.name}
                </h3>

                {/* Description */}
                <p className="text-hub-ink-muted text-sm leading-relaxed font-light flex-1">
                  {pillar.description}
                </p>

                {/* Single vertical link */}
                {hasVerticalLink && (
                  <Link
                    href={(pillar as { verticalHref: string }).verticalHref}
                    className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-2"
                  >
                    {(pillar as { verticalLabel: string }).verticalLabel}
                    <span aria-hidden>→</span>
                  </Link>
                )}

                {/* Sub-verticals (Passo 3) */}
                {hasSubVerticals && (
                  <div className="mt-8 flex flex-col gap-3">
                    {(
                      pillar as unknown as {
                        subVerticals: { label: string; href: string }[];
                      }
                    ).subVerticals.map((sv) => (
                      <Link
                        key={sv.href}
                        href={sv.href}
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-2"
                      >
                        {sv.label}
                        <span aria-hidden>→</span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Decorative gold dot */}
                <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-hub-gold/30 group-hover:bg-hub-gold/60 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
