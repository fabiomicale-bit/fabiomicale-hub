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
        destination: '/lavora-con-me',
        permanent: true,
      },
      // Migrazione MEPA Elite → Fatturato Garantito
      {
        source: '/mepa-elite',
        destination: '/fatturato-garantito',
        permanent: true,
      },
      {
        source: '/mepa-elite/:path*',
        destination: '/fatturato-garantito/:path*',
        permanent: true,
      },
      // Nuova migrazione Punto Zero
      {
        source: '/puntozero',
        destination: '/punto-zero',
        permanent: true,
      },
      {
        source: '/puntozero/:path*',
        destination: '/punto-zero/:path*',
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
        destination: '/successo-in-3-passi/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
