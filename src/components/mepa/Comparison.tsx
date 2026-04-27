"use client";

export default function Comparison() {
  return (
    <section className="py-32 bg-slate-900 text-white rounded-[100px] mx-4 my-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full" />
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-16 text-brand-green leading-tight">
          Gestire il MEPA: <br className="md:hidden" /> Una scelta di campo.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Scenario: Da Soli */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 hover:border-red-500/30 transition-colors group">
            <div className="text-red-500 font-black text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Gestione "Fai da te"
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">Il rischio è tutto tuo.</h3>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li className="flex items-start gap-3 tracking-wide">
                <span className="text-red-500 shrink-0">✕</span>
                Passi serate intere a combattere con i bug dei portali PCP e FVOE.
              </li>
              <li className="flex items-start gap-3 tracking-wide">
                <span className="text-red-500 shrink-0">✕</span>
                Vieni escluso dalle gare per un banale errore formale nel caricamento.
              </li>
              <li className="flex items-start gap-3 tracking-wide">
                <span className="text-red-500 shrink-0">✕</span>
                Perdi le migliori opportunità perché non hai tempo di monitorare il portale h24.
              </li>
              <li className="flex items-start gap-3 tracking-wide italic text-red-400 mt-4">
                Risultato: Stress, frustrazione e fatturato PA regalato ai concorrenti.
              </li>
            </ul>
          </div>

          {/* Scenario: Con Noi */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/20 hover:border-brand-green/30 transition-colors group">
            <div className="text-brand-green font-black text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Modello MEPA Elite
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">Tu cantiere, noi ufficio.</h3>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li className="flex items-start gap-3 tracking-wide">
                <span className="text-brand-green shrink-0">✔</span>
                Noi monitoriamo ogni singola gara e ti avvisiamo solo quando è quella giusta.
              </li>
              <li className="flex items-start gap-3 tracking-wide">
                <span className="text-brand-green shrink-0">✔</span>
                Carichiamo l'offerta perfettamente come tuoi delegati autorizzati.
              </li>
              <li className="flex items-start gap-3 tracking-wide">
                <span className="text-brand-green shrink-0">✔</span>
                Tu resti in cantiere a fare il tuo lavoro, noi pensiamo a farti vincere.
              </li>
              <li className="flex items-start gap-3 tracking-wide italic text-brand-green mt-4 font-bold">
                Risultato: Crescita costante, zero burocrazia e controllo totale.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 h-0.5 w-24 bg-brand-blue mx-auto opacity-30" />
      </div>
    </section>
  );
}
