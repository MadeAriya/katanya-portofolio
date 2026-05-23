'use client'
import Navbar from "@/components/navbar";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardCarousel from "@/components/CardCaraousel";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import { useTranslations } from 'next-intl';
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  const t = useTranslations('about');

  const timelineContentStyle = {
    background: '#FFFFFF',
    color: '#1A1A2E',
    boxShadow: '5px 5px 0px #1A1A2E',
    border: '3px solid #1A1A2E',
    borderRadius: '8px',
  };

  const timelineIconStyle = {
    background: '#FF6B35',
    color: '#FFFFFF',
    border: '3px solid #1A1A2E',
    boxShadow: '3px 3px 0px #1A1A2E',
  };

  return (
    <>
      <main className="relative z-30 bg-[#FFFDF7] min-h-screen">
        <Navbar/>

        {/* About Me Section */}
        <AnimatedSection>
          <section className="mx-6 pt-28 md:pt-36 flex flex-col text-[#1A1A2E] md:mx-40">
            <div className="flex gap-5 items-center mb-6">
              <h1 className="font-poppins font-black text-[40px] text-[#1A1A2E]">{t('title')}</h1>
              <span className="w-[80px] h-[3px] bg-[#FF6B35]"></span>
            </div>
            <div className="neo-card p-6 md:p-8 space-y-4 text-[#1A1A2E]">
              <p>{t('description.desc1')}</p>
              <p>{t('description.desc2')}</p>
              <p>{t('description.desc3')}</p>
              <p>{t('description.desc4')}</p>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience Timeline Section */}
        <AnimatedSection>
          <section className="mt-20 mx-6 md:mt-40 md:mx-40">
            <div className="flex gap-5 justify-center items-center mb-10">
              <span className="w-[70px] md:w-[120px] h-[3px] bg-[#1A1A2E]"></span>
              <h1 className="font-poppins font-black text-[40px] text-[#1A1A2E]">{t('sectionTitles.experience')}</h1>
              <span className="w-[70px] md:w-[120px] h-[3px] bg-[#1A1A2E]"></span>
            </div>
          <VerticalTimeline lineColor="#1A1A2E">
              <VerticalTimelineElement
              className="vertical-timeline-element--work relative"
              contentStyle={timelineContentStyle}
              contentArrowStyle={{ borderRight: '7px solid #1A1A2E' }}
              date={t('jobs.job1.date')}
              dateClassName="!text-[#1A1A2E] font-bold"
              iconStyle={timelineIconStyle}
              icon={<i className="fa-solid fa-briefcase mt-3 md:mt-5 text-base md:text-xl"></i>}
            >
              <div className="relative z-6">
              <Image src="/images/redsystem-logo.svg" alt="Red System Logo" width={300} height={300}></Image>
                <h3 className="mt-4 font-montserrat font-bold text-[#1A1A2E]">{t('jobs.job1.title')}</h3>
                <h4 className="vertical-timeline-element-subtitle text-[#7B2FF2] font-semibold">{t('jobs.job1.location')}</h4>
                <p className="font-montserrat text-[#1A1A2E]">
                  {t('jobs.job1.desc')}
                </p>
              </div>
            </VerticalTimelineElement>
              <VerticalTimelineElement
              className="vertical-timeline-element--work relative"
              contentStyle={timelineContentStyle}
              contentArrowStyle={{ borderRight: '7px solid #1A1A2E' }}
              date={t('jobs.job2.date')}
              dateClassName="!text-[#1A1A2E] font-bold"
              iconStyle={timelineIconStyle}
              icon={<i className="fa-solid fa-briefcase mt-3 md:mt-5 text-base md:text-xl"></i>}
            >
              <div className="relative z-6">
                <Image src="/images/indoapps-logo.svg" alt="Indoapps Logo" width={300} height={300}></Image>
                <h3 className="mt-4 font-montserrat font-bold text-[#1A1A2E]">{t('jobs.job2.title')}</h3>
                <h4 className="vertical-timeline-element-subtitle text-[#7B2FF2] font-semibold">{t('jobs.job2.location')}</h4>
                <p className="font-montserrat text-sm text-[#1A1A2E]">{t('jobs.job2.desc')}</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <section className="relative mx-6 mt-20">
            <div className="flex gap-5 justify-center items-center">
              <span className="w-[70px] md:w-[120px] h-[3px] bg-[#FF6B35]"></span>
              <h1 className="font-poppins font-black text-[20px] md:text-[40px] text-[#1A1A2E]">{t('sectionTitles.skills')}</h1>
              <span className="w-[70px] md:w-[120px] h-[3px] bg-[#FF6B35]"></span>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <CardCarousel />
        </AnimatedSection>

        {/* Certificate Section */}
        <AnimatedSection>
          <section className="mx-6 mt-30 md:mx-20">
            <div className="flex gap-5 justify-center items-center mb-10">
              <span className="w-[70px] md:w-[120px] h-[3px] bg-[#1A1A2E]"></span>
              <h1 className="font-poppins font-black text-[40px] text-[#1A1A2E]">{t('sectionTitles.certificate')}</h1>
              <span className="w-[70px] md:w-[120px] h-[3px] bg-[#1A1A2E]"></span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 max-w-4xl mx-auto'>
              <div className="w-full certificate-hover">
                <a href="/images/sertifikat_course_123_3524263_211124154307_page-0001.jpg" target="_blank" rel="noopener noreferrer">
                  <Image src='/images/sertifikat_course_123_3524263_211124154307_page-0001.jpg' alt="" width={300} height={300} className="w-full h-auto border-3 border-[#1A1A2E] shadow-[4px_4px_0px_#1A1A2E] rounded-lg" />
                </a>
              </div>
              <div className="w-full certificate-hover">
                <a href="/images/certificate-redsystem.jpg" target="_blank" rel="noopener noreferrer">
                  <Image src='/images/certificate-redsystem.jpg' alt="" width={300} height={300} className="w-full h-auto border-3 border-[#1A1A2E] shadow-[4px_4px_0px_#1A1A2E] rounded-lg" />
                </a>
              </div>
              <div className="w-full certificate-hover">
                <a href="/images/certificate-indoapps.png" target="_blank" rel="noopener noreferrer">
                  <Image src='/images/certificate-indoapps.png' alt="" width={300} height={300} className="w-full h-auto border-3 border-[#1A1A2E] shadow-[4px_4px_0px_#1A1A2E] rounded-lg" />
                </a>
              </div>
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

    </>
  );
}
