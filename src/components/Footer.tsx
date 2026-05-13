"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-hub-bg-warm text-hub-ink pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col group py-1 mb-8">
              <div className="flex flex-col leading-none text-hub-ink">
                <span className="text-[20px] font-black tracking-[0.2em] uppercase font-serif group-hover:text-hub-gold transition-colors">
                  Fabio Micale
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-hub-gold uppercase mt-1">
                  Scrittore e Formatore
                </span>
              </div>
            </Link>
            <p className="text-hub-ink/60 text-sm leading-relaxed max-w-sm font-light">
              Scrittore e formatore per la rinascita professionale Over 40 nell’era dell’AI. <br />
              Autore del Metodo Successo in 3 Passi.
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold mt-6 italic">
              "Non ti vendo sogni. Ti do strumenti."
            </p>
          </div>
 
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-hub-gold mb-8">Navigazione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Home</Link></li>
              <li><Link href="/chi-sono" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Chi sono</Link></li>
              <li><Link href="/il-metodo" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Il Metodo</Link></li>
              <li><Link href="/successo-in-3-passi" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Successo in 3 Passi</Link></li>
            </ul>
          </div>
 
          {/* Secondary Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-hub-gold mb-8">Piattaforma</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Blog</Link></li>
              <li><Link href="/estratto" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Estratto Gratuito</Link></li>
              <li><Link href="/contatti" className="text-hub-ink/50 hover:text-hub-ink text-sm transition-colors font-medium uppercase tracking-wider text-[10px]">Contatti</Link></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="bg-hub-cream p-8 rounded-2xl border border-hub-border">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-hub-gold mb-4">Un Passo Avanti</h4>
            <p className="text-hub-ink/70 text-xs leading-relaxed mb-6">
              La newsletter settimanale per applicare il Metodo Successo in 3 Passi.
            </p>
            <div className="pt-4 border-t border-hub-border/50">
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">Iscrizioni Aperte</p>
               <p className="text-hub-ink/60 text-[9px] mt-2 italic font-serif">
                 Iscriviti per ricevere l'estratto gratuito e gli aggiornamenti del Metodo.
               </p>
            </div>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="border-t border-hub-ink/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-hub-ink/20 font-bold">
            © 2026 Fabio Micale · Progetto editoriale e divulgativo
          </div>
          <div className="flex gap-8">
            <Link href="/note-legali" className="text-[10px] uppercase tracking-widest text-hub-ink/20 hover:text-hub-ink transition-colors">Note Legali</Link>
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-hub-ink/20 hover:text-hub-ink transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-hub-ink/20 hover:text-hub-ink transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
