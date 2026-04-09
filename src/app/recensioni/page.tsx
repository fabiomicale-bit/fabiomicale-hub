import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Feedback Hub | Fabio Micale — Cento Unico Recensioni",
  description: "Il punto unico per condividere la tua esperienza e contribuire all'evoluzione del metodo. Partecipa al Review Program 2026.",
};

const reviewCategories = [
  {
    id: "pre-ordine",
    title: "Review Program 2026",
    subtitle: "L'edizione Definitiva",
    description: "Contribuisci al lancio dell'edizione definitiva. Ricevi in OMAGGIO la versione digitale integrale (Edizione 2026) in cambio della tua disponibilità a fornire una recensione onesta nel nostro Feedback Hub.",
    cta: "SBLOCCA EDIZIONE 2026 (OMAGGIO)",
    href: "mailto:prenotazioni@fabiomicale.com?subject=Partecipazione Review Program 2026",
    accent: "green"
  },
  {
    id: "servizi",
    title: "Sistemi Professionali",
    subtitle: "MEPA Elite™ / Impresa Liquida™",
    description: "Hai implementato i sistemi di crescita con Fabio? Condividi i tuoi risultati e aiuta altri imprenditori a comprendere il valore dell'ingegneria dei sistemi.",
    cta: "LASCIA UNA TESTIMONIANZA",
    href: "mailto:feedback@fabiomicale.com?subject=Testimonianza Sistemi Professionali",
    accent: "gold"
  },
  {
    id: "legacy",
    title: "Edizione 2017",
    subtitle: "Successo in 3 Passi (Originale)",
    description: "Hai letto la prima edizione storica? Lascia una recensione su Amazon per aiutare chi sta ancora studiando le basi del metodo.",
    cta: "RECENSISCI SU AMAZON",
    href: "https://www.amazon.it/review/create-review/?asin=153755087X",
    accent: "white"
  }
];

export default function RecensioniPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      <section className="pt-44 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mb-8 mx-auto">Asset di Evoluzione</div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8 font-serif">
            Feedback <span className="italic text-[#F5A623]">Hub.</span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed font-light mb-20 max-w-2xl mx-auto">
            Ogni interazione è un passo verso l&apos;eccellenza. Il tuo feedback non è solo un commento, è un asset per l&apos;evoluzione del metodo e della community.
          </p>

          <div className="grid gap-12">
            {reviewCategories.map((cat) => (
              <div 
                key={cat.id} 
                id={cat.id}
                className={`card-premium p-8 md:p-12 text-left relative overflow-hidden group transition-all duration-500 hover:border-${cat.accent === 'gold' ? '[#F5A623]' : cat.accent === 'green' ? '[#2E7D32]' : 'white'}/30`}
              >
                {cat.accent === 'green' && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                    Strategia Consigliata
                  </div>
                )}
                
                <div className="relative z-10 grid md:grid-cols-[1fr_250px] gap-8 items-center">
                  <div>
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block ${
                      cat.accent === 'gold' ? 'text-[#F5A623]' : cat.accent === 'green' ? 'text-[#2E7D32]' : 'text-white/40'
                    }`}>
                      {cat.subtitle}
                    </span>
                    <h2 className="text-3xl font-serif text-white mb-6 italic">{cat.title}</h2>
                    <p className="text-white/40 leading-relaxed font-light mb-0">
                      {cat.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <a
                      href={cat.href}
                      target={cat.href.startsWith('http') ? "_blank" : "_self"}
                      rel={cat.href.startsWith('http') ? "noopener noreferrer" : ""}
                      className={`btn-${cat.accent === 'green' ? 'gold' : cat.accent === 'gold' ? 'gold' : 'ghost'} w-full text-center px-6 py-4 text-[10px] tracking-[0.2em] font-bold`}
                      style={cat.accent === 'green' ? { backgroundColor: '#2E7D32', color: 'white' } : {}}
                    >
                      {cat.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-white/[0.02] border border-white/5 rounded-3xl text-center">
            <h3 className="text-2xl font-serif text-white mb-6">Cerchi una video-testimonianza?</h3>
            <p className="text-white/30 font-light mb-8 max-w-xl mx-auto">
              Per casi studio complessi o per condividere la tua storia di successo in formato video, contattaci direttamente a questa email.
            </p>
            <a href="mailto:successo@fabiomicale.com" className="text-[#F5A623] font-bold tracking-widest text-xs uppercase border-b border-[#F5A623]/20 pb-1 hover:border-[#F5A623] transition-all">
              successo@fabiomicale.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
