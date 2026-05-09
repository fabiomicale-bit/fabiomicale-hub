import type { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "AI per Professionisti Over 40 | Ingegneria Cognitiva — Fabio Micale",
  description:
    "Come integrare l'AI nel tuo workflow professionale senza perdere tempo. Strumenti, sistemi e approccio strategico per l'elite over 40.",
  alternates: { canonical: "https://www.fabiomicale.com/ai-per-professionisti" },
};

export default function AiPerProfessionistiPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      

      {/* ── HERO EDITORIALE ─────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Atmosphere */}
        <div className="absolute top-0 left-[-5%] w-[60%] h-[60%] bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Intelligence & Automazione</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            AI per <br /> <span className="italic text-[#F5A623]">l&apos;Elite Professionale.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light">
            L&apos;AI non sostituirà chi ha esperienza. Sostituirà chi non la usa per amplificare il proprio giudizio. <br />
            Ingegnerizziamo il tuo vantaggio competitivo.
          </p>
        </div>
      </section>

      {/* ── LA VERITÀ CRUDA ──────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="badge border-white/10 text-white/30 mb-8 uppercase tracking-widest">Il Paradigma</div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
            Esperienza + AI <br /><span className="italic text-white/40">è lo standard di lusso.</span>
          </h2>
          <div className="space-y-8 text-white/40 text-lg leading-relaxed font-light">
            <p>
              Un junior AI-native non ha la tua capacità di leggere un cliente, gestire una crisi o chiudere una trattativa. Chi ha esperienza possiede la strategia; l&apos;AI fornisce la velocità.
            </p>
            <p>
              Insieme, formano un binomio imbattibile. Smetti di competere sul terreno della tecnica e inizia a dominare su quello dell&apos;integrazione sistemica.
            </p>
            <p className="text-white border-l-2 border-[#F5A623] pl-8 py-4 italic font-serif leading-relaxed">
              &ldquo;L&apos;errore fondamentale è confondere l&apos;alfabetizzazione tecnica con la padronanza strategica. Non devi diventare un ingegnere, devi diventare un architetto di sistemi.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── I 3 STRUMENTI DI INTELLIGENCE ────────────────────────── */}
      <section className="py-32 px-6 bg-[#141414] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 font-serif">
            <h2 className="text-4xl text-white italic">Il Set di Strumenti Riservato</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "Claude (Anthropic)", u: "RAGIONAMENTO COMPLESSO", d: "Indispensabile per analisi strategiche e rielaborazione di documenti lunghi. Qualità sopra la velocità." },
              { n: "ChatGPT (OpenAI)", u: "BRAINSTORMING & IDEAZIONE", d: "Collaboratore per la fase creativa e la generazione di bozze rapide da revisionare con occhio esperto." },
              { n: "Perplexity", u: "RICERCA CON FONTI", d: "Un motore di ricerca che ragiona e certifica le fonti. Fondamentale per il fact-checking professionale." }
            ].map((tool, i) => (
              <div key={i} className="card-premium p-10 h-full group border-t-2 border-t-[#F5A623]/20">
                <h3 className="text-2xl font-serif italic text-white mb-2">{tool.n}</h3>
                <div className="text-[10px] font-bold text-[#F5A623] mb-8 tracking-widest uppercase">{tool.u}</div>
                <p className="text-white/30 text-base leading-relaxed font-light italic">&ldquo;{tool.d}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA EVITARE ─────────────────────────────────────────── */}
      <section className="py-40 px-6">
        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-center">
          <div>
             <div className="badge mb-8 uppercase tracking-widest">Risk Management</div>
             <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif">Cosa <span className="italic text-white/40">non fare.</span></h2>
             <div className="space-y-6">
                {[
                  "Disperdere energia provando 10 tool diversi al mese senza padroneggiarne nessuno.",
                  "Usare l'output dell'AI senza la tua supervisione professionale (l'AI allucina).",
                  "Pensare che l'AI risolva processi aziendali rotti (li automatizza solo rotti).",
                  "Aspettare che gli strumenti siano 'perfetti' prima di iniziare l'adozione."
                ].map((err, i) => (
                  <div key={i} className="flex gap-4 group">
                     <span className="text-[#F5A623] font-serif italic text-xl opacity-20 group-hover:opacity-100 transition-all">/0{i+1}</span>
                     <p className="text-white/40 text-lg font-light leading-relaxed">{err}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="card-premium p-16 bg-white/[0.01] flex flex-col items-center justify-center text-center">
             <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#F5A623] mb-8 animate-pulse text-2xl font-serif">!</div>
             <h3 className="text-xl text-white font-serif mb-4 italic">Un’ora a settimana.</h3>
             <p className="text-white/30 text-sm font-light leading-relaxed">
               Identifica un&apos;unica attività ripetitiva. <br />
               Testala con un solo tool per 30 giorni. <br />
               Misura il tempo recuperato. <br />
               Ripeti.
             </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#141414] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif">
            Passa dal tool <br /> <span className="italic text-[#F5A623]">al sistema.</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Usare l&apos;AI è il primo passo. Ingegnerizzare un team digitale che lavora per te è l&apos;obiettivo reale. Inizia dal Manifesto della Chiarezza.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/newsletter"
              className="btn-gold px-12 py-6 text-sm tracking-[0.3em] font-bold"
            >
              SCARICA IL MANIFESTO
            </Link>
            <Link
              href="/lavora-con-me"
              className="px-12 py-6 text-xs tracking-[0.3em] font-bold border border-white/10 hover:border-white/30 transition-all rounded-xl uppercase flex items-center justify-center"
            >
              PERCORSI DI AUTOMAZIONE
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
