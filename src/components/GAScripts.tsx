"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { GA_ID } from "@/lib/ga";

const PROD_HOSTNAME = "www.fabiomicale.com";

export default function GAScripts() {
  const [mode, setMode] = useState<"disabled" | "local-test" | "production">("disabled");

  useEffect(() => {
    if (window.location.hostname === PROD_HOSTNAME) {
      // Hostname disponibile solo dopo il mount: abilita gli script sul solo host live.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode("production");
      return;
    }
    if (
      process.env.NODE_ENV === "development" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
        if (args[0] !== "event") return;

        const params = typeof args[2] === "object" && args[2] !== null
          ? args[2] as Record<string, unknown>
          : {};
        const safeParams = Object.fromEntries(
          Object.entries(params).filter(([key]) => key !== "event_callback")
        );
        console.info("[GA local test]", args[1], JSON.stringify(safeParams));

        const callback = params.event_callback;
        if (typeof callback === "function") window.setTimeout(callback, 0);
      };
      window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      try {
        if (window.localStorage.getItem("cookie-consent") === "all") {
          window.gtag("consent", "update", { analytics_storage: "granted" });
        }
      } catch {
        // Il test locale resta non bloccante anche se lo storage non è disponibile.
      }
      console.info("[GA local test] ready");
      // Modalità diagnostica locale inizializzata nello stesso effect client-only.
      setMode("local-test");
    }
  }, []);

  if (mode === "disabled") return null;

  if (mode === "local-test") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Google Consent Mode v2: default negato — nessun dato raccolto senza consenso
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });

          // Ripristino consenso per utenti di ritorno che hanno già accettato
          if (typeof localStorage !== 'undefined' && localStorage.getItem('cookie-consent') === 'all') {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            });
          }

          // FM Ghost Mode: Esclusione traffico amministratore
          if (typeof document !== 'undefined' && (document.cookie.includes('fm_admin=true') || window.location.search.includes('fm_admin=true'))) {
            if (window.location.search.includes('fm_admin=true')) {
              document.cookie = "fm_admin=true; path=/; max-age=" + (365*24*60*60);
            }
            window['ga-disable-${GA_ID}'] = true;
            console.log('FM Ghost Mode: ATTIVO - Navigazione invisibile');
          }

          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
