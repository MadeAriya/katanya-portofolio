import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en'
});

export const config = {
  // Apply middleware to all routes except static files and Next.js internals
  matcher: ['/', '/(en|id)/:path*'] 
};
