"use client";

/**
 * "use client" necessario per gestione stato form e submit asincrono.
 * La logica di submit passa per /api/subscribe (Beehiiv).
 * Validazione Zod lato server aggiunta in Fase 7.
 */

import { useState } from "react";

type NewsletterVariant = "default" | "book-excerpt" | "article";

interface NewsletterCTAProps {
  variant?: NewsletterVariant;
}

const variantCopy: Record<
  NewsletterVariant,
  { eyebrow: string; title: string; subtitle: string; cta: string }
> = {
  default: {
    eyebrow: "LA NEWSLETTER",
    title: "Un Passo Avanti — ogni settimana.",
    subtitle:
      "Analisi operative, strumenti pratici e casi reali per professionisti Over 40. Nessuno spam. Cancellati quando vuoi.",
    cta: "Iscriviti gratis",
  },
  "book-excerpt": {
    eyebrow: "ESTRATTO GRATUITO",
    title: "Ricevi i primi tre capitoli.",
    subtitle:
      "Tre capitoli del libro, una volta sola. Niente lista, niente sequenze. Solo il metodo, subito.",
    cta: "Ricevi l'estratto",
  },
  article: {
    eyebrow: "VAI OLTRE L'ARTICOLO",
    title: "Il metodo ogni settimana, nella tua inbox.",
    subtitle:
      "Iscriviti alla newsletter di Fabio Micale e ricevi casi reali e strumenti dal Metodo Successo in 3 Passi.",
    cta: "Iscriviti",
  },
};

export default function NewsletterCTA({ variant = "default" }: NewsletterCTAProps) {
  const copy = variantCopy[variant];
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // antispam silenzioso
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, variant, website_url: honeypot }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id={variant === "book-excerpt" ? "estratto" : "newsletter"}
      className="py-24 px-6 bg-hub-cream border-t border-hub-border"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-4">
          {copy.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-hub-ink mb-4 leading-tight">
          {copy.title}
        </h2>
        <p className="text-hub-ink-muted font-light leading-relaxed mb-10 max-w-md mx-auto">
          {copy.subtitle}
        </p>

        {status === "success" ? (
          <div className="rounded-2xl border border-hub-border bg-hub-white p-8">
            <p className="text-hub-gold text-2xl mb-2">✓</p>
            <p className="font-serif text-hub-ink text-lg">Fatto.</p>
            <p className="text-hub-ink-muted text-sm mt-1">Controlla la tua email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {/* Honeypot antispam */}
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              aria-hidden
              style={{ display: "none" }}
            />

            <input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full bg-hub-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap disabled:opacity-50"
            >
              {status === "loading" ? "..." : copy.cta}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-xs mt-4">Qualcosa è andato storto. Riprova.</p>
        )}

        <p className="text-hub-ink-light text-xs mt-6">
          Zero spam. Privacy rispettata. Cancellati quando vuoi.
        </p>
      </div>
    </section>
  );
}
