"use client";

import { useState } from "react";

interface HubContactFormProps {
  theme?: "hub" | "agency" | "mepa" | "punto-zero";
}

export default function HubContactForm({ theme = "hub" }: HubContactFormProps) {
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

  const isAgency = theme === "agency";
  const isMepa = theme === "mepa";
  const isPunto = theme === "punto-zero";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.cognome || !formData.email || !formData.telefono || !formData.privacy) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, context: theme }),
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

  const accentColor = isAgency ? "text-blue-600" : (isMepa ? "text-pa-green" : (isPunto ? "text-platinum-300" : "text-hub-gold"));
  const btnClass = isAgency 
    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200" 
    : (isMepa ? "bg-pa-green hover:bg-hub-gold-dark text-white shadow-pa-green/20" : (isPunto ? "bg-platinum-100 text-obsidian hover:bg-white" : "btn-gold"));

  return (
    <div className="w-full max-w-2xl mx-auto">
      {status === "success" ? (
        <div className="card-editorial p-12 text-center animate-fade-in">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-500/10 text-green-500`}>
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif font-medium mb-4">Messaggio Inviato.</h3>
          <p className="text-hub-ink-muted text-lg font-light leading-relaxed">
            Grazie per avermi contattato. Riceverai una risposta personale entro 24 ore.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light ml-4">Nome *</label>
              <input
                type="text"
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                required
                className="w-full px-8 py-5 rounded-[20px] bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light ml-4">Cognome *</label>
              <input
                type="text"
                placeholder="Cognome"
                value={formData.cognome}
                onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                required
                className="w-full px-8 py-5 rounded-[20px] bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light ml-4">La tua email *</label>
              <input
                type="email"
                placeholder="email@esempio.it"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-8 py-5 rounded-[20px] bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light ml-4">Telefono *</label>
              <input
                type="tel"
                placeholder="+39 000 0000000"
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                required
                className="w-full px-8 py-5 rounded-[20px] bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light ml-4">Sito Web (opzionale)</label>
            <input
              type="url"
              placeholder="https://www.tuosito.it"
              value={formData.sitoweb}
              onChange={(e) => setFormData({...formData, sitoweb: e.target.value})}
              className="w-full px-8 py-5 rounded-[20px] bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all shadow-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light ml-4">Il tuo messaggio *</label>
            <textarea
              placeholder="Raccontami la tua situazione o il tuo progetto..."
              value={formData.messaggio}
              onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
              rows={5}
              required
              className="w-full px-8 py-6 rounded-[20px] bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all shadow-sm resize-none"
            />
          </div>

          <div className="flex items-start gap-3 px-2">
            <input
              type="checkbox"
              id="privacy-hub"
              checked={formData.privacy}
              onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
              required
              className="mt-1 w-4 h-4 accent-hub-gold"
            />
            <label htmlFor="privacy-hub" className="text-xs text-hub-ink-muted leading-relaxed">
              Dichiaro di aver letto l&apos;informativa sulla privacy e acconsento al trattamento dei dati personali. *
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`${btnClass} w-full py-6 rounded-[20px] text-[11px] font-bold uppercase tracking-[0.3em] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-xl`}
          >
            {status === "loading" ? "Inviando..." : "Invia Messaggio Diretto"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest mt-2">
              Qualcosa è andato storto. Riprova o scrivi a info@fabiomicale.com
            </p>
          )}
        </form>
      )}
    </div>
  );
}
