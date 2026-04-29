"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-hub-ink text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col group py-1 mb-8">
              <div className="flex flex-col leading-none text-white">
                <span className="text-[20px] font-black tracking-[0.2em] uppercase font-serif group-hover:text-hub-gold transition-colors">
                  Fabio Micale
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-hub-gold uppercase mt-1">
                  Metodologo della Crescita
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light italic">
              Metodologo della Crescita, Autore e Formatore. <br />
              Aiuto professionisti e imprenditori a costruire sistemi di successo basati su integrità e ingegneria millimetrica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-hub-gold mb-8">Navigazione</h4>
            <ul className="space-y-4">
              <li><Link href="/il-metodo" className="text-white/50 hover:text-white text-sm transition-colors">Il Metodo</Link></li>
              <li><Link href="/accademia" className="text-white/50 hover:text-white text-sm transition-colors">Accademia</Link></li>
              <li><Link href="/il-libro" className="text-white/50 hover:text-white text-sm transition-colors">I Libri</Link></li>
              <li><Link href="/blog" className="text-white/50 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Secondary Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-hub-gold mb-8">Mondi Verticali</h4>
            <ul className="space-y-4">
              <li><Link href="/mepa-elite" className="text-white/50 hover:text-white text-sm transition-colors">MEPA Elite</Link></li>
              <li><Link href="/impresa-liquida" className="text-white/50 hover:text-white text-sm transition-colors">Impresa Liquida</Link></li>
              <li><Link href="/punto-zero" className="text-white/50 hover:text-white text-sm transition-colors">Punto Zero</Link></li>
              <li><Link href="/agenzia-business" className="text-white/50 hover:text-white text-sm transition-colors">Agenzia Business</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            © 2026 Fabio Micale · Progetto editoriale e divulgativo
          </div>
          <div className="flex gap-8">
            <Link href="/note-legali" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Note Legali</Link>
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
