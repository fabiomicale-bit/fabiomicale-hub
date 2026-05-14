import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import JsonLd from "./JsonLd";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import GAPageTracker from "@/components/GAPageTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabiomicale.com"),
  title: {
    default: "Fabio Micale — Autore, Formatore, Metodologo della Crescita",
    template: "%s | Fabio Micale",
  },
  description:
    "Scrivo libri, creo corsi e costruisco sistemi per chi vuole vincere nella vita. Crescita personale, business online e intelligenza artificiale per professionisti Over 40.",
  keywords: [
    "Fabio Micale",
    "Successo in 3 Passi",
    "crescita personale",
    "business online",
    "intelligenza artificiale",
    "coaching",
    "formazione",
    "autodisciplina",
    "over 40",
    "corsi online",
    "Metodologo della Crescita",
  ],
  authors: [{ name: "Fabio Micale", url: "https://www.fabiomicale.com" }],
  creator: "Fabio Micale",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.fabiomicale.com",
    siteName: "Fabio Micale",
    title: "Fabio Micale — Autore, Formatore, Metodologo della Crescita",
    description:
      "Libri, corsi e sistemi per chi vuole vincere nella vita. Crescita personale, AI e strategie concrete per professionisti Over 40.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabio Micale — Autore e Formatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Micale — Autore, Formatore, Metodologo della Crescita",
    description:
      "Libri, corsi e sistemi per chi vuole vincere nella vita.",
    creator: "@fabiomicale",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X3T310RBZ0"
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
            window['ga-disable-G-X3T310RBZ0'] = true;
            console.log('FM Ghost Mode: ATTIVO - Navigazione invisibile');
          }

          gtag('js', new Date());
          gtag('config', 'G-X3T310RBZ0', { send_page_view: false });
        `}
      </Script>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          (function() {
            var pixelId = '${process.env.NEXT_PUBLIC_META_PIXEL_ID || ''}';
            if (!pixelId || pixelId === 'ID-PIXEL-MANCANTE') return;
            if (typeof localStorage === 'undefined' || localStorage.getItem('cookie-consent') !== 'all') return;
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', pixelId);
            fbq('track', 'PageView');
          })();
        `}
      </Script>
      <body className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <CookieBanner />
        <GAPageTracker />
      </body>
    </html>
  );
}
