// Attribuzione minima e non personale del funnel contenuto → /estratto → conversione.
// Tutto qui vive in sessionStorage (mai un cookie persistente, mai un database):
// scompare alla chiusura della scheda. Nessun campo qui può contenere PII.

const ATTRIBUTION_KEY = "fm_attribution";
const ORIGIN_SLUG_KEY = "fm_origin_slug";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer_domain?: string;
};

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

// First-touch: cattura una sola volta per sessione, alla prima pagina con
// parametri UTM o referrer esterno. Le pagine successive della stessa
// sessione non sovrascrivono l'attribuzione originale.
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const attribution: Attribution = {};

    for (const key of UTM_PARAMS) {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 100);
    }

    if (!attribution.utm_source && document.referrer) {
      try {
        const referrerHost = new URL(document.referrer).hostname;
        if (referrerHost && referrerHost !== window.location.hostname) {
          attribution.referrer_domain = referrerHost.slice(0, 100);
        }
      } catch {
        // referrer non parsabile: ignora, nessun dato da salvare
      }
    }

    if (Object.keys(attribution).length > 0) {
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
    }
  } catch {
    // sessionStorage non disponibile (modalità privata, ecc.): nessuna attribuzione, nessun errore bloccante
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Attribution;
  } catch {
    return {};
  }
}

// Last-touch, solo per la CTA: quale articolo/pagina ha originato il click
// verso /estratto o /newsletter. Si aggiorna a ogni click, cosi la richiesta
// riflette sempre l'ultima pagina di contenuto realmente all'origine.
export function setOriginSlug(pathname: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(ORIGIN_SLUG_KEY, pathname.slice(0, 200));
  } catch {
    // sessionStorage non disponibile: nessun dato da salvare
  }
}

export function getOriginSlug(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    return sessionStorage.getItem(ORIGIN_SLUG_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}
