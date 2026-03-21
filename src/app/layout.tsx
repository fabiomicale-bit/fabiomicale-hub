import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabiomicale.com"),
  title: "Fabio Micale — Coach AI per Professionisti Over 40",
  description:
    "Strumenti AI concreti per professionisti over 40 che vogliono una nuova fase professionale. Niente teoria. Solo quello che funziona.",
  keywords: ["coach over 40", "AI", "reinvention", "mindset", "Fabio Micale", "intelligenza artificiale"],
  authors: [{ name: "Fabio Micale" }],
  openGraph: {
    title: "Fabio Micale — Coach AI per Professionisti Over 40",
    description:
      "Strumenti AI concreti per professionisti over 40 che vogliono una nuova fase professionale. Niente teoria. Solo quello che funziona.",
    url: "https://fabiomicale.com",
    siteName: "Fabio Micale",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/fabio-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Fabio Micale — Coach Over 40 nell'Era AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Micale — Coach Over 40 nell'Era AI",
    description: "Ti aiuto a reinventarti con il mindset giusto e gli strumenti dell'era AI.",
    images: ["/fabio-hero.jpg"],
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
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
