'use client'
import Navbar from "@/components/navbar";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import LottieScrollWrapper from "@/components/LottieScroll";
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
    <motion.span key={index} variants={item} className={word === 'Tech' ? 'text-[#B9A1E0]' : ''}>
      {word}{' '}
    </motion.span>
  ));

  return (
    <main className="relative z-30">
      <Navbar/>
      
      <section className="flex flex-col justify-center items-center pt-20 md:pt-28 gap-6 px-4 md:px-0 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-montserrat font-semibold text-xs md:text-sm text-[#B9A1E0] uppercase tracking-widest"
        >
          {t('hero.tagline')}
        </motion.span>
        <motion.h1
          className="font-montserrat font-extrabold text-center text-4xl sm:text-5xl md:text-7xl text-white max-w-3xl mx-auto md:max-w-4xl leading-tight"
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
          className="font-montserrat text-sm md:text-lg text-center text-white/80 max-w-xl mx-auto leading-relaxed"
        >
          {t('hero.desc')}
        </motion.p>
        <LottieScrollWrapper/>
      </section>

      <AnimatedSection delay={0.1} yOffset={30}>
        <section className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-24 md:mt-32 mx-4 md:mx-16 lg:mx-24">
          <div
            className="col-span-1 md:col-span-5 px-6 py-12 md:py-16 md:px-16 rounded-2xl border border-white/5 shadow-xl overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #1F2127 0%, #2d1f4e 50%, #5F399E 100%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(185,161,224,0.15)_0%,transparent_50%)]" />
            <div className="relative">
              <h2 className="font-poppins text-white text-2xl md:text-5xl font-bold tracking-tight">{t('intro.title')}</h2>
              <p className="font-montserrat text-white/90 md:text-lg mt-4 md:mt-6 leading-relaxed max-w-3xl">{t('intro.desc1')}</p>
              <p className="font-montserrat text-white/90 md:text-lg mt-3 leading-relaxed max-w-3xl">{t('intro.desc2')}</p>
            </div>
          </div>
          <motion.div
            whileHover={{ y: -4 }}
            className="col-span-1 md:col-span-2 md:row-span-1 md:row-start-2 p-8 md:p-10 bg-[#1F2127] rounded-2xl md:min-h-[280px] border border-white/5 flex flex-col items-center text-center md:items-start md:text-left shadow-lg hover:shadow-xl hover:border-[#5F399E]/30 transition-all duration-300"
          >
            <h2 className="font-poppins text-white text-2xl md:text-3xl font-bold">{t('cta.title')}</h2>
            <button
              onClick={handleCopy}
              className="mt-6 w-full max-w-[270px] h-[56px] flex items-center justify-center gap-2 bg-[#24283C] hover:bg-[#2d3350] border border-white/5 rounded-xl font-montserrat font-medium text-white transition-all duration-300 hover:border-[#5F399E]/40"
            >
              <i className="fa-solid fa-copy"></i>
              {copied ? "Copied!" : "Copy my Email address"}
            </button>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="col-span-1 md:col-span-3 md:row-span-1 md:col-start-3 md:row-start-2 md:min-h-[280px] bg-[#1F2127] rounded-2xl border border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-[#5F399E]/30 transition-all duration-300"
          >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full max-w-[320px]">
              {['one', 'two', 'three', 'four', 'more'].map((key) => (
                <div key={key} className="bg-[#24283C] rounded-xl px-4 py-3 border border-white/5 hover:border-[#5F399E]/20 transition-colors">
                  <p className="font-montserrat text-xs md:text-sm font-medium text-white/90">{t(`services.items.${key}`)}</p>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white text-lg md:text-xl font-bold">{t('services.title')}</h3>
              <p className="font-montserrat text-white/70 text-sm md:text-base mt-2">{t('services.desc')}</p>
            </div>
          </motion.div>
          <div className="col-span-1 md:col-span-5 bg-[#1F2127] rounded-2xl border border-white/5 px-6 md:px-12 py-8 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <h2 className="font-poppins text-white text-xl md:text-2xl font-bold text-center md:text-left">{t('whyme.title')}</h2>
              <Link
                href={`/${locale}/pricing`}
                className="group flex items-center justify-center gap-2 border border-white/10 bg-gradient-to-r from-[#5F399E]/30 to-[#24283C] hover:from-[#5F399E]/50 hover:to-[#2d3350] rounded-xl h-12 px-6 font-medium text-white transition-all duration-300 hover:border-[#5F399E]/40"
              >
                {t('button.pricing')}
                <Image src="/images/Arrow.svg" alt="Arrow" width={12} height={12} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-[#24283C] rounded-xl p-5 border border-white/5 hover:border-[#5F399E]/20 transition-all duration-300"
                >
                  <h4 className="font-poppins text-white text-base font-semibold">{t(`whyme.items.item${i}.title`)}</h4>
                  <p className="font-montserrat text-white/70 text-sm mt-2 leading-relaxed">{t(`whyme.items.item${i}.desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="mt-15">
          <Image src="/images/mask.png" alt="" width={1400} height={700}/>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mt-24 md:mt-32 mx-4 md:mx-16 lg:mx-24 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-1 rounded-full bg-[#5F399E]" />
            <h2 className="font-poppins text-white text-2xl md:text-4xl font-bold">{t('projects.title')}</h2>
          </div>
          <p className="font-montserrat text-white/80 max-w-xl mb-10">{t('projects.desc')}</p>
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

            <div className="mx-auto mt-8">
              <Link
                href={`/${locale}/project`}
                className="group flex items-center justify-center gap-2 border border-white/10 bg-gradient-to-r from-[#5F399E]/30 to-[#24283C] hover:from-[#5F399E]/50 hover:to-[#2d3350] rounded-xl h-12 px-8 font-medium text-white transition-all duration-300 hover:border-[#5F399E]/40"
              >
                {t('button.moreProject')}
                <Image src="/images/Arrow.svg" alt="Arrow" width={12} height={12} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <Cta/>
        </AnimatedSection>
        <AnimatedSection>
          <Footer/>
        </AnimatedSection>
    </main>
  );
}
