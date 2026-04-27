'use client'

import { useState } from "react";

export default function ContattiPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    sitoweb: "",
    attivita: "",
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
          utm_source: "impresa_liquida_contact",
          notes: `Attività: ${formData.attivita}, Messaggio: ${formData.messaggio}`
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

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111827] selection:bg-[#065F46]/10">

      {/* ── HEADER CONTATTI PREMIUM ───────────────────────────── */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#065F46] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full border border-[#065F46]/10 bg-[#065F46]/5 text-[#065F46] mb-10 font-serif italic tracking-wide text-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
            <span>Consultazione Esclusiva — Risposta in 24h</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight mb-8 font-serif text-[#0A0A0A]">
            Inizia a <br /><span className="italic text-[#065F46]">fluire.</span>
          </h1>
          <p className="text-xl text-black/40 max-w-2xl mx-auto font-light italic font-serif">
            Se la tua azienda ha superato la fase di startup e vuoi liberarla dalla tua presenza costante, questo è il punto di partenza.
          </p>
        </div>
      </section>

      {/* ── CANDIDATURA (FORMATO MEPA ELITE) ───────────────────── */}
      <section className="py-40 px-6 bg-white relative border-t border-black/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             
             {/* Text & Stats Side */}
             <div className="py-12 animate-fade-in-up">
               <h2 className="text-4xl md:text-7xl font-serif text-[#0A0A0A] mb-12 font-bold leading-tight">
                  Vuoi liberare <br /><span className="italic text-[#065F46]">la tua ditta?</span>
               </h2>
               <p className="text-2xl font-light text-black/40 leading-relaxed mb-20 max-w-xl italic font-serif">
                 Scrivici oggi stesso. Rispondiamo a tutti entro 24 ore per analizzare se la tua struttura è pronta per l&apos;ingegnerizzazione dei processi e l&apos;integrazione dell&apos;IA.
               </p>
               
               {/* Contact Status Stats matching MEPA structure */}
               <div className="flex gap-16 font-serif text-4xl text-[#0A0A0A]">
                  <div className="flex flex-col">
                    <span className="text-[#065F46] italic">24 Ore</span> 
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20 mt-3">Risposta Rapida</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#065F46] italic">100%</span> 
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20 mt-3">Riservato</span>
                  </div>
               </div>
               
               <div className="mt-20 border-t border-black/5 pt-12">
                  <div className="text-[10px] uppercase font-bold text-black/30 tracking-[0.4em] mb-4">Canale Diretto</div>
                  <a href="mailto:info@fabiomicale-hub.com" className="text-2xl font-serif italic text-[#0A0A0A] hover:text-[#065F46] transition-colors decoration-[#065F46]/20 underline underline-offset-8">
                    info@fabiomicale-hub.com
                  </a>
               </div>
             </div>

             {/* Form Side with MEPA Premium Box design */}
             <div className="p-10 md:p-14 bg-[#F9FAFB] rounded-[60px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-black/5 relative overflow-hidden animate-fade-in-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#065F46] opacity-[0.05] blur-[60px] rounded-full" />
                
                {success ? (
                  <div className="text-center py-20 animate-fade-in">
                    <h3 className="text-4xl font-serif italic text-[#065F46] mb-6">Grazie.</h3>
                    <p className="text-black/40 font-serif italic">La tua candidatura è stata presa in carico. Ti risponderemo entro 24 ore.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif italic text-black/70 mb-10">Invia la tua candidatura</h3>
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                       <div className="grid sm:grid-cols-2 gap-6">
                         <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Nome *</label>
                            <input 
                              type="text" 
                              required
                              value={formData.nome}
                              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                              className="w-full px-8 py-5 rounded-full bg-white border border-black/[0.03] text-[#0A0A0A] focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic" 
                              placeholder="Mario" 
                            />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Cognome *</label>
                            <input 
                              type="text" 
                              required
                              value={formData.cognome}
                              onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                              className="w-full px-8 py-5 rounded-full bg-white border border-black/[0.03] text-[#0A0A0A] focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic" 
                              placeholder="Rossi" 
                            />
                         </div>
                       </div>
                       
                       <div className="grid sm:grid-cols-2 gap-6">
                         <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Email Aziendale *</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-8 py-5 rounded-full bg-white border border-black/[0.03] text-[#0A0A0A] focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic" 
                              placeholder="m.rossi@azienda.it" 
                            />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Telefono *</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.telefono}
                              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                              className="w-full px-8 py-5 rounded-full bg-white border border-black/[0.03] text-[#0A0A0A] focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic" 
                              placeholder="+39 ..." 
                            />
                         </div>
                       </div>

                       <div className="space-y-4">
                          <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Sito Web (Facoltativo)</label>
                          <input 
                            type="url" 
                            value={formData.sitoweb}
                            onChange={(e) => setFormData({ ...formData, sitoweb: e.target.value })}
                            className="w-full px-8 py-5 rounded-full bg-white border border-black/[0.03] text-[#0A0A0A] focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic" 
                            placeholder="https://..." 
                          />
                       </div>

                       <div className="space-y-4">
                          <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Tipo di Attività</label>
                          <select 
                            value={formData.attivita}
                            onChange={(e) => setFormData({ ...formData, attivita: e.target.value })}
                            className="w-full px-8 py-5 rounded-full bg-white border border-black/[0.03] text-black/60 focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic appearance-none"
                          >
                            <option value="">Seleziona categoria...</option>
                            <option value="ufficio">Ufficio / Studio Professionale</option>
                            <option value="fabbrica">Produzione / Fabbrica</option>
                            <option value="sede">Sede Operativa / Logistica</option>
                            <option value="altro">Altro Business Consolidato</option>
                          </select>
                       </div>

                       <div className="space-y-4">
                          <label className="text-[10px] uppercase font-bold text-black/30 tracking-[0.2em] ml-4">Messaggio / Obiettivo</label>
                          <textarea 
                            required
                            rows={4} 
                            value={formData.messaggio}
                            onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                            className="w-full px-8 py-6 rounded-[40px] bg-white border border-black/[0.03] text-[#0A0A0A] focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic resize-none" 
                            placeholder="Qual è la sfida principale che vuoi risolvere?" 
                          />
                       </div>

                       <button 
                        disabled={loading}
                        className="group w-full py-7 bg-[#065F46] text-white rounded-full text-xs font-bold tracking-[0.4em] shadow-2xl shadow-[#065F46]/30 hover:bg-[#044E39] hover:scale-[1.01] transition-all duration-500 uppercase flex items-center justify-center gap-4 disabled:opacity-50"
                       >
                          <span className="relative z-10">{loading ? "Invio..." : "Sottometti Candidatura"}</span>
                          {!loading && (
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                       </button>
                    </form>
                  </>
                )}
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
