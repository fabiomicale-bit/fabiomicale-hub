"use client";

import React, { useState } from "react";

export default function AgencyContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    sitoweb: "",
    azienda: "",
    settore: "Consulenza / Servizi",
    messaggio: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          utm_source: "agency_contact",
          notes: `Azienda: ${formData.azienda}, Settore: ${formData.settore}, Messaggio: ${formData.messaggio}`
        }),
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl text-center animate-fade-in">
        <div className="w-20 h-20 bg-agency-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-agency-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-agency-navy mb-4 font-serif italic">Richiesta Ricevuta.</h3>
        <p className="text-agency-text-muted leading-relaxed">
          Analizzeremo il tuo profilo e ti ricontatteremo entro 24 ore <br /> per fissare l&apos;audit strategico.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-agency-accent/5 blur-[80px] -mr-32 -mt-32" />
      
      <div className="relative z-10 flex flex-col gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Nome *</label>
            <input
              required
              type="text"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Es: Marco"
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Cognome *</label>
            <input
              required
              type="text"
              value={formData.cognome}
              onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
              placeholder="Es: Rossi"
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Email Aziendale *</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="marco@azienda.it"
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Telefono *</label>
            <input
              required
              type="tel"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              placeholder="+39 333 ..."
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Nome Azienda <span className="lowercase italic opacity-60 font-medium">(Facoltativo)</span></label>
            <input
              type="text"
              value={formData.azienda}
              onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
              placeholder="Nome del tuo business"
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Sito Web <span className="lowercase italic opacity-60 font-medium">(Facoltativo)</span></label>
            <input
              type="url"
              value={formData.sitoweb}
              onChange={(e) => setFormData({ ...formData, sitoweb: e.target.value })}
              placeholder="https://..."
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Settore Operativo</label>
          <div className="relative">
            <select
              value={formData.settore}
              onChange={(e) => setFormData({ ...formData, settore: e.target.value })}
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none appearance-none cursor-pointer"
            >
              <option>Consulenza / Servizi</option>
              <option>Immobiliare / Edilizia</option>
              <option>Salute / Medicina Estetica</option>
              <option>E-commerce / Retail</option>
              <option>Altro...</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-navy/60 ml-1">Obiettivo Principale</label>
          <textarea
            required
            rows={4}
            value={formData.messaggio}
            onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
            placeholder="Descrivi brevemente di cosa hai bisogno..."
            className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-agency-accent/20 focus:border-agency-accent transition-all outline-none resize-none"
          />
        </div>

        <div className="pt-4">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-agency-navy text-white font-black uppercase text-[11px] tracking-[0.3em] py-5 rounded-2xl hover:bg-agency-accent transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-agency-navy/10 disabled:opacity-50"
          >
            {loading ? "Invio in corso..." : "Invia Richiesta Audit"}
          </button>
          <p className="text-[9px] text-center text-agency-text-muted mt-6 uppercase tracking-widest leading-relaxed">
            Cliccando su invia accetti il trattamento dei dati personali <br /> secondo la nostra politica sulla privacy. *
          </p>
        </div>
      </div>
    </form>

  );
}
