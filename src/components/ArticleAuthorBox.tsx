import Image from "next/image";
import Link from "next/link";
import { author } from "@/content/author";

export default function ArticleAuthorBox() {
  return (
    <section className="py-16 px-6 bg-hub-bg border-t border-hub-border">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <Image
              src="/fabio-hero-transparent.png"
              alt={author.name}
              width={72}
              height={72}
              className="w-18 h-18 rounded-full object-cover grayscale contrast-[1.1] border border-hub-border"
            />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-1">
              L&apos;autore
            </p>
            <h3 className="text-lg font-serif font-medium text-hub-ink mb-3">
              {author.name}
            </h3>
            <p className="text-hub-ink-muted text-sm leading-relaxed font-light mb-4">
              {author.articleBio}
            </p>
            <p className="text-xs text-hub-ink-light italic mb-4">
              {author.articleMicrofrase}
            </p>
            <Link
              href="/estratto"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold hover:text-hub-gold-dark transition-colors"
            >
              Scarica l&apos;estratto gratuito →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
