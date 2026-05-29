import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EditorialHero from "@/components/EditorialHero";
import NewsletterCTA from "@/components/NewsletterCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Successo in 3 Passi — Edizione 2026",
  url: "https://www.fabiomicale.com/successo-in-3-passi",
  description:
    "Un libro pratico per professionisti over 40 che vogliono rimettere ordine nel lavoro e nella direzione professionale — senza ricominciare da zero.",
  inLanguage: "it-IT",
  genre: "Business & Self-Help",
  numberOfPages: "119",
  bookFormat: "https://schema.org/Paperback",
  author: {
    "@type": "Person",
    "@id": "https://www.fabiomicale.com/#person",
    name: "Fabio Micale",
    url: "https://www.fabiomicale.com/chi-sono",
  },
};

export const metadata: Metadata = {
  title: "Successo in 3 Passi — Edizione 2026 | Fabio Micale",
  description:
    "Un libro pratico per professionisti over 40 che vogliono rimettere ordine nel lavoro e nella direzione professionale — senza ricominciare da zero.",
  alternates: { canonical: "https://www.fabiomicale.com/successo-in-3-passi" },
  openGraph: {
    type: "book",
    url: "https://www.fabiomicale.com/successo-in-3-passi",
    title: "Successo in 3 Passi — Edizione 2026 | Fabio Micale",
    description:
      "Un libro pratico per professionisti over 40 che vogliono rimettere ordine nel lavoro e nella direzione professionale — senza ricominciare da zero.",
    images: [
      {
        url: "/cover-3d-real.png",
        width: 600,
        height: 800,
        alt: "Successo in 3 Passi — Fabio Micale",
      },
    ],
  },
};

