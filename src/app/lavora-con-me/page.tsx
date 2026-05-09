import type { Metadata } from "next";
import Link from "next/link";


import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Lavora con Me | Percorsi di Crescita — Fabio Micale",
  description:
    "Libri, corsi, coaching e sistemi operativi per imprenditori e professionisti over 40. Scopri il percorso giusto per te.",
  alternates: { canonical: "https://www.fabiomicale.com/lavora-con-me" },
};

export default function LavoraConMePage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-5xl mx-auto text-center animate-reveal-up">
          <div className="badge-editorial mb-8 mx-auto">Percorsi & Collaborazioni</div>
          <h1 className="text-5xl md:text-8xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Architetture di{" "}
            <span className="italic text-hub-gold">Evoluzione.</span>
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Non offro consulenza generica. Scrivo libri, creo corsi e costruisco sistemi che liberano il tuo tempo e posizionano il tuo business nell&apos;élite del mercato.
          </p>
        </div>
      </section>

      {/* ── I PERCORSI ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Percorso 1: Libri */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-6">Fondamenta</div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">
                I <span className="italic text-hub-gold">Libri.</span>
              </h2>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-10 font-light">
                Il punto di partenza per tutti. &quot;Successo in 3 Passi&quot; condensa 25 anni di esperienza in un protocollo pratico con 27 esercizi e 5 casi studio reali.
              </p>
              <Link href="/il-libro" className="btn-outline px-10 py-4">
                Scopri il Libro →
              </Link>
            </div>
            <div className="order-1 md:order-2 card-editorial aspect-[4/3] flex items-center justify-center bg-hub-bg-alt">
              <div className="text-8xl font-serif italic text-hub-ink/5">📖</div>
            </div>
          </div>

          {/* Percorso 2: Accademia */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="card-editorial aspect-[4/3] flex items-center justify-center bg-hub-bg-alt">
              <div className="text-8xl font-serif italic text-hub-ink/5">🎓</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-6">Formazione</div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">
                L&apos;<span className="italic text-hub-gold">Accademia.</span>
              </h2>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-10 font-light">
                Corsi online, coaching 1-to-1 e masterclass in gruppi da 4. Crescita personale, autodisciplina, business con AI e project management.
              </p>
              <Link href="/accademia" className="btn-outline px-10 py-4">
                Esplora l&apos;Accademia →
              </Link>
            </div>
          </div>

          {/* Percorso 3: I Mondi */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-6">Business Verticali</div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">
                I <span className="italic text-hub-gold">Mondi.</span>
              </h2>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-10 font-light">
                Tre business specializzati per esigenze specifiche: MEPA Elite per l&apos;appalti pubblici, Impresa Liquida per l&apos;automazione, Punto Zero per il reset Over 40.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/mepa-elite" className="text-xs font-bold uppercase tracking-[0.3em] text-hub-ink-muted hover:text-hub-gold transition-colors">MEPA Elite →</Link>
                <Link href="/impresa-liquida" className="text-xs font-bold uppercase tracking-[0.3em] text-hub-ink-muted hover:text-hub-gold transition-colors">Impresa Liquida →</Link>
                <Link href="/punto-zero" className="text-xs font-bold uppercase tracking-[0.3em] text-hub-ink-muted hover:text-hub-gold transition-colors">Punto Zero →</Link>
              </div>
            </div>
            <div className="order-1 md:order-2 card-editorial aspect-[4/3] flex items-center justify-center bg-hub-bg-alt">
              <div className="text-8xl font-serif italic text-hub-ink/5">🌍</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── METODOLOGIA (Preserved from Soluzioni) ────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-hub-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Il Metodo Operativo</div>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Due passi verso <span className="text-hub-gold">il tuo obiettivo.</span></h2>
            <p className="text-hub-ink-muted max-w-xl mx-auto font-light">L&apos;ingegneria non ammette improvvisazione. Ogni mia collaborazione segue un protocollo preciso.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-editorial p-12 hover:border-hub-gold/30 transition-all">
              <div className="text-hub-gold font-serif italic text-4xl mb-8 opacity-30">01</div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Check-up Strategico</h3>
              <p className="text-hub-ink-muted leading-relaxed font-light mb-8 italic">
                &ldquo;Prima di costruire, devi azzerare il rumore di fondo.&rdquo;
              </p>
              <p className="text-hub-ink-muted leading-relaxed font-light">
                Un&apos;analisi profonda della tua struttura operativa. Individuiamo i colli di bottiglia e ti consegniamo il tuo &quot;Piano di Evoluzione&quot;: la strategia per staccarti dal quotidiano e riprendere il comando.
              </p>
            </div>

            <div className="card-editorial p-12 border-hub-gold/20 shadow-xl shadow-hub-gold/5 hover:border-hub-gold/40 transition-all">
              <div className="text-hub-gold font-serif italic text-4xl mb-8 opacity-30">02</div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Protocollo d&apos;Azione</h3>
              <p className="text-hub-ink-muted leading-relaxed font-light mb-8 italic">
                &ldquo;Il sistema vince sempre sull&apos;intuito.&rdquo;
              </p>
              <p className="text-hub-ink-muted leading-relaxed font-light">
                Implementazione operativa dei sistemi discussi. Che si tratti di AI, organizzazione aziendale o dominio del mercato PA, costruiamo l&apos;architettura che ti rende opzionale e il tuo business scalabile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE ─────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-serif italic text-center text-hub-ink mb-20">Voci dall&apos;Evoluzione</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nome: "Laura B.", ruolo: "Commercialista", testo: "Il Metodo ha azzerato l'ansia da prestazione digitale. Oggi gestisco l'AI, non la subisco." },
              { nome: "Marco V.", ruolo: "Imprenditore", testo: "Impresa Liquida ha ridato vita al mio tempo libero. L'azienda fattura, io respiro." },
              { nome: "Roberto M.", ruolo: "Ingegnere", testo: "Posizionamento chirurgico. In 3 mesi ho raddoppiato l'autorità nel mio settore." },
            ].map((c, i) => (
              <div key={i} className="card-editorial p-10">
                <div className="text-hub-gold mb-6">★★★★★</div>
                <p className="text-hub-ink-muted italic text-base leading-relaxed mb-8 font-serif">&ldquo;{c.testo}&rdquo;</p>
                <div>
                  <p className="font-bold text-hub-ink text-sm uppercase tracking-widest">{c.nome}</p>
                  <p className="text-hub-ink-light text-[10px] font-bold uppercase tracking-[0.2em]">{c.ruolo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20 font-serif">
            <div className="section-label justify-center mb-6">Domande Frequenti</div>
            <h2 className="text-4xl font-serif font-medium text-hub-ink">Chiarimenti Operativi</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA FINALE ───────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-12 leading-tight">
            Costruisci il tuo{" "}
            <span className="italic text-hub-gold">Capolavoro.</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Se senti che è il momento di smettere di rincorrere le emergenze e iniziare a guidare la tua vita, la conversazione inizia qui.
          </p>
          <Link
            href="/contatti?ref=lavora-con-me-final"
            className="btn-gold px-12 py-6 text-sm tracking-[0.3em] font-bold"
          >
            Scrivimi
          </Link>
        </div>
      </section>

      
    </main>
  );
}
