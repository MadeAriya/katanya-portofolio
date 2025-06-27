'use client'
import Navbar from "@/components/navbar";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardCarousel from "@/components/CardCaraousel";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  return (
    <>
      <main className="relative z-30">
        <Navbar/>

        <section className="mx-10 mt-30 flex flex-col text-white md:mx-40">
          <div className="flex gap-5 items-center">
            <h1 className="font-montserrat font-extrabold text-[40px]">{t('title')}</h1>
            <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
          </div>
          <div className="space-y-4">

          <p>{t('description.desc1')}</p>
          <p>{t('description.desc2')}</p>
          <p>{t('description.desc3')}</p>
          <p>{t('description.desc4')}</p>
          </div>
        </section>

        <section className="mt-20 mx-10 md:mt-40 md:mx-40">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="font-montserrat font-extrabold text-[40px]">{t('sectionTitles.experience')}</h1>
            <span className="w-[120px] h-[5px] bg-[#38383C]"></span>
          </div>
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
            contentStyle={{ background: '#212125', color: '#fff', boxShadow: 'none', border: '1px solid #333336'}}
            date={t('jobs.job1.date')}
            iconStyle={{ background: '#1D1D1F', color: '#fff', textAlign: 'center'}}
            icon={<i className="fa-solid fa-briefcase mt-3 md:mt-5 text-base md:text-xl"></i>}
          >
            <div className="absolute top-0 -mt-29 md:-mt-16 left-0 w-[248px] md:w-[400px] h-[400px] z-1">
              <Image src='/images/blur.svg' alt="" fill></Image>
            </div>
            <div className="relative z-6">
            <Image src="/images/redsystem-logo.svg" alt="Red System Logo" width={300} height={300}></Image>
              <h3 className="mt-4 font-montserrat font-bold">{t('jobs.job1.title')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('jobs.job1.location')}</h4>
              <p className="font-montserrat">
                {t('jobs.job1.desc')}
              </p>
            </div>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
            contentStyle={{ background: '#212125', color: '#fff', boxShadow: 'none', border: '1px solid #333336'}}
            date={t('jobs.job2.date')}
            iconStyle={{ background: '#1D1D1F', color: '#fff', textAlign: 'center'}}
            icon={<i className="fa-solid fa-briefcase mt-3 md:mt-5 text-base md:text-xl"></i>}
          >
            <div className="absolute top-0 -mt-29 md:-mt-16 left-0 w-[248px] md:w-[400px] h-[400px] z-1">
              <Image src='/images/blur.svg' alt="" fill></Image>
            </div>
            <div className="relative z-6">
              <Image src="/images/indoapps-logo.svg" alt="Red System Logo" width={300} height={300}></Image>
              <h3 className="mt-4 font-montserrat font-bold">{t('jobs.job2.title')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('jobs.job2.location')}</h4>
              <p className="font-montserrat text-sm">{t('jobs.job2.desc')}</p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </section>

        <section className="relative mx-10 mt-20">
          <Image src='/images/footer-grid.svg' alt="" fill className="absolute w-full"></Image>
          <div className="flex gap-5 justify-center items-center">
            <span className="w-[70px] md:w-[120px] h-[5px] bg-[#38383C]"></span>
            <h1 className="font-montserrat font-extrabold text-[20px] md:text-[40px]">{t('sectionTitles.skills')}</h1>
            <span className="w-[70px] md:w-[120px] h-[5px] bg-[#38383C]"></span>
          </div>
        </section>
        <CardCarousel />

        <section className="mx-10 mt-30">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="font-montserrat font-extrabold text-[40px]">{t('sectionTitles.certificate')}</h1>
            <span className="w-[120px] h-[5px] bg-[#38383C]"></span>
          </div>
          <div className='grid mx-auto md:grid-cols-3 grid-cols-2 mt-10 gap-5 max-w-[700px]'>
            <div className="w-[200px]">
              <a href="/images/sertifikat_course_123_3524263_211124154307_page-0001.jpg" target="_blank" rel="noopener noreferrer">
                <Image src='/images/sertifikat_course_123_3524263_211124154307_page-0001.jpg' alt="" width={200} height={200}/>
              </a>
            </div>
            <div className="w-[200px]">
              <a href="/images/certificate-redsystem.jpg" target="_blank" rel="noopener noreferrer">
              <Image src='/images/certificate-redsystem.jpg' alt="" width={200} height={200}/>
              </a>
            </div>
            <div className="w-[200px]">
              <a href="/images/certificate-indoapps.png" target="_blank" rel="noopener noreferrer">
              <Image src='/images/certificate-indoapps.png' alt="" width={200} height={250}/>
              </a>
            </div>
          </div>
        </section>

        <Cta/>
        <Footer/>

      </main>

    </>
  );
}
