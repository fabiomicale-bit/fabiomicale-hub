import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Base dati (idealmente condivisa o in un CMS)
const posts = [
  {
    title: "L'Ingegneria della Libertà: Perché delegare non basta",
    excerpt: "Molti imprenditori confondono la delega con l'autonomia. In questo resoconto analizziamo perché senza processi codificati, la delega è solo un trasferimento di urgenze.",
    content: `
      <p>La delega è spesso vista come la panacea di tutti i mali aziendali. Tuttavia, la realtà che emerge dalle analisi di Impresa Liquida è ben diversa. Delegare senza un protocollo chiaro non è delegare: è "scaricare".</p>
      <h3>Il paradosso della delega</h3>
      <p>Quando un imprenditore delega un compito a un collaboratore senza aver prima codificato il processo, crea un debito tecnico umano. Il collaboratore tornerà costantemente a chiedere chiarimenti, approvazioni e decisioni, rendendo l'imprenditore il collo di bottiglia del suo stesso sistema.</p>
      <h3>Verso l'Ingegneria della Libertà</h3>
      <p>L'approccio di Impresa Liquida non si limita a dire "a chi" dare il lavoro, ma costruisce il "come" il lavoro debba procedere in autonomia. Solo attraverso la codifica atomica dei processi è possibile ottenere la vera libertà operativa.</p>
    `,
    date: "14 Aprile 2026",
    category: "Strategia",
    slug: "ingegneria-liberta-delega",
    readTime: "8 min"
  },
  {
    title: "Intelligenza Artificiale Manageriale: Oltre ChatGPT verso il Sistema Operativo",
    excerpt: "Come integrare agenti sintetici per il monitoraggio proattivo delle attività senza dover gestire manualmente ogni compito.",
    content: `
      <p>L'Intelligenza Artificiale non è un giocattolo per scrivere messaggi più velocemente. È il nuovo sistema operativo dell'azienda liquida.</p>
      <h3>Agenti Proattivi</h3>
      <p>Immagina un sistema che non aspetta i tuoi ordini, ma monitora i flussi di cassa, il magazzino e il rendimento della squadra, avvisandoti solo quando è necessaria una decisione strategica di alto livello.</p>
      <h3>L'Automazione del Controllo</h3>
      <p>Il controllo è l'attività che consuma più tempo mentale. L'automazione del controllo ti permette di passare dalla gestione delle urgenze alla visione del secondo tempo della tua vita.</p>
    `,
    date: "10 Aprile 2026",
    category: "Innovazione",
    slug: "ia-manageriale-sistema",
    readTime: "5 min"
  },
  {
    title: "Sindrome dell'Operatività Infinita",
    excerpt: "Analisi di 100 casi studio: i 3 segnali d'allarme che indicano che la tua ditta è diventata la tua prigione.",
    content: `
      <p>La maggior parte degli imprenditori over 40 non possiede una ditta; è posseduta da essa. Questa è la Sindrome dell'Operatività Infinita.</p>
      <ul>
        <li><strong>Segnale 1:</strong> Il tuo telefono è l'unico modo in cui l'azienda può prendere decisioni semplici.</li>
        <li><strong>Segnale 2:</strong> Hai paura di staccare per un fine settimana perché temi che tutto crolli.</li>
        <li><strong>Segnale 3:</strong> Hai aumentato il personale ma il tuo carico di lavoro è aumentato proporzionalmente.</li>
      </ul>
      <p>Riconoscere questi segnali è il primo passo verso il Protocollo Punto Zero.</p>
    `,
    date: "07 Aprile 2026",
    category: "Protocollo",
    slug: "sindrome-operativita-infinita",
    readTime: "6 min"
  },
  {
    title: "Fornitori vs Partner: La gestione liquida",
    excerpt: "Ristrutturare la catena di approvvigionamento per garantire fluidità operativa anche nelle fasi di picco produttivo.",
    content: `
      <p>In un'impresa liquida, i fornitori sono estensioni modulari del tuo sistema operativo. Se un fornitore è un collo di bottiglia, il tuo sistema non è fluido.</p>
      <p>Analizziamo come mappare la catena di approvvigionamento per garantire che l'azienda rimanga operativa e profittevole indipendentemente dalle fluttuazioni del mercato o dai problemi logistici locali.</p>
    `,
    date: "03 Aprile 2026",
    category: "Fornitura",
    slug: "fornitori-partner-liquidi",
    readTime: "4 min"
  }
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#FDFDFD] text-[#111827]">

      <article className="pt-60 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
            <Link href="/impresa-liquida/aggiornamenti" className="text-[#065F46] hover:underline">Approfondimenti</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span className="text-black/30">{post.date}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#0A0A0A] leading-tight mb-12">
            {post.title}
          </h1>

          <div className="aspect-[16/9] rounded-[40px] overflow-hidden bg-[#F9FAFB] border border-black/5 mb-16 relative">
            <Image 
              src="/logos/impresa-liquida-premium.png" 
              alt={post.title} 
              fill
              className="object-contain p-20 opacity-10 grayscale"
            />
          </div>

          <div 
            className="prose prose-xl prose-serif prose-headings:font-serif prose-headings:font-light prose-headings:italic prose-p:text-black/70 prose-p:leading-relaxed text-xl font-serif italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-24 pt-12 border-t border-black/5 flex flex-col items-center text-center">
             <p className="text-black/40 italic font-serif mb-8 text-lg">Vuoi approfondire questo protocollo per la tua azienda?</p>
             <Link 
               href="/impresa-liquida/contatti"
               className="px-12 py-6 bg-[#065F46] text-white rounded-full text-[10px] font-bold tracking-[0.4em] hover:bg-[#044E39] shadow-xl shadow-[#065F46]/10 transition-all text-center"
             >
               PRENOTA UNA SESSIONE STRATEGICA
             </Link>
          </div>
        </div>
      </article>

    </div>
  );
}
