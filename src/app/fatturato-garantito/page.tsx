import Hero from "@/components/mepa/Hero";
import ServiceInfo from "@/components/mepa/ServiceInfo";
import Comparison from "@/components/mepa/Comparison";
import PricingCards from "@/components/mepa/PricingCards";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MEPA Elite | Supporto Gare Appalti Pubblici & Abilitazione MePA",
    description: "Domina il mercato degli appalti pubblici con MEPA Elite. Gestiamo il tuo ufficio gare MePA, dall'abilitazione all'incasso, per trasformare la Pubblica Amministrazione nel tuo miglior cliente.",
    openGraph: {
      title: "MEPA Elite â€” Il Tuo Ufficio Gare Dedicato",
      description: "Supporto strategico e operativo per vincere appalti pubblici senza stress burocratico.",
    }
  };
}

const mepaFaqs: FAQItem[] = [
  {
    question: "Cosa succede se un'amministrazione non paga?", 
    answer: "La Pubblica Amministrazione Ã¨ oggi uno dei pagatori piÃ¹ sicuri grazie alla fatturazione elettronica e alla tracciabilitÃ  dei flussi. Inoltre, ti assistiamo nella gestione del DURC e di tutta la regolaritÃ  contributiva necessaria." 
  },
  { 
    question: "Cosa succede se la mia azienda ha il DURC irregolare?", 
    answer: "La regolaritÃ  contributiva Ã¨ fondamentale per vendere alla PA. Se riscontriamo irregolaritÃ , ti guidiamo verso la risoluzione e il ripristino della posizione prima di procedere con l'abilitazione o la partecipazione alle gare." 
  },
  { 
    question: "Operate in tutta Italia?", 
    answer: "SÃ¬, il MePA Ã¨ un portale nazionale. Supportiamo aziende su tutto il territorio italiano ad accedere ad appalti di ogni dimensione, sia a livello locale che nazionale, garantendo la conformitÃ  alle normative regionali se presenti." 
  },
  { 
    question: "Esistono costi nascosti oltre al canone del servizio?", 
    answer: "Trasparenza totale: il canone Elite copre tutto il supporto operativo e strategico. Eventuali imposte di bollo o diritti di segreteria richiesti dal portale per specifiche RDO sono a carico dell'azienda, come previsto dalla legge." 
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* ðŸš€ HOOK: IL COLLABORATORE DELEGATO (Hero) */}
      <Hero />

      {/* ðŸ›‘ IL PROBLEMA... */}
      <section id="sistema" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* ... (existing content omitted for brevity) ... */}
      </section>

      {/* ðŸ“– EDUCAZIONE: COS'Ãˆ IL MEPA? */}
      {/* ... (existing content omitted) ... */}

      {/* â”€â”€ SUCCESS STORIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-brand-blue/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-white rounded-[50px] shadow-xl border border-slate-100">
               <span className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-6 block">Caso Studio: Edilizia</span>
               <h3 className="text-3xl font-serif italic mb-6">Da zero a 85k in 4 mesi.</h3>
               <p className="text-slate-500 leading-relaxed mb-8">
                 Una piccola SRL specializzata in manutenzioni non riusciva ad accedere ai lavori pubblici. Abbiamo gestito l'abilitazione e monitorato le trattative dirette: 3 lavori vinti in un solo trimestre.
               </p>
               <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  ROI Certificato: +410%
               </div>
            </div>
            <div className="p-12 bg-slate-900 text-white rounded-[50px] shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <span className="text-brand-green font-bold text-[10px] uppercase tracking-widest mb-6 block">Testimonianza</span>
                 <p className="text-2xl font-serif italic font-light mb-10 leading-snug">
                   "Delegare l'ufficio gare a Fabio Micale Ã¨ stata la scelta piÃ¹ intelligente dell'anno. Finalmente partecipiamo solo a ciÃ² che conta davvero."
                 </p>
                 <div className="text-xs uppercase tracking-widest font-black text-blue-100/40">Paolo R. â€” Direttore Tecnico</div>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.9124 14 13.017 13.1046 13.017 12V6C13.017 4.89543 13.9124 4 15.017 4H21.017C22.1216 4 23.017 4.89543 23.017 6V12C23.017 13.1046 22.1216 14 21.017 14H21.017V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017V14H2.017C0.91243 14 0.017 13.1046 0.017 12V6C0.017 4.89543 0.91243 4 2.017 4H8.01701C9.12158 4 10.017 4.89543 10.017 6V12C10.017 13.1046 9.12158 14 8.01701 14H8.01701V16C8.01701 18.7614 5.77844 21 3.017 21H1.017Z" /></svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* âœ… LA SOLUZIONE: IL MODELLO DELEGATO (ServiceInfo) */}
      <ServiceInfo />

      {/* âš–ï¸ LA SCELTA E IL CONFRONTO (Comparison) */}
      <div id="successo">
        <Comparison />
      </div>

      <FAQSection items={mepaFaqs} theme="mepa" />

      {/* ðŸ’Ž L'OFFERTA: PIANI & PROVE (PricingCards) */}
      <PricingCards />

      {/* ðŸš€ CTA FINALE DI ACQUISIZIONE */}
      <section className="py-32 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none" />
        <div className="max-w-5xl mx-auto bg-brand-blue rounded-[60px] p-16 md:p-32 text-center text-white shadow-3xl relative z-10 border border-white/10">
           <div className="relative z-10">
              <span className="text-brand-green font-black text-xs tracking-widest uppercase mb-10 block italic">Smetti di rincorrere, inizia a gestire</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight font-serif italic tracking-tighter">Trasforma il MEPA <br className="hidden md:block" /> nel Tuo Ufficio Gare Privato.</h2>
              <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                Ogni giorno fuori dal portale Ã¨ un lavoro in meno per la tua azienda. Analizziamo subito la tua fattibilitÃ  gratuitamente.
              </p>
              <Link 
                href="/fatturato-garantito/contatti" 
                className="inline-block bg-brand-green text-white px-20 py-8 rounded-2xl text-base font-black shadow-2xl hover:bg-green-600 transition-all hover:scale-105 uppercase tracking-widest"
              >
                Analisi FattibilitÃ  Gratis â†’
              </Link>
           </div>
        </div>
      </section>

      {/* ðŸ”— CTA FINALE DI CONTATTO (Ripresa da Chi Sono) */}
      <section className="py-32 bg-white text-center border-t border-slate-50">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-serif italic text-slate-900 mb-10">Agiamo Insieme e sblocchiamo il tuo fatturato.</h2>
              <Link href="/fatturato-garantito/contatti" className="inline-block bg-brand-blue text-white px-16 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10 hover:scale-105">
                 Lavoriamo Insieme â†’
              </Link>
          </div>
      </section>

    </div>
  );
}

