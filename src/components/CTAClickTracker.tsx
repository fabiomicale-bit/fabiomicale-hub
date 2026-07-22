"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/ga";
import { getAttribution, setOriginSlug } from "@/lib/attribution";

const TRACKED_DESTINATIONS: Record<string, string> = {
  "/estratto": "cta_estratto_click",
  "/newsletter": "cta_newsletter_click",
};

export default function CTAClickTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const eventName = TRACKED_DESTINATIONS[href];
      if (!eventName) return;

      const ctaText = anchor.textContent?.trim().replace(/\s+/g, " ") ?? "";

      // Posizione della CTA sulla pagina, senza toccare i contenuti: ordinale
      // tra tutti i link identici presenti nel DOM al momento del click.
      const sameDestinationLinks = Array.from(
        document.querySelectorAll(`a[href="${href}"]`)
      );
      const ctaPosition = sameDestinationLinks.indexOf(anchor) + 1;

      // Ricorda l'articolo/pagina di origine per l'evento di conversione,
      // che avviene su /estratto o /newsletter dopo la navigazione.
      setOriginSlug(window.location.pathname);

      const attribution = getAttribution();
      trackEvent(eventName, {
        source_page: window.location.pathname,
        cta_text: ctaText,
        destination_url: href,
        cta_position: ctaPosition > 0 ? String(ctaPosition) : undefined,
        ...attribution,
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
