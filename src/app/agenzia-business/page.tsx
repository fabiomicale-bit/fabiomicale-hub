import type { Metadata } from "next";
import Link from "next/link";
import FAQSection, { FAQItem } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Agenzia Business | Sistemi di Acquisizione Clienti Basati su AI — Fabio Micale",
  description: "Trasforma il tuo business con un sistema unico: Pubblicità Online, Percorsi di Conversione e Automazioni AI per contatti qualificati ricorrenti.",
};

const agencyFaqs: FAQItem[] = [
  { 
    question: "A chi si rivolge il vostro sistema di acquisizione?",
    answer: "Lavoriamo principalmente con PMI e professionisti d'alto valore che hanno già un'offerta solida ma faticano a generare un flusso costante e prevedibile di nuovi clienti. Il nostro sistema AI si adatta a diversi settori, dal B2B ai servizi professionali." 
  },
  { 
    question: "L'Intelligenza Artificiale sostituisce il marketing tradizionale?", 
    answer: "No, lo potenzia chirurgicamente. Usiamo l'AI per analizzare i dati, personalizzare i messaggi su scala e ottimizzare le campagne in tempo reale. Questo riduce drasticamente gli sprechi di budget e aumenta la qualità dei contatti acquisiti." 
  },
  { 
    question: "Quanto tempo serve per vedere i primi risultati?", 
    answer: "Solitamente le prime campagne vanno online entro 14 giorni dal setup. I primi contatti iniziano ad arrivare quasi immediatamente, ma il sistema richiede circa 30-45 giorni di 'apprendimento' per raggiungere la massima efficienza di conversione." 
  },
  { 
    question: "Cosa succede se il mio settore è molto competitivo?", 
    answer: "Proprio nei settori competitivi l'AI fa la differenza. Utilizziamo algoritmi predittivi per trovare segmenti di mercato sottovalutati e angoli comunicativi che i tuoi concorrenti stanno ignorando, dandoti un vantaggio sleale." 
  },
  { 
    question: "Quali garanzie offrite sui risultati?", 
    answer: "Garantiamo l'implementazione di un'architettura di acquisizione contatti tecnicamente perfetta e monitorata costantemente. Sebbene nessuno possa garantire vendite certe (che dipendono dal tuo processo commerciale), garantiamo la massimizzazione del rendimento pubblicitario tramite ottimizzazione continua." 
  },
  { 
    question: "Il servizio include la gestione delle campagne pubblicitarie?", 
    answer: "Sì, l'agenzia si occupa della gestione end-to-end: dalla strategia creativa al setup tecnico, fino al monitoraggio quotidiano e all'ottimizzazione delle performance su tutte le piattaforme necessarie (Meta, Google, LinkedIn)." 
  },
  { 
    question: "Quanto budget pubblicitario è necessario?", 
    answer: "Il budget dipende dai tuoi obiettivi di crescita e dal costo per contatto del tuo settore. Durante la consulenza strategica iniziale calcoliamo insieme il budget minimo necessario per rendere il sistema profittevole e scalabile." 
  }
];

