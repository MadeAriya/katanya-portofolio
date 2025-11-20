'use client'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslations } from 'next-intl';
import LottiePlayer from "@/components/LottiePlayer";
import AnimatedSection from "@/components/AnimatedSection";
import animationData from '@/assets/lottie/Animation - 1747623153577.json';

export default function Maintenance() {
  const t = useTranslations('maintenance');

  return (
    <>
      <Navbar />
      <AnimatedSection>
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
          <div className="max-w-md">
            <LottiePlayer
              src={animationData}
              style={{ height: '300px', width: '300px' }}
            />
            <h1 className="text-4xl font-bold mt-8">{t('title')}</h1>
            <p className="text-lg text-gray-400 mt-4">{t('desc')}</p>
          </div>
        </section>
      </AnimatedSection>
      <Footer />
    </>
  )
}