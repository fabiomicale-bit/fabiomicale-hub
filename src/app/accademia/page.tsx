import { Metadata } from "next";
import Link from "next/link";


import { HubWaitlist } from "@/components/HubWaitlist";
import MetodoSection from "@/components/MetodoSection";

export const metadata: Metadata = {
  title: "Accademia | Corsi, Consulenze e Gruppi di Lavoro — Fabio Micale",
  description: "Formazione avanzata, percorsi personalizzati e supporto operativo per professionisti che puntano all'eccellenza.",
  robots: { index: false, follow: false },
};

export default function AccademiaPage() {
  return (
    <main className="min-h-screen bg-hub-bg pt-20">
      
      
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-editorial opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-hub-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">
            Alta Formazione Operativa
          </div>
          <h1 className="text-5xl md:text-7xl font-serif italic text-hub-ink mb-8 leading-tight">
            Trasforma la competenza in <span className="text-hub-gold">autorità.</span>
          </h1>
          <p className="text-hub-ink-muted text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            L&apos;Accademia non è un semplice contenitore di videocorsi. È il luogo dove la strategia incontra l&apos;esecuzione per costruire business solidi e liquidi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#iscrizione" 
              className="bg-hub-ink text-white px-8 py-4 rounded-full font-bold hover:bg-hub-gold transition-all w-full sm:w-auto"
            >
              Iscriviti alla Lista d&apos;Attesa
            </Link>
            <Link 
              href="/lavora-con-me" 
              className="text-hub-ink font-bold hover:text-hub-gold transition-all"
            >
              Consulenza Strategica &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Programma */}
      <section className="py-24 px-4 bg-white border-y border-hub-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 italic">
                Un percorso in tre fasi per il tuo <span className="text-hub-gold">successo.</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="text-hub-gold font-serif italic text-4xl opacity-30">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mental Audit & Strategia</h3>
                    <p className="text-hub-ink-muted leading-relaxed">
                      Analizziamo i colli di bottiglia del tuo business e definiamo il posizionamento che ti permetterà di uscire dalla guerra dei prezzi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-hub-gold font-serif italic text-4xl opacity-30">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Automazione & Delega</h3>
                    <p className="text-hub-ink-muted leading-relaxed">
                      Implementiamo sistemi AI e workflow operativi per liberare il tuo tempo dai task ripetitivi e focalizzarti sul valore.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-hub-gold font-serif italic text-4xl opacity-30">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scale & Legacy</h3>
                    <p className="text-hub-ink-muted leading-relaxed">
                      Costruiamo la tua infrastruttura scalabile per garantire una crescita costante e un&apos;eredità professionale duratura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-hub-bg rounded-[2rem] p-8 border border-hub-border aspect-square flex flex-col justify-center">
                <div className="space-y-4">
                  {[
                    "Masterclass Strategiche",
                    "Template Operativi pronti all'uso",
                    "Accesso alla Community Privata",
                    "Supporto Diretto di Fabio Micale",
                    "Libreria Asset in continua evoluzione"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-hub-gold/20 flex items-center justify-center text-hub-gold text-[10px]">✓</div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corsi in arrivo */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              I corsi in <span className="italic text-hub-gold">preparazione.</span>
            </h2>
            <p className="text-hub-ink-muted text-lg font-light max-w-xl mx-auto">
              Percorsi verticali progettati per risolvere problemi specifici del tuo business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Architettura Mentale", desc: "Il mindset per smettere di rincorrere le urgenze e iniziare a costruire.", tag: "Mindset" },
              { title: "Potenziamento Tecnico", desc: "Digitalizzare e snellire la tua struttura operativa con l'AI.", tag: "Tech" },
              { title: "Eccellenza Sistemica", desc: "Protocolli avanzati per garantire crescita e libertà nel lungo termine.", tag: "Systems" }
            ].map((curso, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-hub-border hover:border-hub-gold transition-all group">
                <div className="text-[10px] uppercase font-bold tracking-widest text-hub-gold mb-4">{curso.tag}</div>
                <h3 className="text-xl font-bold mb-4">{curso.title}</h3>
                <p className="text-sm text-hub-ink-muted leading-relaxed mb-6">{curso.desc}</p>
                <div className="text-[10px] font-bold text-hub-ink/30 uppercase tracking-widest group-hover:text-hub-gold transition-colors">Prossimamente</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iscrizione */}
      <section id="iscrizione" className="py-24 px-4 bg-hub-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-editorial opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <HubWaitlist />
          </div>
        </div>
      </section>

      <MetodoSection />
      
      
    </main>
  );
}
