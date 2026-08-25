"use client";

/**
 * "use client" necessario per gestione stato form e submit asincrono.
 * La logica di submit passa per /api/subscribe (Beehiiv).
 * Validazione Zod lato server aggiunta in Fase 7.
 */

import { useState, useRef } from "react";
import Link from "next/link";
import {
  buildFormSubmitParams,
  trackEvent,
  trackFormSubmit,
  trackFormSubmitBeforeNavigation,
} from "@/lib/ga";
import { getAttribution, getOriginSlug } from "@/lib/attribution";
import { submitSubscriptionOnce } from "@/lib/subscriptionForm";

type NewsletterVariant = "default" | "book-excerpt" | "article" | "newsletter" | "book-waitlist";

interface NewsletterCTAProps {
  variant?: NewsletterVariant;
}

const variantCopy: Record<
  NewsletterVariant,
  { eyebrow: string; title: string; subtitle: string; cta: string; successMessage?: string; newsletterLabel?: string; privacyPrefix?: string; privacySuffix?: string }
> = {
  default: {
    eyebrow: "UN PASSO AVANTI",
    title: "La newsletter per applicare il Metodo.",
    subtitle:
      "Ogni settimana un contenuto pratico per rimettere ordine: una riflessione, uno strumento, un esercizio o un'applicazione dell'AI alla crescita Over 40. Iscrivendoti ricevi l'estratto gratuito del libro.",
    cta: "Iscriviti e scarica l'estratto",
  },
  "book-excerpt": {
    eyebrow: "ESTRATTO GRATUITO",
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
  newsletter: {
    eyebrow: "UN PASSO AVANTI",
    title: "La newsletter per applicare il Metodo.",
    subtitle:
      "Ogni settimana un contenuto pratico per rimettere ordine: una riflessione, uno strumento, un esercizio o un'applicazione dell'AI alla crescita Over 40.",
    cta: "Iscriviti gratis",
  },
  "book-waitlist": {
    eyebrow: "Lista prioritaria — Successo in 3 Passi",
    title: "Il libro per rimettere metodo nel lavoro dopo i 40 anni.",
    subtitle:
      "Ricevi aggiornamenti sulla nuova edizione, materiali extra e accesso anticipato ai contenuti pratici del metodo.",
    cta: "Entra nella lista prioritaria",
    successMessage: "Sei nella lista prioritaria.",
    privacyPrefix: "Accetto l'",
    privacySuffix: " e autorizzo l'uso dei dati per ricevere aggiornamenti sul libro e sui materiali collegati.",
    newsletterLabel: "Voglio ricevere anche la newsletter Un Passo Avanti.",
  },
};

export default function NewsletterCTA({ variant = "default" }: NewsletterCTAProps) {
  const copy = variantCopy[variant];
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const requiresNewsletterConsent = variant === "default" || variant === "article" || variant === "newsletter";
  // Lock sincrono anti-doppio-submit: un useRef non dipende dal timing del
  // re-render React (a differenza del solo controllo su `status`), quindi
  // due submit concorrenti (es. doppio click o doppio invio tastiera prima
  // del primo re-render) non possono mai superare entrambi il controllo.
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const attribution = getAttribution();
    const originSlug = getOriginSlug();

    const result = await submitSubscriptionOnce({
      lock: submittingRef,
      onStarted: () => setStatus("loading"),
      input: {
        email,
        name: nome,
        honeypot,
        privacyConsent: privacyAccepted,
        newsletterConsent: newsletterAccepted,
        requiresNewsletterConsent,
        requiresName: variant !== "book-waitlist",
        payload: {
          email,
          nome,
          variant,
          website_url: honeypot,
          privacy_consent: privacyAccepted,
          newsletter_consent: requiresNewsletterConsent ? true : newsletterAccepted,
          utm_medium: attribution.utm_medium,
        },
      },
      onAccepted: () => {
        if (variant === "book-excerpt") {
          setStatus("success");
          trackFormSubmitBeforeNavigation(
            "lead_estratto_submit",
            buildFormSubmitParams({
              form_type: "lead_magnet",
              form_variant: "book_excerpt",
              page_path: window.location.pathname,
              traffic_origin: attribution.utm_source,
              newsletter_consent: newsletterAccepted ? "granted" : "not_granted",
            }),
            () => { window.location.href = "/grazie-estratto"; }
          );
        } else if (variant === "book-waitlist") {
          trackEvent("lead_book_waitlist_submit", {
            source_page: window.location.pathname,
            form_name: "book-waitlist-form",
            origin_slug: originSlug,
            ...attribution,
          });
          setStatus("success");
          window.location.href = "/grazie-lista-prioritaria";
        } else {
          trackFormSubmit("newsletter_submit", buildFormSubmitParams({
            form_type: "newsletter",
            form_variant: "newsletter_cta",
            page_path: window.location.pathname,
            traffic_origin: attribution.utm_source,
            newsletter_consent: "granted",
          }));
          setStatus("success");
        }
      },
    });

    if (result === "accepted" || result === "duplicate" || result === "honeypot") return;
    if (result === "rejected") {
      setStatus("error");
      return;
    }
    setStatus("idle");
  };

  if (status === "success") {
    if (variant === "book-excerpt" || variant === "book-waitlist") return null; // redirect in corso
    return (
      <section
        id="newsletter"
        className="py-24 px-6 bg-hub-cream border-t border-hub-border"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-hub-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-2xl font-serif text-hub-ink mb-3">Ricevuto.</p>
          <p className="text-hub-ink-muted font-light">
            {copy.successMessage ?? (newsletterAccepted
              ? "Da ora riceverai Un Passo Avanti ogni settimana."
              : "I tuoi dati sono stati registrati.")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id={variant === "book-excerpt" ? "estratto" : variant === "book-waitlist" ? "avviso-lancio" : "newsletter"}
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

        <form onSubmit={handleSubmit} className="bg-hub-white border border-hub-border rounded-2xl p-8 max-w-md mx-auto shadow-sm">
          <div className="flex flex-col gap-6 text-left">
            {/* Campo Nome */}
            <div className="space-y-2">
              <label htmlFor="nome" className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Il tuo nome"
                required={variant !== "book-waitlist"}
                className="w-full px-6 py-4 rounded-xl border border-hub-border focus:border-hub-gold outline-none transition-colors text-sm font-light bg-hub-bg/30"
              />
            </div>

            {/* Campo Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-hub-ink/60 ml-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="la-tua-email@esempio.it"
                required
                className="w-full px-6 py-4 rounded-xl border border-hub-border focus:border-hub-gold outline-none transition-colors text-sm font-light bg-hub-bg/30"
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Checkboxes */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 rounded border-hub-border text-hub-gold focus:ring-hub-gold"
                />
                <span className="text-[11px] text-hub-ink-muted leading-tight font-light group-hover:text-hub-ink transition-colors">
                  {copy.privacyPrefix ?? "Ho letto l’"}<Link href="/privacy" className="underline decoration-hub-gold/30 hover:decoration-hub-gold transition-all">informativa privacy</Link>{copy.privacySuffix ?? "."}
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={newsletterAccepted}
                  onChange={(e) => setNewsletterAccepted(e.target.checked)}
                  required={requiresNewsletterConsent}
                  className="mt-1 w-4 h-4 rounded border-hub-border text-hub-gold focus:ring-hub-gold"
                />
                <span className="text-[11px] text-hub-ink-muted leading-tight font-light group-hover:text-hub-ink transition-colors">
                  {copy.newsletterLabel ?? (
                    <>Acconsento a ricevere la newsletter <span className="italic">Un Passo Avanti</span> e comunicazioni collegate al Metodo Successo in 3 Passi.</>
                  )}
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={status === "loading" || !privacyAccepted || (requiresNewsletterConsent && !newsletterAccepted)}
              className={`btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${status === "loading" || !privacyAccepted || (requiresNewsletterConsent && !newsletterAccepted) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
            >
              {status === "loading" ? "Invio in corso..." : copy.cta}
            </button>
          </div>
        </form>

        {status === "error" && (
          <p className="text-red-500 text-xs mt-4">Qualcosa è andato storto. Riprova o scrivimi a info@fabiomicale.com</p>
        )}

        <p className="text-hub-ink-light text-[10px] mt-8 uppercase tracking-widest font-medium">
          {variant === "book-waitlist"
            ? "Niente spam. Solo aggiornamenti sul libro, sul metodo e sui materiali pratici collegati."
            : "Zero spam. Privacy rispettata. Cancellati quando vuoi."}
        </p>
      </div>
    </section>
  );
}
