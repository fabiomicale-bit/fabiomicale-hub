"use client";

import { useState, useRef } from "react";
import { buildFormSubmitParams, trackFormSubmit } from "@/lib/ga";
import { getAttribution } from "@/lib/attribution";
import { submitSubscriptionOnce } from "@/lib/subscriptionForm";

export default function Newsletter() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // Lock sincrono anti-doppio-submit: un useRef non dipende dal timing del
  // re-render React (a differenza del solo controllo su `status`), quindi
  // due submit concorrenti non possono mai superare entrambi il controllo.
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const attribution = getAttribution();

    const result = await submitSubscriptionOnce({
      lock: submittingRef,
      onStarted: () => setStatus("loading"),
      input: {
        email,
        name: nome,
        honeypot,
        privacyConsent: privacyAccepted,
        newsletterConsent: newsletterAccepted,
        requiresNewsletterConsent: true,
        payload: {
          nome,
          email,
          variant: "newsletter",
          website_url: honeypot,
          privacy_consent: privacyAccepted,
          newsletter_consent: true,
          utm_medium: attribution.utm_medium,
        },
      },
      onAccepted: () => {
        trackFormSubmit("newsletter_submit", buildFormSubmitParams({
          form_type: "newsletter",
          form_variant: "newsletter_page",
          page_path: window.location.pathname,
          source: attribution.utm_source,
          newsletter_consent: "granted",
        }));
        setStatus("success");
      },
    });

    if (result === "accepted" || result === "duplicate" || result === "honeypot") return;
    if (result === "rejected") {
      setStatus("error");
      return;
    }
    setStatus("idle");
  };

  return (
    <section id="newsletter" className="py-32 px-6 bg-hub-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-hub-gold/10 border border-hub-gold/15 flex items-center justify-center">
          <svg className="w-7 h-7 text-hub-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-medium text-hub-ink mb-6 leading-tight">
          Un Passo Avanti —{" "}
          <span className="italic text-hub-gold">ogni settimana.</span>
        </h2>
        <p className="text-hub-ink-muted text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Analisi operative, strumenti pratici e casi reali per professionisti Over 40. Nessuno spam. Cancellati quando vuoi.
        </p>

        {status === "success" ? (
          <div className="card-editorial p-8 max-w-md mx-auto">
            <div className="text-hub-gold text-2xl mb-3">✓</div>
            <p className="text-hub-ink font-serif text-lg">Iscrizione ricevuta.</p>
            <p className="text-hub-ink-muted text-sm mt-2">
              {newsletterAccepted
                ? "Da ora riceverai Un Passo Avanti ogni settimana."
                : "I tuoi dati sono stati registrati."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto text-left" suppressHydrationWarning>
            <input
              type="text"
              placeholder="Nome *"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
            />
            <input
              type="email"
              placeholder="La tua email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-2xl bg-white border border-hub-border text-hub-ink placeholder:text-hub-ink-light text-sm focus:outline-none focus:border-hub-gold transition-all"
            />
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-hub-gold"
                />
                <span className="text-xs text-hub-ink-light leading-relaxed">
                  Ho letto l&apos;informativa sulla privacy e acconsento al trattamento dei dati personali. *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsletterAccepted}
                  onChange={(e) => setNewsletterAccepted(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-hub-gold"
                />
                <span className="text-xs text-hub-ink-light leading-relaxed">
                  Acconsento a ricevere la newsletter <em>Un Passo Avanti</em> e comunicazioni collegate al Metodo Successo in 3 Passi.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || !privacyAccepted || !newsletterAccepted}
              className="btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.2em] disabled:opacity-50"
            >
              {status === "loading" ? "Inviando..." : "Iscriviti gratis →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-sm mt-4">Qualcosa è andato storto. Riprova.</p>
        )}

        <p className="text-hub-ink-light text-xs mt-6">
          Zero spam. Cancellati quando vuoi. Privacy rispettata.
        </p>
      </div>
    </section>
  );
}
