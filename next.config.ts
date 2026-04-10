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
      // FORZA MANUTENZIONE (Nuclear Option)
      {
        source: "/",
        destination: "/maintenance",
        permanent: false,
      },
      {
        source: "/punto-zero",
        destination: "/maintenance",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "fabiomicale.com" }],
        destination: "https://www.fabiomicale.com/:path*",
        permanent: true,
      },
      // Redirect vecchie URL indicizzate da Google → homepage
      {
        source: '/quando-un-progetto-e-operativo-ma-non-e-sotto-controllo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quando-un-progetto-e-operativo-ma-non-e-sotto-controllo/',
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
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sessioni-di-coaching',
        destination: '/lavora-con-me',
        permanent: true,
      },
      {
        source: '/sessioni-di-coaching/',
        destination: '/lavora-con-me',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
