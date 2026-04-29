"use client";

import Link from "next/link";

export default function FooterAgency() {
  return (
    <footer className="bg-agency-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/agenzia-business" className="flex flex-col group py-1 mb-8">
              <div className="flex flex-col leading-none text-white">
                <span className="text-[20px] font-black tracking-[0.2em] uppercase font-serif group-hover:text-agency-accent transition-colors">
                  Agenzia
                </span>
                <span className="text-[18px] font-light italic tracking-[0.1em] text-agency-accent font-serif -mt-1">
                  Business
                </span>
              </div>
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
              <li className="text-slate-500 text-[10px] uppercase tracking-widest mt-8">© 2026 Fabio Micale.</li>
              <li className="text-slate-500 text-[10px] uppercase tracking-widest italic">Progetto editoriale e divulgativo.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            CRESCITA B2B · SISTEMI AI · SCALABILITÀ
          </div>
          <div className="flex gap-8">
            <Link href="/note-legali" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Note Legali</Link>
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
