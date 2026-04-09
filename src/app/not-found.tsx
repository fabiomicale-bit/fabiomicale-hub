import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina non trovata | Fabio Micale',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#F5A623] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="text-center max-w-xl relative z-10 animate-fade-in">
        <div className="text-[#F5A623] font-serif italic text-8xl md:text-[10rem] opacity-20 mb-[-2rem] select-none italic leading-none">404</div>
        <div className="badge mb-8 mx-auto uppercase tracking-[0.4em]">Errore di Navigazione</div>
        
        <h1 className="text-4xl md:text-5xl font-light text-white mb-8 font-serif">
          Rotta <span className="italic text-[#F5A623]">Non Tracciata.</span>
        </h1>
        
        <p className="text-white/40 text-lg mb-12 font-light leading-relaxed">
          La risorsa che cerchi è stata spostata o ingegnerizzata in un nuovo asset. 
          Ritorna al centro del sistema per riprendere la navigazione.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/"
            className="btn-gold px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase"
          >
            RITORNA ALL&apos;HUB →
          </Link>
          <Link
            href="/risorse"
            className="px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all rounded-xl"
          >
            ESPLORA IL CAVEAU
          </Link>
        </div>
      </div>
    </main>
  );
}
