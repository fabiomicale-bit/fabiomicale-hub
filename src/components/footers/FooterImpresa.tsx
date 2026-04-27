"use client";

import Link from "next/link";

export default function FooterImpresa() {
  return (
    <footer className="bg-hub-charcoal text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/impresa-liquida" className="inline-block mb-8">
              <img src="/logos/impresa-liquida.png" alt="Impresa Liquida" className="h-16 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              Protocolli di automazione per trasformare il tuo business in un asset scalabile che funziona senza la tua presenza costante.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-8">Percorso</h4>
            <ul className="space-y-4">
              <li><Link href="/impresa-liquida/chi-siamo" className="text-white/50 hover:text-white text-sm transition-colors">Chi Siamo</Link></li>
              <li><Link href="/impresa-liquida#metodo" className="text-white/50 hover:text-white text-sm transition-colors">Metodo</Link></li>
              <li><Link href="/impresa-liquida/aggiornamenti" className="text-white/50 hover:text-white text-sm transition-colors">Aggiornamenti</Link></li>
              <li><Link href="/impresa-liquida/contatti" className="text-white/50 hover:text-white text-sm transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-8">Connessione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-brand-green hover:text-white text-sm font-bold transition-colors">VAI ALL&apos;HUB PRINCIPALE</Link></li>
              <li className="text-white/20 text-xs mt-8">© 2026 Impresa Liquida.</li>
              <li className="text-white/20 text-xs">Part of Fabio Micale Ecosystem.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            SCALABILITÀ · AUTOMAZIONE · LIBERTÀ OPERATIVA
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
