type GTagFunction = (...args: unknown[]) => void;

export type FormSubmitEventName = "lead_estratto_submit" | "newsletter_submit";

export type FormSubmitEventParams = {
  form_type: "lead_magnet" | "newsletter";
  form_variant: "book_excerpt" | "newsletter_page" | "newsletter_cta";
  page_path: string;
  traffic_origin: "linkedin" | "beehiiv" | "youtube" | "organic" | "direct" | "other";
  newsletter_consent: "granted" | "not_granted";
  success_status: "accepted";
};

declare global {
  interface Window {
    gtag: GTagFunction;
    dataLayer: unknown[];
  }
}

export const GA_ID = "G-X3T310RBZ0";

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("cookie-consent") === "all";
  } catch {
    return false;
  }
}

function isTrackableHost(): boolean {
  if (typeof window === "undefined") return false;
  if (window.location.hostname === "www.fabiomicale.com") return true;
  return process.env.NODE_ENV === "development" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
}

export function ensureGtag(): GTagFunction | null {
  if (typeof window === "undefined") return null;
  if (typeof window.gtag === "function") return window.gtag;
  if (!isTrackableHost()) return null;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  return window.gtag;
}

function safePagePath(value: string): string {
  try {
    return new URL(value, "https://www.fabiomicale.com").pathname;
  } catch {
    return "/";
  }
}

export function toAnalyticsTrafficOrigin(value?: string): FormSubmitEventParams["traffic_origin"] {
  const normalized = value?.trim().toLowerCase();
  if (normalized === "linkedin" || normalized === "beehiiv" || normalized === "youtube") {
    return normalized;
  }
  if (normalized === "organic") return "organic";
  if (!normalized || normalized === "direct") return "direct";
  return "other";
}

// Alias per retrocompatibilità
export const toAnalyticsSource = toAnalyticsTrafficOrigin;

export function buildFormSubmitParams(
  params: Omit<FormSubmitEventParams, "page_path" | "traffic_origin" | "success_status"> & {
    page_path: string;
    traffic_origin?: string;
    source?: string;
  }
): FormSubmitEventParams {
  return {
    form_type: params.form_type,
    form_variant: params.form_variant,
    page_path: safePagePath(params.page_path),
    traffic_origin: toAnalyticsTrafficOrigin(params.traffic_origin ?? params.source),
    newsletter_consent: params.newsletter_consent,
    success_status: "accepted",
  };
}

export function updateConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const gtag = ensureGtag();
  if (!gtag) return;

  const state = granted ? "granted" : "denied";
  gtag("consent", "update", {
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
  if (!isTrackableHost()) return;
  if (!hasAnalyticsConsent()) return;

  const gtag = ensureGtag();
  if (!gtag) return;

  if (process.env.NODE_ENV === "development") {
    console.log(`[GA debug] ${eventName}`, params);
  }
  gtag("event", eventName, { ...params, transport_type: "beacon" });
}

export function trackFormSubmit(
  eventName: FormSubmitEventName,
  params: FormSubmitEventParams
): boolean {
  if (typeof window === "undefined" || !isTrackableHost()) return false;
  if (!hasAnalyticsConsent()) return false;

  const gtag = ensureGtag();
  if (!gtag) return false;

  try {
    gtag("event", eventName, { ...params, transport_type: "beacon" });
    return true;
  } catch {
    return false;
  }
}

export function trackFormSubmitBeforeNavigation(
  eventName: FormSubmitEventName,
  params: FormSubmitEventParams,
  navigate: () => void,
  timeoutMs = 500
): void {
  if (
    typeof window === "undefined" ||
    !isTrackableHost() ||
    !hasAnalyticsConsent() ||
    typeof window.gtag !== "function"
  ) {
    navigate();
    return;
  }

  let completed = false;
  const finish = () => {
    if (completed) return;
    completed = true;
    window.clearTimeout(timeoutId);
    navigate();
  };
  const timeoutId = window.setTimeout(finish, timeoutMs);

  try {
    window.gtag("event", eventName, {
      ...params,
      transport_type: "beacon",
      event_callback: finish,
      event_timeout: timeoutMs,
    });
  } catch {
    finish();
  }
}

export function sendPageView(pathname: string, options?: { isInitial?: boolean }) {
  if (typeof window === "undefined") return;
  if (!isTrackableHost()) return;
  if (!hasAnalyticsConsent()) return;

  const gtag = ensureGtag();
  if (!gtag) return;

  const pageLocation = window.location.href;
  const pageTitle = document.title;
  const pageReferrer = document.referrer;

  gtag("event", "page_view", {
    page_path: pathname,
    page_location: pageLocation,
    page_title: pageTitle,
    ...(options?.isInitial && pageReferrer ? { page_referrer: pageReferrer } : {}),
  });
}
