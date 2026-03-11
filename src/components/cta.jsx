'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/i-made-ariya-putra', src: '/images/linkedin.svg', gradient: 'from-[#D9D9D9] to-[#0077B5]' },
  { href: 'https://www.instagram.com/mdeariya_/', src: '/images/instagram.svg', gradient: 'from-[#D9D9D9] to-[#E1306C]' },
  { href: 'https://github.com/MadeAriya/', src: '/images/github.svg', gradient: 'from-[#D9D9D9] to-[#000000]' },
  { href: 'https://discord.com/users/694010733070909521', src: '/images/discord.svg', gradient: 'from-[#D9D9D9] to-[#5865F2]' },
  { href: 'https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL', src: '/images/facebook.svg', gradient: 'from-[#D9D9D9] to-[#1877F2]' },
];

export default function Cta() {
  const t = useTranslations('home');
  return (
    <section className="relative mt-24 md:mt-32 mx-4 md:mx-16 flex flex-col justify-center items-center py-16 md:py-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/images/grid-pattern.svg" alt="" fill className="object-cover opacity-10" />
      </div>
      <div className="relative z-10 text-center">
        <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white">{t('cta.title')}</h2>
        <p className="font-montserrat text-white/80 mt-4 max-w-md mx-auto">{t('cta.desc')}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 social-link-hover`}
            >
              <Image src={link.src} alt="" width={28} height={28} className="object-contain" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}