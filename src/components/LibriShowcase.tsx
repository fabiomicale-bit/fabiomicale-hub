import Image from "next/image";
import Link from "next/link";

const libri = [
  {
    titolo: "Successo in 3 Passi",
    sottotitolo: "Edizione 2026 — Completamente Rivista",
    descrizione: "Il protocollo ingegneristico per riprendere il controllo della tua vita imprenditoriale. Integrata con Sistemi Operativi & AI. 27 esercizi pratici, 5 casi studio reali.",
    immagine: "/copertina-libro.png",
    status: "In Uscita",
    statusColor: "bg-hub-gold/10 text-hub-gold-dark border-hub-gold/20",
    cta: "Prenota la tua copia",
    ctaHref: "/il-libro",
    amazon: null,
    featured: true,
  },
  {
    titolo: "Successo in 3 Passi",
    sottotitolo: "Prima Edizione — 2017",
    descrizione: "Il seme originale del metodo che ha guidato professionisti nell'ultimo decennio. Disponibile su Amazon come risorsa storica.",
    immagine: "/copertina-libro.png",
    status: "Disponibile",
    statusColor: "bg-green-50 text-green-700 border-green-200",
    cta: "Acquista su Amazon",
    ctaHref: "https://www.amazon.it/Successo-3-Passi-I-Fondamentali/dp/153755087X",
    amazon: true,
    featured: false,
  },
  {
    titolo: "Prossimo Titolo",
    sottotitolo: "In preparazione",
    descrizione: "Un nuovo libro è in fase di sviluppo. Iscriviti alla newsletter per essere il primo a saperlo.",
    immagine: null,
    status: "Coming Soon",
    statusColor: "bg-hub-bg-alt text-hub-ink-light border-hub-border",
    cta: "Resta Aggiornato",
    ctaHref: "#newsletter",
    amazon: null,
    featured: false,
  },
];

export default function LibriShowcase() {
  return (
    <section className="py-32 px-6 bg-hub-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6">La Libreria</div>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-hub-ink leading-tight mb-6">
            I miei <span className="italic text-hub-gold">Libri.</span>
          </h2>
          <p className="text-hub-ink-muted text-lg max-w-2xl mx-auto font-light">
            Ogni libro è un sistema operativo per la tua evoluzione. Non teoria, ma protocolli testati sul campo.
          </p>
        </div>

        {/* Featured Book — Large */}
        <div className="card-editorial p-8 md:p-14 mb-12">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            {/* Book Cover */}
            <div className="relative group mx-auto md:mx-0">
              <div className="absolute -inset-4 bg-hub-gold/[0.06] blur-[40px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/copertina-libro.png"
                alt="Successo in 3 Passi — Edizione 2026"
                width={280}
                height={400}
                className="relative z-10 rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] group-hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Edition Badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-hub-charcoal text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                2026
              </div>
            </div>

            {/* Book Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border ${libri[0].statusColor}`}>
                  {libri[0].status}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-hub-ink mb-2">
                {libri[0].titolo}
              </h3>
              <p className="text-hub-ink-muted text-sm mb-6">{libri[0].sottotitolo}</p>
              <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-8 max-w-xl">
                {libri[0].descrizione}
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["27 Esercizi", "5 Casi Studio", "Protocollo AI", "Sistema Operativo"].map((f, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-[0.15em] text-hub-ink-muted bg-hub-bg-alt px-4 py-2 rounded-full border border-hub-border">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={libri[0].ctaHref} className="btn-gold px-10 py-4">
                  {libri[0].cta}
                </Link>
                <Link href="#newsletter" className="btn-outline px-10 py-4">
                  Scarica un Estratto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Books — Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {libri.slice(1).map((libro, i) => (
            <div key={i} className="card-editorial p-8 flex flex-col group">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border ${libro.statusColor}`}>
                  {libro.status}
                </span>
              </div>
              <h3 className="text-xl font-serif font-medium text-hub-ink mb-1 group-hover:text-hub-gold transition-colors">
                {libro.titolo}
              </h3>
              <p className="text-sm text-hub-ink-light mb-4">{libro.sottotitolo}</p>
              <p className="text-hub-ink-muted font-light leading-relaxed mb-8 flex-1">
                {libro.descrizione}
              </p>
              <div className="pt-6 border-t border-hub-border">
                {libro.amazon ? (
                  <a
                    href={libro.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold hover:text-hub-gold-dark transition-colors inline-flex items-center gap-2"
                  >
                    {libro.cta} →
                  </a>
                ) : (
                  <Link
                    href={libro.ctaHref}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-ink-muted hover:text-hub-gold transition-colors inline-flex items-center gap-2"
                  >
                    {libro.cta} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
