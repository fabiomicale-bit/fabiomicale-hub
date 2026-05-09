import { Metadata } from "next";
import HubContactForm from "@/components/HubContactForm";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Contatti | Fabio Micale",
  description: "Per richieste professionali, collaborazioni, interviste o informazioni sul Metodo Successo in 3 Passi.",
  alternates: { canonical: "https://www.fabiomicale.com/contatti" },
};

export default function ContattiPage() {
  const scrivimiSe = [
    "Collaborazioni: vuoi propormi un progetto allineato al Metodo.",
    "Formazione: vuoi organizzare un intervento o una masterclass.",
    "Interviste: per richieste stampa, podcast o interviste.",
    "Richieste professionali: per consulenze strategiche sul Metodo.",
    "Supporto: per informazioni sui libri, l'area riservata o i materiali."
  ];

  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink selection:bg-hub-gold/20 font-sans">
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-56 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="badge-editorial mb-10 mx-auto inline-block px-6 py-2 rounded-full font-bold uppercase text-[9px] tracking-[0.4em] border">
            Contatti
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Inizia la <span className="italic text-hub-gold">Conversazione.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Per richieste professionali, collaborazioni, interviste o informazioni sul Metodo Successo in 3 Passi.
          </p>
        </div>
      </section>

      {/* ── AZIONE DIRETTA / FORM ────────────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <div className="space-y-12">
                <div>
                   <h2 className="text-3xl font-serif italic mb-6">Nessun Centralino. <br /><span className="text-hub-gold">Ti Rispondo Io.</span></h2>
                   <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-8">
                      Ogni messaggio arriva direttamente alla mia scrivania. Rispondo personalmente a ogni richiesta seria e strutturata.
                   </p>
                </div>

                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-hub-gold/5 text-hub-gold border border-current opacity-20">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Email Diretta</h4>
                         <p className="text-lg font-serif">info@fabiomicale.com</p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-hub-gold/5 text-hub-gold border border-current opacity-20">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Tempi di Risposta</h4>
                         <p className="text-lg font-serif">Entro 24 ore lavorative</p>
                      </div>
                   </div>
                </div>

                {/* Qualificazione Rapida */}
                <div className="bg-white border border-hub-border shadow-sm p-8 rounded-[30px] mt-12">
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Puoi scrivermi per:</h4>
                   <ul className="space-y-4">
                      {scrivimiSe.map((item, i) => (
                         <li key={i} className="flex gap-3 text-sm font-light leading-relaxed">
                            <span className="text-hub-gold">•</span>
                            <span className="text-hub-ink-muted">{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
             <div className="bg-white border border-hub-border shadow-2xl shadow-hub-gold/5 p-10 md:p-16 rounded-[40px]">
                <HubContactForm theme="default" />
             </div>
          </div>

        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50 bg-hub-bg-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-medium mb-4">Resta in contatto</h2>
            <p className="text-hub-ink-muted text-lg font-light leading-relaxed">
              Iscriviti a Un Passo Avanti per ricevere contenuti pratici ogni settimana.
            </p>
          </div>
          <NewsletterCTA />
        </div>
      </section>

      {/* ── NOTA AUTORE ──────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-hub-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl italic leading-relaxed font-serif text-hub-ink-muted mb-10">
            &ldquo;Il mio lavoro è proteggere il tempo dei miei partner e il mio. <br /> Tratta questa richiesta con il rispetto che merita la tua crescita.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-hub-gold/30" />
             <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-hub-gold">Fabio Micale</div>
             <div className="w-12 h-px bg-hub-gold/30" />
          </div>
        </div>
      </section>
    </main>
  );
}
