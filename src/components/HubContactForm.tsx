"use client";

export default function HubContactForm({ theme = "default" }: { theme?: string }) {
  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Contatti in fase di attivazione</h2>
      <p className="text-hub-ink-muted text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
        Il modulo contatti è in fase di configurazione. Per ora questa sezione resta visibile come anteprima del progetto Fabio Micale Hub. Saremo operativi a breve.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-20 pointer-events-none max-w-2xl mx-auto text-left">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">Nome</label>
          <div className="w-full h-12 bg-hub-white border border-hub-border rounded-xl" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">Cognome</label>
          <div className="w-full h-12 bg-hub-white border border-hub-border rounded-xl" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">Email</label>
          <div className="w-full h-12 bg-hub-white border border-hub-border rounded-xl" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">Cellulare (Facoltativo)</label>
          <div className="w-full h-12 bg-hub-white border border-hub-border rounded-xl" />
          <p className="text-[9px] text-hub-ink/40 ml-2 italic">Facoltativo. Inseriscilo solo se preferisci essere ricontattato telefonicamente.</p>
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">Messaggio</label>
          <div className="w-full h-32 bg-hub-white border border-hub-border rounded-xl" />
        </div>
        <div className="md:col-span-2 flex items-start gap-3 mt-2">
          <div className="w-4 h-4 border border-hub-border rounded bg-hub-white" />
          <span className="text-[10px] text-hub-ink/40 leading-tight">Ho letto l'informativa privacy.</span>
        </div>
      </div>
      
      <button disabled className="btn-gold mt-10 px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">
        Modulo non attivo
      </button>
      
      <p className="mt-8 text-hub-ink-light text-[10px] uppercase tracking-[0.3em] font-medium">
        Puoi scrivermi direttamente a: <span className="text-hub-gold font-bold">info@fabiomicale.com</span>
      </p>
    </div>
  );
}
