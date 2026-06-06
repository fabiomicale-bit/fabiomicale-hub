"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Post } from "@/lib/posts";

type Props = {
  activeStep: string;
  activeFormats: string[];
};

const stepLabels: Record<string, string> = {
  "Tutti": "Tutti",
  "1": "1. Ferma il caos",
  "2": "2. Rimetti struttura",
  "3": "3. Mantieni il controllo",
};

const formatLabels: Record<string, string> = {
  "caso-reale": "Casi reali",
  "appunti-di-metodo": "Appunti di metodo",
  "strumento-pratico": "Strumenti pratici",
  "diario-di-costruzione": "Diario di costruzione",
};

const ALL_FORMATS = Object.keys(formatLabels) as Post["formats"][number][];
const ALL_STEPS = ["Tutti", "1", "2", "3"];

export default function BlogFilters({ activeStep, activeFormats }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    <>
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
    </>
  );
}
