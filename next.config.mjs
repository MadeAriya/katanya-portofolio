// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/id', // bisa ganti ke '/en' sesuai default locale kamu
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