export default function SuccessoIn3PassiPage() {
  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <EditorialHero
        variant="book"
        eyebrow="Successo in 3 Passi — Edizione 2026"
        title="Ripartire dopo i 40 anni non richiede motivazione."
        titleAccent="Richiede metodo."
        subtitle="Un libro pratico per professionisti che lavorano tanto, costruiscono poco e vogliono rimettere ordine — senza ricominciare da zero."
        primaryCTA={{
          label: "In arrivo",
          href: "#",
          disabled: true,
          disclaimer: "Disponibile a breve. Intanto puoi leggere l'estratto gratuito.",
        }}
        secondaryCTA={{
          label: "Scarica l'estratto gratuito",
          href: "/estratto",
        }}
        image={{
          src: "/cover-3d-real.png",
          alt: "Cover Successo in 3 Passi — Fabio Micale",
          priority: true,
        }}
      />

      {/* ── SEZIONE 1 — IL PROBLEMA ───────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-3xl mx-auto">
          <div className="badge-editorial mb-10">Il problema</div>
          <div className="space-y-6 text-lg text-hub-ink-muted leading-relaxed font-light">
            <p>
              Lavori. Molto, spesso. Hai progetti in corso, messaggi a cui rispondere, riunioni,
              scadenze, idee da sviluppare. Ma alla fine della settimana hai la sensazione di non aver
              fatto la cosa importante. Solo tante cose.
            </p>
            <p className="text-hub-ink font-medium text-xl">
              Non è pigrizia. Non è mancanza di competenza. È un problema di struttura.
            </p>
            <p>
              Quando manca un sistema, tutto sembra urgente. Le giornate si riempiono da sole — di
              rumore, di riciclo, di cose che si ripresentano. Il lavoro c&#39;è, ma non avanza. O
              avanza su cose che non contano.
            </p>
            <p>
              Dopo i 40 anni, questo schema diventa più costoso. Hai meno tempo da sprecare in
              tentativi. Hai più da perdere se continui a operare senza una direzione chiara. E sai
              già — perché l&#39;hai provato — che lavorare di più non risolve il problema.
            </p>
            <p className="text-hub-ink font-medium text-xl">
              Quello che serve non è più impegno. È un modo diverso di decidere cosa fare, in quale
              ordine, con quali criteri.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 2 — IL METODO IN 3 PASSI ──────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-medium">Il metodo in tre passi</h2>
            <p className="text-hub-ink-muted font-light mt-4 max-w-xl mx-auto">
              Il metodo è diviso in tre Passi. Sono sequenziali: ognuno costruisce sul precedente.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Ferma il caos",
                desc: "Prima di organizzare, devi smettere di subire. Il primo Passo lavora sulla dispersione: tutte le attività aperte, i pensieri in attesa, le cose da fare prima o poi. Li porta fuori dalla testa, li rende visibili e li separa da ciò che conta davvero. Non è uno svuotamento: è un inventario. Serve a vedere con chiarezza cosa hai in mano e da dove cominciare.",
              },
              {
                step: "02",
                title: "Rimetti struttura",
                desc: "Con il quadro chiaro, puoi costruire un sistema che regge. Il secondo Passo introduce criteri di priorità, strumenti di pianificazione e un modo di organizzare il lavoro che non dipende dall'umore della giornata. Non è rigidità: è la differenza tra reagire alle cose e guidarle. Questo è il Passo in cui il metodo diventa concreto.",
              },
              {
                step: "03",
                title: "Mantieni il controllo nel tempo",
                desc: "Un sistema che funziona una settimana non è un sistema. Il terzo Passo affronta la continuità: come proteggere il metodo quando arrivano le urgenze, come recuperare quando si inceppa qualcosa, come usare strumenti come l'intelligenza artificiale senza che diventino un altro rumore da gestire. L'obiettivo non è la perfezione: è la tenuta.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="card-editorial p-10 flex flex-col h-full bg-hub-white"
              >
                <span className="text-4xl font-serif italic text-hub-gold/30 mb-6">{p.step}</span>
                <h3 className="text-xl font-bold text-hub-ink mb-4 uppercase tracking-wider">
                  {p.title}
                </h3>
                <p className="text-hub-ink-muted text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEZIONE 3 — COSA CONTIENE IL LIBRO ────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-serif font-medium mb-4">Cosa contiene il libro</h2>
              <p className="text-hub-ink-muted font-light mb-10 italic">
                119 pagine, formato US Trade (15×23 cm), carta crema, copertina morbida opaca. Non è
                un saggio: è un manuale di lavoro.
              </p>
              <ul className="space-y-7">
                {[
                  "Come distinguere le attività che avanzano da quelle che ti occupano senza produrre risultati.",
                  "Come costruire un sistema di priorità che regge anche quando l'agenda è piena.",
                  "Come gestire le urgenze senza che smontino il metodo.",
                  "Come integrare l'uso pratico dell'intelligenza artificiale senza inseguire ogni novità.",
                  "Come recuperare il controllo quando qualcosa si inceppa.",
                  "Gli esercizi applicativi per ognuno dei tre Passi.",
                  "Il collegamento al Dossier Speciale per chi vuole lavorare in modo più strutturato.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-hub-gold/10 flex items-center justify-center flex-shrink-0 text-hub-gold font-bold text-sm group-hover:bg-hub-gold group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <p className="text-hub-ink-muted text-base leading-relaxed font-light self-center">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full max-w-sm mx-auto">
              <Image
                src="/cover-3d-real.png"
                alt="Successo in 3 Passi — Fabio Micale"
                width={450}
                height={600}
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -inset-10 bg-hub-gold/[0.05] blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 4 — PER CHI È ────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg-alt border-y border-hub-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium">Per chi è questo libro</h2>
          </div>
          <div className="space-y-6 text-lg text-hub-ink-muted leading-relaxed font-light mb-12">
            <p>
              Questo libro è per chi lavora già — e sa che il problema non è la quantità di lavoro.
            </p>
            <p>
              È scritto pensando a professionisti, manager, consulenti e lavoratori autonomi che si
              trovano in un punto preciso: hanno esperienza, hanno competenze, ma sentono che qualcosa
              non funziona nel modo in cui organizzano il loro tempo e le loro energie.
            </p>
            <p>
              Spesso si tratta di over 40. Non perché il metodo valga solo a quella età: ma perché
              dopo i 40 il costo della dispersione è più alto, le energie sono più selettive e la
              voglia di ricominciare da zero è — giustamente — minore.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 border-t border-hub-border pt-10">
            <p className="text-hub-ink font-medium text-base">
              Se stai cercando motivazione, questo libro non è quello giusto.
            </p>
            <p className="text-hub-ink font-medium text-base">
              Se stai cercando un metodo, può essere un punto di partenza concreto.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 5 — L'AUTORE ─────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-44 h-52 rounded-2xl overflow-hidden border border-hub-border/50 shadow-sm">
                <Image
                  src="/fabio-speech.jpg"
                  alt="Fabio Micale"
                  fill
                  sizes="176px"
                  className="object-cover object-top grayscale"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-medium mb-6">Fabio Micale</h2>
              <div className="space-y-4 text-hub-ink-muted font-light leading-relaxed">
                <p>
                  Fabio è autore e formatore. Lavora con professionisti over 40 che vogliono rimettere
                  ordine nel proprio lavoro: non con coaching motivazionale, ma con struttura, criteri
                  e strumenti pratici.
                </p>
                <p>
                  Ha sviluppato il metodo Successo in 3 Passi a partire da anni di lavoro sul campo,
                  dall&#39;osservazione diretta dei problemi più ricorrenti — dispersione, mancanza di
                  struttura, difficoltà a mantenere una direzione quando il lavoro si accumula. Il
                  metodo nasce da lì: non da teorie, ma da quello che ha funzionato e da quello che non
                  ha funzionato.
                </p>
                <p>
                  Oggi integra l&#39;uso pratico dell&#39;intelligenza artificiale nel suo lavoro — non
                  come argomento da seguire, ma come strumento da usare in modo selettivo e consapevole.
                </p>
              </div>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold">
                Su fabiomicale.com pubblica articoli, strumenti e la newsletter settimanale Un Passo
                Avanti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 6 — DOSSIER SPECIALE ─────────────────────────── */}
      <section className="py-32 px-6 bg-hub-cream border-y border-hub-border">
        <div className="max-w-4xl mx-auto">
          <div className="badge-editorial mb-10">Il Dossier Speciale</div>
          <h2 className="text-4xl font-serif font-medium mb-8 leading-tight">
            Il libro contiene esercizi.{" "}
            <span className="italic text-hub-gold">Non sono decorativi: sono la parte più utile.</span>
          </h2>
          <div className="space-y-6 text-lg text-hub-ink-muted leading-relaxed font-light mb-12">
            <p>
              Leggere il metodo è un primo passo. Applicarlo cambia qualcosa. Documentare
              l&#39;applicazione — scrivere le risposte, tenere traccia delle scelte, rivedere il
              percorso — è quello che trasforma una lettura in un sistema personale.
            </p>
            <p>
              Per chi vuole fare questo lavoro in modo più strutturato, è disponibile un percorso
              supplementare: il Dossier Speciale.
            </p>
          </div>
          <div className="bg-hub-white border border-hub-border rounded-2xl p-8 md:p-10 mb-10">
            <h3 className="text-xl font-serif font-medium mb-6">Come funziona</h3>
            <p className="text-hub-ink-muted font-light mb-4">
              Svolgi uno o più esercizi del libro e invia le tue risposte a:{" "}
              <a
                href="mailto:libro.successointrepassi@fabiomicale.com"
                className="text-hub-ink underline decoration-hub-gold/30 hover:decoration-hub-gold transition-all"
              >
                libro.successointrepassi@fabiomicale.com
              </a>
            </p>
            <p className="text-hub-ink-muted font-light mb-8">
              Dopo l&#39;invio riceverai un invito per accedere all&#39;area riservata di
              fabiomicale.com. Una volta entrato, troverai già abilitata la sezione Dossier Speciale.
            </p>
            <div className="border-t border-hub-border pt-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-hub-ink mb-5">
                Cosa trovi nel Dossier Speciale
              </h4>
              <ul className="space-y-4">
                {[
                  "Un percorso autoguidato per rileggere gli esercizi svolti, raccogliere le risposte e arrivare a una sintesi finale del tuo lavoro con il metodo.",
                  "Un attestato di completamento.",
                  "Materiali e indicazioni collegate ai Passi che hai lavorato.",
                  "Una base per un eventuale confronto successivo, se lo vorrai.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-hub-gold mt-2.5 flex-shrink-0" />
                    <p className="text-hub-ink-muted text-sm font-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-hub-ink font-medium text-lg">
            Non è un bonus. Non è un&#39;aggiunta promozionale. È il passo successivo per chi ha
            lavorato davvero con il libro.
          </p>
        </div>
      </section>

      {/* ── SEZIONE 7 — CTA FINALE ────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="badge-editorial border-white/20 text-hub-gold mb-8 mx-auto">
            Inizia da qui
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
            Il primo passo è{" "}
            <span className="text-hub-gold italic">gratuito.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start text-left">
            <div className="flex flex-col items-center text-center">
              <div className="p-10 bg-white/5 rounded-3xl border border-white/10 w-full mb-4">
                <h3 className="text-xl font-serif mb-4 text-hub-gold">Estratto gratuito</h3>
                <p className="text-white/60 text-sm font-light mb-6">
                  Ricevi i primi capitoli di Successo in 3 Passi e il primo esercizio pratico del
                  Metodo.
                </p>
                <Link
                  href="/estratto"
                  className="btn-gold w-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center inline-block"
                >
                  Scarica l&apos;estratto
                </Link>
              </div>
              <p className="text-[10px] font-serif italic text-hub-gold/40 px-4">
                PDF via email. Zero spam. Cancellazione in ogni momento.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-10 bg-white/5 rounded-3xl border border-white/10 w-full mb-4">
                <h3 className="text-xl font-serif mb-4 text-hub-gold">Il libro completo</h3>
                <p className="text-white/60 text-sm font-light mb-6">
                  La versione fisica sarà disponibile a breve. Lascia la tua email e ti avviserò al lancio.
                </p>
                <a
                  href="#avviso-lancio"
                  className="btn-gold w-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center inline-block"
                >
                  Avvisami al lancio
                </a>
              </div>
              <p className="text-[10px] font-serif italic text-hub-gold/40 px-4">
                Solo un avviso quando il libro sarà disponibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 8 — LISTA AVVISO LANCIO ─────────────────── */}
      <NewsletterCTA variant="book-waitlist" />
    </main>
  );
}
