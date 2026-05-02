import Image from "next/image";
import Link from "next/link";

export default function HeroEditorial() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-hub-bg overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-grid-editorial opacity-50" />
      <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-hub-gold/[0.04] to-transparent rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Editorial Copy */}
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="animate-reveal-up delay-0 text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-6">
              Per imprenditori Over 40
            </div>

            {/* Headline */}
            <h1 className="animate-reveal-up delay-100 text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight text-hub-ink mb-8">
              Hai costruito qualcosa.{" "}
              <br />
              <span className="italic text-hub-gold">Adesso fallo girare</span>
              <br />
              senza di te.
            </h1>

            {/* Subheadline */}
            <p className="animate-reveal-up delay-200 text-xl text-hub-ink-muted leading-relaxed mb-12 max-w-lg font-light">
              Porto AI e metodo dentro la tua azienda.
              La rendo autonoma. Tu torni a fare il CEO.
            </p>

            {/* CTA Group */}
            <div className="animate-reveal-up delay-300 flex flex-col sm:flex-row gap-5 items-start">
              <Link href="/protocollo-anti-caos" className="btn-gold px-10 py-4 group">
                Scarica il Protocollo Gratuito
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Sub-CTA note */}
            <p className="animate-reveal-up delay-350 text-xs text-hub-ink-light mt-4">
              PDF gratuito · 9 pagine · Nessuna carta di credito
            </p>

            {/* Social Proof Micro */}
            <div className="animate-reveal-up delay-400 mt-10 flex items-center gap-6 text-hub-ink-light text-sm">
              <div className="flex items-center gap-2">
                <span className="text-hub-gold">★★★★★</span>
                <span>4.8 su Amazon</span>
              </div>
              <div className="w-px h-4 bg-hub-border" />
              <span>25+ anni di esperienza</span>
              <div className="w-px h-4 bg-hub-border" />
              <span>150+ aziende</span>
            </div>
          </div>

          {/* RIGHT: Author Visual + Book */}
          <div className="animate-reveal-up delay-200 relative hidden lg:flex justify-end items-end">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-10 bg-hub-gold/[0.06] blur-[80px] rounded-full" />

              {/* Fabio Photo — B&W effect */}
              <div className="relative z-10">
                <Image
                  src="/fabio-hero-transparent.png"
                  alt="Fabio Micale — Autore, Formatore e Metodologo della Crescita Over 40"
                  width={550}
                  height={700}
                  priority
                  className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl grayscale contrast-[1.1] brightness-[1.05]"
                  style={{ transform: "scaleX(-1)" }}
                />
                {/* Fade bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hub-bg to-transparent z-20" />
              </div>

              {/* Floating Book Card */}
              <div className="absolute -left-16 bottom-24 z-30 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-hub-border p-5 animate-float hidden xl:flex items-center gap-4 max-w-[260px]">
                <Image
                  src="/copertina-libro.png"
                  alt="Copertina Libro Successo in 3 Passi - Fabio Micale Edizione 2026"
                  width={60}
                  height={85}
                  className="rounded-lg shadow-md flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold mb-1">Successo Editoriale</p>
                  <p className="text-sm font-serif italic text-hub-ink font-medium leading-snug">Successo in 3 Passi</p>
                  <p className="text-[10px] text-hub-ink-light mt-1">Edizione 2026</p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -right-8 top-16 z-30 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-hub-border p-5 animate-float delay-500 hidden xl:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-hub-ink-light mb-2">Esperienza</p>
                <p className="text-3xl font-serif text-hub-ink font-medium">150+</p>
                <p className="text-xs text-hub-ink-muted">Cantieri & Progetti</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
