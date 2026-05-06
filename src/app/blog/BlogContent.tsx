"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Post } from "@/lib/posts";

type Props = {
  manifestoPosts: Post[];
  regularPosts: Post[];
};

const stepLabels: Record<string, string> = {
  "Tutti": "Tutti",
  "1": "Passo 1",
  "2": "Passo 2",
  "3": "Passo 3",
};

const formatLabels: Record<string, string> = {
  "caso-reale": "Casi reali",
  "appunti-di-metodo": "Appunti di metodo",
  "strumento-pratico": "Strumenti pratici",
  "diario-di-costruzione": "Diario di costruzione",
};

const ALL_FORMATS = Object.keys(formatLabels) as Post["formats"][number][];
const ALL_STEPS = ["Tutti", "1", "2", "3"];

const StarIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export default function BlogContent({ manifestoPosts, regularPosts }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeStep = searchParams.get("step") ?? "Tutti";
  const activeFormats = searchParams.get("format")?.split(",").filter(Boolean) ?? [];

  const matchesStep = (p: Post) => {
    if (activeStep === "Tutti") return true;
    if (activeStep === "3") return p.step === "3A" || p.step === "3B";
    return String(p.step) === activeStep;
  };

  const matchesFormats = (p: Post) => {
    if (activeFormats.length === 0) return true;
    return activeFormats.some((f) => p.formats.includes(f as Post["formats"][number]));
  };

  const filteredManifesto = manifestoPosts.filter((p) => matchesStep(p) && matchesFormats(p));
  const filteredRegular = regularPosts.filter((p) => matchesStep(p) && matchesFormats(p));

  const handleStepChange = (step: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (step === "Tutti") {
      params.delete("step");
    } else {
      params.set("step", step);
    }
    const qs = params.toString();
    router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  };

  const handleFormatToggle = (format: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.get("format")?.split(",").filter(Boolean) ?? [];
    const next = current.includes(format)
      ? current.filter((f) => f !== format)
      : [...current, format];
    if (next.length > 0) {
      params.set("format", next.join(","));
    } else {
      params.delete("format");
    }
    const qs = params.toString();
    router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  };

  return (
    <div className="py-20 px-6 pb-40 bg-hub-bg">
      <div className="max-w-6xl mx-auto">

        {/* ── Filtri Passo (pill primari) ────────────────────────── */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {ALL_STEPS.map((step) => (
            <button
              key={step}
              onClick={() => handleStepChange(step)}
              className={`text-[10px] font-bold uppercase tracking-[0.25em] px-8 py-4 rounded-full transition-all duration-500 border ${
                activeStep === step
                  ? "bg-hub-ink border-hub-ink text-white shadow-xl"
                  : "bg-white border-hub-border text-hub-ink-muted hover:border-hub-gold/50 hover:text-hub-ink"
              }`}
            >
              {stepLabels[step]}
            </button>
          ))}
        </div>

        {/* ── Filtri Formato (chip secondari, multi-select) ───────── */}
        <div className="flex flex-wrap gap-2 mb-24 justify-center">
          {ALL_FORMATS.map((fmt) => {
            const isActive = activeFormats.includes(fmt);
            return (
              <button
                key={fmt}
                onClick={() => handleFormatToggle(fmt)}
                className={`text-[9px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all duration-300 border ${
                  isActive
                    ? "bg-hub-gold border-hub-gold text-hub-charcoal"
                    : "bg-transparent border-hub-border/60 text-hub-ink-light hover:border-hub-gold/40 hover:text-hub-ink-muted"
                }`}
              >
                {formatLabels[fmt]}
              </button>
            );
          })}
        </div>

        {/* ── Letture Fondamentali (Manifesto) ─────────────────── */}
        {filteredManifesto.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <div className="badge-editorial border-hub-gold/30 text-hub-gold-dark flex items-center gap-2">
                <StarIcon />
                Manifesto dell&apos;Evoluzione
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-hub-gold/20 via-hub-border to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredManifesto.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-editorial p-10 group flex flex-col relative overflow-hidden bg-white"
                >
                  <div className="flex items-center justify-between mb-10 opacity-60">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hub-gold">
                      Lettura Prioritaria
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">
                      {post.categoria}
                    </span>
                  </div>

                  <h2 className="text-2xl font-medium text-hub-ink mb-6 group-hover:text-hub-gold-dark transition-colors leading-tight font-serif italic">
                    {post.titolo}
                  </h2>

                  <p className="text-hub-ink-muted text-base leading-relaxed mb-10 flex-1 line-clamp-3 font-light italic font-serif">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-hub-border">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">
                      {post.data}
                    </div>
                    <span className="text-hub-gold-dark text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Analizza
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Approfondimenti Strategici ────────────────────────── */}
        {filteredRegular.length > 0 && (
          <>
            <div className="flex items-center gap-6 mb-16">
              <div className="badge-editorial">Approfondimenti Strategici</div>
              <div className="flex-1 h-px bg-gradient-to-r from-hub-border to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredRegular.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-editorial p-10 group flex flex-col hover:bg-hub-bg-alt/30 transition-all duration-500"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-hub-gold mb-10">
                    {post.categoria}
                  </span>

                  <h2 className="text-xl font-medium text-hub-ink mb-6 group-hover:text-hub-gold-dark transition-colors leading-tight">
                    {post.titolo}
                  </h2>

                  <p className="text-hub-ink-muted text-sm leading-relaxed mb-10 flex-1 line-clamp-3 font-light font-serif italic">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-hub-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">
                      {post.data}
                    </span>
                    <span className="text-hub-ink-muted text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-hub-gold-dark transition-colors">
                      Esplora
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* ── No Results ────────────────────────────────────────── */}
        {filteredManifesto.length === 0 && filteredRegular.length === 0 && (
          <div className="text-center py-40">
            <p className="text-hub-ink-light text-lg italic font-serif">
              Nessuna analisi strategica disponibile per questa selezione.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
