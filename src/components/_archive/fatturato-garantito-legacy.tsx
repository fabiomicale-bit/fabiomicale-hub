/**
 * ARCHIVIO LEGACY — Fatturato Garantito
 *
 * Sezioni inline rimosse durante il refactoring Fase 3 (refactor/3-passi-positioning).
 * NON importare questo file in produzione.
 * Conservato per eventuale reintroduzione come componenti dedicati.
 *
 * NOTA: i componenti src/components/mepa/* (Hero, ServiceInfo, Comparison, PricingCards)
 * NON sono archiviati qui — restano intatti nella loro cartella originale.
 *
 * Sezioni archiviate (solo blocchi inline da page.tsx):
 * 1. "Il paradosso del tempo perso" — sezione vuota (id="sistema"), nessun contenuto reale
 * 2. "Cos'è il MePA?" — blocco educativo 2-colonne
 * 3. "Success Stories" — case study + testimoniale con testi placeholder
 * 4. CTA finale doppia — due sezioni bg-hub-charcoal
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. "IL PARADOSSO DEL TEMPO PERSO" — sezione vuota placeholder
// ─────────────────────────────────────────────────────────────────────────────
export function FatturatoParadossoLegacy() {
  return (
    <section id="sistema" className="py-24 bg-hub-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-hub-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Analisi della Condizione</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-hub-ink mb-6">Il paradosso del <span className="text-hub-gold">tempo perso.</span></h2>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. "COS'È IL MEPA?" — blocco educativo
// ─────────────────────────────────────────────────────────────────────────────
export function FatturatoMepaEducazioneLegacy() {
  return (
    <section className="py-24 bg-hub-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif italic text-hub-ink mb-8">Cos&apos;è il MePA?</h2>
            <p className="text-hub-ink-muted leading-relaxed mb-6">
              Il Mercato Elettronico della Pubblica Amministrazione è il portale dove avvengono gli acquisti delle amministrazioni pubbliche. Non è più solo burocrazia: è un mercato da miliardi di euro l&apos;anno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. "SUCCESS STORIES" — case study + testimoniale
//    NOTA: testi NON verificati da Fabio. Da rifornire con dati reali prima
//    di qualsiasi reintroduzione. Ref: CONTENT_TODO.md → Fatturato Garantito
// ─────────────────────────────────────────────────────────────────────────────
export function FatturatoSuccessStoriesLegacy() {
  return (
    <section className="py-24 bg-hub-gold/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-hub-white rounded-[50px] shadow-xl border border-hub-border">
            <span className="text-hub-gold font-bold text-[10px] uppercase tracking-widest mb-6 block">Caso Studio: Edilizia</span>
            <h3 className="text-3xl font-serif italic mb-6">Da zero a 85k in 4 mesi.</h3>
            <p className="text-hub-ink-muted leading-relaxed mb-8">
              Una piccola SRL specializzata in manutenzioni non riusciva ad accedere ai lavori pubblici. Abbiamo gestito l&apos;abilitazione e monitorato le trattative dirette: 3 lavori vinti in un solo trimestre.
            </p>
            <div className="flex items-center gap-2 text-hub-gold font-bold text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ROI Certificato: +410%
            </div>
          </div>
          <div className="p-12 bg-hub-charcoal text-white rounded-[50px] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-hub-gold font-bold text-[10px] uppercase tracking-widest mb-6 block">Testimonianza</span>
              <p className="text-2xl font-serif italic font-light mb-10 leading-snug">
                &quot;Delegare l&apos;ufficio gare a Fabio Micale è stata la scelta più intelligente dell&apos;anno. Finalmente partecipiamo solo a ciò che conta davvero.&quot;
              </p>
              <div className="text-xs uppercase tracking-widest font-black text-white/40">Paolo R. — Direttore Tecnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. CTA FINALE DOPPIA
// ─────────────────────────────────────────────────────────────────────────────
export function FatturatoCTADoppiaLegacy() {
  return (
    <>
      <section className="py-32 px-4 bg-hub-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none" />
        <div className="max-w-5xl mx-auto bg-hub-gold rounded-[60px] p-16 md:p-32 text-center text-white shadow-3xl relative z-10 border border-white/10">
          <div className="relative z-10">
            <span className="text-white font-black text-xs tracking-widest uppercase mb-10 block italic">Smetti di rincorrere, inizia a gestire</span>
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight font-serif italic tracking-tighter">
              Trasforma il MEPA <br className="hidden md:block" /> nel Tuo Ufficio Gare Privato.
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Ogni giorno fuori dal portale è un lavoro in meno per la tua azienda. Analizziamo subito la tua fattibilità gratuitamente.
            </p>
            <a
              href="/fatturato-garantito/contatti"
              className="inline-block bg-hub-ink text-white px-20 py-8 rounded-2xl text-base font-black shadow-2xl hover:bg-black transition-all hover:scale-105 uppercase tracking-widest"
            >
              Analisi Fattibilità Gratis →
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-hub-bg text-center border-t border-hub-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif italic text-hub-ink mb-10">Agiamo Insieme e sblocchiamo il tuo fatturato.</h2>
          <a href="/fatturato-garantito/contatti" className="btn-gold px-12 py-5">
            Lavoriamo Insieme →
          </a>
        </div>
      </section>
    </>
  );
}
