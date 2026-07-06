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
import CTAClickTracker from "@/components/CTAClickTracker";
import GAScripts from "@/components/GAScripts";

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
    "Fabio Micale, autore e formatore, aiuta professionisti Over 40 a ripartire con metodo, struttura e uso pratico dell'intelligenza artificiale.",
  keywords: [
    "Fabio Micale",
    "Successo in 3 Passi",
    "crescita personale",
    "intelligenza artificiale",
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
      "Metodo, formazione e strumenti concreti per professionisti Over 40 che vogliono ripartire con struttura nell'era dell'intelligenza artificiale.",
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
      "Metodo e strumenti pratici per professionisti Over 40.",
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
  icons: {
    icon: [
      { url: '/favicon.ico?v=6', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-48x48.png?v=6', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png?v=6', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png?v=6', sizes: '192x192', type: 'image/png' },
      { url: '/icon-192.png?v=6', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png?v=6', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32x32.png?v=6', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=6', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico?v=6', type: 'image/x-icon' }],
    apple: [
      { url: '/apple-touch-icon.png?v=6', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png?v=6', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest?v=6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
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
        <GAScripts />
        <GAPageTracker />
        <CTAClickTracker />
      </body>
    </html>
  );
}
