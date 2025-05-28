import Link from 'next/link';
import Image from 'next/image';
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageHover from '@/components/projectCard';


export default function Project(){
    return(
        <>
            <main className='relative z-30'>
                <Navbar/>
                
                <section className='mx-3 flex flex-col justify-center md:mx-40 mt-40'>
                    <div className="flex gap-5 items-center">
                        <h1 className="font-montserrat  text-[20px]">Projects</h1>
                        <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
                    </div>
                    <h1 className='font-montserrat font-extrabold text-[40px]'>A showcase of the websites I've built, reflecting my skills and creativity in web development.</h1>
                    <ImageHover
                              src="/images/yaguwipa.png"
                              alt="Yayasan Guna Widya Paramesthi"
                              href="https://yaguwipa.org/"
                              title="Yayasan Guna Widya Paramesthi"
                              description="Laravel | Bootstrap | Worked on a foundation website for a client."
                              />
                    
                              <ImageHover
                              src="/images/red-clinic.png"
                              alt="Red Clinic"
                              href="https://design.redsystem.id/klinik/design-2/"
                              title="Red Clinic"
                              description="Worked on company website templates by updating content and layout during internship."
                              />
                </section>
                <Cta/>
                <Footer/>
            </main>
        </>
    )
}