'use client'
import { useEffect } from 'react';
import React from 'react';
import Navbar from '@/components/navbar';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import AnimatedSection from '@/components/AnimatedSection';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
        <div className='md:mx-24 p-10 md:my-10 z-30 mx-10 mt-10 mb-10'>
          <h1 className='font-poppins text-2xl z-30 font-bold md:text-5xl'><span className="text-[#B9A1E0]">Naikkan Omset & Profesionalisme</span> Bisnismu Lewat Website yang Kerja 24/7</h1>
          <p className='font-poppins text-base z-30 mt-8 md:text-lg'>{t('desc')}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <section className='flex justify-center px-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {carouselItems.map((item, index) => (
              <div key={index} className={`pricing-card-hover ${index === 1 ? 'recommended' : ''}`}>
                <Card className="border-1 border-[#595959] bg-[#1F2127] text-white h-full flex flex-col">
                  <CardContent className="font-montserrat p-6 flex-grow">
                    <h1 className='text-1xl uppercase font-semibold text-[#473BF0]'>{item.title}</h1>
                    <div className='flex mt-7'>
                      <p>Rp</p>
                      <p className='text-5xl font-bold ml-1'>{item.harga}</p>
                    </div>
                    <ul className="list-disc list-inside text-sm mt-5 space-y-2">
                      {item.benefit.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className='p-6 pt-0'>
                    <a href="https://wa.me/6289685660190" className='block text-lg font-semibold text-center text-white rounded-md px-6 py-3 bg-[#673DE6] hover:bg-purple-700 transition-colors duration-300'>{t('button.btnPackage')}</a>
                    <p className='text-sm my-5 text-gray'>*{item.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className='flex flex-col md:flex-row justify-center items-center my-20 mx-10 gap-12'>
          <div className='w-full md:w-1/2'>
            <Image
              src="/images/aftersales.svg"
              alt="After Sales IMG"
              width={600}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />        
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className='font-inter text-4xl lg:text-5xl font-semibold'>{t('after_sales.title')}</h1>
            <p className='font-inter mb-7 text-[#8E8E8C] text-lg lg:text-xl'>{t('after_sales.subtitle')}</p>
              {Object.keys(points).map((key) => (
                <div key={key} className="flex gap-4 items-start my-4">
                  <img src="/images/checklist.svg" alt="Checklist" className='mt-1'/>
                  <span>{points[key]}</span>
                </div>
              ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className='py-20 bg-[#1A1B1D]'>
          <div className="text-center mb-12">
            <h1 className='font-montserrat text-4xl font-semibold text-white'>{t('stepOrder.title')}</h1>
            <p className='font-poppins text-[#8E8E8C] text-sm my-3'>{t('stepOrder.desc')}</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 max-w-7xl mx-auto'>
            <div className='flex flex-col items-center text-center'>
              <img src="/images/one.svg" alt="" width={73} height={63} />
              <div className='mt-4'>
                <h2 className='font-poppins text-lg font-medium text-white'>{t('stepOrder.one.title')}</h2>
                <p className='font-poppins text-sm mt-2 text-gray-400'>{t('stepOrder.one.desc')}</p>
              </div>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src="/images/two.svg" alt="" width={73} height={63} />
              <div className='mt-4'>
                <h2 className='font-poppins text-lg font-medium text-white'>{t('stepOrder.two.title')}</h2>
                <p className='font-poppins text-sm mt-2 text-gray-400'>{t('stepOrder.two.desc')}</p>
              </div>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src="/images/three.svg" alt="" width={73} height={63} />
              <div className='mt-4'>
                <h2 className='font-poppins text-lg font-medium text-white'>{t('stepOrder.three.title')}</h2>
                <p className='font-poppins text-sm mt-2 text-gray-400'>{t('stepOrder.three.desc')}</p>
              </div>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src="/images/four.svg" alt="" width={73} height={63} />
              <div className='mt-4'>
                <h2 className='font-poppins text-lg font-medium text-white'>{t('stepOrder.four.title')}</h2>
                <p className='font-poppins text-sm mt-2 text-gray-400'>{t('stepOrder.four.desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 px-10">
          <h4 className='font-poppins text-4xl font-bold text-center mb-12'>FAQ</h4>
          <Accordion
            type="single"
            collapsible
            className="max-w-4xl mx-auto"
            defaultValue="item-1"
          >
            {faqList.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-xl font-poppins text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-lg text-[#8E8E8C] font-poppins">
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