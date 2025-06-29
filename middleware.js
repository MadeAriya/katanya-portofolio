import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'

const maintenanceMode = true // ubah ke false kalau mau matikan maintenance

export default function middleware(req) {
  const { pathname } = req.nextUrl

  // Jika dalam mode maintenance dan bukan akses ke static file atau halaman maintenance
  if (
    maintenanceMode &&
    !pathname.startsWith('/maintenance') &&
    !pathname.startsWith('/_next') &&
    !pathname.startsWith('/favicon') &&
    !pathname.includes('.') // untuk file statis seperti .png, .js, dll
  ) {
    const segments = pathname.split('/')
    const locale = segments[1]
    const isValidLocale = ['en', 'id'].includes(locale)
    const maintenancePath = isValidLocale
      ? `/${locale}/maintenance`
      : '/en/maintenance'

    return NextResponse.rewrite(new URL(maintenancePath, req.url))
  }

  // Jalankan middleware next-intl seperti biasa
  return createMiddleware({
    locales: ['en', 'id'],
    defaultLocale: 'en'
  })(req)
}

export const config = {
  matcher: ['/', '/(en|id)/:path*']
}
