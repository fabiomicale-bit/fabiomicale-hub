import Link from "next/link";

export default function PuntoZeroBlog() {
  const posts = [
    {
      title: "La Soglia: Perché il successo a volte stanca",
      date: "24 Aprile 2026",
      excerpt: "Un'analisi sul disallineamento tra risultati economici e soddisfazione personale dopo i 40 anni.",
      slug: "la-soglia-successo-stanca"
    },
    {
      title: "Lo Zero: L'arte di togliere per ricominciare",
      date: "18 Aprile 2026",
      excerpt: "Come eliminare il superfluo per ritrovare la direzione chirurgica nel business.",
      slug: "lo-zero-arte-di-togliere"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-white pt-44 pb-32 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-platinum-300/20 bg-white/5 text-platinum-300 mb-8 font-bold tracking-[0.4em] text-[9px] uppercase backdrop-blur-md">
          <span>Aggiornamenti dal Reset</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-12 text-white">Riflessioni <br /><span className="text-white/40 font-light">sulla Chiarezza.</span></h1>
        
        <div className="grid gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group border-b border-white/5 pb-12">
              <div className="text-platinum-300/40 text-[10px] font-bold uppercase tracking-widest mb-4">{post.date}</div>
              <h2 className="text-3xl font-serif text-white group-hover:text-platinum-100 transition-colors mb-4">{post.title}</h2>
              <p className="text-white/40 font-light leading-relaxed mb-6">{post.excerpt}</p>
              <Link href={`/punto-zero/aggiornamenti/${post.slug}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-platinum-300 hover:text-white transition-colors">
                Leggi l&apos;analisi →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
