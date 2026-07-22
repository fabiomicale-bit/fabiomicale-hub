type GTagFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag: GTagFunction;
    dataLayer: unknown[];
  }
}

export const GA_ID = "G-X3T310RBZ0";

export function hasAnalyticsConsent(): boolean {
  if (typeof localStorage === "undefined") return false;
  return localStorage.getItem("cookie-consent") === "all";
}

export function updateConsent(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | undefined> = {}
) {
  if (typeof window === "undefined") return;
  if (window.location.hostname !== "www.fabiomicale.com") return;
  if (typeof window.gtag !== "function") return;
  if (!hasAnalyticsConsent()) return;
  if (process.env.NODE_ENV === "development") {
    console.log(`[GA debug] ${eventName}`, params);
  }
  // transport_type: "beacon" — usa navigator.sendBeacon quando disponibile,
  // così l'evento non va perso se il click porta a una navigazione immediata
  // (link CTA verso /estratto, redirect post-submit).
  window.gtag("event", eventName, { ...params, transport_type: "beacon" });
}

export function sendPageView(pathname: string) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_ID, {
    page_path: pathname,
    page_title: document.title,
  });
}
