"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const isMepa = pathname.startsWith("/mepa-elite");
  const isAgency = pathname.startsWith("/agenzia-business");
  const isPunto = pathname.startsWith("/punto-zero");
  const isImpresa = pathname.startsWith("/impresa-liquida");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  // Determination of styles based on context
  const getThemeClasses = () => {
    if (isMepa) return "bg-pa-green border-pa-green/20 hover:bg-pa-green-bright text-white shadow-pa-green/20";
    if (isAgency) return "bg-agency-navy border-agency-navy/20 hover:bg-agency-navy-light text-white shadow-agency-navy/20";
    if (isPunto) return "bg-obsidian border-platinum-400/30 hover:border-white text-platinum-300 shadow-black";
    if (isImpresa) return "bg-[#065F46] border-white/20 hover:bg-[#044E39] text-white shadow-[#065F46]/20";
    return "bg-[#1A1A1A] border-hub-gold/30 hover:border-hub-gold text-hub-gold shadow-black/20";
  };

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Torna su"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl group border ${getThemeClasses()}`}
    >
      <svg
        className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
