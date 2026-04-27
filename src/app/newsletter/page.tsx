import { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Un Passo Avanti — La Newsletter di Fabio Micale",
  description: "Ogni domenica, una riflessione strategica su business, automazione e intelligenza artificiale. Include l'accesso gratuito all'Hub Digitale.",
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] pt-20">
      <Navbar />
      
      {/* 1. MANIFESTO HERO */}
      <section className="py-24 px-4 relative overflow-hidden bg-white border-b border-hub-border">
        <div className="absolute inset-0 bg-grid-editorial opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-hub-ink text-white text-[9px] font-black uppercase tracking-[0.4em] mb-10">
            Dossier Domenicale + Accesso Hub
          </div>
          <h1 className="text-6xl md:text-8xl font-serif italic text-hub-ink mb-10 leading-tight">
            Smetti di rincorrere. <br />
            Inizia a <span className="text-hub-gold">Anticipare.</span>
          </h1>
          <p className="text-hub-ink-muted text-xl md:text-2xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            &quot;Un Passo Avanti&quot; non è una raccolta di link. È l&apos;unico appuntamento settimanale progettato per darti la chiarezza strategica necessaria a dominare il tuo settore.
          </p>
          
          <div className="bg-[#FAFAF8] p-2 rounded-2xl border border-hub-border max-w-md mx-auto shadow-sm">
            <Newsletter 
              title="" 
              description="Unisciti agli oltre 3.000 professionisti che leggono Fabio Micale ogni domenica."
            />
          </div>
        </div>
      </section>

      {/* 2. IL DOPPIO VALORE (NEWSLETTER + HUB) */}
      <section className="py-24 px-4 bg-white border-b border-hub-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-12 bg-hub-ink text-white rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-hub-gold/10 blur-[80px] rounded-full -mr-32 -mt-32" />
              <div className="relative z-10">
                <div className="text-hub-gold font-black uppercase tracking-widest text-[10px] mb-6">Bonus Esclusivo</div>
                <h3 className="text-3xl font-serif italic mb-6">Accesso Gratuito all&apos;Area Riservata</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                  L&apos;iscrizione alla newsletter sblocca automaticamente le porte del mio **Hub Digitale**. Un porto operativo dove potrai esplorare dossier, strumenti e contenuti premium progettati per accelerare i tuoi obiettivi di business.
                </p>
                <div className="flex items-center gap-3 text-hub-gold font-bold text-sm">
                  <span>Dashboard</span> • <span>Dossier AI</span> • <span>Risorse Premium</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-10px font-black uppercase tracking-[0.4em] text-hub-gold mb-4">La tua evoluzione</h4>
              <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-hub-ink">Dal contenuto all&apos;azione.</h2>
              <p className="text-hub-ink-muted leading-relaxed font-light mb-8">
                Mentre la newsletter ti fornisce la visione strategica ogni domenica, l&apos;Hub è il luogo dove trovi gli strumenti per metterla in pratica. È un ecosistema completo creato per trasformare la teoria in risultati concreti.
              </p>
              <Link href="#iscrizione" className="text-hub-ink font-bold border-b-2 border-hub-gold pb-1 hover:text-hub-gold transition-all">
                Scopri come entrare nell&apos;Hub &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COSA TROVERAI OGNI DOMENICA (ANATOMIA) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-10px font-black uppercase tracking-[0.4em] text-hub-gold mb-4">L&apos;Anatomia del Valore</h2>
            <p className="text-3xl md:text-5xl font-serif italic text-hub-ink">Cosa riceverai, puntualmente alle 09:00.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hub-border border border-hub-border rounded-[2.5rem] overflow-hidden shadow-sm">
            {[
              { 
                icon: "🧠", 
                title: "La Riflessione Strategica", 
                desc: "Un deep-dive su posizionamento, psicologia del business o evoluzione dei mercati. 2.000 parole di pura sostanza, senza filtri." 
              },
              { 
                icon: "🤖", 
                title: "Automazione & AI", 
                desc: "Il tool della settimana e come implementarlo subito per risparmiare ore di lavoro manuale. Casi d'uso reali, non teoria." 
              },
              { 
                icon: "📋", 
                title: "Framework Operativo", 
                desc: "Un template, una checklist o un processo pronto all'uso. Qualcosa che puoi copiare e incollare nel tuo business lunedì mattina." 
              },
              { 
                icon: "🎙️", 
                title: "Eredità & Visione", 
                desc: "Riflessioni sulla costruzione di un business che duri nel tempo. Come scalare senza perdere la tua libertà personale." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#FAFAF8] transition-colors group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-hub-ink">{item.title}</h3>
                <p className="text-hub-ink-muted leading-relaxed font-light text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS (ESPLICITI) */}
      <section className="py-24 px-4 bg-[#FAFAF8] border-y border-hub-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-10px font-black uppercase tracking-[0.4em] text-hub-gold mb-4">La Voce dei Lettori</h2>
            <p className="text-3xl md:text-5xl font-serif italic text-hub-ink">Perché oltre 3.000 professionisti <br /> non perdono un numero.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "L'unica newsletter che leggo davvero ogni domenica. Fabio riesce a rendere semplici concetti di automazione complessi, dandomi spunti che applico già il lunedì in ufficio.",
                author: "Marco R.",
                role: "Imprenditore Digitale"
              },
              {
                text: "La qualità del contenuto è imbarazzante per essere gratuita. I framework operativi valgono da soli il tempo speso a leggere. Un appuntamento imperdibile per chi vuole scalare.",
                author: "Elena V.",
                role: "Consulente Strategico"
              },
              {
                text: "Spesso le newsletter sono solo fuffa o link. Quella di Fabio è un dossier di valore. Mi ha aperto gli occhi su come l'AI può davvero liberare il mio tempo di libero professionista.",
                author: "Luca M.",
                role: "Freelance Senior"
              },
              {
                text: "Essere 'Un Passo Avanti' non è solo un nome, è una sensazione reale. Dopo tre numeri ho completamente rivoluzionato il mio workflow operativo. Incredibile.",
                author: "Giulia S.",
                role: "Marketing Manager"
              },
              {
                text: "Un approccio ingegneristico applicato al business. Fabio distilla solo quello che conta. Finalmente una risorsa che rispetta il tempo di chi lavora seriamente.",
                author: "Stefano P.",
                role: "Executive Director"
              },
              {
                text: "Ho provato decine di newsletter su AI e business, ma questa è l'unica che non finisce nel cestino. È densa, intelligente e maledettamente utile. Ogni singola volta.",
                author: "Roberto L.",
                role: "Innovation Consultant"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-hub-border shadow-sm italic text-hub-ink/80 leading-relaxed font-light relative hover:border-hub-gold/30 transition-all">
                <div className="text-4xl text-hub-gold/20 absolute top-4 left-4 font-serif">&ldquo;</div>
                <p className="relative z-10 mb-8 min-h-[100px]">{t.text}</p>
                <div className="not-italic flex items-center gap-3 border-t border-hub-border pt-6">
                  <div className="w-8 h-8 rounded-full bg-hub-gold/10 flex items-center justify-center text-[10px] font-bold text-hub-gold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-hub-ink uppercase tracking-wider">{t.author}</div>
                    <div className="text-[10px] text-hub-ink/40 font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (FOCALIZZATA) */}
      <section id="iscrizione" className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-editorial opacity-20" />
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic text-hub-ink mb-8">Domenica prossima sarai <span className="text-hub-gold">Un Passo Avanti?</span></h2>
          <p className="text-hub-ink-muted mb-12 text-lg">
            Iscriviti ora per ricevere il prossimo dossier e sbloccare il tuo accesso immediato all&apos;Hub Digitale.
          </p>
          <div className="bg-[#FAFAF8] p-8 rounded-3xl border border-hub-border shadow-xl">
            <Newsletter 
              title="Assicurati il tuo posto" 
              description="Inserisci la tua email e unisciti alla community."
            />
          </div>
          <p className="text-[10px] text-hub-ink/30 mt-8 uppercase font-bold tracking-widest">
            Nessun costo. Nessuno spam. Solo evoluzione.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
