import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { poppins, montserrat, island, inter } from '@/app/fonts/font'
import ScrollToTopButton from "@/components/scrollToTop";
import MouseGlow from '@/components/MouseGlow';
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
          <MouseGlow />
          <ScrollToTopButton/>
          <div className="absolute opacity-50"><Image src="/images/spotlight.png" alt="" width={600} height={600}/></div>
          <div className="absolute top-50 right-0 opacity-50 scale-x-[-1]"><Image src="/images/spotlight.png" alt="" width={600} height={600}/></div>
          <div className="absolute w-full h-screen opacity-10 z-1">
            <div className="relative w-full h-full z-1">
              <Image
                src="/images/grid-pattern.svg" alt="" fill className="object-cover z-1"
              />
            </div>
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
