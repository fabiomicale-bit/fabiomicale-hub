import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Il Servizio MePA Elite | Gestione Appalti Pubblici â€” Fabio Micale",
  description: "Dall'abilitazione MePA alla gestione completa delle gare d'appalto. Trasformiamo la Pubblica Amministrazione nel tuo miglior cliente.",
};

export default function MepaServizioPage() {
  const fasi = [
    {
      titolo: "Abilitazione & Strategia",
      desc: "Analizziamo il tuo codice ATECO e ti abilitiamo ai bandi MePA corretti per massimizzare le opportunitÃ  di vendita.",
      num: "01"
    },
    {
      titolo: "Ricerca & Selezione",
      desc: "Monitoriamo h24 i bandi sotto soglia e le trattative dirette, selezionando solo quelle con alto margine e bassa concorrenza.",
      num: "02"
    },
    {
      titolo: "Gestione Gare",
      desc: "Prepariamo tutta la documentazione amministrativa e carichiamo l'offerta sul portale, garantendo il rispetto di ogni cavillo burocratico.",
      num: "03"
    },
    {
      titolo: "Monitoraggio & Incasso",
      desc: "Ti assistiamo nella fase di post-aggiudicazione e monitoriamo i flussi di pagamento per garantire la liquiditÃ  aziendale.",
      num: "04"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-brand-blue font-black text-xs tracking-[0.4em] uppercase mb-8 block">Il Metodo Operativo</span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 leading-tight">
            Il Tuo Ufficio Gare <br /><span className="text-brand-blue not-italic font-black uppercase">in Outsourcing</span>.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-16">
            Non vendiamo consulenza, vendiamo risultati. Ci occupiamo di tutta la complessitÃ  burocratica per lasciarti libero di produrre valore.
          </p>
        </div>
      </section>

      {/* Le Fasi del Servizio */}
      <section className="py-40 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-8 leading-tight">
                Un processo <br /><span className="text-brand-blue font-black not-italic uppercase">millimetrico</span>.
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed italic">
                Ogni passaggio Ã¨ codificato per azzerare il rischio di esclusione e massimizzare le probabilitÃ  di successo.
              </p>
            </div>
            <div className="grid gap-8">
              {fasi.map((fase, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl shadow-slate-200/50 flex gap-8 group hover:border-brand-blue transition-all">
                  <div className="text-4xl font-serif italic text-brand-blue opacity-20 group-hover:opacity-100 transition-opacity">
                    {fase.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{fase.titolo}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{fase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-pa bg-brand-blue text-white mx-auto mb-12">DISPONIBILITÃ€ LIMITATA</div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-12 leading-tight">
            Pronto ad abilitare il tuo <br /><span className="text-brand-blue font-black not-italic uppercase">nuovo fatturato</span>?
          </h2>
          <Link 
            href="/fatturato-garantito/contatti" 
            className="inline-block px-14 py-6 bg-brand-blue text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all hover:scale-105"
          >
            Richiedi Analisi di FattibilitÃ 
          </Link>
        </div>
      </section>
    </div>
  );
}

