"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarImpresa() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Chi Siamo", href: "/impresa-liquida/chi-siamo" },
    { label: "Metodo", href: "/impresa-liquida#metodo" },
    { label: "Articoli", href: "/impresa-liquida/aggiornamenti" },
    { label: "Contatti", href: "/impresa-liquida/contatti" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md border-b border-brand-green/10" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/impresa-liquida" className="flex flex-col group py-1">
          <div className="flex flex-col leading-none">
            <span className="text-[20px] font-black tracking-[0.2em] text-[#0A0A0A] uppercase font-serif group-hover:text-brand-green transition-colors">
              Impresa
            </span>
            <span className="text-[18px] font-light italic tracking-[0.1em] text-brand-green font-serif -mt-1">
              Liquida
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-hub-ink/70 hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <Link 
            href="/"
            className="ml-4 px-6 py-2 bg-brand-green text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#059669] transition-all"
          >
            SITO FABIO MICALE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-0.5 bg-brand-green transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-brand-green transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-brand-green transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-green/10 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif italic text-hub-ink hover:text-brand-green border-b border-gray-50 pb-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/"
                onClick={() => setIsOpen(false)}
                className="bg-brand-green text-white px-8 py-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs"
              >
                TORNA AL SITO PRINCIPALE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
