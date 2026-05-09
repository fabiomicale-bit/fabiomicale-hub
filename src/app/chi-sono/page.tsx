import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chi sono | Fabio Micale",
  description: "Fabio Micale è scrittore e formatore specializzato in metodi pratici per la crescita e la rinascita professionale Over 40.",
  alternates: { canonical: "https://www.fabiomicale.com/chi-sono" },
};

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-editorial opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="badge-editorial mb-8">La Mia Missione</div>
              <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] tracking-tight mb-8">
                Non sono qui per raccontarti una carriera perfetta. <br />
                <span className="italic text-hub-gold">Sono qui per mostrarti un metodo.</span>
              </h1>
              <p className="text-xl text-hub-ink-muted leading-relaxed max-w-lg font-light">
                La vita professionale, dopo i 40 anni, può diventare più complessa: cambiano gli strumenti, cambia il mercato, cambia il modo di lavorare, cambia anche il modo in cui guardi te stesso.
              </p>
              <p className="text-xl text-hub-ink-muted leading-relaxed max-w-lg font-light mt-6">
                Io ho trasformato anni di esperienza, errori, ripartenze, studio e lavoro sul campo in un metodo pratico: <span className="text-hub-ink font-medium underline decoration-hub-gold/40">Successo in 3 Passi.</span>
              </p>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-hub-gold/[0.05] blur-[60px] rounded-full" />
                <Image
                  src="/foto fabio cravatta no sfondo.png"
                  alt="Fabio Micale — Scrittore e Formatore"
                  width={550}
                  height={700}
                  className="relative z-10 w-full h-auto drop-shadow-2xl grayscale contrast-[1.1]"
                  style={{ transform: "scaleX(-1)" }}
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hub-bg to-transparent z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONI CONTENUTO ────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* 1. Da esperienza a metodo */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Da esperienza a metodo</h2>
            <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
              <p>
                Il Metodo Successo in 3 Passi non nasce da una teoria astratta. Nasce dall’osservazione di cosa succede quando una persona esperta perde ordine, direzione o continuità e ha bisogno di ricostruire un sistema pratico.
              </p>
            </div>
          </div>

          {/* 2. Perché Over 40 */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Perché Over 40</h2>
            <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
              <p>
                Dopo i 40 anni non parti da zero. Hai esperienza, errori, competenze, responsabilità, vincoli e memoria. Il punto non è cancellare tutto, ma riorganizzare quello che hai costruito dentro una nuova struttura.
              </p>
            </div>
          </div>

          {/* 3. Perché l’intelligenza artificiale */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Perché l’intelligenza artificiale</h2>
            <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
              <p>
                L’AI non sostituisce la tua esperienza. Può aiutarti a rimetterla in movimento. Usata bene, diventa uno strumento per pensare meglio, organizzare meglio, produrre meglio e imparare più velocemente.
              </p>
            </div>
          </div>

          {/* 4. Il mio impegno */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start border-t border-hub-border pt-16">
            <h2 className="text-2xl font-serif italic text-hub-gold">Il mio impegno</h2>
            <div className="space-y-6 text-hub-ink-muted text-lg leading-relaxed font-light">
              <p>
                Non ti vendo sogni. Ti do strumenti. Questo sito, il libro, la newsletter e l’area riservata esistono per una ragione: aiutarti a rimettere ordine e trasformare il cambiamento in una sequenza di passi pratici.
              </p>
              <div className="pt-8">
                <Link href="/il-metodo" className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Scopri il Metodo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── NEWSLETTER DISCRETA ──────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">Ricevi Un Passo Avanti</h2>
          <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-10">
            Una volta alla settimana, un contenuto pratico per applicare il Metodo Successo in 3 Passi.
          </p>
          <Link href="/area-riservata" className="btn-outline px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
            Iscriviti alla newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}
