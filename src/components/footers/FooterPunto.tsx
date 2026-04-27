"use client";

import Link from "next/link";

export default function FooterPunto() {
  return (
    <footer className="bg-obsidian border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/punto-zero" className="inline-block mb-8">
              <img src="/logo-punto-zero-temp.svg" alt="Punto Zero" className="h-16 w-auto opacity-80" />
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm font-light italic">
              Il luogo di reset per chi ha deciso di ricostruire la propria autorità attraverso l&apos;ordine chirurgico. Riservatezza, Integrità, Rinascita.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-platinum-300 mb-8">Navigazione</h4>
            <ul className="space-y-4">
              <li><Link href="/punto-zero#protocollo" className="text-white/40 hover:text-white text-sm transition-colors">Il Protocollo</Link></li>
              <li><Link href="/punto-zero#percorso" className="text-white/40 hover:text-white text-sm transition-colors">La Community</Link></li>
              <li><Link href="/punto-zero#manuale" className="text-white/40 hover:text-white text-sm transition-colors">Il Libro</Link></li>
              <li><Link href="mailto:info@fabiomicale.com" className="text-white/40 hover:text-white text-sm transition-colors">Supporto Diretto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-platinum-300 mb-8">Connessione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/40 hover:text-platinum-300 text-sm font-bold transition-colors">VAI ALL&apos;HUB PRINCIPALE</Link></li>
              <li className="text-white/20 text-xs mt-8">© 2026 Punto Zero.</li>
              <li className="text-white/20 text-xs">Proprietà di Fabio Micale.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-light italic">
            Riservatezza Assoluta · Protocollo Obsidian
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
