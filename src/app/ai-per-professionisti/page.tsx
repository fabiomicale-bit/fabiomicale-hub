import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI per Professionisti Over 40 | Guida Pratica — Fabio Micale",
  description:
    "Come usare l'AI concretamente se hai più di 40 anni e non sei un tecnico. Tool, workflow e metodo per restare competitivo senza perdere tempo.",
  alternates: { canonical: "https://www.fabiomicale.com/ai-per-professionisti" },
};

export default function AiPerProfessionistiPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Strumenti concreti
          </div>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            AI per professionisti over 40:{" "}
            <span className="gradient-text">strumenti concreti per chi non vuole restare indietro</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed">
            Non devi diventare un tecnico. Devi capire quali strumenti usare,{" "}
            <span className="text-slate-300 font-medium">come usarli nel tuo lavoro specifico</span>{" "}
            e cosa ignorare.
          </p>
        </div>
      </section>

      {/* ── 2. L'AI NON SOSTITUISCE ──────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">La verità</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            L&apos;AI non sostituirà chi ha esperienza. Sostituirà chi non la usa.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed text-[1.05rem]">
            <p>
              Sento sempre la stessa paura: &quot;L&apos;AI mi toglierà il lavoro.&quot;
              La realtà è più precisa di così. L&apos;AI sostituirà le attività ripetitive,
              quelle a basso valore, quelle che un software può fare meglio di una persona.
            </p>
            <p>
              Ma giudicare una situazione complessa, costruire fiducia con un cliente,
              prendere una decisione in un contesto ambiguo — questa è esperienza umana.
              E l&apos;AI non la replica. La amplifica, se sai usarla.{" "}
              <span className="text-slate-200 font-medium">
                Chi ha 20 anni di esperienza + AI è imbattibile. Chi ha solo AI non ha storia.
              </span>
            </p>
            <p>
              Il vero rischio non è l&apos;AI. È restare fermi mentre il mercato si muove.
              Se stai pensando a come{" "}
              <Link href="/reinvenzione-over-40" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
                reinventarti professionalmente
              </Link>
              , l&apos;AI è lo strumento che accelera tutto il resto.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. I 3 TOOL ──────────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">I miei strumenti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            I 3 tool AI che uso ogni giorno (e perché li ho scelti)
          </h2>
          <div className="space-y-4">
            {[
              {
                nome: "Claude (Anthropic)",
                uso: "Ragionamento complesso, analisi di documenti, scrittura professionale",
                perché:
                  "Superiore per ragionamento lungo e accuratezza. Lo uso per analisi strategiche, per preparare sessioni di coaching, per rielaborare contenuti complessi. Non per velocità — per qualità.",
                color: "border-blue-500/20",
                accent: "text-blue-400",
              },
              {
                nome: "ChatGPT (OpenAI)",
                uso: "Brainstorming rapido, prime bozze, ideazione",
                perché:
                  "Ottimo per esplorare idee in velocità. Lo uso nella fase di ricerca e generazione, quando ho bisogno di volume più che di precisione. Non come oracolo — come collaboratore da revisionare.",
                color: "border-violet-500/20",
                accent: "text-violet-400",
              },
              {
                nome: "Perplexity",
                uso: "Ricerca con fonti, aggiornamenti di settore, fact-checking",
                perché:
                  "Un motore di ricerca che ragiona. Indispensabile per tenersi aggiornati senza perdere ore. Ogni mattina: 10 minuti su Perplexity per sapere cosa si muove nel mio settore.",
                color: "border-cyan-500/20",
                accent: "text-cyan-400",
              },
            ].map((tool) => (
              <div
                key={tool.nome}
                className={`card-glow group bg-white/[0.03] border ${tool.color} rounded-2xl p-7 hover:border-opacity-50 transition-all duration-300`}
              >
                <h3 className={`font-bold text-lg mb-1 ${tool.accent}`}>{tool.nome}</h3>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-medium">{tool.uso}</p>
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">{tool.perché}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COME INTEGRARE ────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Come iniziare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            Come integrare l&apos;AI nel tuo lavoro in 1 ora a settimana
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed text-[1.05rem]">
            <p>
              Non serve rivoluzionare il tuo modo di lavorare dal giorno uno.
              Serve identificare un&apos;attività ripetitiva che fai ogni settimana
              e provarla con un tool AI per 30 giorni.
            </p>
            <p>
              <span className="text-slate-200 font-medium">Esempi pratici:</span>{" "}
              sintesi di riunioni, bozze di email a clienti, preparazione di presentazioni,
              ricerca su un cliente prima di una call, revisione di contratti.
              Una sola attività. Un solo tool. 30 giorni.
            </p>
            <p>
              Dopo 30 giorni hai un dato reale su quanto tempo hai recuperato.
              Poi passi all&apos;attività successiva. In 6 mesi hai un sistema.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. COSA NON FARE ─────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Gli errori da evitare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            Cosa NON fare: gli errori più comuni di chi inizia con l&apos;AI
          </h2>
          <div className="space-y-4">
            {[
              "Provare 10 tool diversi nel primo mese e non padroneggiarne nessuno. La dispersione è il killer numero uno dell'adozione.",
              "Usare l'output dell'AI senza revisionarlo. L'AI sbaglia, alucina, semplifica eccessivamente. Il tuo giudizio professionale è irrinunciabile.",
              "Pensare che l'AI sia una soluzione a problemi di processo. Se un processo è rotto, l'AI lo automatizza rotto. Prima sistema il processo, poi automatizza.",
              "Aspettare che gli strumenti siano \"perfetti\". Non lo saranno mai. Quelli che aspettano si troveranno sempre in ritardo.",
            ].map((errore, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/8 rounded-xl hover:border-red-500/20 transition-colors duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">{errore}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. IL PROSSIMO PASSO ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Dove arrivare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            Il prossimo passo: dal tool al sistema
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed text-[1.05rem]">
            <p>
              Usare un tool AI è il primo livello. Il livello successivo è costruire
              un sistema: più strumenti che lavorano insieme, workflow che si attivano
              automaticamente, output che alimentano altri processi.
            </p>
            <p>
              A quel punto non stai più usando l&apos;AI — stai lavorando con un team digitale
              che lavora anche quando tu sei offline. Questo è il vantaggio competitivo reale.
            </p>
            <p>
              Per arrivare lì serve un metodo. Leggi{" "}
              <Link href="/il-metodo" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
                come struttura il percorso
              </Link>{" "}
              o, se preferisci partire con una base di contenuti aggiornata, iscriviti alla newsletter
              settimanale direttamente dalla{" "}
              <Link href="/#newsletter" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
                homepage
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA FINALE ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 hero-glow opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Pronto a usare l&apos;AI sul serio?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Non serve un corso di 40 ore. Serve il metodo giusto applicato al tuo lavoro specifico.{" "}
            <span className="text-slate-300">Parliamone.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/il-metodo"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
            >
              Scopri il metodo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#newsletter"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 font-medium px-8 py-4 rounded-xl transition-all duration-200"
            >
              Iscriviti alla newsletter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
