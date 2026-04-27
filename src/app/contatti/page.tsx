import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubContactForm from "@/components/HubContactForm";

// Forza il rendering dinamico per gestire i searchParams in tempo reale
export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}): Promise<Metadata> {
  const { ref } = await searchParams;
  const isAgency = ref === "agenzia";
  
  return {
    title: isAgency ? "Analisi Strategica | Agenzia Business" : "Contatti | Fabio Micale",
    description: isAgency 
      ? "Richiedi un'analisi strategica per il tuo business." 
      : "Entra in contatto diretto con Fabio Micale.",
    alternates: { canonical: "https://www.fabiomicale.com/contatti" },
  };
}

const scrivimiSe = [
  "Vuoi saperne di più sui miei libri, corsi o programmi di coaching.",
  "Sei un professionista Over 40 che cerca un percorso strutturato di crescita personale e professionale.",
  "Hai un business e vuoi integrare l'AI come leva operativa concreta.",
  "Cerchi un partner strategico per il mercato degli appalti pubblici (MEPA Elite).",
  "Senti il bisogno di un reset — e vuoi farlo con metodo, non con buone intenzioni.",
];

const nonScrivimiSe = [
  "Cerchi formule magiche o risultati senza impegno.",
  "Vuoi 'formazione AI' generica senza una strategia concreta.",
  "Non sei disposto a metterti in discussione e lavorare su di te.",
  "Stai cercando un semplice esecutore e non un metodologo.",
];

export default async function ContattiPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const normalizedRef = ref?.toLowerCase();
  const isAgency = normalizedRef === "agenzia";
  const isMepa = normalizedRef === "mepa";
  const isPunto = normalizedRef === "punto-zero";

  // Tema Centrale (Sempre Editorial Light per coerenza Hub, a meno che non sia Punto Zero che è Obsidian)
  const isDarkTheme = isPunto;
  
  const theme = {
    bg: isDarkTheme ? "bg-obsidian" : "bg-hub-bg",
    text: isDarkTheme ? "text-white" : "text-hub-ink",
    textMuted: isDarkTheme ? "text-white/40" : "text-hub-ink-muted",
    accent: isAgency ? "text-blue-600" : (isMepa ? "text-pa-green" : (isPunto ? "text-platinum-300" : "text-hub-gold")),
    badge: isAgency 
      ? "bg-blue-50 border-blue-100 text-blue-600" 
      : (isMepa ? "bg-pa-green/5 border-pa-green/10 text-pa-green" : (isPunto ? "bg-white/5 border-white/10 text-platinum-300" : "badge-editorial")),
    cardBg: isDarkTheme ? "bg-white/[0.02] border-white/5" : "bg-white border-hub-border shadow-sm",
  };

  // Contenuto Dinamico
  const content = {
    badge: isAgency ? "Agenzia di Sviluppo Business" : (isMepa ? "Consulenza MePA & Appalti Pubblici" : (isPunto ? "Protocollo Punto Zero" : "Contatti")),
    title: isAgency ? (
      <>Analisi <span className="italic font-light text-blue-600">Strategica.</span></>
    ) : (isMepa ? (
      <>Analisi <span className="italic font-light text-pa-green">Requisiti MePA.</span></>
    ) : (isPunto ? (
      <>Protocollo <span className="italic font-light text-platinum-300">Punto Zero.</span></>
    ) : (
      <>Inizia la <span className="italic text-hub-gold">Conversazione.</span></>
    ))),
    lead: isAgency 
      ? "Analisi chirurgica dei tuoi processi di acquisizione. Integriamo AI e Sistemi di Conversione per trasformare i click in contatti ricorrenti." 
      : (isMepa 
          ? "Valutiamo il potenziale della tua azienda nel mercato della PA. Dall'abilitazione alla gestione operativa delle gare sul portale Acquisti in Rete."
          : (isPunto 
              ? "Il punto di reset per professionisti Over 40. Inizia qui la tua reinvenzione strategica attraverso il protocollo Punto Zero."
              : "Il tempo è il capitale più caro. Per questo filtro personalmente ogni richiesta per garantire qualità e rispetto reciproco.")),
  };

  return (
    <main className={`min-h-screen ${theme.bg} ${theme.text} selection:bg-hub-gold/20 font-sans`}>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-56 pb-32 px-6 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl ${isAgency ? 'from-blue-100/30' : 'from-hub-gold/5'} to-transparent rounded-full blur-[120px]`} />
        {!isDarkTheme && <div className="absolute inset-0 bg-grid-editorial opacity-40" />}
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className={`${theme.badge} mb-10 mx-auto inline-block px-6 py-2 rounded-full font-bold uppercase text-[9px] tracking-[0.4em] border animate-fade-in`}>
            {content.badge}
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            {content.title}
          </h1>
          <p className={`text-xl ${theme.textMuted} leading-relaxed max-w-2xl mx-auto font-light`}>
            {content.lead}
          </p>
        </div>
      </section>

      {/* ── AZIONE DIRETTA / FORM ────────────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <div className="space-y-12">
                <div>
                   <h2 className="text-3xl font-serif italic mb-6">Nessun Centralino. <br /><span className={theme.accent}>Ti Rispondo Io.</span></h2>
                   <p className={`${theme.textMuted} text-lg font-light leading-relaxed mb-8`}>
                      Ogni messaggio arriva direttamente alla mia scrivania. Non rispondo a tutti, ma rispondo a chiunque dimostri di avere un progetto serio o una necessità reale.
                   </p>
                </div>

                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkTheme ? 'bg-white/5 text-white' : 'bg-hub-gold/5 text-hub-gold'} border border-current opacity-20`}>
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Email Diretta</h4>
                         <p className="text-lg font-serif">info@fabiomicale.com</p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkTheme ? 'bg-white/5 text-white' : 'bg-hub-gold/5 text-hub-gold'} border border-current opacity-20`}>
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Tempi di Risposta</h4>
                         <p className="text-lg font-serif">Entro 24 ore lavorative</p>
                      </div>
                   </div>
                </div>

                {/* Qualificazione Rapida */}
                <div className={`${theme.cardBg} p-8 rounded-[30px] mt-12`}>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Prima di scrivermi:</h4>
                   <ul className="space-y-4">
                      {scrivimiSe.slice(0, 3).map((item, i) => (
                         <li key={i} className="flex gap-3 text-sm font-light leading-relaxed">
                            <span className={theme.accent}>•</span>
                            <span className={theme.textMuted}>{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
             <div className={`${theme.cardBg} p-10 md:p-16 rounded-[40px] shadow-2xl ${isDarkTheme ? 'shadow-black/50' : 'shadow-hub-gold/5'}`}>
                <HubContactForm theme={normalizedRef as any} />
             </div>
          </div>

        </div>
      </section>

      {/* ── NOTA AUTORE ──────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className={`text-xl italic leading-relaxed font-serif ${theme.textMuted} mb-10`}>
            &ldquo;Il mio lavoro è proteggere il tempo dei miei partner e il mio. <br /> Tratta questa richiesta con il rispetto che merita la tua crescita.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-hub-gold/30" />
             <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-hub-gold">Fabio Micale</div>
             <div className="w-12 h-px bg-hub-gold/30" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
