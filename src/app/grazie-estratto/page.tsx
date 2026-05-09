import Link from "next/link";

export default function GrazieEstrattoPage() {
  return (
    <main className="min-h-screen bg-hub-bg flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center py-20">
        <div className="w-20 h-20 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 animate-fade-in">
          <svg className="w-10 h-10 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-hub-ink">
          Controlla la tua email
        </h1>
        
        <p className="text-xl text-hub-ink-muted font-light leading-relaxed mb-8">
          Ti abbiamo inviato l’estratto gratuito di <span className="text-hub-ink font-medium italic">Successo in 3 Passi — Edizione 2026</span> all’indirizzo che hai indicato.
        </p>
        
        <div className="p-6 bg-hub-cream rounded-2xl border border-hub-border mb-12">
          <p className="text-sm text-hub-ink-muted leading-relaxed">
            <span className="font-medium text-hub-ink italic block mb-2">Nota bene:</span>
            Se non lo trovi entro pochi minuti, controlla anche la cartella spam o promozioni.
          </p>
        </div>
        
        <p className="text-hub-gold text-xs uppercase tracking-[0.4em] font-bold mb-12">
          Questo è il primo passo del Metodo:<br/> fermare il caos e rimettere ordine.
        </p>
        
        <Link 
          href="/" 
          className="btn-gold px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
        >
          Torna al sito
        </Link>
      </div>
    </main>
  );
}
