import Image from "next/image";

export default function ChiSonoPreview() {
  return (
    <section id="chi-sono" className="py-24 px-6 bg-white">
      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#D4E4D4]" />

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar / visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background rings */}
              <div className="absolute inset-0 rounded-full border border-[#2E7D32]/10" />
              <div className="absolute inset-4 rounded-full border border-[#2E7D32]/8" />
              <div className="absolute inset-8 rounded-full border border-[#2E7D32]/6" />

              {/* Photo */}
              <div className="absolute inset-12 rounded-full border border-[#D4E4D4] overflow-hidden shadow-lg">
                <Image
                  src="/fabio-chisono.jpg"
                  alt="Fabio Micale, coach e imprenditore"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-0 bg-white border border-[#D4E4D4] rounded-xl px-4 py-3 shadow-md">
                <div className="text-xs text-[#5A6B5A]">Libri pubblicati</div>
                <div className="text-xl font-bold text-[#1A1A1A]">1+</div>
              </div>
              <div className="absolute bottom-12 left-0 bg-white border border-[#D4E4D4] rounded-xl px-4 py-3 shadow-md">
                <div className="text-xs text-[#5A6B5A]">Anni di esperienza</div>
                <div className="text-xl font-bold text-[#1A1A1A]">10+</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">Chi sono</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Ho costruito la mia carriera{" "}
              <span className="gradient-text">reinventandomi più volte.</span>
            </h2>

            <div className="space-y-5 text-[#5A6B5A] leading-relaxed text-[1.05rem]">
              <p>
                Ho più di 40 anni, ho fondato aziende, scritto un libro e accompagnato centinaia di professionisti
                attraverso transizioni difficili. So cosa significa sentirsi fuori posto in un mondo che cambia troppo
                in fretta — e so come trasformare quella sensazione in carburante.
              </p>
              <p>
                L&apos;arrivo dell&apos;AI non mi ha spaventato: mi ha entusiasmato. Perché chi ha esperienza, capacità
                di giudizio e intelligenza emotiva ha qualcosa che nessuna macchina può replicare. Il problema è
                saperlo usare.
              </p>
              <p>
                Sono qui per aiutarti a farlo — con metodo, con strumenti concreti, senza bullshit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Coach certificato", "Imprenditore", "Autore", "AI practitioner"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-[#2E7D32] bg-[#E8F5E9] border border-[#D4E4D4] px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/chi-sono"
              className="mt-10 inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#43A047] font-medium transition-colors group"
            >
              Leggi la mia storia completa
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
