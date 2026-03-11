'use client'
import React from 'react';
import Navbar from '@/components/navbar';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Pricing() {
  const t = useTranslations('pricing')
  const points = Array.from({ length: 3 }, (_, i) => t(`after_sales.points.${i + 1}`))
  const carouselItems = [
    {
      title: t('package.item1.title'),
      desc: t('package.item1.desc'),
      harga: t('package.item1.harga'),
      benefit: Array.from({ length: 10 }, (_, i) => t(`package.item1.benefit.${i + 1}`))
    },
    {
      title: t('package.item2.title'),
      desc: t('package.item2.desc'),
      harga: t('package.item2.harga'),
      benefit: Array.from({ length: 10 }, (_, i) => t(`package.item2.benefit.${i + 1}`))
    },
    {
      title: t('package.item3.title'),
      desc: t('package.item3.desc'),
      harga: t('package.item3.harga'),
      benefit: Array.from({ length: 7 }, (_, i) => t(`package.item3.benefit.${i + 1}`))
    }
  ];

  const faqList =
    Array.from({ length: 5 }, (_, i) => ({
      question: t(`faq.${i + 1}.question`),
      answer: t(`faq.${i + 1}.ans`)
    }));

  return (
    <>
      <Navbar />
      <AnimatedSection>
        <div className="mx-4 md:mx-16 lg:mx-24 px-4 py-12 md:py-20 z-30">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-1 rounded-full bg-[#5F399E]" />
            <span className="font-montserrat text-sm text-white/60 uppercase tracking-wider">{t('sectionPricing')}</span>
          </div>
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
            <span className="text-[#B9A1E0]">Naikkan Omset & Profesionalisme</span> Bisnismu Lewat Website yang Kerja 24/7
          </h1>
          <p className="font-montserrat text-base md:text-lg text-white/80 mt-6 max-w-2xl">{t('desc')}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <section className="flex justify-center px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
            {carouselItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative ${index === 1 ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-gradient-to-r from-[#5F399E] to-[#B9A1E0] rounded-full text-xs font-semibold text-white">
                    {t('mostPopular')}
                  </div>
                )}
                <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${
                  index === 1
                    ? 'border-2 border-[#5F399E] bg-[#1F2127] shadow-xl shadow-[#5F399E]/20'
                    : 'border border-white/5 bg-[#1F2127] hover:border-[#5F399E]/40 hover:shadow-xl hover:shadow-[#5F399E]/10'
                }`}>
                  <CardContent className="font-montserrat p-6 md:p-8 flex-grow">
                    <h2 className="text-sm uppercase font-semibold text-[#B9A1E0] tracking-wider">{item.title}</h2>
                    <div className="flex items-baseline mt-6">
                      <span className="text-white/80 text-lg">Rp</span>
                      <span className="text-4xl md:text-5xl font-bold text-white ml-1">{item.harga}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {item.benefit.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                          <span className="text-[#5F399E] mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 md:p-8 pt-0">
                    <a
                      href="https://wa.me/6289685660190"
                      className={`block text-center font-semibold rounded-xl px-6 py-3.5 transition-all duration-300 ${
                        index === 1
                          ? 'bg-gradient-to-r from-[#5F399E] to-[#6B44B0] text-white hover:shadow-lg hover:shadow-[#5F399E]/30'
                          : 'bg-[#24283C] text-white border border-white/10 hover:border-[#5F399E]/40 hover:bg-[#2d3350]'
                      }`}
                    >
                      {t('button.btnPackage')}
                    </a>
                    <p className="text-xs text-white/50 mt-4">*{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="flex flex-col md:flex-row justify-center items-center my-16 md:my-24 mx-4 md:mx-16 gap-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/aftersales.svg"
              alt="After Sales IMG"
              width={600}
              height={600}
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-1 rounded-full bg-[#5F399E]" />
              <span className="font-montserrat text-sm text-white/60 uppercase tracking-wider">{t('sectionAfterSales')}</span>
            </div>
            <h2 className="font-poppins text-2xl md:text-4xl font-bold text-white">{t('after_sales.title')}</h2>
            <p className="font-montserrat text-white/70 text-base md:text-lg mt-4 mb-8">{t('after_sales.subtitle')}</p>
            {Object.keys(points).map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(key) * 0.1 }}
                className="flex gap-4 items-start my-5 p-4 rounded-xl bg-[#24283C]/50 border border-white/5 hover:border-[#5F399E]/20 transition-colors"
              >
                <img src="/images/checklist.svg" alt="Checklist" className="mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{points[key]}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 md:py-24 bg-[#1A1B1D]/80 border-y border-white/5">
          <div className="text-center mb-12 px-4">
            <div className="flex justify-center gap-4 mb-4">
              <span className="w-12 h-1 rounded-full bg-[#5F399E]" />
            </div>
            <h2 className="font-poppins text-2xl md:text-4xl font-bold text-white">{t('stepOrder.title')}</h2>
            <p className="font-montserrat text-white/60 text-sm md:text-base mt-3 max-w-xl mx-auto">{t('stepOrder.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16 max-w-7xl mx-auto">
            {['one', 'two', 'three', 'four'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#1F2127] border border-white/5 hover:border-[#5F399E]/30 transition-all duration-300"
              >
                <img src={`/images/${step}.svg`} alt={`Step ${index + 1}`} width={73} height={63} />
                <div className="mt-5">
                  <h3 className="font-poppins text-lg font-semibold text-white">{t(`stepOrder.${step}.title`)}</h3>
                  <p className="font-montserrat text-sm text-white/60 mt-2">{t(`stepOrder.${step}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 md:py-24 px-4 md:px-16">
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-1 rounded-full bg-[#5F399E] mb-4" />
            <h2 className="font-poppins text-2xl md:text-4xl font-bold text-white">FAQ</h2>
            <p className="font-montserrat text-white/60 text-sm mt-2">{t('faqSubtitle')}</p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="max-w-4xl mx-auto space-y-3"
            defaultValue="item-1"
          >
            {faqList.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-b-0 border border-white/5 rounded-xl px-6 bg-[#1F2127] overflow-hidden data-[state=open]:border-[#5F399E]/30"
              >
                <AccordionTrigger className="text-base md:text-lg font-poppins text-left text-white hover:text-[#B9A1E0] hover:no-underline [&[data-state=open]]:text-[#B9A1E0]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-white/70 font-montserrat pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </AnimatedSection>

      <Cta />
      <Footer />
    </>
  )
}