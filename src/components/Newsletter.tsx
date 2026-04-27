"use client";

import { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    sitoweb: "",
    messaggio: "",
    privacy: false
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.cognome || !formData.email || !formData.telefono || !formData.privacy) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="py-32 px-6 bg-hub-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-hub-gold/10 border border-hub-gold/15 flex items-center justify-center">
          <svg className="w-7 h-7 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink mb-6 leading-tight">
          Entra nel <span className="italic text-hub-gold">Protocollo.</span>
        </h2>
        <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Crescita personale, business online e intelligenza artificiale. Inviaci un messaggio per iniziare il tuo percorso.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="card-editorial p-8 max-w-md mx-auto">
            <div className="text-hub-gold text-2xl mb-3">✓</div>
            <p className="text-hub-ink font-serif text-lg">Messaggio Inviato.</p>
            <p className="text-hub-ink-muted text-sm mt-2">Riceverai una risposta entro 24 ore.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nome *"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
              />
              <input
                type="text"
                placeholder="Cognome *"
                value={formData.cognome}
                onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="La tua email *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
              />
              <input
                type="tel"
                placeholder="Telefono *"
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
              />
            </div>

            <input
              type="url"
              placeholder="Sito Web (opzionale)"
              value={formData.sitoweb}
              onChange={(e) => setFormData({...formData, sitoweb: e.target.value})}
              className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
            />

            <textarea
              placeholder="Scrivi il motivo per cui ci contatti *"
              value={formData.messaggio}
              onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
              rows={4}
              required
              className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all resize-none"
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                checked={formData.privacy}
                onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                required
                className="mt-1 w-4 h-4 accent-hub-gold"
              />
              <label htmlFor="privacy" className="text-xs text-hub-ink-light leading-relaxed">
                Dichiaro di aver letto l&apos;informativa sulla privacy e acconsento al trattamento dei dati personali. *
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.2em] disabled:opacity-50"
            >
              {status === "loading" ? "Inviando..." : "Invia Messaggio"}
            </button>
          </form>
        )}


        {status === "error" && (
          <p className="text-red-500 text-sm mt-4">Qualcosa è andato storto. Riprova.</p>
        )}

        <p className="text-hub-ink-light text-xs mt-6">
          Zero spam. Cancellati quando vuoi. Privacy rispettata.
        </p>
      </div>
    </section>
  );
}
