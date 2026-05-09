"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href?: string; children?: NavChild[] };

const defaultHubLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Il Metodo", href: "/il-metodo" },
  { label: "Il Libro", href: "/successo-in-3-passi" },
  { label: "Blog", href: "/blog" },
  { label: "Area riservata", href: "/area-riservata" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (label: string) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

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
              Scrittore e Formatore
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAVIGATION ──────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-8">
          {defaultHubLinks.map((link) => (
            <div key={link.label} className="relative group/link">
              {link.children ? (
                <>
                  <button className="text-[11px] font-bold uppercase tracking-widest text-hub-ink/70 hover:text-hub-gold transition-colors flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:pointer-events-auto transition-all duration-300">
                    <div className="bg-white border border-hub-border shadow-2xl rounded-2xl p-4 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-hub-ink/60 hover:text-hub-gold hover:bg-hub-gold/5 rounded-xl transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href!}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-hub-gold ${
                    pathname === link.href ? "text-hub-gold" : "text-hub-ink/70"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <button 
            disabled
            className="bg-hub-gold text-hub-ink px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-50 cursor-not-allowed shadow-lg shadow-hub-gold/20"
          >
            Estratto in arrivo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Apri menu"
        >
          <div className={`w-6 h-0.5 bg-hub-ink transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-hub-ink transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-hub-ink transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-hub-border overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-1">
              {defaultHubLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      {/* Accordion trigger */}
                      <button
                        onClick={() => toggleSection(link.label)}
                        className="w-full flex items-center justify-between py-4 border-b border-gray-50 text-lg font-serif italic text-hub-ink hover:text-hub-gold transition-colors"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${openSection === link.label ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Accordion children */}
                      <AnimatePresence>
                        {openSection === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-5 pb-2 flex flex-col">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="py-3 border-b border-gray-50 text-[11px] font-bold uppercase tracking-widest text-hub-ink/60 hover:text-hub-gold transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 border-b border-gray-50 text-lg font-serif italic text-hub-ink hover:text-hub-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
