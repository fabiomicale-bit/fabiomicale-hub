import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chi sono",
  description: "Fabio Micale è autore e formatore specializzato in metodi pratici per la crescita e la rinascita professionale Over 40.",
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
                  alt="Fabio Micale — Autore e Formatore"
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
              <div className="border-t border-hub-border/50 pt-8">
                <p className="text-sm font-light leading-relaxed text-hub-ink-muted">
                  Continua il percorso anche su LinkedIn e YouTube, dove condivido appunti, video e riflessioni sul metodo.
                </p>
                <div className="mt-5 flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-[0.18em]">
                  <a href="https://www.linkedin.com/in/fabiomicale/" target="_blank" rel="noopener noreferrer" className="text-hub-ink underline underline-offset-4 hover:text-hub-gold transition-colors">
                    Seguimi anche su LinkedIn
                  </a>
                  <a href="https://www.youtube.com/@FabioMicale" target="_blank" rel="noopener noreferrer" className="text-hub-ink underline underline-offset-4 hover:text-hub-gold transition-colors">
                    Guarda il canale YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PUNTO DI PARTENZA ───────────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Il punto di partenza</h2>
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-medium leading-snug">
                Il punto non è ricominciare da zero
              </h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Dopo i 40 anni non si parte da una pagina bianca. Ci sono esperienza, competenze, responsabilità, vincoli e memoria. Il problema, spesso, non è mancare di capacità. È avere troppe cose aperte, troppi strumenti, troppe priorità e poca struttura per decidere cosa conta davvero.
              </p>
              <blockquote className="border-l-2 border-hub-gold pl-6 py-2">
                <p className="text-xl font-serif italic text-hub-ink leading-relaxed">
                  Non serve cancellare tutto. Serve riorganizzare quello che hai costruito.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── COSA VEDO SPESSO ─────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Cosa vedo spesso</h2>
            <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
              Negli anni ho incontrato persone competenti, spesso già molto impegnate. Il punto non era fare di più. Era scegliere meglio, ridurre la dispersione e costruire un sistema personale più chiaro.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Molto lavoro, poca direzione</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Giornate piene, messaggi continui, progetti aperti. Il punto non è aggiungere altre attività, ma capire cosa merita davvero attenzione.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Esperienza non valorizzata</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                L&apos;esperienza è un vantaggio solo se diventa criterio. Dopo i 40 anni il lavoro più utile è trasformare ciò che si è imparato in decisioni più semplici e ordinate.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Strumenti senza sistema</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Nuove applicazioni, nuove piattaforme, nuove urgenze. Senza un metodo, ogni strumento rischia di aggiungere rumore invece di ridurlo.
              </p>
            </div>
            <div className="border border-hub-border/60 p-8 space-y-4">
              <h3 className="font-serif text-lg font-medium">Cambiamento senza continuità</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                La motivazione può aiutare per qualche giorno. Una struttura chiara serve quando il lavoro si accumula e bisogna continuare anche senza entusiasmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENZA ARTIFICIALE ─────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">L&apos;intelligenza artificiale</h2>
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-medium leading-snug">
                  L&apos;intelligenza artificiale non sostituisce l&apos;esperienza
                </h3>
                <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                  Nel mio lavoro l&apos;AI non è il centro del discorso. È uno strumento. Può aiutare a pensare meglio, organizzare meglio, produrre meglio e recuperare tempo. Ma funziona solo se entra dentro un metodo. Senza criteri, diventa un&apos;altra fonte di confusione.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-hub-border/40 pt-10">
                <div className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Prima il metodo</p>
                  <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                    L&apos;AI deve servire una direzione, non crearne una finta.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Poi gli strumenti</p>
                  <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                    Gli strumenti cambiano. I criteri restano.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-widest text-hub-gold">Infine la continuità</p>
                  <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                    Il valore non è provare tutto, ma costruire un modo di lavorare che regge nel tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IL METODO ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Il metodo</h2>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-medium leading-snug">
                Il metodo Successo in 3 Passi
              </h3>
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Successo in 3 Passi nasce per trasformare confusione, tempo disperso e priorità aperte in una struttura più chiara. Non è un sistema complicato. È una sequenza pratica.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <p className="text-5xl font-serif font-light text-hub-gold/30">01</p>
              <h3 className="font-serif text-xl font-medium">Ferma il caos</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Rendere visibile ciò che occupa spazio mentale, distinguere ciò che conta da ciò che distrae e smettere di inseguire tutto insieme.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-5xl font-serif font-light text-hub-gold/30">02</p>
              <h3 className="font-serif text-xl font-medium">Rimetti struttura</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Organizzare priorità, strumenti e attività in un sistema più semplice, sostenibile e utilizzabile nella vita reale.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-5xl font-serif font-light text-hub-gold/30">03</p>
              <h3 className="font-serif text-xl font-medium">Mantieni il controllo</h3>
              <p className="text-hub-ink-muted text-base leading-relaxed font-light">
                Creare una revisione periodica per non perdere direzione appena il lavoro torna ad accumularsi.
              </p>
            </div>
          </div>
          <div>
            <Link href="/il-metodo" className="text-hub-gold text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">
              Approfondisci il metodo
            </Link>
          </div>
        </div>
      </section>

      {/* ── DAL LIBRO ALLA PRATICA ───────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Dal libro alla pratica</h2>
            <div className="space-y-8">
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
                Il libro <span className="text-hub-ink font-medium">Successo in 3 Passi — Edizione 2026</span> raccoglie questo approccio in forma pratica. Non è pensato per essere letto e dimenticato. È costruito per lavorarci sopra: leggere, fermarsi, rispondere, rimettere ordine e trasformare il metodo in una sequenza applicabile.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 pt-2">
                <Link href="/successo-in-3-passi" className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors">
                  Scopri il libro
                </Link>
                <Link href="/estratto" className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors">
                  Scarica l&apos;estratto gratuito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE ────────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="badge-editorial mb-10 mx-auto w-fit">Cosa dicono</div>
          <div className="grid md:grid-cols-3 gap-10">

            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Avevo competenze solide ma non riuscivo a capire perché non bastassero più. Il Metodo mi ha aiutato a rimettere tutto in ordine: non quello che sapevo fare, ma come presentarlo e a chi. In sei mesi ho riposizionato completamente la mia attività.&rdquo;
              </p>
              <p className="text-sm font-medium text-hub-gold tracking-wide">Marco T.</p>
              <p className="text-xs text-hub-ink-muted -mt-4">Consulente aziendale</p>
            </div>

            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Mi aspettavo il solito libro di crescita personale. Ho trovato invece uno strumento di lavoro vero, con struttura e sequenza. L&apos;ho riletto due volte. La seconda volta con la matita in mano.&rdquo;
              </p>
              <p className="text-sm font-medium text-hub-gold tracking-wide">Rossana M.</p>
              <p className="text-xs text-hub-ink-muted -mt-4">Formatrice aziendale</p>
            </div>

            <div className="flex flex-col gap-6 border border-hub-border/60 p-8">
              <p className="text-hub-ink-muted text-base leading-relaxed font-light italic">
                &ldquo;Ho 51 anni, trent&apos;anni di esperienza nel settore e zero voglia di sentirmi dire che devo reinventarmi. Fabio non usa quella parola. Parla di metodo, di struttura, di passi concreti. È la differenza che cercavo.&rdquo;
              </p>
              <p className="text-sm font-medium text-hub-gold tracking-wide">Giorgio P.</p>
              <p className="text-xs text-hub-ink-muted -mt-4">Dirigente in transizione</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── RACCORDO NEWSLETTER ──────────────────────────────── */}
      <section className="py-24 px-6 border-t border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <h2 className="text-2xl font-serif italic text-hub-gold">Un Passo Avanti</h2>
            <p className="text-hub-ink-muted text-lg leading-relaxed font-light">
              Se questi temi ti riguardano, il passo successivo non è aggiungere altra teoria. È iniziare da un contenuto semplice, concreto, applicabile. Per questo ho creato <span className="text-hub-ink font-medium">Un Passo Avanti</span>: una newsletter per portare metodo, struttura e strumenti pratici nel lavoro di ogni settimana.
            </p>
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
          <Link href="/estratto" className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em]">
            Inizia dall&apos;estratto gratuito
          </Link>
        </div>
      </section>
    </main>
  );
}
