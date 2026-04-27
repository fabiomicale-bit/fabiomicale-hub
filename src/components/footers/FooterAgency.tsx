"use client";

import Link from "next/link";

export default function FooterAgency() {
  return (
    <footer className="bg-agency-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/agenzia-business" className="inline-block mb-8">
              <img src="/logo-agenzia-business-temp.svg" alt="Agenzia Business" className="h-16 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Sistemi di acquisizione clienti basati su intelligenza artificiale e strategie B2B ad alto rendimento. Trasformiamo il traffico in asset aziendali.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-agency-accent mb-8">Soluzioni</h4>
            <ul className="space-y-4">
              <li><Link href="/agenzia-business#servizi" className="text-slate-300 hover:text-white text-sm transition-colors">Servizi AI</Link></li>
              <li><Link href="/agenzia-business#settori" className="text-slate-300 hover:text-white text-sm transition-colors">Casi Studio</Link></li>
              <li><Link href="/agenzia-business/analisi-strategiche" className="text-slate-300 hover:text-white text-sm transition-colors">Analisi Strategiche</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-agency-accent mb-8">Connessione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-agency-accent hover:text-white text-sm font-bold transition-colors underline decoration-2 underline-offset-4">VAI ALL&apos;HUB PRINCIPALE</Link></li>
              <li className="text-slate-500 text-xs mt-8">© 2026 Agenzia Business.</li>
              <li className="text-slate-500 text-xs">A Fabio Micale Company.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            B2B GROWTH · AI DRIVEN · SCALE UP
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Legal Notes</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
