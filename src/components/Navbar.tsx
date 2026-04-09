"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Il Metodo", href: "/il-metodo" },
  { label: "Soluzioni", href: "/soluzioni" },
  { label: "Il Libro", href: "/il-libro" },
  { label: "Approfondimenti", href: "/blog" },
  { label: "Risorse", href: "/risorse" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo & Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative p-1 border border-[rgba(255,255,255,0.1)] rounded-lg group-hover:border-[#F5A623] transition-colors duration-300">
            <Image
              src="/logo-fabio-micale.svg"
              width={40}
              height={40}
              alt="Fabio Micale"
              priority
              className="brightness-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-tight leading-none">Fabio Micale</span>
            <span className="text-[10px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.2em] mt-1 font-semibold group-hover:text-[#F5A623] transition-colors">Il Metodologo</span>
          </div>
        </Link>

        {/* Desktop Nav: Elegant & Spaced */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-all duration-300 tracking-wide uppercase hover:text-[#F5A623] ${
                pathname === link.href ? "text-[#F5A623]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* High-Ticket CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/soluzioni"
            className="group relative inline-flex items-center justify-center bg-[#F5A623] hover:bg-[#D4891A] text-[#0D0D0D] text-[12px] font-bold px-7 py-3 rounded-full transition-all duration-300 uppercase tracking-wider overflow-hidden"
          >
            <span className="relative z-10">Candidati Ora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu: Full Screen Overlay Style */}
      <div className={`fixed inset-0 bg-[#0D0D0D] z-[-1] transition-all duration-500 lg:hidden ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-light text-white hover:text-[#F5A623] transition-colors tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/soluzioni"
            className="mt-4 bg-[#F5A623] text-[#0D0D0D] px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest shadow-xl"
            onClick={() => setMenuOpen(false)}
          >
            Candidati Ora
          </Link>
        </div>
      </div>
    </header>
  );
}
