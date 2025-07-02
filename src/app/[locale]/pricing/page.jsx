'use client'
import { useEffect } from 'react';
import React from 'react';
import Navbar from '@/components/navbar';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';

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

export default function Pricing(){
  const t = useTranslations('pricing')
  const carouselItems = [
  {
      title: t('package.item1.title'),
      desc: t('package.item1.desc'),
      harga: t('package.item1.harga'),
      maintenance: t('package.item1.maintenance'),
      benefit: Array.from({ length: 9 }, (_, i) => t(`package.item1.benefit.${i + 1}`))
    },
    {
      title: t('package.item2.title'),
      desc: t('package.item2.desc'),
      harga: t('package.item2.harga'),
      maintenance: t('package.item2.maintenance'),
      benefit: Array.from({ length: 9 }, (_, i) => t(`package.item2.benefit.${i + 1}`))
    },
    {
      title: t('package.item3.title'),
      desc: t('package.item3.desc'),
      harga: t('package.item3.harga'),
      maintenance: t('package.item3.maintenance'),
      benefit: Array.from({ length: 10 }, (_, i) => t(`package.item3.benefit.${i + 1}`))
    }
  ];

  const faqList = 
    Array.from({ length: 5 }, (_, i) => ({
    question: t(`faq.${i + 1}.question`),
    answer: t(`faq.${i + 1}.ans`)
  }));

  return(
    <>
      <Navbar/>
      <div className='md:mx-24 md:my-10 z-30 mx-10 mt-10 mb-10'>
        <h1 className='font-poppins text-2xl z-30 font-bold md:text-5xl'>{t('title')}</h1>
        <p className='font-poppins text-base z-30 md:text-lg'>{t('desc')}</p>
      </div>
      <section className='flex justify-center px-4'>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-2xl lg:max-w-6xl"
    >
      <CarouselContent className='w-full'>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-1 border-[#595959] bg-[#1F2127] text-white">
                <CardContent className="font-montserrat p-6">
                  <h1 className='text-4xl'>{item.title}</h1>
                  <p className='text-sm my-5'>{item.desc}</p>
                  <div className='flex '>
                    <p>Rp</p>
                    <p className='text-4xl ml-1'>{item.harga}</p>
                  </div>
                  <p className='text-sm'>{item.maintenance}</p>
                  <div className='mt-5 flex justify-center'>
                    <a href="https://wa.me/6289685660190" className='block text-lg font-semibold text-center text-white rounded-md px-6 py-3 bg-[#673DE6]'>{t('button.btnPackage')}</a>
                  </div>
                  <ul className="list-disc list-inside text-sm mt-5 space-y-2">
                    {item.benefit.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}"
      </CarouselContent>

      <div className="mt-4 flex justify-center gap-4 md:hidden">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
      </section>

      <section className='mt-20 text-white max-w-screen h-auto bg-[linear-gradient(to_bottom,_#38383C,_#1D1D1F)]'>
        <h1 className='font-montserrat text-2xl pt-[15px] mx-[24px] font-semibold text-center'>{t('stepOrder.title')}</h1>
        <p className='font-poppins mx-[24px] text-sm my-3 text-center'>{t('stepOrder.desc')}</p>
        <div className='flex'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:w-[700px] mt-6'>
            <div className='flex flex-col justify-center text-center items-center mx-[24px]'>
              <img src="/images/one.svg" alt="" width={73} height={63} />
              <div className='mt-3 ml-[15px] my-[15px]'>
                <h2 className='font-poppins text-base font-medium'>{t('stepOrder.one.title')}</h2>
                <p className='font-poppins text-sm mt-3'>{t('stepOrder.one.desc')}</p>
              </div>
            </div>
            <div className='flex flex-col justify-center text-center items-center mx-[24px] my-[15px]'>
              <img src="/images/two.svg" alt="" width={73} height={63} />
              <div className='mt-3 ml-[15px]'>
                <h2 className='font-poppins text-base font-medium'>{t('stepOrder.two.title')}</h2>
                <p className='font-poppins text-sm mt-3'>{t('stepOrder.two.desc')}</p>
              </div>
            </div>
            <div className='flex flex-col justify-center text-center items-center mx-[24px] my-[15px]'>
              <img src="/images/three.svg" alt="" width={73} height={63} />
              <div className='mt-3 ml-[15px]'>
                <h2 className='font-poppins text-base font-medium'>{t('stepOrder.three.title')}</h2>
                <p className='font-poppins text-sm mt-3'>{t('stepOrder.three.desc')}</p>
              </div>
            </div>
            <div className='flex flex-col justify-center text-center items-center mx-[24px] my-[15px]'>
              <img src="/images/four.svg" alt="" width={73} height={63} />
              <div className='mt-3 ml-[15px]'>
                <h2 className='font-poppins text-base font-medium'>{t('stepOrder.four.title')}</h2>
                <p className='font-poppins text-sm mt-3'>{t('stepOrder.four.desc')}</p>
              </div>
            </div>
          </div>
          <img src="/images/tos.svg "alt="" className='hidden lg:block'/>
        </div>
      </section>

      <Accordion
      type="single"
      collapsible
      className="max-w-sm md:w-[700px] lg:w-[1200px] md:max-w-none lg:max-w-none mx-10 mt-15 md:mx-24 md:mt-24"
      defaultValue="item-1"
    >
      <h4 className='font-poppins text-2xl font-bold md:text-5xl'>FAQ</h4>
      {faqList.map((item, index) => (
      <AccordionItem key={index} value={index + 1}>
        <AccordionTrigger className="text-xl font-poppins">{item.question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-xl font-poppins">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>

      <Cta/>
      <Footer/>
    </>
  )
}