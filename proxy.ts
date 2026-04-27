import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js 16 Proxy (Ex Middleware)
 * Collocato nella ROOT per precedenza assoluta.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  // DEBUG in console (visibile nel terminale di dev)
  console.log(`[PROXY] Request: ${pathname} | Host: ${host}`);

  // 1. Bypass per Sviluppo Locale o Ambiente Development
  const isLocal = host.includes('localhost') || host.includes('127.0.0.1') || process.env.NODE_ENV === 'development';
  
  // 2. Bypass tramite parametro segreto ?dev=true
  const hasDevParam = request.nextUrl.searchParams.get('dev') === 'true';

  // 3. Esclusioni per caricare asset, manutenzione e system routes
  const isPublicAsset = 
    pathname === '/maintenance' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.');

  // Logica di instradamento
  if (isLocal || hasDevParam || isPublicAsset) {
    return NextResponse.next();
  }

  // Tutto il resto viene reindirizzato alla pagina di manutenzione
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

// Configurazione matcher per intercettare tutte le rotte
export const config = {
  matcher: '/:path*',
};
