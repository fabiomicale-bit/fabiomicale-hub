import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Flag per attivare/disattivare la manutenzione
  const isMaintenanceMode = true;
  
  const { pathname } = request.nextUrl;

  if (isMaintenanceMode) {
    // Esclusioni per permettere la visualizzazione della pagina di manutenzione e degli asset
    if (
      pathname === '/maintenance' ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.includes('.') // permetti file statici (immagini, favicon, etc)
    ) {
      return NextResponse.next();
    }

    // Reindirizza tutto il resto a /maintenance
    const url = request.nextUrl.clone();
    url.pathname = '/maintenance';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Configura i percorsi su cui il middleware deve agire
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
