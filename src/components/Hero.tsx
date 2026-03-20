import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — testo */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Coach Over 40 nell&apos;Era AI
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Hai più di 40 anni.{" "}
              <span className="gradient-text">L&apos;AI sta cambiando tutto.</span>
              {" "}Puoi restare indietro —{" "}
              o imparare a usarla per{" "}
              <span className="gradient-text">reinventarti.</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 text-lg text-slate-400 leading-relaxed mb-10">
              Sono <span className="text-white font-medium">Fabio Micale</span>. Coach, imprenditore, autore.
              Ti aiuto a costruire una nuova fase professionale con il{" "}
              <span className="text-slate-300">mindset giusto</span> e gli{" "}
              <span className="text-slate-300">strumenti concreti</span> dell&apos;era AI.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#newsletter"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
              >
                Iscriviti alla newsletter gratuita
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#chi-sono"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium px-6 py-4 transition-colors duration-200 text-base"
              >
                Scopri chi sono
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">15+</span>
                <span>anni di esperienza</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">120+</span>
                <span>professionisti aiutati</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">1</span>
                <span>libro pubblicato</span>
              </div>
            </div>
          </div>

          {/* RIGHT — foto */}
          <div className="animate-fade-in-up delay-200 relative flex justify-center lg:justify-end">
            {/* Glow dietro la foto */}
            <div className="absolute inset-0 rounded-3xl bg-blue-600/10 blur-[60px]" />

            {/* Cornice decorativa */}
            <div className="relative w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 blur-sm" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/fabio-hero.jpg"
                  alt="Fabio Micale, coach over 40 nell'era AI"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "600px", objectPosition: "top" }}
                />
                {/* Overlay gradiente in basso */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06091a]/60 to-transparent" />
              </div>

              {/* Badge flottante */}
              <div className="absolute -bottom-4 -left-4 bg-[#0d1530] border border-white/10 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm">
                <div className="text-xs text-slate-400 mb-0.5">Coach certificato</div>
                <div className="text-white font-semibold text-sm">Over 40 · AI · Mindset</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
