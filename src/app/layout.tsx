import React from "react";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import JsonLd from "./JsonLd";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabiomicale.com"),
  title: {
    default: "Fabio Micale — Advisor in Sistemi Operativi & AI",
    template: "%s | Fabio Micale",
  },
  description:
    "Fabio Micale aiuta imprenditori e professionisti ad evolvere attraverso sistemi operativi di business: MEPA Elite, Impresa Liquida e Punto Zero.",
  keywords: ["Metodologo della crescita", "Fabio Micale", "Impresa Liquida", "MEPA Elite", "Punto Zero", "Crescita Aziendale"],
  authors: [{ name: "Fabio Micale", url: "https://www.fabiomicale.com" }],
  creator: "Fabio Micale",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.fabiomicale.com",
    siteName: "Fabio Micale",
    title: "Fabio Micale — AI per Professionisti Over 40",
    description:
      "Strumenti concreti per usare l'AI nella tua vita professionale. Niente hype, niente guru.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabio Micale — AI per Professionisti Over 40",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Micale — AI per Professionisti Over 40",
    description: "Strumenti concreti per usare l'AI nella tua vita professionale.",
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
    canonical: "https://www.fabiomicale.com",
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
          gtag('js', new Date());
          gtag('config', 'G-X3T310RBZ0');
        `}
      </Script>
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        <JsonLd />
        {children}
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
// Build Trigger: Maintenance Mode Activated v2
