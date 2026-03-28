import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Reinvenzione Professionale Over 40 | Guida Completa — Fabio Micale",
  description:
    "Guida pratica per reinventarsi professionalmente dopo i 40 anni. Senza buttare via l'esperienza, senza ricominciare da zero. Il metodo di Fabio Micale.",
  alternates: { canonical: "https://www.fabiomicale.com/reinvenzione-over-40" },
};

export default function ReinvenzioneOver40Page() {
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
            Guida pratica
          </div>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Reinvenzione professionale over 40:{" "}
            <span className="gradient-text">la guida per chi non vuole ricominciare da zero</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-slate-400 leading-relaxed">
            La tua esperienza non è un peso. È il tuo vantaggio competitivo principale.{" "}
            <span className="text-slate-300 font-medium">Devi solo imparare a usarla diversamente.</span>
          </p>
        </div>
      </section>

      {/* ── 2. PERCHÉ OVER 40 È UN VANTAGGIO ─────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il vantaggio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            Perché reinventarsi dopo i 40 è diverso (e più vantaggioso) che farlo a 25
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed text-[1.05rem]">
            <p>
              A 25 anni hai energia ma nessun contesto. Non sai ancora cosa funziona davvero,
              chi sono i clienti giusti, dove non mettere i piedi. Impari bruciando risorse.
            </p>
            <p>
              A 40+ hai tutto questo già risolto. Hai un network reale, una reputazione costruita,
              pattern riconoscibili su cosa funziona e cosa no nel tuo settore.
              Il problema non è la tua età —{" "}
              <span className="text-slate-200 font-medium">
                è il modello mentale che ti dice che devi ricominciare da zero.
              </span>
            </p>
            <p>
              La reinvenzione professionale dopo i 40 non è un restart. È un restack:
              prendi quello che hai già costruito e lo potenzi con strumenti nuovi,
              posizionamento più preciso e — oggi — con l&apos;AI come acceleratore.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. I 3 ERRORI ────────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Gli errori da evitare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            I 3 errori che bloccano i professionisti over 40
          </h2>
          <div className="space-y-4">
            {[
              {
                numero: "01",
                titolo: "Credere di dover imparare tutto da zero",
                testo:
                  "Non devi diventare un ingegnere software. Non devi sapere come funziona un algoritmo. Devi capire come applicare gli strumenti giusti al tuo lavoro specifico. L'errore è confondere alfabetizzazione con padronanza tecnica.",
              },
              {
                numero: "02",
                titolo: "Confrontarsi con i 25enni nativi digitali",
                testo:
                  "Un junior AI-native non ha la tua capacità di leggere un cliente, gestire una crisi, chiudere una trattativa. Chi ha esperienza + AI batte chi ha solo AI. Smettila di competere sul terreno sbagliato.",
              },
              {
                numero: "03",
                titolo: "Aspettare il momento giusto",
                testo:
                  "Non esiste un momento giusto per iniziare. Il momento giusto era ieri. Quello successivo è adesso. Ogni mese di attesa è un mese in cui il gap tra te e chi si sta già adattando aumenta.",
              },
            ].map((item) => (
              <div
                key={item.numero}
                className="card-glow group bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="text-3xl font-bold gradient-text leading-none shrink-0 select-none">
                    {item.numero}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                      {item.titolo}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-[0.95rem]">{item.testo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. IL METODO ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il metodo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            Il metodo in 3 fasi: esperienza + AI + nuovo posizionamento
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed text-[1.05rem]">
            <p>
              <span className="text-slate-200 font-semibold">Fase 1 — Mappa quello che hai.</span>{" "}
              Prima di guardare avanti, fai un inventario preciso: competenze, network, reputazione,
              asset digitali. La maggior parte dei professionisti over 40 sottovaluta enormemente
              quello che ha già costruito.
            </p>
            <p>
              <span className="text-slate-200 font-semibold">Fase 2 — Usa l&apos;AI come amplificatore.</span>{" "}
              Non come sostituto. L&apos;AI può fare in un&apos;ora quello che ti richiedeva una settimana.
              Ma deve sapere cosa fare — e questo lo sai solo tu, con la tua esperienza.
              Scopri{" "}
              <Link href="/ai-per-professionisti" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
                come uso l&apos;AI nel mio lavoro quotidiano
              </Link>{" "}
              per capire da dove iniziare concretamente.
            </p>
            <p>
              <span className="text-slate-200 font-semibold">Fase 3 — Riposizionati sul mercato.</span>{" "}
              Con competenze aggiornate e un profilo rinnovato, il mercato ti legge in modo diverso.
              Non sei un professionista over 40 che ha imparato l&apos;AI. Sei un esperto di settore
              che usa l&apos;AI meglio di chiunque altro nel tuo campo.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CASI REALI ────────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Chi l&apos;ha fatto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            Casi reali: chi ha fatto questa transizione
          </h2>
          <div className="space-y-6">
            {[
              {
                profilo: "Consulente aziendale, 47 anni",
                situazione:
                  "Perdeva clienti a favore di agenzie più giovani e digitali. In 4 mesi ha integrato workflow AI nella sua offerta e ha aumentato il fatturato del 30% lavorando meno ore.",
              },
              {
                profilo: "Formatore indipendente, 52 anni",
                situazione:
                  "Convinto che i corsi in presenza fossero il suo unico modello. Ha trasformato i suoi contenuti in un sistema ibrido con AI che ora genera entrate anche quando non lavora.",
              },
              {
                profilo: "Commercialista, 44 anni",
                situazione:
                  "Passava ore su attività ripetitive. Con 3 automazioni AI ha liberato 8 ore a settimana e ha usato quel tempo per acquisire clienti di fascia più alta.",
              },
            ].map((caso) => (
              <div
                key={caso.profilo}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-blue-500/20 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-blue-400 font-medium text-sm">{caso.profilo}</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">{caso.situazione}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DA DOVE INIZIARE ───────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Il primo passo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            Da dove iniziare questa settimana
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed text-[1.05rem] mb-10">
            <p>
              Un&apos;azione concreta, adesso. Prendi un foglio e scrivi le 3 competenze per cui
              i tuoi clienti ti hanno pagato di più negli ultimi 2 anni. Non le tue preferite —
              quelle per cui ti hanno pagato.
            </p>
            <p>
              Questo è il nucleo del tuo nuovo posizionamento. Tutto il resto — AI, automazioni,
              nuovi canali — si costruisce intorno a questo.
            </p>
            <p>
              Se vuoi capire come strutturare il percorso completo, leggi{" "}
              <Link href="/il-metodo" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
                il metodo completo
              </Link>{" "}
              che uso con i miei clienti. Se preferisci partire con una sessione diretta,{" "}
              <Link href="/lavora-con-me" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
                prenota una sessione
              </Link>{" "}
              e lo facciamo insieme.
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
            Pronto a iniziare la tua reinvenzione?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Non devi buttare via niente di quello che hai costruito.{" "}
            <span className="text-slate-300">Devi amplificarlo.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/il-metodo"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
            >
              Scopri il metodo completo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/lavora-con-me"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 font-medium px-8 py-4 rounded-xl transition-all duration-200"
            >
              Prenota una sessione
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
