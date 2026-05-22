"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { GA_ID } from "@/lib/ga";

const PROD_HOSTNAME = "www.fabiomicale.com";

export default function GAScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.location.hostname === PROD_HOSTNAME);
  }, []);

  if (!enabled) return null;

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
