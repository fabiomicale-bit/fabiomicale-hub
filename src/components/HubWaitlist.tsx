"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const HubWaitlist = () => {
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
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          utm_source: "accademia_waitlist",
          subject: "ISCRIZIONE LISTA ATTESA ACCADEMIA",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#1A1A1A] text-white p-8 md:p-16 rounded-[3rem] relative overflow-hidden border border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hub-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Entra nella Lista d'Attesa</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            L'accesso all'Accademia è attualmente limitato per garantire la massima qualità. 
            Inserisci i tuoi dati per essere inserito nella lista prioritaria e ricevere una valutazione di fattibilità.
          </p>
        </div>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-hub-gold/10 border border-hub-gold/30 p-10 rounded-3xl text-center"
          >
            <div className="text-hub-gold text-4xl mb-4">✓</div>
            <p className="text-xl font-serif italic text-hub-gold mb-2">Richiesta Ricevuta.</p>
            <p className="text-gray-400">Ti abbiamo inserito nella lista prioritaria. Controlla la tua email.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome *"
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-hub-gold/50 transition-all text-sm"
              />
              <input
                type="text"
                placeholder="Cognome *"
                required
                value={formData.cognome}
                onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-hub-gold/50 transition-all text-sm"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                required
                placeholder="Email Professionale *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-hub-gold/50 transition-all text-sm"
              />
              <input
                type="tel"
                required
                placeholder="Telefono / WhatsApp *"
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-hub-gold/50 transition-all text-sm"
              />
            </div>

            <input
              type="url"
              placeholder="Sito Web / Profilo LinkedIn (opzionale)"
              value={formData.sitoweb}
              onChange={(e) => setFormData({...formData, sitoweb: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-hub-gold/50 transition-all text-sm"
            />

            <textarea
              placeholder="Parlaci brevemente dei tuoi obiettivi *"
              required
              rows={3}
              value={formData.messaggio}
              onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-hub-gold/50 transition-all text-sm resize-none"
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy-waitlist"
                required
                checked={formData.privacy}
                onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                className="mt-1 accent-hub-gold"
              />
              <label htmlFor="privacy-waitlist" className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">
                Acconsento al trattamento dei dati personali secondo la Privacy Policy *
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-hub-gold hover:bg-hub-gold-dark text-black font-black px-8 py-5 rounded-xl transition-all disabled:opacity-50 uppercase text-xs tracking-[0.3em]"
            >
              {status === "loading" ? "Elaborazione..." : "Voglio la Priorità"}
            </button>
          </form>
        )}
        
        {status === "error" && (
          <p className="text-red-400 text-center text-sm mt-4">Errore nell&apos;invio. Riprova tra pochi istanti.</p>
        )}
      </div>
    </div>
  );
};
