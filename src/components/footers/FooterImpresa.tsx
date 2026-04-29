"use client";

import Link from "next/link";

export default function FooterImpresa() {
  return (
    <footer className="bg-hub-charcoal text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/impresa-liquida" className="flex flex-col group py-1 mb-8">
              <div className="flex flex-col leading-none text-white">
                <span className="text-[20px] font-black tracking-[0.2em] uppercase font-serif group-hover:text-brand-green transition-colors">
                  Impresa
                </span>
                <span className="text-[18px] font-light italic tracking-[0.1em] text-brand-green font-serif -mt-1">
                  Liquida
                </span>
              </div>
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
              <li><Link href="/impresa-liquida/aggiornamenti" className="text-white/50 hover:text-white text-sm transition-colors">Articoli</Link></li>
              <li><Link href="/impresa-liquida/contatti" className="text-white/50 hover:text-white text-sm transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-8">Connessione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-brand-green hover:text-white text-sm font-bold transition-colors">VAI AL SITO PRINCIPALE</Link></li>
              <li className="text-white/20 text-[10px] uppercase tracking-widest mt-8">© 2026 Fabio Micale.</li>
              <li className="text-white/20 text-[10px] uppercase tracking-widest italic">Progetto editoriale e divulgativo.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            SCALABILITÀ · AUTOMAZIONE · LIBERTÀ OPERATIVA
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
