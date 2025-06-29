import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { poppins, montserrat, island } from '@/app/fonts/font'
import ScrollToTopButton from "@/components/scrollToTop";
import BottomLeftGlow from "@/components/glowEffect";
import  Image  from 'next/image';

export const metadata = {
  title: "Ariya Portofolio",
  description: "Ariya Portofolio | Web Developer | Tech Enthusiast",
  icons: {
    icon: '/images/favicon.jpg'
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
    <html lang={locale} className={`${poppins.variable} ${montserrat.variable} ${island.variable}`}>
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
          <div className="absolute"><Image src="/images/spotlight.png" alt="" width={600} height={600}/></div>
          <div className="absolute top-50 right-0 scale-x-[-1]"><Image src="/images/spotlight.png" alt="" width={600} height={600}/></div>
          <div className="absolute w-full h-screen opacity-10">
            <div className="relative w-full h-full">
              <Image
                src="/images/grid-pattern.svg" alt="" fill className="object-cover"
              />
            </div>
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
