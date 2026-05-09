import Link from "next/link";
import Image from "next/image";

/**
 * theme: tema visuale dell'hero.
 * - "default" usa hub-gold per il primary CTA (.btn-gold).
 * - "agency" usa agency-navy via .btn-agency, allineandosi al theme
 *   tokenizzato @theme di Agenzia Business.
 * Estendibile a futuri temi se altri verticali richiederanno distinzione
 * visiva (es. "mepa" per Fatturato Garantito, "platinum" per Punto Zero).
 * Per ora il theme influenza esclusivamente il primary CTA button.
 */
type EditorialHeroTheme = "default" | "agency";

interface EditorialHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  primaryCTA: { label: string; href: string; disabled?: boolean; disclaimer?: string };
  secondaryCTA?: { label: string; href: string; disabled?: boolean; disclaimer?: string };
  /** hub = fullscreen con griglia; vertical = focalizzato; book = centrato con accent bar */
  variant?: "hub" | "vertical" | "book";
  /** tema visuale: influenza il primary CTA button. Default: "default" (btn-gold). */
  theme?: EditorialHeroTheme;
  /** Immagine opzionale da mostrare sulla destra (tipicamente in variante 'hub') */
  image?: {
    src: string;
    alt: string;
    priority?: boolean;
    flip?: boolean;
  };
}

export default function EditorialHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "hub",
  theme = "default",
  image,
}: EditorialHeroProps) {
  const isHub = variant === "hub";
  const isBook = variant === "book";

  return (
    <section
      className={[
        "relative overflow-hidden",
        isHub ? "min-h-[90vh] flex items-center pt-32 pb-24 bg-hub-bg" : "",
        !isHub && !isBook ? "pt-32 pb-20 bg-hub-bg" : "",
        isBook ? "pt-32 pb-24 bg-hub-cream" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-hub-gold/[0.05] to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Gold accent bar — solo book */}
      {isBook && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-hub-gold/60 to-transparent" />
      )}

      <div
        className={[
          "relative z-10 max-w-7xl mx-auto px-6 w-full",
          isBook && !image ? "text-center" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={(isHub || (isBook && image)) ? "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""}>
          <div className={(isHub || (isBook && image)) ? "max-w-2xl" : ""}>
            {eyebrow && (
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-6">
                {eyebrow}
              </p>
            )}

            <h1
              className={[
                "font-serif font-medium leading-[1.05] tracking-tight text-hub-ink mb-8",
                isHub ? "text-5xl md:text-6xl lg:text-7xl" : "",
                !isHub ? "text-4xl md:text-6xl" : "",
                isBook ? "mx-auto max-w-2xl" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="italic text-hub-gold">{titleAccent}</span>
                </>
              )}
            </h1>

            <p
              className={[
                "text-hub-ink-muted font-light leading-relaxed mb-12",
                isHub ? "text-xl max-w-xl" : "text-lg max-w-2xl",
                isBook ? "mx-auto" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {subtitle}
            </p>

            <div
              className={[
                "flex gap-6 flex-wrap",
                isBook ? "justify-center" : "items-start",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex flex-col gap-3">
                {primaryCTA.disabled ? (
                  <div className={`${theme === "agency" ? "btn-agency" : "btn-gold"} inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] opacity-40 cursor-not-allowed`}>
                    {primaryCTA.label}
                  </div>
                ) : (
                  <Link
                    href={primaryCTA.href}
                    className={`${theme === "agency" ? "btn-agency" : "btn-gold"} inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]`}
                  >
                    {primaryCTA.label}
                  </Link>
                )}
                {primaryCTA.disclaimer && (
                  <p className="text-[10px] font-serif italic text-hub-gold/60 text-center">{primaryCTA.disclaimer}</p>
                )}
              </div>

              {secondaryCTA && (
                <div className="flex flex-col gap-3">
                  {secondaryCTA.disabled ? (
                    <div className="inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-border text-hub-ink/40 cursor-not-allowed rounded-full">
                      {secondaryCTA.label}
                    </div>
                  ) : (
                    <Link
                      href={secondaryCTA.href}
                      className="inline-block px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] border border-hub-border text-hub-ink hover:border-hub-gold transition-colors rounded-full"
                    >
                      {secondaryCTA.label}
                    </Link>
                  )}
                  {secondaryCTA.disclaimer && (
                    <p className="text-[10px] font-serif italic text-hub-ink-light/60 text-center">{secondaryCTA.disclaimer}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Image side */}
          {(isHub || (isBook && image)) && image && (
            <div className="relative flex justify-center lg:justify-end animate-fade-in-up">
              <div className={`relative w-full max-w-sm md:max-w-md lg:max-w-lg ${isBook ? "lg:-mt-10 lg:mb-4" : ""}`}>
                <div className="absolute -inset-10 bg-hub-gold/[0.08] blur-[80px] rounded-full pointer-events-none" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={800}
                  className={`relative z-10 w-full h-auto drop-shadow-2xl ${isBook ? "" : "grayscale contrast-[1.1]"}`}
                  style={image.flip ? { transform: "scaleX(-1)" } : {}}
                  priority={image.priority}
                />
                {!isBook && <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hub-bg to-transparent z-20" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
