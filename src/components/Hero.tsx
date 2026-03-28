import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#1A2E1A]">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E7D32]/10 blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
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
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-[#43A047]/40 text-[#A5D6A7] text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43A047] animate-pulse" />
              Coach Over 40 nell&apos;Era AI
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Non ti vendo sogni.{" "}
              <span className="gradient-text">Ti do strumenti per usare l&apos;AI dopo i 40.</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 text-lg text-[#A5D6A7] leading-relaxed mb-10">
              Sono <span className="text-white font-medium">Fabio Micale</span>. Coach, imprenditore, autore.
              Ti aiuto a costruire una nuova fase professionale con il{" "}
              <span className="text-[#C8E6C9]">mindset giusto</span> e gli{" "}
              <span className="text-[#C8E6C9]">strumenti concreti</span> dell&apos;era AI.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#newsletter"
                className="group inline-flex items-center gap-3 bg-[#2E7D32] hover:bg-[#43A047] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#2E7D32]/30 hover:-translate-y-0.5 text-base"
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
                className="inline-flex items-center gap-2 text-[#A5D6A7] hover:text-white border border-[#43A047]/40 hover:border-[#43A047] font-medium px-6 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Scopri chi sono
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap gap-6 text-[#A5D6A7] text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">15+</span>
                <span>anni di esperienza</span>
              </div>
              <div className="w-px h-8 bg-[#2E7D32]/40 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">120+</span>
                <span>professionisti aiutati</span>
              </div>
              <div className="w-px h-8 bg-[#2E7D32]/40 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">1</span>
                <span>libro pubblicato</span>
              </div>
            </div>
          </div>

          {/* RIGHT — foto */}
          <div className="animate-fade-in-up delay-200 relative flex justify-center lg:justify-end">
            {/* Glow dietro la foto */}
            <div className="absolute inset-0 rounded-3xl bg-[#2E7D32]/10 blur-[60px]" />

            {/* Cornice decorativa */}
            <div className="relative w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2E7D32]/20 to-[#43A047]/10 blur-sm" />
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
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A2E1A]/60 to-transparent" />
              </div>

              {/* Badge flottante */}
              <div className="absolute -bottom-4 -left-4 bg-[#1A2E1A] border border-[#2E7D32]/40 rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-xs text-[#A5D6A7] mb-0.5">Coach certificato</div>
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
