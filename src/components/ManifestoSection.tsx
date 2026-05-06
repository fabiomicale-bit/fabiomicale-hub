import { manifesto } from "@/content/manifesto";

export default function ManifestoSection() {
  return (
    <section className="py-24 px-6 bg-hub-cream">
      <div className="max-w-3xl mx-auto">
        {/* Decorative line */}
        <div className="w-12 h-0.5 bg-hub-gold mb-10" />

        <h2 className="text-2xl md:text-3xl font-serif font-medium text-hub-ink mb-10 leading-snug">
          {manifesto.title}
        </h2>

        <div className="flex flex-col gap-6">
          {manifesto.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-hub-ink-muted leading-relaxed font-light text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
