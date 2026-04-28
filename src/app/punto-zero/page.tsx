import EbookForm from "@/components/EbookForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const silverFaqs: FAQItem[] = [
  { 
    question: "Cos'è realmente il Punto Zero?", 
    answer: "Non è una crisi, ma un momento di estrema lucidità. È il punto in cui smetti di aggiungere complessità e inizi a togliere ciò che non ha più senso portare con te." 
  },
  { 
    question: "A chi si rivolge questo percorso?", 
    answer: "A chi ha già raggiunto risultati, ma sente un disallineamento tra ciò che fa e il senso che aveva una volta. È per professionisti senior che cercano un'integrità chirurgica." 
  },
  { 
    question: "Cosa significa 'Ingegneria della Rinascita'?", 
    answer: "Significa smettere di agire sulle intenzioni e iniziare a lavorare sui protocolli operativi e sulla chiarezza di visione. Non è motivazione, è architettura." 
  },
  { 
    question: "Come si accede alla Community (Il Porto)?", 
    answer: "La Community è uno spazio di risonanza. Vi si accede dopo una prima fase di allineamento, per condividere il percorso con chi parla la stessa lingua di verità." 
  }
];

export default function PuntoZeroPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-platinum-300/30 selection:text-white font-sans">
      
      {/* ── HERO: LA SOGLIA ────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-platinum-300/[0.05] via-transparent to-transparent opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-slate opacity-[0.05]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-platinum-300/20 bg-white/5 text-platinum-300 mb-8 font-bold tracking-[0.4em] text-[9px] uppercase backdrop-blur-md">
            <span>Oltre il Disallineamento</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            La Soglia della tua <br />
            <span className="italic text-platinum-100 uppercase tracking-tighter">Nuova Chiarezza.</span>
          </h1>
          <p className="text-white/40 text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Non è una questione di fare meglio, ma di smettere di fingere che tutto abbia ancora senso. Punto Zero è lo spazio tra ciò che eri e ciò che ancora non sai di poter diventare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@fabiomicale.com"
              className="px-12 py-5 bg-platinum-100 text-obsidian rounded-full text-[10px] tracking-[0.4em] font-bold text-center hover:bg-white transition-all shadow-2xl shadow-white/5"
            >
              ATTRAVERSA LA SOGLIA
            </a>
          </div>
        </div>
      </section>

      {/* ── IL PUNTO ZERO: TOGLIERE ────────────────────────────── */}
      <section id="protocollo" className="py-32 px-6 bg-[#0F0F0F] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-serif leading-tight">
                Lo Zero non è vuoto. <br /><span className="italic text-white/40">È lo spazio per ricominciare.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                Per anni hai aggiunto competenze e responsabilità. Ora senti il bisogno di togliere. Lo Zero è il punto invisibile in cui smetti di spingere e inizi a vedere.
              </p>
              
              <div className="space-y-8">
                {[
                    { t: "La Tabula Rasa", d: "Smettere di inseguire ciò che non senti più tuo per liberare energia vitale." },
                    { t: "Audit di Autorità", d: "Analizzare con onestà dove la tua integrità viene sacrificata per l'abitudine." },
                    { t: "Protocollo Platino", d: "Costruire un'architettura operativa basata sulla verità e sulla calma." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                     <span className="text-platinum-400 text-xl font-serif italic opacity-40">0{i+1}</span>
                     <div>
                        <h3 className="text-white font-bold mb-2 uppercase tracking-wide">{item.t}</h3>
                        <p className="text-white/30 text-sm font-light leading-relaxed">{item.d}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] flex items-center justify-center">
               <div className="absolute inset-0 bg-platinum-300/5 blur-[100px] rounded-full scale-75 pointer-events-none" />
               <div className="relative w-72 h-72 border border-platinum-300/10 rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="w-56 h-56 border border-platinum-300/20 rounded-full border-dashed" />
                 <div className="absolute w-4 h-4 rounded-full bg-platinum-100 top-0 shadow-[0_0_15px_rgba(241,245,249,0.5)]" />
               </div>
               <div className="absolute text-5xl font-serif italic text-platinum-300 font-light translate-y-1 opacity-60">0</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL PORTO: RISONANZA ──────────────────────────────── */}
      <section id="percorso" className="py-32 px-6 bg-obsidian relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-white/[0.02] border border-white/10 rounded-[50px] backdrop-blur-2xl">
               <div className="text-platinum-300 text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">Il Porto</div>
               <h3 className="text-3xl font-serif italic mb-6 text-white">Non sei più l&apos;unico a vedere.</h3>
               <p className="text-white/40 leading-relaxed mb-8 font-light">
                 Il Porto non è un luogo fisico, ma uno spazio di riconoscimento. Persone diverse, storie diverse, ma la stessa frequenza di verità professionale. Qui non serve spiegarsi.
               </p>
               <div className="text-platinum-100 font-serif italic">Risonanza tra Pari.</div>
            </div>
            <div className="p-12 bg-platinum-100 text-obsidian rounded-[50px] shadow-2xl">
               <div className="text-2xl font-serif italic font-light mb-10 leading-snug">
                 &quot;Punto Zero non è un corso. È un atto chirurgico di verità che mi ha restituito il comando della mia vita.&quot;
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-obsidian/20" />
                  <div className="text-[10px] font-black uppercase tracking-widest text-obsidian/60">Andrea S. — Strategic Advisor</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL LIBRO: MANUALE ──────────────────────────────────── */}
      <section id="manuale" className="py-40 px-6 bg-obsidian">
        <div className="max-w-4xl mx-auto text-center bg-white/[0.02] border border-white/5 backdrop-blur-2xl p-12 md:p-24 overflow-hidden relative rounded-[60px]">
          <div className="absolute top-0 right-0 w-full h-full bg-platinum-300/[0.02] blur-[100px] pointer-events-none" />
          
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-platinum-300/20 bg-white/5 text-platinum-300 mb-8 font-bold tracking-[0.4em] text-[9px] uppercase">
            <span>Asset di Supporto</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
            Il Libro <span className="italic text-platinum-200 font-light">Punto Zero</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            I pilastri fondamentali per guidare il tuo reset. Dalla Soglia alla Chiarezza, il percorso completo verso la tua rinascita professionale.
          </p>
          
          <div className="max-w-md mx-auto w-full text-white">
            <EbookForm variant="platinum" />
          </div>
        </div>
      </section>

      <FAQSection 
        items={silverFaqs} 
        theme="silver" 
        title="Domande sul Reset" 
        subtitle="Svuotiamo il campo da ogni dubbio per ripartire con precisione."
      />

    </div>
  );
}