export default function AgenziaBusinessPage() {
  return (
    <main className="min-h-screen bg-agency-bg text-agency-text selection:bg-agency-accent/10">

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-gradient-to-b from-agency-bg-alt to-agency-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agency-accent/5 border border-agency-accent/10 text-agency-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
            Agenzia di Sviluppo e Automazione Business
          </div>
          <h1 className="agency-title text-5xl md:text-8xl mb-8 animate-reveal-up">
            Generiamo <span className="italic text-agency-accent font-light">Clienti</span>, <br /> 
            non solo click.
          </h1>
          <p className="agency-text-lead max-w-2xl mx-auto mb-12 animate-reveal-up delay-100">
            Sviluppiamo e gestiamo sistemi completi di acquisizione che integrano Pubblicità, Conversione e AI per trasformare ogni contatto in un appuntamento commerciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-reveal-up delay-200">
            <Link href="/agenzia-business/contatti" className="btn-agency">
              Richiedi un'Analisi Strategica
            </Link>
            <a href="#servizi" className="inline-flex items-center justify-center px-8 py-4 text-agency-text font-bold text-[11px] uppercase tracking-widest border-b-2 border-slate-200 hover:border-agency-accent transition-all">
              Scopri il Sistema
            </a>
          </div>
        </div>
      </section>

      {/* ── IL SISTEMA UNICO ─────────────────────────────────────── */}
      <section id="servizi" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="agency-title text-4xl md:text-5xl mb-6">
                Un approccio integrato <br /><span className="text-agency-accent italic font-light">senza punti di interruzione.</span>
              </h2>
              <p className="agency-text-lead">
                Smantelliamo l&apos;inefficienza delle agenzie tradizionali offrendo un unico flusso tecnologico che copre l&apos;intero viaggio del cliente.
              </p>
            </div>
            <div className="text-agency-accent font-serif italic text-6xl opacity-10 hidden lg:block">Architettura</div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Traffico Strategico",
                desc: "Gestione Meta, Google e TikTok con focus ossessivo sul rendimento e sulla qualità del contatto, non solo sul volume di traffico.",
                icon: (
                  <svg className="w-10 h-10 text-agency-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                accent: "border-t-4 border-t-agency-accent"
              },
              {
                title: "Protocolli di Conversione",
                desc: "Pagina di atterraggio e percorsi di prenotazione studiati per ridurre l'attrito e massimizzare la trasformazione in appuntamenti.",
                icon: (
                  <svg className="w-10 h-10 text-agency-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 12h3v8h14v-8h3L12 3zM12 11a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                ),
                accent: "border-t-4 border-t-slate-800"
              },
              {
                title: "Automazioni AI",
                desc: "Gestione contatti tramite AI per risposte istantanee, follow-up automatici e qualificazione chirurgica h24.",
                icon: (
                  <svg className="w-10 h-10 text-agency-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                accent: "border-t-4 border-t-agency-accent"
              }
            ].map((item, i) => (
              <div key={i} className={`card-agency border-slate-200/50 ${item.accent}`}>
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-xl font-bold text-agency-navy mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-agency-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASI STUDIO / RISULTATI ──────────────────────────────── */}
      <section className="py-32 px-6 bg-agency-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-agency-accent blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-20">
            <span className="text-agency-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Risultati Certificati</span>
            <h2 className="agency-title text-4xl md:text-5xl text-white mb-6">Casi di <span className="italic font-light text-agency-accent">Successo.</span></h2>
            <p className="agency-text-lead text-slate-400 max-w-2xl mx-auto">Non vendiamo promesse, ma protocolli testati che generano numeri misurabili ogni singolo mese.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                sector: "Real Estate Luxury",
                result: "+148%",
                metric: "Contatti Qualificati",
                desc: "Implementazione del Sistema Unico per un gruppo immobiliare di alto livello. Da gestione manuale disordinata a flusso costante di appuntamenti.",
                cta: "Percorsi di Conversione"
              },
              {
                sector: "Cliniche Specialistiche",
                result: "320h",
                metric: "Tempo Risparmiato/Mese",
                desc: "Integrazione di Automazioni AI per il triage e la prenotazione automatica. Zero lavoro manuale per la segreteria nella fase di qualificazione.",
                cta: "Protocollo Automazione AI"
              },
              {
                sector: "Servizi B2B Professionali",
                result: "-58%",
                metric: "Costo per Contatto",
                desc: "Ottimizzazione capillare delle campagne Meta e Google. Maggiore qualità con un investimento pubblicitario ottimizzato del 40%.",
                cta: "Campagne ad alto Rendimento"
              }
            ].map((study, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-slate-800" /> {study.sector}
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-6xl md:text-7xl font-serif font-medium text-white group-hover:text-agency-accent transition-colors duration-500">{study.result}</span>
                  <span className="text-xs uppercase tracking-widest text-agency-accent font-bold">{study.metric}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light italic">
                  &ldquo;{study.desc}&rdquo;
                </p>
                <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                  Soluzione: {study.cta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="settori" className="py-32 px-6 bg-agency-bg-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="agency-title text-4xl md:text-5xl mb-6">I Settori che <br /> <span className="italic font-light">Scalano con noi.</span></h2>
            <p className="agency-text-lead">Il nostro sistema è progettato per business ad alto valore (Servizi Premium) dove ogni acquisizione sposta l&apos;ago della bilancia.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Cliniche Dentali", "Medicina Estetica", "Immobiliare", "Servizi Professionali", "Palestre High-End", "E-commerce B2B", "Servizi Locali", "Consulenza"].map((sector, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 flex items-center justify-center text-center hover:border-agency-accent transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-widest text-agency-navy">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS / RI PROVA SOCIALE ──────────────────────── */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center border-y border-slate-100 py-32">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-1 mb-12">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-agency-accent fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="relative">
              <span className="text-8xl font-serif absolute -top-10 -left-4 opacity-5 pointer-events-none text-agency-accent">&ldquo;</span>
              <p className="text-3xl md:text-4xl font-serif italic font-light text-agency-navy leading-relaxed mb-12">
                &ldquo;Il Sistema Unico di Fabio non è la solita gestione di campagne. È un motore ingegneristico che ha reso la nostra acquisizione clienti prevedibile e finalmente scalabile. L&apos;integrazione dell&apos;AI è stata la vera svolta operativa.&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-px bg-agency-accent mb-6"></div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-agency-navy">Marco D.</h4>
                <p className="text-[10px] uppercase tracking-widest text-agency-text-muted mt-2">CEO & Founder · Real Estate Global Group</p>
              </div>
            </div>

            <div className="mt-24 grid md:grid-cols-3 gap-12 text-left opacity-60">
               {[
                 { 
                   name: "Dott. Roberto S.", 
                   role: "Direttore Sanitario", 
                   quote: "L'automazione AI ha liberato la mia segreteria da ore di telefonate inutili. Ora parliamo solo con pazienti pre-qualificati." 
                 },
                 { 
                   name: "Elena V.", 
                   role: "Project Manager B2B", 
                   quote: "Un partner strategico, non un fornitore. Hanno capito il nostro business meglio delle agenzie blasonate di Milano." 
                 },
                 { 
                   name: "Gianluca F.", 
                   role: "Founder Immobiliare", 
                   quote: "I numeri parlano chiaro. Rendimento triplicato in meno di 4 mesi. Il metodo dietro il sistema fa tutta la differenza." 
                 }
               ].map((t, i) => (
                 <div key={i} className="border-l border-slate-200 pl-8">
                   <p className="text-xs italic leading-relaxed mb-6 font-light">{t.quote}</p>
                   <h5 className="text-[10px] font-bold uppercase tracking-widest text-agency-navy">{t.name}</h5>
                   <p className="text-[9px] uppercase text-agency-text-muted tracking-tighter mt-1">{t.role}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANALISI STRATEGICHE PREVIEW ─────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="agency-title text-4xl md:text-5xl mb-6">
                Analisi <span className="italic font-light text-agency-accent">Strategiche.</span>
              </h2>
              <p className="agency-text-lead">Strategie operative, casi studio e visioni sull&apos;automazione business.</p>
            </div>
            <Link href="/agenzia-business/analisi-strategiche" className="hidden md:flex items-center gap-2 text-agency-accent font-bold text-xs uppercase tracking-widest hover:text-agency-navy transition-colors">
              Tutte le Analisi →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                slug: "era-acquisizione-liquida",
                title: "L'Era dell'Acquisizione Liquida",
                category: "Strategia",
              },
              {
                slug: "dal-click-al-contratto",
                title: "Dal Click al Contratto: Protocolli B2B",
                category: "Performance",
              },
              {
                slug: "automazione-invisibile",
                title: "Automazione Invisibile e Scalabilità",
                category: "AI & Automation",
              }
            ].map((post, i) => (
              <Link key={i} href={`/agenzia-business/analisi-strategiche/${post.slug}`} className="group card-agency border-slate-100 hover:border-agency-accent/30 bg-white">
                <span className="text-[9px] font-bold uppercase tracking-widest text-agency-accent mb-4 block">{post.category}</span>
                <h3 className="text-xl font-bold text-agency-navy mb-6 group-hover:text-agency-accent transition-colors">{post.title}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-agency-text-muted group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Leggi l&apos;Analisi →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/agenzia-business/analisi-strategiche" className="inline-block text-agency-accent font-bold text-xs uppercase tracking-widest">
              Tutte le Analisi →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ─────────────────────────────────────────── */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="agency-title text-4xl md:text-6xl mb-10">Inizia a ricevere <br /> <span className="text-agency-accent">Appuntamenti</span> non problemi.</h2>
          <p className="agency-text-lead mb-12">Analizziamo il tuo attuale processo di acquisizione e strutturiamo un piano d&apos;azione personalizzato per implementare il Sistema Unico nel tuo business.</p>
          <Link href="/agenzia-business/contatti" className="btn-agency px-20">
            Prenota Analisi Strategica
          </Link>
          <p className="text-[10px] text-agency-text-muted mt-8 uppercase tracking-[0.3em]">Disponibilità limitata per nuovi partner mensili</p>
        </div>
      </section>

      <FAQSection 
        items={agencyFaqs} 
        theme="agency" 
        title="Domande sul Sistema" 
        subtitle="Analizziamo le dinamiche dell'acquisizione contatti tramite AI."
      />

    </main>
  );
}
