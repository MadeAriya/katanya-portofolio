import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'

const maintenanceMode = true // ubah ke false untuk menonaktifkan mode maintenance

export default function middleware(req) {
  const { pathname } = req.nextUrl

  // Daftar locale yang didukung
  const locales = ['en', 'id']

  const isStatic =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') // untuk file statis seperti .js, .png, .ico

  const isMaintenancePage = pathname.includes('/maintenance')

  const pathLocale = pathname.split('/')[1]
  const isValidLocale = locales.includes(pathLocale)

  // Aktifkan maintenance untuk semua halaman publik
  if (
    maintenanceMode &&
    !isStatic &&
    !isMaintenancePage
  ) {
    const redirectLocale = isValidLocale ? pathLocale : 'en'
    return NextResponse.rewrite(new URL(`/${redirectLocale}/maintenance`, req.url))
  }

  // Jalankan next-intl middleware seperti biasa
  return createMiddleware({
    locales,
    defaultLocale: 'en'
  })(req)
}

export const config = {
  matcher: ['/', '/(en|id)?/:path*']
}
