import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import JsonLd from "./JsonLd";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabiomicale.com"),
  title: {
    default: "Fabio Micale — AI per Professionisti Over 40",
    template: "%s | Fabio Micale",
  },
  description:
    "Fabio Micale aiuta i professionisti over 40 a usare l'AI per costruire una nuova fase professionale ed economica. Strumenti concreti, niente hype.",
  keywords: ["AI per professionisti", "intelligenza artificiale over 40", "formazione AI Italia", "Fabio Micale"],
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
    icon: "/logo-fabio-micale.svg",
    shortcut: "/logo-fabio-micale.svg",
    apple: "/logo-fabio-micale.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${geist.variable} antialiased bg-[#06091a] text-[#e8eaf0]`}>
        <JsonLd />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
