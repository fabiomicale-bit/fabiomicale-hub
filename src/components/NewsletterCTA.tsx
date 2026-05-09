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
    eyebrow: "UN PASSO AVANTI",
    title: "La newsletter per applicare il Metodo.",
    subtitle:
      "Ogni settimana un contenuto pratico per rimettere ordine: una riflessione, uno strumento, un esercizio o un'applicazione dell'AI alla crescita Over 40. Iscrivendoti ricevi l'estratto gratuito del libro.",
    cta: "Iscriviti e scarica l'estratto",
  },
  "book-excerpt": {
    eyebrow: "AREA RESERVATA",
    title: "Scarica l'estratto gratuito.",
    subtitle:
      "Ricevi i primi capitoli di 'Successo in 3 Passi — Edizione 2026' e iscriviti alla newsletter settimanale per iniziare il tuo percorso di ripartenza con metodo.",
    cta: "Scarica l'estratto ora",
  },
  article: {
    eyebrow: "IL METODO NELLA TUA INBOX",
    title: "Un Passo Avanti, ogni settimana.",
    subtitle:
      "Questo contenuto appartiene al Metodo Successo in 3 Passi. Iscriviti per ricevere applicazioni pratiche e l'estratto del libro.",
    cta: "Iscriviti e ricevi l'estratto",
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

        <div className="bg-hub-white border border-hub-border rounded-2xl p-8 max-w-md mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-hub-cream/10 backdrop-blur-[2px] z-10 flex items-center justify-center">
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-ink/40">In fase di attivazione</p>
          </div>
          <p className="text-hub-ink font-medium mb-2 opacity-30">Iscrizione in fase di attivazione</p>
          <p className="text-hub-ink-muted text-sm leading-relaxed mb-6 font-light opacity-30">
            Stiamo completando l'area di iscrizione e l'accesso ai materiali gratuiti. 
          </p>
          <div className="flex flex-col gap-4 opacity-20 pointer-events-none">
            <div className="h-12 w-full border border-hub-border rounded-full" />
            <button disabled className="btn-gold px-8 py-4 text-[10px] tracking-[0.2em] whitespace-nowrap">
              Presto disponibile
            </button>
          </div>
        </div>
        <p className="text-hub-gold text-[10px] italic mt-4 font-serif">
          Il servizio sarà attivato a breve per accompagnare il lancio dell'edizione 2026.
        </p>

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
