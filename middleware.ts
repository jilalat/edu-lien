import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'ar', 'es', 'ma'];
const defaultLocale = 'fr';

const publicPaths = [
  '/fr',
  '/en',
  '/ar',
  '/es',
  '/ma',
  '/auth/callback',
  '/auth/login',
  '/auth/forgot-password',
  '/api/auth/login'
];

function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  return pathnameLocale || defaultLocale;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle locale redirect
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }

  // Skip auth check for public paths
  if (publicPaths.some(path => pathname.includes(path))) {
    return NextResponse.next();
  }

  // Create Supabase client
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  // Verify session
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/auth/login`, request.url));
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!_next|api/auth/login|assets|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};