import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { poppins, montserrat, island, inter } from '@/app/fonts/font'
import ScrollToTopButton from "@/components/scrollToTop";
import  Image  from 'next/image';

export const metadata = {
  title: "Ayak Dev Portfolio",
  description: "Ariya Portofolio | Web Developer | Tech Enthusiast",
  icons: {
    icon: '/images/faviconn.ico'
  }
};

// Static params (optional)
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Optional: Validasi locale
  if (!['en', 'id'].includes(locale)) {
    notFound();
  }

  // Import file JSON bahasa
  const messages = (await import(`../../../locales/${locale}.json`)).default;

  // Set locale context
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${island.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link rel="icon" href="/images/favicon.jpg" type="image/jpg" />
        
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollToTopButton/>
          {/* Neo Brutalism grid pattern — more visible */}
          <div className="fixed inset-0 opacity-[0.03] z-0 pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/images/grid-pattern.svg" alt="" fill className="object-cover"
              />
            </div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
