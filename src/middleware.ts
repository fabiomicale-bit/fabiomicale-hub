import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Esclusioni per caricare la pagina di manutenzione e gli asset
  if (
    pathname.startsWith('/maintenance') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
  matcher: '/:path*',
};
