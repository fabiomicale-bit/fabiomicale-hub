import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Esclusioni critiche per evitare loop e permettere il caricamento di risorse
  if (
    pathname === '/maintenance' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Redirect forzato a /maintenance per tutto il resto
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

// 3. Matcher universale per catturare ogni rotta
export const config = {
  matcher: '/:path*',
};
