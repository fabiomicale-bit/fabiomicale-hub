import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroEditorial from "@/components/HeroEditorial";
import MetodoSection from "@/components/MetodoSection";
import LibriShowcase from "@/components/LibriShowcase";
import AccademiaPreview from "@/components/AccademiaPreview";
import MondiSection from "@/components/MondiSection";
import NumeriAuthority from "@/components/NumeriAuthority";
import FAQSection from "@/components/FAQSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Fabio Micale — Autore, Formatore, Metodologo della Crescita",
    description:
      "Scrivo libri per chi vuole vincere nella vita. Corsi online, coaching e sistemi per professionisti Over 40. Crescita personale, business e intelligenza artificiale.",
    alternates: { canonical: "https://www.fabiomicale.com" },
  };
}

const hubFaqs = [
  { 
    question: "Chi è esattamente Fabio Micale?", 
    answer: "Fabio Micale è un metodologo della crescita, autore e consulente strategico. La sua specializzazione è l'ingegneria dei processi applicata sia alla vita personale che al business, con un focus particolare sui professionisti Over 40 che cercano un 'secondo tempo' di valore." 
  },
  { 
    question: "Come posso iniziare il mio percorso?", 
    answer: "Il punto d'ingresso consigliato è il libro 'Successo in 3 Passi', che contiene le basi del Metodo. In alternativa, puoi iscriverti al Protocollo (la nostra newsletter strategica) per ricevere analisi e spunti settimanali direttamente nella tua casella email." 
  },
  { 
    question: "Cos'è l'Accademia di Fabio Micale?", 
    answer: "L'Accademia è il nostro programma di coaching e mentorship d'élite. È un percorso guidato dove Fabio e il suo team aiutano un gruppo ristretto di professionisti a implementare i sistemi di crescita e automazione discussi nei libri." 
  },
  { 
    question: "Qual è la differenza tra i vari mondi (MePA, Agenzia, ecc.)?", 
    answer: "Il Fabio Micale Hub è il centro editoriale e metodologico. Gli altri mondi sono declinazioni verticali: l'Agenzia si occupa di acquisizione clienti AI per aziende, MEPA Elite di appalti pubblici, e Impresa Liquida di automazione aziendale per la libertà del titolare." 
  },
  { 
    question: "Cosa trovo all'interno del portale?", 
    answer: "Un ecosistema completo: dalle guide gratuite ai percorsi d'élite, ogni risorsa è progettata per portarti un passo più vicino alla tua libertà professionale e alla padronanza del tuo tempo." 
  },
  { 
    question: "I contenuti sono adatti anche a chi parte da zero?", 
    answer: "Assolutamente sì. Sebbene lavoriamo molto con professionisti affermati, i principi dell'ingegneria della crescita sono universali e fondamentali per chiunque voglia costruire basi solide per il proprio futuro." 
  },
  { 
    question: "Come posso restare aggiornato sulle ultime metodologie?", 
    answer: "La Via del Metodo è in costante evoluzione. Iscrivendoti alla newsletter 'Protocollo' avrai accesso prioritario alle nuove scoperte, ai casi di studio inediti e alle analisi di mercato di Fabio." 
  }
];

export default async function HomePage() {
  // ── RENDER EDITORIAL HUB ────────────────────────────────────
  return (
    <main className="min-h-screen bg-hub-bg">
      <Navbar />
      <HeroEditorial />
      <MetodoSection />
      <LibriShowcase />
      
      {/* ── TESTIMONIALS & AUTHORITY ────────────────────────── */}
      <section className="py-32 px-6 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-6 block">Storie di Trasformazione</span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-hub-ink leading-tight">L'impatto del <br /><span className="italic text-hub-gold">Metodo.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[40px] bg-white border border-hub-border group hover:border-hub-gold/30 transition-all duration-500">
              <div className="text-hub-gold mb-6 text-2xl font-serif italic font-light opacity-30">"</div>
              <p className="text-hub-ink-muted text-lg font-serif italic font-light mb-8 leading-relaxed">
                "Il Metodo di Fabio mi ha permesso di rimettere ordine in un momento di caos assoluto. Non è solo business, è ingegneria di vita millimetrica."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-hub-gold/20 rounded-full" />
                <div>
                  <div className="text-hub-ink font-bold uppercase tracking-widest text-[10px]">Stefano B.</div>
                  <div className="text-hub-ink-light text-[9px] uppercase tracking-widest">Imprenditore</div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[40px] bg-white border border-hub-border group hover:border-hub-gold/30 transition-all duration-500">
              <div className="text-hub-gold mb-6 text-2xl font-serif italic font-light opacity-30">"</div>
              <p className="text-hub-ink-muted text-lg font-serif italic font-light mb-8 leading-relaxed">
                "Il libro 'Successo in 3 Passi' è la guida che avrei voluto avere 10 anni fa. Pratico, diretto, privo di inutile fuffa. Un manuale operativo vero."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-hub-gold/20 rounded-full" />
                <div>
                  <div className="text-hub-ink font-bold uppercase tracking-widest text-[10px]">Elena G.</div>
                  <div className="text-hub-ink-light text-[9px] uppercase tracking-widest">Libera Professionista</div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[40px] bg-hub-ink border border-hub-ink group hover:shadow-2xl transition-all duration-500 text-white">
              <div className="text-hub-gold mb-6 text-2xl font-serif italic font-light opacity-30">"</div>
              <p className="text-white/80 text-lg font-serif italic font-light mb-8 leading-relaxed">
                "Dalla saturazione operativa alla libertà personale. Il percorso di Reset Strategico è stato il miglior investimento degli ultimi vent'anni."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-hub-gold rounded-full" />
                <div>
                  <div className="text-white font-bold uppercase tracking-widest text-[10px]">Marco L.</div>
                  <div className="text-white/40 text-[9px] uppercase tracking-widest">CEO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccademiaPreview />
      <MondiSection />
      <NumeriAuthority />

      <FAQSection items={hubFaqs} theme="hub" />

      <Newsletter />
      <Footer />
    </main>
  );
}
