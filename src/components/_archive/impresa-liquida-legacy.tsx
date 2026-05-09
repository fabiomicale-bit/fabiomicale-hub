/**
 * ARCHIVIO LEGACY — Impresa Liquida
 *
 * Sezioni rimosse durante il refactoring Fase 3 (refactor/3-passi-positioning).
 * NON importare questo file in produzione.
 * Conservato per eventuale reintroduzione come componenti dedicati.
 *
 * Sezioni archiviate:
 * 1. Hero glassmorphism con visual card animata (aspect 4/5)
 * 2. Banner dark strip ×5 (tutti con #0A0A0A hardcoded)
 * 3. "Sindrome dell'Imprenditore Intrappolato" (caos vs sistema liquido)
 * 4. "Mappa Operativa" — sezione narrativa con visual dark card
 * 5. "Algoritmo di Pilotaggio" — sezione quasi identica alla Mappa (duplicato)
 * 6. "4 Asset dell'Ingegneria Liquida" — griglia emoji + card
 * 7. "Due passi verso la tua autonomia" — offerta servizi
 * 8. CTA finale "Costruisci il tuo secondo tempo"
 *
 * Note sicurezza: le sezioni 4 e 5 caricavano texture da
 * https://www.transparenttextures.com — dominio terzo rimosso. Vedi SECURITY_AUDIT.md.
 */

