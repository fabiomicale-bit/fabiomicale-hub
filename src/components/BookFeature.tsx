import Image from "next/image";
import Link from "next/link";
import { book } from "@/content/book";

export default function BookFeature() {
  return (
    <section className="py-24 px-6 bg-hub-bg border-t border-hub-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-8 bg-hub-gold/[0.06] blur-[60px] rounded-full" />
              {/* Using a generic placeholder if the image is missing, or the real one */}
              <div className="relative z-10 w-[320px] h-[450px] bg-hub-ink rounded-2xl shadow-2xl flex items-center justify-center p-12 text-center border-4 border-hub-gold/20 overflow-hidden group">
                <div className="absolute inset-0 bg-grid-editorial opacity-20" />
                <div className="relative z-10">
                  <p className="text-hub-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Edizione 2026</p>
                  <h3 className="text-2xl font-serif text-white mb-6 leading-tight">Successo in <br /> 3 Passi</h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Fabio Micale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="badge-editorial mb-6">Il Libro Manifesto</div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink mb-6 leading-tight">
              {book.title}
            </h2>
            <p className="text-hub-ink-muted font-light mb-8 italic text-lg">
              {book.subtitle}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {book.description.map((para, i) => (
                <p key={i} className="text-hub-ink-muted text-base leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/successo-in-3-passi"
                className="btn-gold inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                Scopri il libro
              </Link>
              <Link
                href="/estratto"
                className="inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-border text-hub-ink hover:border-hub-gold transition-colors rounded-full"
              >
                Scarica l'estratto gratuito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
