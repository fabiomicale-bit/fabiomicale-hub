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
    title: "Fabio Micale | Metodologo della Crescita per Imprenditori Over 40",
    description:
      "Porto AI, protocolli e metodo dentro la tua azienda. Per imprenditori Over 40 che vogliono crescere — senza lavorare di più.",
    alternates: { canonical: "https://www.fabiomicale.com" },
    openGraph: {
      title: "Fabio Micale | Metodologo della Crescita per Imprenditori Over 40",
      description: "Porto AI, protocolli e metodo dentro la tua azienda. Per imprenditori Over 40 che vogliono crescere — senza lavorare di più.",
    }
  };
}

const hubFaqs = [
  {
    question: "Chi è Fabio Micale?",
    answer: "Metodologo della Crescita con 25 anni di esperienza operativa in aziende, cantieri e team. Non un coach — un ingegnere di sistemi che riprogetta la tua azienda per farla girare senza di te.",
  },
  {
    question: "Da dove inizio?",
    answer: "Dal Protocollo Anti-Caos gratuito. 9 pagine operative che ti danno subito il primo strumento concreto — senza impegni, senza vendite.",
  },
  {
    question: "Cos'è il Selettore di Percorso?",
    answer: "È il punto di ingresso nell'ecosistema. Ogni verticale nasce da un problema reale: caos, dipendenza operativa, mancanza di clienti, bisogno di nuovo fatturato. Identifichi il tuo problema e vai diretto alla soluzione.",
  },
  {
    question: "Devo essere esperto di tecnologia?",
    answer: "No. Il metodo è progettato per imprenditori che vogliono risultati — non per tecnici. Se usi WhatsApp, puoi usare l'AI.",
  },
  {
    question: "Come funziona Nexus Lab?",
    answer: "È il sistema operativo mensile per imprenditori Over 40. Template pronti, webinar pratici, community attiva e sessioni Q&A con Fabio. 49€/mese, cancelli quando vuoi.",
  },
];

export default async function HomePage() {
  // ── RENDER EDITORIAL HUB ────────────────────────────────────
  return (
    <main className="min-h-screen bg-hub-bg">
      <Navbar />
      <HeroEditorial />

      {/* ── SELETTORE DI PERCORSO ───────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-hub-ink leading-tight mb-6">
              Dimmi dove sei adesso.{" "}
              <span className="italic text-hub-gold">Ti indico dove andare.</span>
            </h2>
            <p className="text-hub-ink-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Ogni verticale nasce da un problema reale.
              Riconosci il tuo — e vai diretto alla soluzione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🔴",
                titolo: "Sono nel caos",
                testo: "Hai perso il filo. Senti che stai correndo nella direzione sbagliata. Prima di costruire qualcosa di nuovo, devi fare chiarezza su cosa lasciare indietro.",
                cta: "Inizia il reset →",
                href: "/punto-zero",
              },
              {
                emoji: "⚙️",
                titolo: "La mia azienda dipende da me",
                testo: "Sei bravo nel tuo lavoro — ma senza di te si ferma tutto. Telefonate, approvazioni, decisioni che il team non riesce a prendere da solo. È ora di costruire il sistema.",
                cta: "Costruisci l'autonomia →",
                href: "/impresa-liquida",
              },
              {
                emoji: "📈",
                titolo: "Ho bisogno di più clienti",
                testo: "Il tuo servizio è buono. Il problema è l'acquisizione: non hai un sistema che porta contatti qualificati in modo costante e prevedibile, senza dipendere dal passaparola.",
                cta: "Attiva il sistema →",
                href: "/agenzia-business",
              },
              {
                emoji: "💰",
                titolo: "Voglio più fatturato",
                testo: "Hai bisogno di nuove fonti di ricavo stabili — non un'altra campagna, non un altro sforzo. Un canale che genera entrate prevedibili ogni mese, gestito quasi interamente da noi.",
                cta: "Scopri come →",
                href: "/fatturato-garantito",
              },
            ].map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="card-editorial p-8 md:p-10 flex flex-col group hover:border-hub-gold/40 transition-all duration-500"
              >
                <div className="text-3xl mb-6">{card.emoji}</div>
                <h3 className="text-xl font-bold text-hub-ink uppercase tracking-wider mb-4 group-hover:text-hub-gold transition-colors">
                  {card.titolo}
                </h3>
                <p className="text-hub-ink-muted font-light leading-relaxed flex-1 mb-8">
                  {card.testo}
                </p>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold inline-flex items-center gap-2">
                  {card.cta}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <MetodoSection />

      {/* ── LEAD MAGNET ─────────────────────────────────────── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-8">
            Inizia da qui — è gratuito
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight mb-6">
            Scarica il Protocollo{" "}
            <span className="italic text-hub-gold">Anti-Caos.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Come liberare 10 ore a settimana nella tua azienda usando l&apos;AI — anche se non sei un tecnico.
          </p>

          <ul className="flex flex-col sm:flex-row justify-center gap-6 mb-12 text-left">
            {[
              "9 pagine operative — niente teoria",
              "3 passi con esercizi pratici inclusi",
              "Piano d'azione settimana per settimana",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-light">
                <span className="text-hub-gold mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="/protocollo-anti-caos"
            className="btn-gold inline-flex items-center gap-3 px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            Scarica Gratis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="text-white/30 text-xs mt-6">
            Ricevi anche la newsletter settimanale &ldquo;Un Passo Avanti&rdquo;. Cancellati quando vuoi.
          </p>
        </div>
      </section>

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

      {/* ── BIO FABIO ───────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <div className="section-label justify-center mb-6">Chi sono</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-hub-ink leading-tight mb-12 text-center">
            Chi ha costruito{" "}
            <span className="italic text-hub-gold">questo metodo.</span>
          </h2>

          <div className="card-editorial p-10 md:p-14">
            <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-6">
              Ho 56 anni. Ho gestito aziende, cantieri e team per 25 anni. Ho vissuto in prima persona la prigione operativa — l&apos;azienda che cresce ma non riesce a girare senza di te.
            </p>
            <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-6">
              Ho trovato un modo per uscirne. Oggi aiuto altri imprenditori Over 40 a fare lo stesso — con metodo, protocolli e AI integrata nei processi reali.
            </p>
            <p className="text-hub-ink text-lg font-serif italic leading-relaxed mb-8">
              Non ti vendo sogni. Ti do strumenti.
            </p>

            <p className="text-hub-ink-muted text-base font-light leading-relaxed mb-12 border-l-2 border-hub-gold/30 pl-6">
              Metodologo della Crescita: non un coach, non un formatore. Un ingegnere di sistemi che entra nella tua azienda e la riprogetta per funzionare senza di te.
            </p>

            <div className="pt-8 border-t border-hub-border flex flex-wrap gap-4">
              {["Autore", "Consulente Aziendale", "AI Integrator", "25+ anni di esperienza operativa", "150+ aziende"].map((tag, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-hub-ink-muted bg-hub-bg px-4 py-2 rounded-full border border-hub-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-[10px] text-hub-ink-light uppercase tracking-[0.2em] mt-6">
            Placeholder — Fabio integrerà con foto e dati reali
          </p>
        </div>
      </section>

      <MondiSection />
      <NumeriAuthority />

      <FAQSection items={hubFaqs} theme="hub" />

      <Newsletter />
      <Footer />
    </main>
  );
}
