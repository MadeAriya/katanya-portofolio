import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const maintenanceMode = true

const locales = ['en', 'id']

export default function middleware(req) {
  const { pathname } = req.nextUrl
  const locale = pathname.split('/')[1] // ambil locale dari url

  const isStatic =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') // ignore file statis

  const isMaintenancePage = pathname === `/${locale}/maintenance`

  const isLocaleValid = locales.includes(locale)

  if (
    maintenanceMode &&
    isLocaleValid &&
    !isStatic &&
    !isMaintenancePage
  ) {
    return NextResponse.rewrite(new URL(`/${locale}/maintenance`, req.url))
  }

  return createMiddleware({
    locales,
    defaultLocale: 'en',
  })(req)
}

export const config = {
  matcher: ['/', '/(en|id)', '/(en|id)/:path*'],
}
