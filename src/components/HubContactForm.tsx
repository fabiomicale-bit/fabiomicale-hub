"use client";

export default function HubContactForm(props: { theme?: string } = {}) {
  void props;
  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Scrivimi</h2>
      <p className="text-hub-ink-muted text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
        Per domande sul libro, sulla newsletter o sul Metodo Successo in 3 Passi, puoi scrivermi direttamente.
      </p>

      <p className="text-hub-ink-light text-[13px] uppercase tracking-[0.3em] font-medium">
        <span className="text-hub-gold font-bold">info@fabiomicale.com</span>
      </p>
    </div>
  );
}
