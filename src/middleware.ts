import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // 1. Skip middleware for static assets, apis, and shared pages
  const sharedPaths = ["/recensioni", "/privacy", "/cookie", "/contatti"];
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    sharedPaths.some(p => pathname.startsWith(p)) ||
    (pathname !== "/" && pathname.includes("."))
  ) {
    return NextResponse.next();
  }

  // 2. DEBUG ROUTE (Sonda SOS - Mantieni per ora)
  if (pathname === "/debug-test") {
    const isMepa = host.toLowerCase().includes("mepa.");
    const isImpresa = host.toLowerCase().includes("impresa.");
    return new NextResponse(
      `Sonda SOS FabioMicale Hub
       ------------------------
       Host Rilevato: ${host}
       Pathname: ${pathname}
       Sottodominio MEPA: ${isMepa ? "SI" : "NO"}
       Sottodominio IMPRESA: ${isImpresa ? "SI" : "NO"}
       `,
      { headers: { "Content-Type": "text/plain" } }
    );
  }

  // 3. Detection & Rewrite Logic
  const isMepa = host.toLowerCase().includes("mepa.");
  const isImpresa = host.toLowerCase().includes("impresa.");

  // 4. EXIT LOGIC
  const exitParam = request.nextUrl.searchParams.get("exit");
  if (exitParam === "true") {
    const hubHost = host.replace(/^(mepa|impresa)\./, "");
    const protocol = host.includes("localhost") ? "http" : "https";
    return NextResponse.redirect(new URL(`${protocol}://${hubHost}/`));
  }

  // 5. SUBDOMAIN REWRITES (Transparent serving)
  if (isMepa) {
    // Se siamo sulla root, lasciamo che page.tsx gestisca il contenuto via 'The Wall'
    if (pathname === "/") {
      return NextResponse.next();
    }
    // Se il path ha già /mepa-elite, servilo
    if (pathname.startsWith("/mepa-elite")) {
      return NextResponse.next();
    }
    // Rewrite per sottopagine (es. /approfondimenti)
    return NextResponse.rewrite(new URL(`/mepa-elite${pathname}`, request.url));
  }

  if (isImpresa) {
    if (pathname === "/") {
      return NextResponse.next();
    }
    if (pathname.startsWith("/impresa-liquida")) {
      return NextResponse.next();
    }
    return NextResponse.rewrite(new URL(`/impresa-liquida${pathname}`, request.url));
  }

  // 6. SITO HUB UNIFICATO
  // Nessun redirect forzato. Le sottocartelle /mepa-elite e /impresa-liquida
  // ora funzionano nativamente sul dominio principale.

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
