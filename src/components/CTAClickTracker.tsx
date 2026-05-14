"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/ga";

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
      trackEvent(eventName, {
        source_page: window.location.pathname,
        cta_text: ctaText,
        destination_url: href,
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
