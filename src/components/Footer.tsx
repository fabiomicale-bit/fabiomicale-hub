import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contatti" className="bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)] pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Mission */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="p-2 border border-[rgba(245,166,35,0.2)] rounded-lg group-hover:border-[#F5A623] transition-colors">
                <Image src="/logo-fabio-micale.svg" width={32} height={32} alt="Fabio Micale" />
              </div>
              <span className="font-semibold text-white tracking-tight">Fabio Micale</span>
            </div>
            <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed mb-6">
              Il Metodologo della Crescita. Aiuto imprenditori e professionisti ad evolvere attraverso sistemi operativi di business.
            </p>
            <a
              href="mailto:info@fabiomicale.com"
              className="inline-flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)] hover:text-[#F5A623] transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@fabiomicale.com
            </a>
          </div>

          {/* Soluzioni High-Ticket */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest text-[#F5A623]">Soluzioni</h4>
            <ul className="space-y-4">
              <li><Link href="/soluzioni" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">MEPA Elite™</Link></li>
              <li><Link href="/soluzioni" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Impresa Liquida™</Link></li>
              <li><Link href="/soluzioni" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Eredità Punto Zero™</Link></li>
            </ul>
          </div>

          {/* Navigazione */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Esplora</h4>
            <ul className="space-y-4">
              <li><Link href="/chi-sono" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Chi Sono</Link></li>
              <li><Link href="/il-metodo" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Il Metodo</Link></li>
              <li><Link href="/il-libro" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Il Libro</Link></li>
              <li><Link href="/recensioni" className="text-sm text-[#F5A623] hover:text-white transition-colors font-medium">Lascia una Recensione</Link></li>
              <li><Link href="/blog" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Approfondimenti</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.linkedin.com/in/fabiomicale/" target="_blank" rel="noopener noreferrer" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors inline-flex items-center gap-2">
                  LinkedIn <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fabiomicale1/" target="_blank" rel="noopener noreferrer" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors inline-flex items-center gap-2">
                  Instagram <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li><Link href="/contatti" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[rgba(255,255,255,0.07)] pt-10 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-[rgba(255,255,255,0.2)] text-xs font-medium tracking-tight">
            © {currentYear} Fabio Micale. Tutti i diritti riservati. P.IVA IT0123456789
          </p>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="text-[rgba(255,255,255,0.2)] hover:text-white text-xs transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="/cookie" className="text-[rgba(255,255,255,0.2)] hover:text-white text-xs transition-colors underline-offset-4 hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
