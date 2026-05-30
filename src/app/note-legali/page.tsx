

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Note Legali",
  description: "Informazioni legali e termini d'uso del portale di Fabio Micale.",
};

export default function LegalNotesPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      
      
      <section className="pt-44 pb-32 px-6 max-w-3xl mx-auto animate-fade-in">
        <div className="badge mb-8">Trasparenza</div>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-12 font-serif italic">Note Legali</h1>
        
        <div className="space-y-12 text-white/50 leading-relaxed font-light">
          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">1. Natura del Portale</h2>
            <p>
              Il presente sito web (fabiomicale.com e relativi sotto-domini) è un portale a carattere editoriale, informativo e divulgativo gestito personalmente da <strong>Fabio Micale</strong>. 
              In questa fase, il progetto rappresenta una iniziativa di divulgazione scientifica e professionale nell&apos;ambito del management, dell&apos;automazione e della crescita personale.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">2. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti (testi, grafiche, loghi, video e metodologie) presenti sul portale sono di proprietà esclusiva di Fabio Micale e sono protetti dalle leggi vigenti sul diritto d&apos;autore. 
              Qualsiasi riproduzione, anche parziale, senza autorizzazione scritta è severamente vietata.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">3. Assenza di Attività Commerciale Diretta</h2>
            <p>
              Si precisa che il presente portale non costituisce testata giornalistica né un&apos;attività di commercio elettronico diretta da parte del titolare. 
              Eventuali riferimenti a prodotti editoriali (libri) rinviano a piattaforme terze certificate (es. Amazon KDP) che ne gestiscono interamente la vendita, la fatturazione e la logistica.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-6 italic">4. Esclusione di Responsabilità</h2>
            <p>
              Le informazioni contenute nel sito hanno scopo puramente informativo e metodologico. Fabio Micale non si assume alcuna responsabilità per l&apos;uso improprio delle strategie descritte o per eventuali danni derivanti dall&apos;applicazione autonoma dei contenuti proposti. 
              Si consiglia sempre la consulenza di professionisti abilitati per decisioni legali, fiscali o aziendali.
            </p>
          </div>

          <div className="mt-20 p-8 card-premium bg-white/[0.01] border border-white/5 rounded-2xl">
            <p className="text-xs text-white/30 leading-relaxed font-bold tracking-wider uppercase">
              Contatti: Per qualsiasi comunicazione legale o richiesta di collaborazione, è possibile scrivere a: <strong>info@fabiomicale.com</strong>
            </p>
          </div>
        </div>
      </section>

      
    </main>
  );
}
