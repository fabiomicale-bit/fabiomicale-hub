"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const defaultHubLinks = [
  { label: "Il Metodo", href: "/il-metodo" },
  { label: "Accademia", href: "/accademia" },
  { label: "I Libri", href: "/il-libro" },
  { label: "Aggiornamenti", href: "/newsletter" },
  { label: "Articoli", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col group py-1">
          <div className="flex flex-col leading-none">
            <span className="text-[20px] font-black tracking-[0.2em] text-hub-ink uppercase font-serif group-hover:text-hub-gold transition-colors">
              Fabio Micale
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-hub-gold uppercase mt-1">
              Metodologo della Crescita
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {defaultHubLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-hub-gold ${
                pathname === link.href ? "text-hub-gold" : "text-hub-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="bg-hub-ink/10 text-hub-ink/40 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest cursor-default">
            AREA RISERVATA
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-0.5 bg-hub-ink transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-hub-ink transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-hub-ink transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-hub-border overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {defaultHubLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif italic border-b border-gray-50 pb-2 transition-colors hover:text-hub-gold text-hub-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
