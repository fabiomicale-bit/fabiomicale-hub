"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  theme?: "hub" | "agency" | "mepa" | "liquida" | "silver";
}

export default function FAQSection({ 
  items, 
  title = "Domande Frequenti", 
  subtitle = "Abbiamo raccolto i dubbi più comuni dei nostri partner.",
  theme = "hub" 
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const themeStyles = {
    hub: {
      bg: "bg-hub-bg",
      text: "text-hub-ink",
      textMuted: "text-hub-ink-muted",
      accent: "text-hub-gold",
      accentBg: "bg-hub-gold/5",
      border: "border-hub-gold/20",
      itemBg: "bg-white/5",
      itemBorder: "border-white/10"
    },
    agency: {
      bg: "bg-white",
      text: "text-slate-900",
      textMuted: "text-slate-500",
      accent: "text-blue-600",
      accentBg: "bg-blue-50",
      border: "border-slate-200",
      itemBg: "bg-slate-50",
      itemBorder: "border-slate-200"
    },
    mepa: {
      bg: "bg-slate-50",
      text: "text-slate-900",
      textMuted: "text-slate-500",
      accent: "text-brand-blue",
      accentBg: "bg-brand-blue/5",
      border: "border-brand-blue/10",
      itemBg: "bg-white",
      itemBorder: "border-slate-200"
    },
    liquida: {
      bg: "bg-[#FDFDFD]",
      text: "text-[#111827]",
      textMuted: "text-black/50",
      accent: "text-[#065F46]",
      accentBg: "bg-[#065F46]/5",
      border: "border-[#065F46]/10",
      itemBg: "bg-white",
      itemBorder: "border-black/[0.03]"
    },
    silver: {
      bg: "bg-obsidian",
      text: "text-white",
      textMuted: "text-white/40",
      accent: "text-platinum-300",
      accentBg: "bg-white/5",
      border: "border-white/10",
      itemBg: "bg-white/[0.02]",
      itemBorder: "border-white/5"
    }
  };

  const s = themeStyles[theme];

  return (
    <section className={`py-32 px-6 ${s.bg} relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className={`text-4xl md:text-6xl font-serif font-medium ${s.text} mb-6`}>
            {title.split(' ').map((word, i) => i === 1 ? <span key={i} className={`italic font-light ${s.accent} mr-3`}>{word}</span> : word + ' ')}
          </h2>
          <p className={`${s.textMuted} text-lg font-light max-w-xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-3xl border ${s.itemBorder} ${s.itemBg} transition-all duration-500 overflow-hidden ${openIndex === index ? 'shadow-xl' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-serif ${s.text} group-hover:${s.accent} transition-colors`}>
                  {item.question}
                </span>
                <span className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className={`w-5 h-5 ${s.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className={`px-8 pb-8 ${s.textMuted} leading-relaxed text-base font-light italic font-serif`}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
