import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "fabiomicale.com" }],
        destination: "https://www.fabiomicale.com/:path*",
        permanent: true,
      },
      // Link Corti /go
      {
        source: "/go/motivazione",
        destination: "/blog/motivazione-o-struttura?utm_source=linkedin&utm_medium=social&utm_campaign=motivazione-o-struttura&utm_content=post-1-link-articolo",
        permanent: false,
      },
      // Redirect vecchie URL
      {
        source: '/quando-un-progetto-e-operativo-ma-non-e-sotto-controllo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yulin.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sessioni-di-coaching',
        destination: '/chi-sono',
        permanent: true,
      },
      // Redirect Verticali verso Il Metodo
      {
        source: '/fatturato-garantito',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/fatturato-garantito/:path*',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/impresa-liquida',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/impresa-liquida/:path*',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/punto-zero',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/punto-zero/:path*',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/agenzia-business',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/agenzia-business/:path*',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/mepa-elite',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/mepa-elite/:path*',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/puntozero',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/puntozero/:path*',
        destination: '/il-metodo',
        permanent: true,
      },
      // Migrazione Il Libro → Successo in 3 Passi
      {
        source: '/il-libro',
        destination: '/successo-in-3-passi',
        permanent: true,
      },
      {
        source: '/il-libro/:path*',
        destination: '/successo-in-3-passi',
        permanent: true,
      },
      {
        source: '/libro',
        destination: '/successo-in-3-passi',
        permanent: true,
      },
      {
        source: '/libro/:path*',
        destination: '/successo-in-3-passi',
        permanent: true,
      },
      // Redirect altri vecchi verticali
      {
        source: '/accademia',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/ai-per-professionisti',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/reinvenzione-over-40',
        destination: '/il-metodo',
        permanent: true,
      },
      {
        source: '/lavora-con-me',
        destination: '/chi-sono',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
