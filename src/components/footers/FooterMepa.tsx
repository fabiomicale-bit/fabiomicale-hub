"use client";

import Link from "next/link";

export default function FooterMepa() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-slate-200 pt-24 pb-12 px-6 text-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/mepa-elite" className="inline-block mb-8">
              <img src="/logo-mepa-elite.png" alt="MEPA Elite" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              Il tuo ufficio gare dedicato per il mercato della Pubblica Amministrazione. Trasformiamo la burocrazia in fatturato reale e misurabile.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-pa-green mb-8">Percorso</h4>
            <ul className="space-y-4">
              <li><Link href="/mepa-elite/chi-siamo" className="text-slate-600 hover:text-pa-green text-sm transition-colors">Chi Siamo</Link></li>
              <li><Link href="/mepa-elite/servizio" className="text-slate-600 hover:text-pa-green text-sm transition-colors">Il Servizio</Link></li>
              <li><Link href="/mepa-elite/risultati" className="text-slate-600 hover:text-pa-green text-sm transition-colors">Risultati</Link></li>
              <li><Link href="/mepa-elite/aggiornamenti" className="text-slate-600 hover:text-pa-green text-sm transition-colors">Aggiornamenti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-pa-green mb-8">Connessione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-pa-green hover:text-slate-900 text-sm font-bold transition-colors">VAI ALL&apos;HUB PRINCIPALE</Link></li>
              <li className="text-slate-400 text-xs mt-8">© 2026 MEPA Elite.</li>
              <li className="text-slate-400 text-xs">A Fabio Micale Brand.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            APPALTI PUBBLICI · ABILITAZIONE MEPA · CONSULENZA GARE
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-pa-green transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-pa-green transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
