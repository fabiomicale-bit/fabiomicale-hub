export default function RisultatiPage() {
  const cases = [
    {
      name: "Mario l'Idraulico",
      location: "Roma, Lazio",
      result: "â‚¬ 12.450",
      timeframe: "Primo Quadrimestre",
      description: "Ditta individuale che non aveva mai partecipato a gare PA. Abilitazione in 7 giorni e aggiudicazione di una manutenzione per un ente locale entro il secondo mese.",
      focus: "Manutenzione Impianti"
    },
    {
      name: "Ditta Edile Bianchi",
      location: "Latina, Lazio",
      result: "â‚¬ 45.000",
      timeframe: "60 Giorni",
      description: "Piccola SRL edile. Gestione delegata totale: abbiamo individuato 3 gare sotto soglia, preparato i documenti e ottenuto l'aggiudicazione per una di esse.",
      focus: "Ristrutturazioni PA"
    },
    {
      name: "S.G. Forniture Elettriche",
      location: "Frosinone, Lazio",
      result: "â‚¬ 32.800",
      timeframe: "Inizio AttivitÃ ",
      description: "Messa a catalogo di 150 articoli tecnici. Ricevute 4 RdO (Richieste di Offerta) dirette grazie al nostro monitoraggio attivo degli account.",
      focus: "Forniture Tecniche"
    },
    {
      name: "Green Service Giardini",
      location: "Roma Nord",
      result: "â‚¬ 8.900",
      timeframe: "Urgente",
      description: "Gara sbloccata in 48 ore tramite affidamento diretto. Abbiamo caricato l'offerta in tempo record per evitare la scadenza amministrativa.",
      focus: "Manutenzione Verde"
    }
  ];

  return (
    <div className="bg-white pb-32">
      <section className="py-24 px-4 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-6 block">Fatti, non parole</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight font-serif italic text-slate-900">Vittorie Vere.</h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Questi sono i risultati tipici ottenuti dalle ditte individuali e piccole aziende che hanno scelto la delega totale **MEPA Elite**.
          </p>
        </div>
      </section>

      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
           {cases.map((c, i) => (
             <div key={i} className="p-10 bg-white border border-slate-200 rounded-[50px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   <div className="text-9xl font-black text-brand-blue">{i + 1}</div>
                </div>
                
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                         <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      </div>
                      <div>
                         <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none">{c.name}</h3>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.location}</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6 mb-10 border-t border-b border-slate-100 py-8">
                      <div>
                         <div className="text-xs font-black text-brand-blue uppercase tracking-widest mb-1">Incasso Sbloccato</div>
                         <div className="text-4xl font-black text-brand-blue font-serif italic tracking-tight">{c.result}</div>
                      </div>
                      <div>
                         <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-1">Tempistiche</div>
                         <div className="text-2xl font-black text-slate-900 font-serif italic tracking-tight">{c.timeframe}</div>
                      </div>
                   </div>

                   <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                      &ldquo;{c.description}&rdquo;
                   </p>

                   <div className="inline-block px-4 py-2 bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 rounded-full">
                      Focus: {c.focus}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="mt-20 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Vuoi essere il prossimo?</h2>
            <p className="text-slate-500 mb-10 font-light">
               La tua azienda ha le stesse potenzialitÃ  di queste realtÃ . Smettila di guardare gli altri vincere e prendi la tua fetta di mercato.
            </p>
            <a href="/fatturato-garantito/contatti" className="bg-brand-blue text-white px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-700 transition-all inline-block hover:scale-105">Inizia Ora â†’</a>
         </div>
      </section>
    </div>
  );
}

