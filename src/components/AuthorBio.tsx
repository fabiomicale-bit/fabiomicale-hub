import Image from "next/image";
import { author } from "@/content/author";

interface AuthorBioProps {
  variant?: "short" | "full";
}

export default function AuthorBio({ variant = "short" }: AuthorBioProps) {
  const isShort = variant === "short";

  return (
    <section className="py-20 px-6 bg-hub-bg border-t border-hub-border">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <Image
              src="/fabio-hero-transparent.png"
              alt={author.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover grayscale contrast-[1.1] border border-hub-border"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-2">
              L&apos;autore
            </p>
            <h3 className="text-xl font-serif font-medium text-hub-ink mb-4">
              {author.name}
            </h3>

            {isShort ? (
              <p className="text-hub-ink-muted text-sm leading-relaxed font-light">
                {author.shortBio}
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {author.fullBio.map((para, i) => (
                  <p key={i} className="text-hub-ink-muted text-sm leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>
            )}

            <p className="mt-4 text-xs text-hub-ink-light">
              {author.contacts.main}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