import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO GLASSMORPHISM LEGACY
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaHeroLegacy() {
  return (
    <section className="relative pt-52 pb-40 px-6 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[var(--hub-gold)] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />
      {/* NOTE: #D4AF37 hardcoded → sostituire con var(--hub-gold) se reintrodotto */}
      <div className="absolute -bottom-20 -left-20 w-[40%] h-[40%] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: "#D4AF37" }} />
      {/* NOTE: url esterna rimossa */}
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-hub-gold/20 bg-hub-gold/5 text-hub-gold mb-12 font-bold tracking-[0.2em] text-[10px] uppercase backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-hub-gold shadow-[0_0_10px_rgba(200,164,90,0.5)]" />
              <span>PROTOCOLLO D&apos;ECCELLENZA: INGEGNERIA DELLA LIBERTÀ STRUTTURALE</span>
            </div>
            <h1 className="text-6xl md:text-[92px] font-black leading-[0.9] tracking-tighter mb-12 font-serif text-hub-ink uppercase">
              Impresa Liquida: <br />
              <span className="italic font-light text-hub-gold lowercase">Automazione & Libertà.</span>
            </h1>
            <p className="text-xl text-hub-ink-muted leading-relaxed mb-16 max-w-xl font-medium font-serif opacity-90 border-l-4 border-hub-gold/20 pl-8">
              Ingegnerizziamo l&apos;autonomia per imprenditori lungimiranti. Trasformiamo la tua ditta
              in un patrimonio liquido che produce valore mentre torni a casa alle 18:00, grazie
              all&apos;integrazione dell&apos;Intelligenza Artificiale come tuo &quot;Terzo Socio Silenzioso&quot;.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <a href="#servizi" className="btn-gold px-14 py-6">
                <span className="relative z-10">VERIFICA STRUTTURALE</span>
              </a>
              <Link
                href="/impresa-liquida/chi-siamo"
                className="text-[11px] font-bold tracking-[0.2em] text-hub-ink/60 hover:text-hub-gold transition-colors uppercase border-b border-hub-gold/10 pb-1"
              >
                Scopri il Metodo
              </Link>
            </div>
          </div>

          {/* Visual: Premium Glass Interface */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-[var(--hub-gold)]/5 blur-[100px] rounded-full scale-110" />
            <div className="relative z-10 w-full aspect-[4/5] max-w-lg rounded-[60px] border border-white/40 bg-white/40 backdrop-blur-3xl p-1 shadow-[0_32px_120px_rgba(0,0,0,0.08)] overflow-hidden group">
              <div className="relative h-full w-full p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--hub-gold)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-3xl border border-black/[0.03] bg-white/60 p-6 flex flex-col justify-end">
                      <div className="mt-1 text-xs font-serif italic text-black/60">Ottimizzato</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. BANNER DARK STRIP ×5 (tutti con colori hardcoded)
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaDarkStripLegacy({ text, accent }: { text: string; accent: string }) {
  // NOTE: bg-hub-charcoal usato correttamente, ma in alcune varianti era #0A0A0A hardcoded
  return (
    <div className="bg-hub-charcoal py-10 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <p className="text-white text-xs md:text-sm font-black tracking-[0.5em] uppercase leading-relaxed">
          {text} <span className="text-hub-gold">{accent}</span>
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. "SINDROME DELL'IMPRENDITORE INTRAPPOLATO" — caos vs sistema
//    NOTE: conteneva #F9FAFB, #0A0A0A hardcoded → sostituire con token se reintrodotto
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaSindromeLegacy() {
  return (
    <section className="py-40 px-6 bg-hub-bg-alt border-y border-hub-border relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-8 block">
          Analisi della Condizione
        </span>
        <h2 className="text-4xl md:text-6xl font-light text-hub-ink mb-12 font-serif leading-[1.1]">
          Curiamo la{" "}
          <span className="italic text-hub-gold">Sindrome dell&apos;Imprenditore Intrappolato.</span>
        </h2>
        <p className="text-hub-ink-muted text-xl leading-relaxed max-w-2xl mx-auto font-light mb-24 italic font-serif">
          Hai costruito un impero, ma oggi ne sei l&apos;ingranaggio più usurato.
        </p>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="p-12 rounded-[50px] bg-hub-white border border-hub-border shadow-sm">
            <h3 className="text-2xl font-serif text-hub-ink mb-6 italic">Stato di Caos</h3>
            <ul className="space-y-5 text-hub-ink-muted text-sm font-light">
              <li>Telefonate ad ogni ora per decisioni banali</li>
              <li>Urgenze costanti che bloccano la strategia</li>
              <li>Processi &quot;nella testa&quot; e mai codificati</li>
              <li>Margini fragili che dipendono dal tuo sforzo</li>
            </ul>
          </div>
          <div className="p-12 rounded-[50px] bg-hub-charcoal border border-hub-gold/20 shadow-xl">
            <h3 className="text-2xl font-serif text-white mb-6 italic">Sistema Liquido</h3>
            <ul className="space-y-5 text-white/60 text-sm font-light">
              <li>Mappa Operativa ingegnerizzata</li>
              <li>Team autonomo formato alla decisione</li>
              <li>Cruscotti di controllo predittivi</li>
              <li>Libertà di tempo e scalabilità garantite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4 & 5. "MAPPA OPERATIVA" + "ALGORITMO DI PILOTAGGIO" (due sezioni quasi identiche)
//    NOTE: caricavano texture da https://www.transparenttextures.com — URL RIMOSSO
//    NOTE: contenevano #0A0A0A, #FDFDFD, rgba(6,95,70,0.3) hardcoded
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaMappaLegacy({
  eyebrow,
  title,
  accent,
  items,
  caseTitle,
  caseDesc,
  caseBadge,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  items: { t: string; d: string }[];
  caseTitle: string;
  caseDesc: string;
  caseBadge: string;
}) {
  return (
    <section className="py-40 px-6 bg-hub-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-8 block">
              {eyebrow}
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-hub-ink mb-10 font-serif leading-[1.05]">
              {title} <span className="italic text-hub-gold">{accent}</span>
            </h2>
            <div className="space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-2 w-2 h-2 rounded-full bg-hub-gold group-hover:scale-150 transition-all" />
                  <div>
                    <h4 className="text-sm font-black text-hub-ink uppercase tracking-wider mb-2">{item.t}</h4>
                    <p className="text-sm text-hub-ink-muted font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="relative p-2 bg-white rounded-[70px] border border-hub-border shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] bg-hub-charcoal rounded-[60px] flex flex-col items-center justify-center p-16 text-center relative overflow-hidden">
                {/* NOTE: texture rimossa: bg-[url('https://www.transparenttextures.com/...')] */}
                <h3 className="relative z-10 text-2xl font-serif italic text-white mb-4">{caseTitle}</h3>
                <p className="relative z-10 text-sm text-white/40 font-light max-w-xs mb-12">{caseDesc}</p>
                <div className="relative z-10 px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">
                  {caseBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. "4 ASSET DELL'INGEGNERIA LIQUIDA"
//    NOTE: conteneva #F9FAFB, #0A0A0A hardcoded
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaAssetLegacy() {
  const assets = [
    { t: "Protocollo di Disaccoppiamento", d: "Sleghiamo il tuo tempo dal profitto aziendale attraverso l'eliminazione dei nodi di dipendenza dal titolare.", i: "🔗" },
    { t: "Matrice delle Autonomie", d: "Ridefiniamo l'organigramma non per gerarchia, ma per flussi di responsabilità auto-gestiti dal team.", i: "📡" },
    { t: "Algoritmo Operativo 90D", d: "Un framework di gestione che ricalcola le priorità aziendali in tempo reale, come un radar strategico.", i: "🧭" },
    { t: "Cruscotto di Pilotaggio", d: "Tutti i KPI vitali della tua azienda sotto controllo chirurgico, direttamente dal tuo smartphone.", i: "📱" },
  ];
  return (
    <section className="py-40 px-6 bg-hub-white border-t border-hub-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-6 block">Asset Infrastrutturali</span>
          <h2 className="text-5xl md:text-7xl font-light text-hub-ink font-serif leading-tight">
            Gli strumenti per <br /><span className="italic text-hub-gold">l&apos;architettura della libertà.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assets.map((asset, i) => (
            <div key={i} className="p-10 rounded-[50px] bg-hub-bg-alt border border-hub-border hover:border-hub-gold/20 transition-all flex flex-col h-full">
              <div className="text-4xl mb-10">{asset.i}</div>
              <h3 className="text-xl font-black text-hub-ink uppercase tracking-tighter mb-6 leading-tight h-14 flex items-center">{asset.t}</h3>
              <p className="text-sm text-hub-ink-muted font-medium leading-relaxed italic font-serif">&ldquo;{asset.d}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. "DUE PASSI VERSO LA TUA AUTONOMIA" — servizi
//    NOTE: conteneva #FDFDFD, #0A0A0A, hover:bg-[#044E39] hardcoded
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaServiziLegacy() {
  return (
    <section id="servizi" className="py-48 px-6 bg-hub-white border-t border-hub-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-gold mb-6 block">Le Nostre Implementazioni</span>
          <h2 className="text-5xl md:text-7xl font-light text-hub-ink font-serif leading-tight">
            Due passi verso <br /><span className="italic text-hub-gold">la tua autonomia.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="p-14 border border-hub-border bg-hub-bg rounded-[60px] flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-hub-ink-muted mb-8 tracking-[0.4em]">Fase 01</div>
              <h3 className="text-4xl font-serif text-hub-ink mb-8 italic">Verifica di Autonomia Operativa</h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-12 font-light italic font-serif">
                Un&apos;analisi profonda della tua struttura operativa. Individuiamo i colli di bottiglia
                e ti consegniamo il tuo &quot;Piano di Svincolo&quot;.
              </p>
              <div className="text-4xl font-serif text-hub-gold mb-14 italic tracking-tighter">Primo Passo Strategico</div>
            </div>
            <a href="mailto:info@fabiomicale.com" className="w-full py-6 rounded-full border border-hub-border text-[10px] font-bold tracking-[0.3em] text-center hover:bg-hub-ink hover:text-white transition-all">
              INIZIA LA VERIFICA
            </a>
          </div>
          <div className="p-14 border border-hub-gold/20 bg-hub-white rounded-[60px] flex flex-col justify-between shadow-2xl shadow-hub-gold/10">
            <div>
              <div className="text-[10px] uppercase font-bold text-hub-gold mb-8 tracking-[0.4em]">Fase 02</div>
              <h3 className="text-4xl font-serif text-hub-ink mb-8 italic">Protocollo Impresa Liquida</h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed mb-12 font-light italic font-serif">
                Ristrutturazione ingegneristica semestrale. Implementazione AI manageriale,
                codifica dei processi e formazione del team.
              </p>
              <div className="text-5xl font-serif text-hub-gold mb-14 italic tracking-tighter">Richiedi Analisi</div>
            </div>
            <a href="mailto:info@fabiomicale.com" className="w-full py-6 rounded-full bg-hub-gold text-white text-[10px] font-bold tracking-[0.3em] text-center transition-all shadow-xl shadow-hub-gold/20">
              ACCEDI AL PROTOCOLLO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. CTA FINALE "COSTRUISCI IL TUO SECONDO TEMPO"
// ─────────────────────────────────────────────────────────────────────────────
export function ImpresaLiquidaCTAFinaLeLegacy() {
  return (
    <section className="py-48 px-6 bg-hub-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-hub-gold opacity-[0.1] blur-[150px] -translate-x-1/2 rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-light mb-14 font-serif leading-tight">
          Costruisci il tuo <br /><span className="italic text-hub-gold drop-shadow-lg">secondo tempo.</span>
        </h2>
        <p className="text-white/50 text-xl leading-relaxed mb-20 max-w-2xl mx-auto font-light italic font-serif">
          Il Metodo Impresa Liquida è riservato a chi ha già una ditta solida ma vuole riprendersi
          la propria vita. Accettiamo solo 2 nuove implementazioni al trimestre.
        </p>
        <a href="mailto:info@fabiomicale.com" className="btn-gold px-16 py-7">
          RICHIEDI UNA SESSIONE STRATEGICA
        </a>
      </div>
    </section>
  );
}
