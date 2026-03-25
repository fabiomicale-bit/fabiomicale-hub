import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.fabiomicale.com/#person",
  name: "Fabio Micale",
  url: "https://www.fabiomicale.com",
  image: "https://www.fabiomicale.com/og-image.jpg",
  jobTitle: "Consulente AI per Professionisti",
  description:
    "Aiuto i professionisti over 40 a usare l'AI per costruire una nuova fase professionale.",
  knowsAbout: ["Intelligenza Artificiale", "Mindset", "Coaching", "Produttività", "Leadership"],
  sameAs: [
    "https://www.linkedin.com/in/fabiomicale/",
    "https://www.instagram.com/fabiomicale1/",
    "https://www.youtube.com/@FabioMicale",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.fabiomicale.com/#website",
  name: "Fabio Micale",
  url: "https://www.fabiomicale.com",
  description: "AI per Professionisti Over 40 — strumenti concreti e metodo per reinventarsi.",
  inLanguage: "it-IT",
  author: { "@id": "https://www.fabiomicale.com/#person" },
  publisher: { "@id": "https://www.fabiomicale.com/#person" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.fabiomicale.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
