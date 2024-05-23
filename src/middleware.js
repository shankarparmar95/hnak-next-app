/* 

const locales = ["en", "ar"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
    "/(en|ar)/:path*",
  ],
};
 */

import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/en${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

/* export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
}); */

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(en|ar)/:path*",
    "/((?!api|_next/static|_next/image|manifest.json|sw.js|icons|workbox).*)",
  ],
};
