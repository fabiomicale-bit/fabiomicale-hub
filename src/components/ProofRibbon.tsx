import { proofPoints } from "@/content/proof-points";

interface ProofRibbonProps {
  filter?: string;
}

export default function ProofRibbon({ filter }: ProofRibbonProps) {
  const items = filter
    ? proofPoints.filter((p) => p.vertical === filter)
    : proofPoints;

  if (items.length === 0) return null;

  return (
    <section className="py-14 px-6 bg-hub-ink overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((point) => (
            <div key={point.metric} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-medium text-hub-gold mb-2">
                {point.metric}
              </p>
              <p className="text-hub-gold-light/60 text-xs font-light leading-relaxed uppercase tracking-wider">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
