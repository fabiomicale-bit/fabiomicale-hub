"use client";

import { useState } from "react";

const faqs = [
  {
    domanda: "Da dove conviene iniziare?",
    risposta:
      "Se non ci conosciamo ancora, il punto di partenza ideale è la newsletter gratuita. Ti permette di capire il mio approccio senza nessun impegno.",
  },
  {
    domanda: "Quanto costa una consulenza 1:1?",
    risposta:
      "Il costo varia in base alla durata e al percorso scelto. Scrivimi a info@fabiomicale.com per ricevere informazioni personalizzate.",
  },
  {
    domanda: "I corsi sono adatti anche a chi non sa nulla di AI?",
    risposta:
      "Sì. I percorsi sono progettati per professionisti con esperienza ma senza background tecnico. Si parte dal mindset, non dalla tecnologia.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
            open === i ? "border-blue-500/30" : "border-white/8"
          } bg-white/[0.03]`}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`font-medium transition-colors duration-200 ${open === i ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
              {faq.domanda}
            </span>
            <svg
              className={`w-5 h-5 text-blue-400 shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-slate-400 leading-relaxed text-[0.95rem] border-t border-white/5 pt-4">
              {faq.risposta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
