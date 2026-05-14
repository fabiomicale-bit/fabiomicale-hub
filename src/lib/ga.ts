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
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!hasAnalyticsConsent()) return;
  window.gtag("event", eventName, params);
}
