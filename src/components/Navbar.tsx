"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Il Metodo", href: "/il-metodo" },
  { label: "Il Libro", href: "/il-libro" },
  { label: "Lavora con me", href: "/lavora-con-me" },
  { label: "Approfondimenti", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const newsletterHref = pathname === "/" ? "#newsletter" : "/#newsletter";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-[#D4E4D4] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo-fabio-micale.svg"
            width={48}
            height={48}
            alt="Fabio Micale"
            priority
          />
          <span className={`font-semibold text-sm tracking-wide hidden sm:block transition-colors duration-300 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}>
            Fabio Micale
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 tracking-wide ${
                scrolled
                  ? "text-[#1A1A1A] hover:text-[#2E7D32]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href={newsletterHref}
          className="hidden md:inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#43A047] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#2E7D32]/25"
        >
          Newsletter gratuita
        </Link>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 mb-1.5 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 mb-1.5 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D4E4D4] px-6 py-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-[#1A1A1A] hover:text-[#2E7D32] border-b border-[#D4E4D4] last:border-0 text-sm transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href={newsletterHref}
            className="mt-4 block text-center bg-[#2E7D32] hover:bg-[#43A047] text-white font-medium px-4 py-3 rounded-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Newsletter gratuita
          </Link>
        </div>
      )}
    </header>
  );
}
