'use client'
import Navbar from "@/components/navbar";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import ImageHover from "@/components/projectCard";
import Link from 'next/link';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState } from "react";
import { useLocale } from 'next-intl';
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const t = useTranslations('home');
  const [copied, setCopied] = useState(false);
  const email = "madeariya28@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  }

  const locale = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const title = t('hero.title').split(' ').map((word, index) => (
    <motion.span key={index} variants={item} className={word === 'Tech' || word === 'Teknologi' ? 'neo-highlight' : ''}>
      {word}{' '}
    </motion.span>
  ));

  // Colors for Why Me cards
  const whyMeColors = [
    'bg-[#FFE156]',  // yellow
    'bg-[#A8E6CF]',  // green mint
    'bg-[#FF6B9D]',  // pink
    'bg-[#87CEEB]',  // sky blue
  ];

  // Colors for service tags
  const serviceTagColors = [
    'bg-[#FFE156]',  // yellow
    'bg-[#A8E6CF]',  // mint
    'bg-[#FFB3BA]',  // pink
    'bg-[#87CEEB]',  // blue
    'bg-[#DDA0DD]',  // plum
  ];

  return (
    <main className="relative z-30 overflow-x-hidden">
      <Navbar/>
      
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col justify-center items-center pt-28 md:pt-36 gap-6 px-4 md:px-0 max-w-4xl mx-auto pb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-montserrat font-black text-xs md:text-sm text-[#1A1A2E] uppercase tracking-[0.3em] border-2 border-[#1A1A2E] px-4 py-2 bg-[#FFE156] shadow-[3px_3px_0px_#1A1A2E]"
        >
          {t('hero.tagline')}
        </motion.span>
        <motion.h1
          className="font-poppins font-black text-center text-5xl sm:text-6xl md:text-8xl text-[#1A1A2E] max-w-3xl mx-auto md:max-w-4xl leading-[1.1]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-montserrat text-base md:text-xl text-center text-[#1A1A2E]/70 max-w-xl mx-auto leading-relaxed font-medium"
        >
          {t('hero.desc')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-4"
        >
          <Link
            href={`/${locale}/project`}
            className="neo-btn neo-btn-primary font-montserrat text-sm md:text-base"
          >
            {t('button.moreProject')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="neo-btn neo-btn-outline font-montserrat text-sm md:text-base"
          >
            {t('button.moreAbout')}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="font-montserrat text-xs font-bold text-[#1A1A2E]/50 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-3 border-[#1A1A2E] rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-2 h-2 bg-[#1A1A2E] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <AnimatedSection delay={0.1} yOffset={30}>
        <section className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8 md:mt-16 mx-4 md:mx-16 lg:mx-24">
          {/* Main intro card — full width */}
          <div className="col-span-1 md:col-span-5 px-6 py-10 md:py-14 md:px-14 neo-section bg-[#7B2FF2] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl md:text-6xl opacity-20 rotate-12 select-none">★</div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-2xl md:text-4xl opacity-20 -rotate-6 select-none">✦</div>
            <div className="relative">
              <h2 className="font-poppins text-white text-3xl md:text-5xl font-black tracking-tight">{t('intro.title')}</h2>
              <p className="font-montserrat text-white/90 md:text-lg mt-4 md:mt-6 leading-relaxed max-w-3xl font-medium">{t('intro.desc1')}</p>
              <p className="font-montserrat text-white/90 md:text-lg mt-3 leading-relaxed max-w-3xl font-medium">{t('intro.desc2')}</p>
            </div>
          </div>

          {/* CTA card — copy email */}
          <motion.div
            whileHover={{ x: -2, y: -2 }}
            className="col-span-1 md:col-span-2 md:row-span-1 md:row-start-2 p-8 md:p-10 neo-card md:min-h-[280px] flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="font-poppins text-[#1A1A2E] text-2xl md:text-3xl font-black">{t('cta.title')}</h2>
            <button
              onClick={handleCopy}
              className="neo-btn neo-btn-yellow mt-6 w-full max-w-[300px] font-montserrat text-sm"
            >
              <i className="fa-solid fa-copy"></i>
              {copied ? "Copied! ✓" : "Copy my Email address"}
            </button>
          </motion.div>

          {/* Services card */}
          <motion.div
            whileHover={{ x: -2, y: -2 }}
            className="col-span-1 md:col-span-3 md:row-span-1 md:col-start-3 md:row-start-2 md:min-h-[280px] neo-card flex flex-col md:flex-row justify-center items-center gap-6 p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full max-w-[320px]">
              {['one', 'two', 'three', 'four', 'more'].map((key, idx) => (
                <div key={key} className={`${serviceTagColors[idx]} border-2 border-[#1A1A2E] shadow-[2px_2px_0px_#1A1A2E] px-4 py-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E] transition-all`}>
                  <p className="font-montserrat text-xs md:text-sm font-bold text-[#1A1A2E]">{t(`services.items.${key}`)}</p>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-[#1A1A2E] text-lg md:text-xl font-black">{t('services.title')}</h3>
              <p className="font-montserrat text-[#1A1A2E]/70 text-sm md:text-base mt-2 font-medium">{t('services.desc')}</p>
            </div>
          </motion.div>

          {/* Why Me section */}
          <div className="col-span-1 md:col-span-5 neo-card px-6 md:px-12 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <h2 className="font-poppins text-[#1A1A2E] text-2xl md:text-3xl font-black text-center md:text-left">{t('whyme.title')}</h2>
              <Link
                href={`/${locale}/pricing`}
                className="neo-btn neo-btn-primary font-montserrat text-sm"
              >
                {t('button.pricing')}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -3, y: -3 }}
                  className={`${whyMeColors[i - 1]} border-3 border-[#1A1A2E] shadow-[4px_4px_0px_#1A1A2E] p-5 hover:shadow-[6px_6px_0px_#1A1A2E] transition-all`}
                >
                  <h4 className="font-poppins text-[#1A1A2E] text-base font-black">{t(`whyme.items.item${i}.title`)}</h4>
                  <p className="font-montserrat text-[#1A1A2E]/70 text-sm mt-2 leading-relaxed font-medium">{t(`whyme.items.item${i}.desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* ===== DIVIDER — mask image ===== */}
      <AnimatedSection>
        <div className="mt-16 w-full overflow-hidden">
          <Image src="/images/mask.png" alt="" width={1400} height={700} className="w-full h-auto object-cover" />
        </div>
      </AnimatedSection>

      {/* ===== PROJECTS SECTION ===== */}
      <AnimatedSection>
        <section className="mt-24 md:mt-32 mx-4 md:mx-16 lg:mx-24 flex flex-col">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-3 bg-[#FF6B35] border-2 border-[#1A1A2E]" />
            <h2 className="font-poppins text-[#1A1A2E] text-3xl md:text-5xl font-black">{t('projects.title')}</h2>
          </div>
          <p className="font-montserrat text-[#1A1A2E]/70 max-w-xl mb-10 text-base md:text-lg font-medium">{t('projects.desc')}</p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <ImageHover
                src="/images/yaguwipa.png"
                alt="Yayasan Guna Widya Paramesthi"
                href="https://yaguwipa.org/"
                width="600"
                height="600"
                title={t('projects.yaguwipa.title')}
                description={t('projects.yaguwipa.desc')}
                techStack={["Laravel", "Bootstrap", "MySQL"]}
                />

              <ImageHover
              src="/images/red-clinic.png"
              alt="Red Clinic"
              width="600"
              height="600"
              href="https://design.redsystem.id/klinik/design-2/"
              title={t('projects.redclinic.title')}
              description={t('projects.redclinic.desc')}
              techStack={["Bootstrap"]}
              />
            </div>

            <div className="mx-auto mt-10">
              <Link
                href={`/${locale}/project`}
                className="neo-btn neo-btn-secondary font-montserrat text-sm md:text-base"
              >
                {t('button.moreProject')}
              </Link>
            </div>
          </section>
        </AnimatedSection>

        {/* ===== CTA SECTION ===== */}
        <AnimatedSection>
          <Cta/>
        </AnimatedSection>

        {/* ===== FOOTER ===== */}
        <AnimatedSection>
          <Footer/>
        </AnimatedSection>
    </main>
  );
}
