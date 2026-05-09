import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grazie! | Successo in 3 Passi",
  description: "Grazie per aver acquistato Successo in 3 Passi. Scarica qui i tuoi bonus.",
};

export default function GrazieSuccessoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-20 h-20 bg-hub-gold/10 text-hub-gold rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">Grazie!</h1>
        <p className="text-xl text-hub-ink-muted leading-relaxed mb-16 font-light">
          Il tuo ordine è stato completato con successo. <br />
          Sei ufficialmente parte del lancio di <strong>Successo in 3 Passi — Edizione 2026</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Bonus 1 */}
          <div className="card-editorial p-10 bg-white border border-hub-border group hover:border-hub-gold transition-all">
            <div className="text-hub-gold text-xs font-bold uppercase tracking-widest mb-4">Bonus Immediato</div>
            <h3 className="text-xl font-serif font-medium mb-4">Operational Checklist 2026</h3>
            <p className="text-hub-ink-muted text-sm font-light mb-8">
              Il protocollo d'azione rapido per applicare il metodo in 14 giorni.
            </p>
            <a 
              href="/assets/CHECKLIST_OPERATIVA_2026.pdf" 
              download
              className="inline-block text-[10px] font-bold uppercase tracking-widest text-hub-gold border-b border-hub-gold pb-1 group-hover:gap-2 transition-all"
            >
              Scarica ora ↓
            </a>
          </div>

          {/* Bonus 2 */}
          <div className="card-editorial p-10 bg-white border border-hub-border group hover:border-hub-gold transition-all">
            <div className="text-hub-gold text-xs font-bold uppercase tracking-widest mb-4">Estratto Esclusivo</div>
            <h3 className="text-xl font-serif font-medium mb-4">Primi 3 Capitoli (Preview)</h3>
            <p className="text-hub-ink-muted text-sm font-light mb-8">
              Inizia subito a leggere i primi tre capitoli del libro manifesto.
            </p>
            <a 
              href="/assets/ESTRATTO_LANCIO_2026.pdf" 
              download
              className="inline-block text-[10px] font-bold uppercase tracking-widest text-hub-gold border-b border-hub-gold pb-1 group-hover:gap-2 transition-all"
            >
              Scarica ora ↓
            </a>
          </div>
        </div>

        <div className="mt-24 p-12 bg-hub-cream/30 rounded-[40px] border border-hub-border">
          <h4 className="text-lg font-serif font-medium mb-4">Cosa succede ora?</h4>
          <p className="text-hub-ink-muted text-sm font-light leading-relaxed max-w-xl mx-auto">
            Riceverai a breve un'email di conferma con i tuoi dati di accesso all'area riservata premium non appena sarà attiva. Il libro completo ti verrà inviato in formato digitale il 22 Maggio 2026.
          </p>
          <div className="mt-8">
             <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-ink-muted hover:text-hub-gold transition-colors">
               Torna alla Home
             </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
