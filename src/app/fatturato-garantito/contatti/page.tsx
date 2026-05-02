'use client'

import { useState } from "react";
import Image from "next/image";

export default function ContattiPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    sitoweb: "",
    azienda: "",
    settore: "Edilizia Generale",
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
          utm_source: "mepa_contact",
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

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Colonna Testo e Lead Magnet */}
          <div className="lg:sticky lg:top-32">
            <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-6 block">Contatto Diretto</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 mb-10 leading-tight">
               Parliamo della <span className="text-brand-blue font-black tracking-normal not-italic uppercase">tua ditta</span>.
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-md">
               Ogni azienda Ã¨ diversa. Compila il modulo per una valutazione gratuita di fattibilitÃ  entro 24 ore.
            </p>

            {/* Lead Magnet Box */}
            <div className="bg-brand-blue p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-full bg-white/5 skew-x-12" />
               <div className="relative z-10">
                  <div className="badge-pa bg-brand-green text-white mb-6">OMAGGIO IMMEDIATO</div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Guida Gratis: 7 Gare Facili per Artigiani 2026</h3>
                  <p className="text-blue-100 text-sm font-light mb-8 italic opacity-80">
                     Scopri quali sono i bandi "sotto soglia" piÃ¹ semplici da vincere anche se sei da solo. Scaricala compilando il form a lato.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest opacity-40">
                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
                     PDF â€¢ 1.2 MB
                  </div>
               </div>
            </div>

            {/* Link Rapidi */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
               <a href="https://wa.me/390000000000" className="flex items-center justify-center gap-3 px-8 py-5 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-brand-green transition-all group">
                  <div className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform">
                     <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.203 0-4.391.563-6.109 1.625l-4.5 4.5 1.625 6.109c1.063 1.719 1.625 3.906 1.625 6.109 0 4.141 3.359 7.5 7.5 7.5s7.5-3.359 7.5-7.5-3.359-7.5-7.5-7.5z"/></svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">WhatsApp Rapido</span>
               </a>
               <a href="#" className="flex items-center justify-center gap-3 px-8 py-5 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-brand-blue transition-all group">
                  <div className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform">
                     <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">Prenota Chiamata</span>
               </a>
            </div>
          </div>

          {/* Colonna Form */}
          <div className="bg-slate-50 p-10 md:p-16 rounded-[60px] border border-slate-200 relative overflow-hidden">
             {success ? (
               <div className="text-center py-20 animate-fade-in relative z-10">
                 <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
                   <svg className="w-10 h-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">Candidatura Inviata</h2>
                 <p className="text-slate-500">Ti ricontatteremo entro 24 ore. Controlla la tua email per la guida omaggio.</p>
               </div>
             ) : (
               <>
                 <div className="mb-12 relative z-10">
                    <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Invia la tua Candidatura</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Risposta garantita entro 24 ore</p>
                 </div>

                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nome *</label>
                          <input 
                            required
                            type="text" 
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            placeholder="Mario" 
                            className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Cognome *</label>
                          <input 
                            required
                            type="text" 
                            value={formData.cognome}
                            onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                            placeholder="Rossi" 
                            className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200" 
                          />
                       </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email *</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="mario@esempio.it" 
                            className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Telefono *</label>
                          <input 
                            required
                            type="tel" 
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            placeholder="+39 ..." 
                            className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200" 
                          />
                       </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Sito Web (Optional)</label>
                          <input 
                            type="url" 
                            value={formData.sitoweb}
                            onChange={(e) => setFormData({ ...formData, sitoweb: e.target.value })}
                            placeholder="https://..." 
                            className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nome Azienda</label>
                          <input 
                            type="text" 
                            value={formData.azienda}
                            onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                            placeholder="Rossi Impiante SRL" 
                            className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200" 
                          />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Settore Operativo</label>
                       <select 
                        value={formData.settore}
                        onChange={(e) => setFormData({ ...formData, settore: e.target.value })}
                        className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-slate-500 appearance-none"
                       >
                          <option>Edilizia Generale</option>
                          <option>Impiantistica (Elettrico/Idraulico)</option>
                          <option>Manutenzione Verde</option>
                          <option>Puliizie e Servizi</option>
                          <option>Forniture di Beni</option>
                          <option>Altro...</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Come posso aiutarti?</label>
                       <textarea 
                        required
                        rows={4} 
                        value={formData.messaggio}
                        onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                        placeholder="Parlami della tua situazione attuale..." 
                        className="w-full px-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-200 resize-none"
                       />
                    </div>

                    <div className="flex items-start gap-3 px-2">
                       <input type="checkbox" required className="mt-1" />
                       <p className="text-[10px] text-slate-400 leading-normal">
                          Acconsento al trattamento dei dati personali secondo la GDPR per ricevere la valutazione e la guida omaggio. *
                       </p>
                    </div>

                    <button 
                        disabled={loading}
                        type="submit" 
                        className="w-full py-6 bg-brand-blue text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all hover:scale-[1.02] disabled:opacity-50"
                    >
                       {loading ? "Invio in corso..." : "Invia Candidatura e Scarica PDF â†’"}
                    </button>
                 </form>
               </>
             )}
          </div>
        </div>
      </section>
    </div>
  );
}

