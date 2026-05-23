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

  // Dynamically get benefits - handles variable lengths safely
  const getBenefits = (itemKey, maxLength) => {
    const benefits = [];
    for (let i = 1; i <= maxLength; i++) {
      const key = `package.${itemKey}.benefit.${i}`;
      if (t.has(key)) {
        benefits.push(t(key));
      }
    }
    return benefits;
  };

  const carouselItems = [
    {
      title: t('package.item1.title'),
      desc: t('package.item1.desc'),
      harga: t('package.item1.harga'),
      benefit: getBenefits('item1', 12)
    },
    {
      title: t('package.item2.title'),
      desc: t('package.item2.desc'),
      harga: t('package.item2.harga'),
      benefit: getBenefits('item2', 12)
    },
    {
      title: t('package.item3.title'),
      desc: t('package.item3.desc'),
      harga: t('package.item3.harga'),
      benefit: getBenefits('item3', 12)
    }
  ];

  const faqList =
    Array.from({ length: 5 }, (_, i) => ({
      question: t(`faq.${i + 1}.question`),
      answer: t(`faq.${i + 1}.ans`)
    }));

  // Card accent colors for Neo Brutalism
  const cardAccents = ['#FFE156', '#FF6B35', '#A8E6CF'];

  return (
    <>
      <Navbar />
      <AnimatedSection>
        <div className="mx-4 md:mx-16 lg:mx-24 px-4 pt-28 md:pt-36 pb-12 md:pb-20 z-30">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[3px] bg-[#FF6B35]" />
            <span className="font-montserrat text-sm text-[#1A1A2E]/60 uppercase tracking-wider font-bold">{t('sectionPricing')}</span>
          </div>
          <h1 className="font-poppins text-2xl md:text-5xl font-black text-[#1A1A2E] leading-tight max-w-4xl">
            <span className="text-[#FF6B35]">Naikkan Omset & Profesionalisme</span> Bisnismu Lewat Website yang Kerja 24/7
          </h1>
          <p className="font-montserrat text-base md:text-lg text-[#1A1A2E]/70 mt-6 max-w-2xl font-medium">{t('desc')}</p>
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
                whileHover={{ x: -3, y: -3 }}
                className={`relative ${index === 1 ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-[#FF6B35] text-white font-bold font-montserrat text-xs border-2 border-[#1A1A2E] shadow-[2px_2px_0px_#1A1A2E] rounded-sm">
                    {t('mostPopular')}
                  </div>
                )}
                <div className={`h-full flex flex-col overflow-hidden transition-all duration-200 bg-white rounded-lg ${
                  index === 1
                    ? 'border-[3px] border-[#FF6B35] shadow-[6px_6px_0px_#FF6B35] hover:shadow-[8px_8px_0px_#FF6B35]'
                    : 'border-3 border-[#1A1A2E] shadow-[5px_5px_0px_#1A1A2E] hover:shadow-[7px_7px_0px_#1A1A2E]'
                }`}>
                  <div className="font-montserrat p-6 md:p-8 flex-grow">
                    <h2 className="text-sm uppercase font-black text-[#FF6B35] tracking-wider">{item.title}</h2>
                    <div className="flex items-baseline mt-6">
                      <span className="text-[#1A1A2E]/60 text-lg font-bold">Rp</span>
                      <span className="text-4xl md:text-5xl font-black text-[#1A1A2E] ml-1">{item.harga}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {item.benefit.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#1A1A2E]/80 font-medium">
                          <span className="text-[#FF6B35] mt-0.5 font-bold">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 md:p-8 pt-0">
                    <a
                      href="https://wa.me/6289685660190"
                      className={`block text-center font-bold font-montserrat px-6 py-3.5 transition-all duration-200 rounded-sm ${
                        index === 1
                          ? 'bg-[#FF6B35] text-white border-3 border-[#1A1A2E] shadow-[4px_4px_0px_#1A1A2E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1A1A2E]'
                          : 'bg-white text-[#1A1A2E] border-3 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E]'
                      }`}
                    >
                      {t('button.btnPackage')}
                    </a>
                    <p className="text-xs text-[#1A1A2E]/50 mt-4 font-medium">*{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* After Sales */}
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
              className="rounded-lg w-full h-auto border-3 border-[#1A1A2E] shadow-[5px_5px_0px_#1A1A2E]"
            />
          </motion.div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-[#FF6B35]" />
              <span className="font-montserrat text-sm text-[#1A1A2E]/60 uppercase tracking-wider font-bold">{t('sectionAfterSales')}</span>
            </div>
            <h2 className="font-poppins text-2xl md:text-4xl font-black text-[#1A1A2E]">{t('after_sales.title')}</h2>
            <p className="font-montserrat text-[#1A1A2E]/70 text-base md:text-lg mt-4 mb-8 font-medium">{t('after_sales.subtitle')}</p>
            {Object.keys(points).map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(key) * 0.1 }}
                className="flex gap-4 items-start my-4 p-4 bg-[#FFE156] border-2 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E] rounded-sm"
              >
                <img src="/images/checklist.svg" alt="Checklist" className="mt-0.5 flex-shrink-0" />
                <span className="text-[#1A1A2E] font-medium font-montserrat text-sm">{points[key]}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Step Order */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-[#FFFDF7] border-y-[3px] border-[#1A1A2E]">
          <div className="text-center mb-12 px-4">
            <div className="flex justify-center gap-4 mb-4">
              <div className="w-12 h-[3px] bg-[#FF6B35]" />
            </div>
            <h2 className="font-poppins text-2xl md:text-4xl font-black text-[#1A1A2E]">{t('stepOrder.title')}</h2>
            <p className="font-montserrat text-[#1A1A2E]/60 text-sm md:text-base mt-3 max-w-xl mx-auto font-medium">{t('stepOrder.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16 max-w-7xl mx-auto">
            {['one', 'two', 'three', 'four'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -2, y: -2 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg border-3 border-[#1A1A2E] shadow-[4px_4px_0px_#1A1A2E] hover:shadow-[6px_6px_0px_#1A1A2E] transition-all duration-200"
              >
                <img src={`/images/${step}.svg`} alt={`Step ${index + 1}`} width={73} height={63} />
                <div className="mt-5">
                  <h3 className="font-poppins text-lg font-bold text-[#1A1A2E]">{t(`stepOrder.${step}.title`)}</h3>
                  <p className="font-montserrat text-sm text-[#1A1A2E]/60 mt-2 font-medium">{t(`stepOrder.${step}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection>
        <section className="py-16 md:py-24 px-4 md:px-16">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-[3px] bg-[#FF6B35] mb-4" />
            <h2 className="font-poppins text-2xl md:text-4xl font-black text-[#1A1A2E]">FAQ</h2>
            <p className="font-montserrat text-[#1A1A2E]/60 text-sm mt-2 font-medium">{t('faqSubtitle')}</p>
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
                className="border-b-0 border-3 border-[#1A1A2E] rounded-lg px-6 bg-white overflow-hidden shadow-[3px_3px_0px_#1A1A2E] data-[state=open]:border-[#FF6B35] data-[state=open]:shadow-[3px_3px_0px_#FF6B35]"
              >
                <AccordionTrigger className="text-base md:text-lg font-poppins text-left text-[#1A1A2E] font-bold hover:text-[#FF6B35] hover:no-underline [&[data-state=open]]:text-[#FF6B35]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#1A1A2E]/70 font-montserrat pb-4 font-medium">
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