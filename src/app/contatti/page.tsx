import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contatti | Scrivi a Fabio Micale",
  description:
    "Scrivimi per collaborazioni, consulenze AI o domande sul metodo. Rispondo a tutti entro 48 ore.",
  alternates: { canonical: "https://www.fabiomicale.com/contatti" },
};

const scrivimiSe = [
  "Vuoi dominare il Mercato Elettronico della PA trasformandolo in un canale di vendita certo con MEPA Elite™.",
  "Senti il bisogno di liberare il tuo tempo e rendere la tua struttura aziendale autonoma con il Metodo Impresa Liquida™.",
  "Cerchi un reset strategico per eliminare il caos operativo e ripartire con il Protocollo Punto Zero™.",
  "Sei un professionista over 40 che vuole trasformare decenni di esperienza in asset digitali scalabili.",
  "Hai letto il mio libro e sei pronto a passare dalla teoria all'implementazione ingegneristica.",
];

const nonScrivimiSe = [
  "Cerchi 'formazione AI' generica o l'ultima novità tecnologica senza una strategia di business.",
  "Vuoi risultati istantanei o formule magiche che non richiedono l'implementazione di un sistema.",
  "Non sei disposto a mettere in discussione i tuoi attuali processi per fare spazio all'efficienza.",
  "Stai cercando un semplice esecutore e non un Metodologo che guidi la tua evoluzione.",
];

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* ── HERO GATEWAY ────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.025]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="badge mb-8 mx-auto">Gateway di Candidatura</div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8 font-serif">
            Inizia la <br /> <span className="italic text-[#F5A623]">Conversazione.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light">
            Il tempo è l&apos;unico asset non riproducibile. Per questo seleziono con estrema cura i partner e le aziende con cui collaborare.
          </p>
        </div>
      </section>

      {/* ── QUALIFICAZIONE ───────────────────────────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Scrivimi se */}
            <div className="card-premium p-10 md:p-12 border-l-4 border-l-[#2E7D32]/50">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white uppercase tracking-widest">Siamo Compatibili se...</h2>
              </div>
              <ul className="space-y-6">
                {scrivimiSe.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] mt-1.5 shrink-0" />
                    <span className="text-white/50 text-base font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non scrivermi se */}
            <div className="card-premium p-10 md:p-12 border-l-4 border-l-red-900/50">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/20 flex items-center justify-center text-red-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white uppercase tracking-widest">Non Siamo Compatibili se...</h2>
              </div>
              <ul className="space-y-6">
                {nonScrivimiSe.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-1.5 shrink-0" />
                    <span className="text-white/40 text-base font-light leading-relaxed italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── AZIONE DIRETTA ───────────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mb-12 mx-auto">Nessun Centralino. Rispondo Io.</div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 font-serif leading-tight">
            Pronto per il <br /> <span className="italic text-[#F5A623]">Salto di Qualità?</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Invia una candidatura sintetica spiegando la tua situazione. Analizzo personalmente ogni messaggio e rispondo entro 48 ore lavorative.
          </p>

          <div className="flex flex-col items-center gap-10">
            <a
              href="mailto:info@fabiomicale.com"
              className="text-2xl md:text-4xl font-bold text-white hover:text-[#F5A623] transition-colors font-serif tracking-tight border-b border-white/5 pb-4"
            >
              info@fabiomicale.com
            </a>
            
            <a
              href="mailto:info@fabiomicale.com"
              className="btn-gold px-12 py-6 text-xs tracking-[0.3em] font-bold"
            >
              INVIA LA TUA CANDIDATURA
            </a>
          </div>
        </div>
      </section>

      {/* ── NOTA AUTORE ──────────────────────────────────────────── */}
      <section className="pb-40 px-6 bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto text-center p-12 card-premium bg-white/[0.01]">
          <p className="text-white/20 text-sm italic leading-relaxed font-serif">
            &ldquo;Non ho un centralino. Non ho assistenti virtuali filtranti. Quando decidi di scrivermi, stai parlando direttamente con me. Tratta questa opportunità con lo stesso rispetto che avresti per il tuo tempo.&rdquo;
          </p>
          <div className="mt-8 text-[9px] uppercase tracking-[0.4em] text-white/10 font-bold">Fabio Micale — Il Metodologo</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
