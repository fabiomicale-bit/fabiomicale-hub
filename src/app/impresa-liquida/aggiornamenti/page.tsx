import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Approfondimenti | Impresa Liquida — Intelligence per Imprenditori",
  description: "Analisi strategiche, report sull'integrazione IA e protocolli per l'autonomia aziendale. Solo per chi punta al secondo tempo della vita.",
};

const posts = [
  {
    title: "L'Ingegneria della Libertà: Perché delegare non basta",
    excerpt: "Molti imprenditori confondono la delega con l'autonomia. In questo report analizziamo perché senza processi codificati, la delega è solo un trasferimento di urgenze.",
    date: "14 Aprile 2026",
    category: "Strategia",
    slug: "ingegneria-liberta-delega",
    featured: true,
    readTime: "8 min"
  },
  {
    title: "IA Manageriale: Oltre ChatGPT verso il Sistema Operativo",
    excerpt: "Come integrare agenti IA per il monitoraggio proattivo delle attività senza dover gestire manualmente ogni task.",
    date: "10 Aprile 2026",
    category: "Innovazione",
    slug: "ia-manageriale-sistema",
    readTime: "5 min"
  },
  {
    title: "Sindrome dell'Operatività Infinita",
    excerpt: "Analisi di 100 casi studio: i 3 segnali d'allarme che indicano che la tua ditta è diventata la tua prigione.",
    date: "07 Aprile 2026",
    category: "Protocollo",
    slug: "sindrome-operativita-infinita",
    readTime: "6 min"
  },
  {
    title: "Fornitori vs Partner: La gestione liquida",
    excerpt: "Ristrutturare la supply chain per garantire fluidità di sede anche nelle fasi di picco produttivo.",
    date: "03 Aprile 2026",
    category: "Supply Chain",
    slug: "fornitori-partner-liquidi",
    readTime: "4 min"
  }
];

export default function AggiornamentiPage() {
  const featuredPost = posts.find(p => p.featured);
  const secondaryPosts = posts.filter(p => !p.featured);

  return (
    <div className="bg-[#FDFDFD] text-[#111827] selection:bg-[#065F46]/10">

      {/* ── MAGAZINE HEADER ───────────────────────────────────── */}
      <section className="relative pt-60 pb-20 px-6 overflow-hidden bg-white border-b border-black/5">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#065F46] opacity-[0.02] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#065F46]/5 text-[#065F46] text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                Analisi d&apos;Autorità
              </div>
              <h1 className="text-6xl md:text-9xl font-light leading-[0.9] tracking-tighter mb-8 font-serif text-[#0A0A0A]">
                Il <br /><span className="italic text-[#065F46]">Resoconto.</span>
              </h1>
              <p className="text-2xl text-black/40 font-light italic font-serif leading-relaxed max-w-xl">
                Strategie pure per imprenditori che hanno deciso di automatizzare il successo.
              </p>
            </div>
            <div className="hidden md:block pb-4">
               <div className="text-[10px] uppercase font-bold text-black/20 tracking-[0.5em] border-b border-black/5 pb-4 mb-4">Sezioni d&apos;Analisi</div>
               <div className="flex gap-6 text-[11px] font-bold text-[#065F46] tracking-widest uppercase">
                  <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Strategia</span>
                  <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Protocolli</span>
                  <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Automazione</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED STORY ────────────────────────────────────── */}
      {featuredPost && (
        <section className="py-24 px-6 border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            <Link href={`/impresa-liquida/aggiornamenti/${featuredPost.slug}`} className="group grid lg:grid-cols-2 gap-16 items-center">
               <div className="relative aspect-[16/9] lg:aspect-square rounded-[60px] overflow-hidden bg-[#F9FAFB] border border-black/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                  <Image 
                    src="/logos/impresa-liquida-premium.png" 
                    alt="Analisi in Evidenza" 
                    fill
                    className="object-contain p-20 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#065F46]/20 to-transparent" />
               </div>
               <div className="space-y-10">
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em]">
                     <span className="text-[#065F46]">In Primo Piano</span>
                     <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
                     <span className="text-black/30">{featuredPost.readTime.replace('min', 'minuti')} di lettura</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif font-light text-[#0A0A0A] leading-tight group-hover:text-[#065F46] transition-colors">
                     {featuredPost.title}
                  </h2>
                  <p className="text-xl text-black/50 font-serif italic leading-relaxed font-light">
                     {featuredPost.excerpt}
                  </p>
                  <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                     <span className="text-black/30 text-[10px] font-bold uppercase tracking-widest">{featuredPost.date}</span>
                     <span className="text-[#065F46] text-[10px] font-bold uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">Leggi L&apos;Analisi →</span>
                  </div>
               </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── SECONDARY STORIES GRID ────────────────────────────── */}
      <section className="py-32 px-6 bg-[#FDFDFD]">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
               {secondaryPosts.map((post, i) => (
                 <Link key={i} href={`/impresa-liquida/aggiornamenti/${post.slug}`} className="group flex flex-col h-full bg-white p-12 rounded-[50px] border border-black/[0.03] hover:border-[#065F46]/20 hover:shadow-2xl hover:shadow-[#065F46]/5 transition-all duration-500">
                    <div className="text-[10px] uppercase font-bold text-[#065F46] tracking-[0.4em] mb-10">{post.category}</div>
                    <h3 className="text-3xl font-serif text-[#0A0A0A] mb-8 italic group-hover:text-[#065F46] transition-colors leading-snug">
                       {post.title}
                    </h3>
                    <p className="text-black/40 font-light font-serif italic mb-10 flex-grow leading-relaxed">
                       {post.excerpt}
                    </p>
                    <div className="pt-8 border-t border-black/5 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-black/20">
                       <span>{post.date}</span>
                       <span className="text-[#065F46] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* ── QUOTE SECTION ───────────────────────────────────── */}
      <section className="py-40 px-6 bg-[#065F46] text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full pointer-events-none" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <Image 
              src="/logos/impresa-liquida-premium.png" 
              alt="Logo" 
              width={60} 
              height={60} 
              className="mx-auto brightness-0 invert opacity-20 mb-12" 
            />
            <blockquote className="text-3xl md:text-5xl font-serif font-light leading-tight italic mb-12">
               &quot;L&apos;obiettivo finale non è un business che cresce, ma un business che cresce mentre la tua vita torna ad appartenerti.&quot;
            </blockquote>
            <cite className="not-italic text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">— Il Manifesto Liquido</cite>
         </div>
      </section>

      {/* ── MAGAZINE FOOTER ─────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-black/5 bg-[#F9FAFB]">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-serif italic text-black/60 mb-12">Iscriviti al resoconto trimestrale di Intelligence Aziendale.</h2>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
               <input 
                  type="email" 
                  placeholder="email@professionale.it" 
                  className="flex-grow px-10 py-6 rounded-full bg-white border border-black/5 text-black placeholder-black/20 focus:outline-none focus:border-[#065F46]/30 transition-all font-serif italic"
               />
               <button className="px-12 py-6 bg-[#065F46] text-white rounded-full text-[10px] font-bold tracking-[0.4em] hover:bg-[#044E39] shadow-xl shadow-[#065F46]/10 transition-all">UNISCITI</button>
            </form>
         </div>
      </section>

    </div>
  );
}
