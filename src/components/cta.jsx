'use client'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/i-made-ariya-putra', icon: 'fa-brands fa-linkedin-in', bg: '#0077B5' },
  { href: 'https://www.instagram.com/mdeariya_/', icon: 'fa-brands fa-instagram', bg: '#E1306C' },
  { href: 'https://github.com/MadeAriya/', icon: 'fa-brands fa-github', bg: '#1A1A2E' },
  { href: 'https://discord.com/users/694010733070909521', icon: 'fa-brands fa-discord', bg: '#5865F2' },
  { href: 'https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL', icon: 'fa-brands fa-facebook-f', bg: '#1877F2' },
];

export default function Cta() {
  const t = useTranslations('home');
  return (
    <section className="relative mt-24 md:mt-32 mx-4 md:mx-16 flex flex-col justify-center items-center">
      <div
        className="w-full rounded-lg px-8 py-16 md:px-16 md:py-20 relative overflow-hidden"
        style={{
          backgroundColor: '#FFE156',
          border: '3px solid #1A1A2E',
          boxShadow: '6px 6px 0px #1A1A2E',
        }}
      >
        {/* Decorative Elements */}
        <span className="absolute top-4 left-6 text-2xl md:text-3xl select-none" style={{ color: '#1A1A2E' }} aria-hidden="true">★</span>
        <span className="absolute top-4 right-6 text-2xl md:text-3xl select-none" style={{ color: '#FF6B35' }} aria-hidden="true">★</span>
        <span className="absolute bottom-4 left-6 text-xl md:text-2xl font-black select-none" style={{ color: '#7B2FF2' }} aria-hidden="true">→ →</span>
        <span className="absolute bottom-4 right-6 text-2xl md:text-3xl select-none" style={{ color: '#FF6B9D' }} aria-hidden="true">✦</span>
        <span className="absolute top-12 right-16 text-lg hidden md:block select-none font-bold" style={{ color: '#1A1A2E', opacity: 0.15, transform: 'rotate(12deg)' }} aria-hidden="true">~ ~ ~</span>
        <span className="absolute bottom-12 left-16 text-lg hidden md:block select-none font-bold" style={{ color: '#1A1A2E', opacity: 0.15, transform: 'rotate(-8deg)' }} aria-hidden="true">///</span>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2
            className="font-poppins font-black text-3xl md:text-5xl tracking-tight"
            style={{ color: '#1A1A2E' }}
          >
            {t('cta.title')}
          </h2>
          <p
            className="font-montserrat text-base md:text-lg mt-4 max-w-lg mx-auto font-medium"
            style={{ color: '#1A1A2E', opacity: 0.8 }}
          >
            {t('cta.desc')}
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-10">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                whileHover={{
                  x: -2,
                  y: -2,
                  boxShadow: '5px 5px 0px #1A1A2E',
                }}
                whileTap={{
                  x: 2,
                  y: 2,
                  boxShadow: '1px 1px 0px #1A1A2E',
                }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-sm flex items-center justify-center transition-all duration-150"
                style={{
                  backgroundColor: link.bg,
                  border: '3px solid #1A1A2E',
                  boxShadow: '3px 3px 0px #1A1A2E',
                }}
              >
                <i className={`${link.icon} text-white text-xl md:text-2xl`}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}