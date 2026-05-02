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
    title: "Fabio Micale | AI e Metodo per Imprenditori Over 40",
    description:
      "Porto AI e metodo dentro la tua azienda. La rendo autonoma. Tu torni a fare il CEO. Scopri Impresa Liquida, Nexus Lab e l'ecosistema per imprenditori Over 40.",
    alternates: { canonical: "https://www.fabiomicale.com" },
    openGraph: {
      title: "Fabio Micale | Imprenditore Over 40? Fai girare l'azienda senza di te.",
      description: "Sistemi, protocolli e AI integrata per imprenditori Over 40. Scarica il Protocollo Anti-Caos gratuito.",
    }
  };
}

const hubFaqs = [
  {
    question: "Chi è Fabio Micale?",
    answer: "Consulente aziendale e AI integrator con 25 anni di esperienza operativa. Specializzato in imprenditori Over 40 che vogliono un'azienda autonoma e scalabile.",
  },
  {
    question: "Da dove inizio?",
    answer: "Dal Protocollo Anti-Caos gratuito. 9 pagine operative che ti danno subito il primo strumento concreto. Zero impegni.",
  },
  {
    question: "Cos'è Nexus Lab?",
    answer: "Il sistema operativo mensile per imprenditori Over 40. Template, webinar pratici, community e Q&A. 49€/mese, cancelli quando vuoi.",
  },
  {
    question: "Devo essere esperto di tecnologia?",
    answer: "No. Il metodo è progettato per imprenditori che vogliono risultati — non per tecnici. Se usi WhatsApp, puoi usare l'AI.",
  },
  {
    question: "Qual è la differenza tra i verticali?",
    answer: "Impresa Liquida lavora sui sistemi interni e l'autonomia operativa. Agenzia Business sull'acquisizione clienti con AI. MEPA Elite sugli appalti pubblici. Punto Zero è il punto di partenza per chi vuole fare reset.",
  },
];

export default async function HomePage() {
  // ── RENDER EDITORIAL HUB ────────────────────────────────────
  return (
    <main className="min-h-screen bg-hub-bg">
      <Navbar />
      <HeroEditorial />
      <MetodoSection />

      {/* ── LEAD MAGNET ─────────────────────────────────────── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight mb-6">
            Inizia adesso.{" "}
            <span className="italic text-hub-gold">Costa zero.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Scarica il Protocollo Anti-Caos: come liberare 10 ore a settimana nella tua azienda usando l&apos;AI — anche se non sei un tecnico.
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
            <p className="text-hub-ink text-lg font-serif italic leading-relaxed mb-12">
              Non ti vendo sogni. Ti do strumenti.
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
