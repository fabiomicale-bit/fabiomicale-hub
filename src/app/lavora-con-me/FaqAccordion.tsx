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
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-2xl overflow-hidden transition-all duration-500 bg-white/[0.02] ${
            open === i ? "border-[#F5A623]/30 bg-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : "border-white/5 hover:border-white/10"
          }`}
        >
          <button
            className="w-full flex items-center justify-between px-8 py-6 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`text-base font-serif italic transition-all duration-300 ${open === i ? "text-[#F5A623]" : "text-white/60 group-hover:text-white"}`}>
              {faq.domanda}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${open === i ? "bg-[#F5A623] rotate-45" : "bg-white/5 group-hover:bg-white/10"}`}>
              <svg
                className={`w-4 h-4 transition-colors duration-300 ${open === i ? "text-black" : "text-[#F5A623]"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
          
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-8 pb-8 text-white/40 leading-relaxed text-sm font-light border-t border-white/5 pt-6">
              {faq.risposta}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
