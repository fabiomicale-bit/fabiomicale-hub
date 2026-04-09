import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ⚙️  Imposta MAINTENANCE_MODE = true solo quando vuoi
//     che il sito pubblico mostri la pagina di manutenzione.
//     In sviluppo locale questa variabile viene ignorata.
const MAINTENANCE_MODE = true;

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // In sviluppo locale non applicare mai il redirect
  const isDevLocal =
    request.headers.get('host')?.includes('localhost') ?? false;

  if (isDevLocal) {
    return NextResponse.next();
  }

  // Percorsi che non vanno mai reindirizzati (assets, API, ecc.)
  if (
    !MAINTENANCE_MODE ||
    pathname === '/maintenance' ||
    pathname.includes('.') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Reindirizza tutto il traffico pubblico alla pagina di manutenzione
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
