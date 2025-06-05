'use client'
import Navbar from "@/components/navbar";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardCarousel from "@/components/CardCaraousel";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <main className="relative z-30">
        <Navbar/>

        <section className="mx-10 mt-30 flex flex-col text-white md:mx-40">
          <div className="flex gap-5 items-center">
            <h1 className="font-montserrat font-extrabold text-[40px]">About</h1>
            <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
          </div>
          <div className="space-y-4">

          <p>I am a 17-year-old vocational high school student from Bali with a keen interest in web programming and technology. Over the past few years, I have learned the basics of web development, including HTML, CSS, and JavaScript, and explored backend development with Laravel.</p>
          <p>I have completed several projects, designing websites for e-commerce platforms and learning management systems. These experiences have honed my skills and deepened my understanding of web development.</p>
          <p>I am highly motivated to collaborate with other developers and seek partnerships with companies to expand my knowledge and contribute to meaningful projects.</p>
          <p>My passion for technology drives me to continuously improve and innovate, and I am eager to embrace new challenges and opportunities in web development.</p>
          </div>
        </section>

        <section className="mt-20 mx-10 md:mt-40 md:mx-40">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="font-montserrat font-extrabold text-[40px]">Experience</h1>
            <span className="w-[120px] h-[5px] bg-[#38383C]"></span>
          </div>
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
            contentStyle={{ background: '#212125', color: '#fff', boxShadow: 'none', border: '1px solid #333336'}}
            date="Sep 2024 - Nov 2024"
            iconStyle={{ background: '#1D1D1F', color: '#fff', textAlign: 'center'}}
            icon={<i className="fa-solid fa-briefcase mt-3 md:mt-5 text-base md:text-xl"></i>}
          >
            <div className="absolute top-0 -mt-29 md:-mt-16 left-0 w-[248px] md:w-[400px] h-[400px] z-1">
              <Image src='/images/blur.svg' alt="" fill></Image>
            </div>
            <div className="relative z-6">
            <Image src="/images/redsystem-logo.svg" alt="Red System Logo" width={300} height={300}></Image>
              <h3 className="mt-4 font-montserrat font-bold">Front End Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Bali, ID</h4>
              <p className="font-montserrat">
                During my internship at Redsystem, I specialized in customizing website templates to align with specific content and themes requested by the company, successfully delivering projects for two key industries: clinics and property. This experience sharpened my skills in creating visually appealing and functional designs tailored to diverse business needs.
              </p>
            </div>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
            contentStyle={{ background: '#212125', color: '#fff', boxShadow: 'none', border: '1px solid #333336'}}
            date="Sep 2024 - Nov 2024"
            iconStyle={{ background: '#1D1D1F', color: '#fff', textAlign: 'center'}}
            icon={<i className="fa-solid fa-briefcase mt-3 md:mt-5 text-base md:text-xl"></i>}
          >
            <div className="absolute top-0 -mt-29 md:-mt-16 left-0 w-[248px] md:w-[400px] h-[400px] z-1">
              <Image src='/images/blur.svg' alt="" fill></Image>
            </div>
            <div className="relative z-6">
              <Image src="/images/indoapps-logo.svg" alt="Red System Logo" width={300} height={300}></Image>
              <h3 className="mt-4 font-montserrat font-bold">Web Development and Digital Management</h3>
              <h4 className="vertical-timeline-element-subtitle">Bali, ID</h4>
              <p className="font-montserrat text-sm">
              During my internship at PT Indo Apps Solusindo, I contributed to various projects that strengthened my technical and organizational capabilities. My primary responsibilities included:            </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </section>

        <section className="relative mx-10 mt-20">
          <Image src='/images/footer-grid.svg' alt="" fill className="absolute w-full"></Image>
          <div className="flex gap-5 justify-center items-center">
            <span className="w-[70px] md:w-[120px] h-[5px] bg-[#38383C]"></span>
            <h1 className="font-montserrat font-extrabold text-[20px] md:text-[40px]">Skills Set</h1>
            <span className="w-[70px] md:w-[120px] h-[5px] bg-[#38383C]"></span>
          </div>
        </section>
        <CardCarousel />

        <section className="mx-10 mt-30">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="font-montserrat font-extrabold text-[40px]">Certificate</h1>
            <span className="w-[120px] h-[5px] bg-[#38383C]"></span>
          </div>
          <div className='grid mx-auto md:grid-cols-3 grid-cols-1 mt-10 gap-0 max-w-[700px]'>
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
