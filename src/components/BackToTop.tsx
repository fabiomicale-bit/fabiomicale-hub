"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Torna su"
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#1A1F2E] border border-[#F5A623]/40 hover:border-[#F5A623] hover:bg-[#F5A623]/10 flex items-center justify-center transition-all duration-200 shadow-lg shadow-black/40 group"
    >
      <svg
        className="w-5 h-5 text-[#F5A623] group-hover:-translate-y-0.5 transition-transform duration-200"
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
