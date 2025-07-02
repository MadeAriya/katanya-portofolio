'use client'
import Navbar from "@/components/navbar";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import LottieScroll from "@/components/LottieScroll";
import ImageHover from "@/components/projectCard";
import Link from 'next/link';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState } from "react";


export default function Home() {
  const t = useTranslations('home');
  const [copied, setCopied] = useState(false);
  const email = "madeariya28@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <main className="relative z-30">
      <Navbar/>
      
      <section className="flex flex-col justify-center items-center mt-30 gap-4 mx-10 md:mx-0 md:w-auto">
        <h6 className="font-montserrat font-extrabold text-xs md:text-sm text-white">{t('hero.tagline')}</h6>
        <h1 className="font-montserrat font-extrabold text-center md:text-left text-5xl md:text-7xl text-white md:w-[750px]">Website Developer & <span className="text-[#B9A1E0]">Tech Enthusiast</span> </h1> 
        <p className="font-montserrat text-sm md:p-5 md:text-xl text-center md:w-[650px] text-white">{ t('hero.desc') }</p>
        <LottieScroll/>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-40 mx-10 md:mt-40 md:mx-30">
        <div className='col-span-1 md:col-span-5 md:row-span-1 px-5 py-10 md:py-10 md:px-20 rounded-[15px] border-2 border-[#191A20]' style={{ background: 'linear-gradient(135deg, #1F2127 0%, #5F399E 98%)' }}>
          <h1 className='font-poppins text-white text-2xl mb-6 md:text-6xl font-bold'>{t('intro.title')}</h1>
          <p className="font-montserrat text-white md:text-xl mt-3 text-[15px]">{t('intro.desc1')}</p>
          <p className="font-montserrat text-white md:text-xl mt-3 text-[15px]">{t('intro.desc2')}</p>
        </div>
        <div className="col-span-1 md:col-span-2 md:row-span-1 md:row-start-2 p-10 bg-[#1F2127] rounded-[15px] md:h-[300px] border-1 border-[#5F399E] flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className='text-3xl md:text-4xl font-bold'>{t('cta.title')}</h1>
            <button onClick={handleCopy} className="bg-[#24283C] rounded-[15px] font-montserrat p-1 h-[60px] mt-5 w-full max-w-[270px]"><i class="fa-solid fa-copy mx-2"></i>{copied ? "Copied!" : "Copy my Email address"}</button>
          </div>
        <div className="col-span-1 md:col-span-3 md:row-span-1 md:col-start-3 md:row-start-2 md:h-[300px] bg-[#1F2127] rounded-[15px] border-2 border-[#191A20]">
            <div class="flex justify-center items-center">
              <div className="grid grid-cols-1 gap-2 p-5 w-[400px]">
                <div className="bg-[#24283C] rounded-[10px] h-auto p-2">
                  <p className="font-montserrat text-[10px] md:text-base font-medium">{t('services.items.one')}</p>
                </div>
                <div className="bg-[#24283C] rounded-[10px] h-auto p-2">
                  <p className="font-montserrat text-[10px] md:text-base  font-medium">{t('services.items.two')}</p>
                </div>
                <div className="bg-[#24283C] rounded-[10px] h-auto p-2">
                  <p className="font-montserrat text-[10px] md:text-base  font-medium">{t('services.items.three')}</p>
                </div>
                <div className="bg-[#24283C] rounded-[10px] h-auto p-2">
                  <p className="font-montserrat text-[10px] md:text-base  font-medium">{t('services.items.four')}</p>
                </div>
                <div className="bg-[#24283C] rounded-[10px] h-auto p-2">
                  <p className="font-montserrat text-[10px] md:text-base font-medium">{t('services.items.more')}</p>
                </div>
              </div>
              <div className="my-auto items-center p-3">
                <h1 className="font-poppins text-white text-base md:text-2xl font-bold">{t('services.title')}</h1>
                <p className="font-montserrat text-white text-xs md:text-base mt-3">{t('services.desc')}</p>
              </div>
            </div>
          </div>
        <div className="col-span-1 md:col-span-5 bg-[#1F2127] rounded-[15px] border-2 border-[#191A20] px-5 md:px-10">
          <div className='my-6 mx-3 flex flex-col md:flex-row justify-between items-center gap-4'>
            <h1 className='font-poppins text-white text-2xl md:text-2xl font-bold text-center md:text-left'>{t('whyme.title')}</h1>
            <Link href="/pricing" className="flex justify-center items-center border-2 border-[#333336] bg-[linear-gradient(to_right,#6971A266_20%,#1D1D1F_100%)] rounded-[14px] h-[55px] w-full md:w-[200px]">{t('button.pricing')}<Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-3"/></Link>    
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-3 pb-2'>
            <div className='bg-[#24283C] rounded-[10px] p-3 w-full'>
              <h5 className='font-poppins text-white md:text-xl mt-3 text-[15px]'>{t('whyme.items.item1.title')}</h5>
              <p className='font-montserrat text-white md:text-base mt-3 text-[15px]'>{t('whyme.items.item1.desc')}</p>
            </div>
            <div className='bg-[#24283C] rounded-[10px] p-3 w-full'>
              <h5 className='font-poppins text-white md:text-xl mt-3 text-[15px]'>{t('whyme.items.item2.title')}</h5>
              <p className='font-montserrat text-white md:text-base mt-3 text-[15px]'>{t('whyme.items.item2.desc')}</p>
            </div>
            <div className='bg-[#24283C] rounded-[10px] p-3 w-full'>
              <h5 className='font-poppins text-white md:text-xl mt-3 text-[15px]'>{t('whyme.items.item3.title')}</h5>
              <p className='font-montserrat text-white md:text-base mt-3 text-[15px]'>{t('whyme.items.item3.desc')}</p>
            </div>
            <div className='bg-[#24283C] rounded-[10px] p-3 w-full'>
              <h5 className='font-poppins text-white md:text-xl mt-3 text-[15px]'>{t('whyme.items.item4.title')}</h5>
              <p className='font-montserrat text-white md:text-base mt-3 text-[15px]'>{t('whyme.items.item4.desc')}</p>
            </div>
          </div>
          {/* <div>
            <Image src="/images/cta-img.svg" className='absolute top-0 right-0' alt="" width={700} height={300}/>
          </div> */}
        </div>
      </section>

      <div className="mt-15">
        <Image src="/images/mask.png" alt="" width={1400} height={700}/>
      </div>

      <section className="mt-30 mx-3 md:mx-40 flex flex-col">
        <h1 className="font-montserrat text-white text-[40px] font-bold mx-7">{t('projects.title')}</h1>
        <p className="font-montserrat text-white w-[300px] mx-7">{t('projects.desc')}</p>
          <div className='grid md:grid-cols-2 gap-2 md:gap-4 mt-10'>
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

          <div className='mx-auto'>
            <Link href="/project" className="flex justify-center items-center border-2 border-[#333336] bg-[linear-gradient(to_right,#6971A266_20%,#1D1D1F_100%)] rounded-[14px] mt-5 h-[55px] w-[200px]">{t('button.moreProject')}<Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-3"/></Link>    
          </div>
        </section>
        <Cta/>
        <Footer/>
    </main>
  );
}
