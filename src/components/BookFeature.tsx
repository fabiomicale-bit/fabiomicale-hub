import Image from "next/image";
import Link from "next/link";
import { book } from "@/content/book";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function BookFeature() {
  const amazonUrl = process.env.NEXT_PUBLIC_AMAZON_BOOK_URL ?? "#";

  return (
    <section className="py-24 px-6 bg-hub-bg border-t border-hub-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-8 bg-hub-gold/[0.06] blur-[60px] rounded-full" />
              <Image
                src="/copertina-libro.png"
                alt={`Copertina ${book.title} — ${book.edition}`}
                width={320}
                height={450}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
              IL MANIFESTO DEL METODO · {book.edition}
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink mb-6 leading-tight">
              {book.title}
            </h2>
            <p className="text-hub-ink-muted font-light mb-2 italic">
              {book.subtitle}
            </p>

            <div className="flex flex-col gap-4 mt-6 mb-10">
              {book.description.map((para, i) => (
                <p key={i} className="text-hub-ink-muted text-sm leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                Acquista su Amazon
              </Link>
              <Link
                href="#estratto"
                className="inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-border text-hub-ink hover:border-hub-gold transition-colors rounded-full"
              >
                Ricevi un estratto via email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
