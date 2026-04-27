"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarPunto() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Il Protocollo", href: "/punto-zero#protocollo" },
    { label: "La Community", href: "/punto-zero#percorso" },
    { label: "Il Libro", href: "/punto-zero#manuale" },
    { label: "Contatti", href: "mailto:info@fabiomicale.com" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-obsidian/95 backdrop-blur-md py-2 border-b border-white/5" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/punto-zero" className="flex items-center group">
          <img 
            src="/logo-punto-zero-temp.svg" 
            alt="Punto Zero Logo" 
            className="h-16 md:h-20 w-auto transition-all duration-700 group-hover:brightness-125"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-platinum-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <Link 
            href="/"
            className="ml-4 px-6 py-2 bg-white/5 text-white/40 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 hover:text-white transition-all"
          >
            HUB PRINCIPALE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-obsidian border-b border-white/5 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif italic text-white/70 hover:text-platinum-300 border-b border-white/5 pb-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/"
                onClick={() => setIsOpen(false)}
                className="bg-white/5 text-white/50 px-8 py-4 rounded-xl text-center font-bold uppercase tracking-[0.3em] text-[10px]"
              >
                HUB PRINCIPALE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
