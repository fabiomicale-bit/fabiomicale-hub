"use client";

import { useState } from "react";

export default function ProtocolloModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    sitoweb: "",
    messaggio: "",
    privacy: false,
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
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStatus("idle");
    setFormData({ nome: "", cognome: "", email: "", telefono: "", sitoweb: "", messaggio: "", privacy: false });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn-gold px-10 py-4 group inline-flex items-center gap-3"
      >
        Scarica il Protocollo Gratuito
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/95"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >

          {/* Modal Panel */}
          <div className="relative z-10 w-full max-w-2xl bg-hub-bg border border-hub-border rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-hub-border flex items-center justify-center text-hub-ink-muted hover:text-hub-ink hover:border-hub-gold/40 transition-all z-10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-hub-gold/10 border border-hub-gold/15 flex items-center justify-center">
                  <svg className="w-6 h-6 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-hub-ink mb-3 leading-tight">
                  Scarica il Protocollo <span className="italic text-hub-gold">Anti-Caos.</span>
                </h2>
                <p className="text-hub-ink-muted text-sm font-light leading-relaxed max-w-sm mx-auto">
                  PDF gratuito · 9 pagine operative · Zero impegni
                </p>
              </div>

              {/* Form / Success */}
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="text-hub-gold text-3xl mb-4">✓</div>
                  <p className="text-hub-ink font-serif text-lg mb-2">Messaggio Inviato.</p>
                  <p className="text-hub-ink-muted text-sm">Riceverai una risposta entro 24 ore.</p>
                  <button onClick={handleClose} className="mt-8 btn-gold px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em]">
                    Chiudi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" suppressHydrationWarning>
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Nome *"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Cognome *"
                      value={formData.cognome}
                      onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="email"
                      placeholder="La tua email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Telefono *"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
                    />
                  </div>

                  <input
                    type="url"
                    placeholder="Sito Web (opzionale)"
                    value={formData.sitoweb}
                    onChange={(e) => setFormData({ ...formData, sitoweb: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
                  />

                  <textarea
                    placeholder="Scrivi il motivo per cui ci contatti *"
                    value={formData.messaggio}
                    onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                    rows={3}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all resize-none"
                  />

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy-modal"
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      required
                      className="mt-1 w-4 h-4 accent-hub-gold"
                    />
                    <label htmlFor="privacy-modal" className="text-xs text-hub-ink-light leading-relaxed">
                      Dichiaro di aver letto l&apos;informativa sulla privacy e acconsento al trattamento dei dati personali. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.2em] disabled:opacity-50"
                  >
                    {status === "loading" ? "Inviando..." : "Iscriviti gratis →"}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">Qualcosa è andato storto. Riprova.</p>
                  )}

                  <p className="text-hub-ink-light text-xs text-center">
                    Zero spam. Cancellati quando vuoi. Privacy rispettata.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
