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
                    <div className='grid md:grid-cols-2 gap-2 md:gap-4 mt-10'>

                    <ImageHover
                                  src="/images/yaguwipa.png"
                                  alt="Yayasan Guna Widya Paramesthi"
                                  href="https://yaguwipa.org/"
                                  width="600"
                                  height="600"
                                  title="Yayasan Guna Widya Paramesthi"
                                  description="I developed a foundation website for a client to showcase their vision, programs, and donation opportunities. The site is designed to be informative, responsive, and easy to manage."
                                  techStack={["Laravel", "Bootstrap", "MySQL"]}
                                  />
                    
                                <ImageHover
                                src="/images/red-clinic.png"
                                alt="Red Clinic"
                                width="600"
                                height="600"
                                href="https://design.redsystem.id/klinik/design-2/"
                                title="Red Clinic"
                                description="Worked on company website templates by updating content and layout during internship."
                                techStack={["Bootstrap"]}
                                />

                                <ImageHover
                                src="/images/payro.png"
                                alt="Workly"
                                width="600"
                                height="600"
                                href=""
                                title="Workly"
                                description="A smart and complete worker management system designed to simplify your workflow and boost team efficiency."
                                techStack={["Laravel", "Bootstrap"]}
                                />

                                <ImageHover
                                src="/images/red-property.png"
                                alt="Red Property"
                                width="600"
                                height="600"
                                href="https://design.redsystem.id/property/design-1/"
                                title="Red Property"
                                description="Worked on company website templates by updating content and layout during internship."
                                techStack={["Laravel", "Bootstrap"]}
                                />

                                <ImageHover
                                src="/images/coffee-aura.png"
                                alt="Coffee Aura"
                                width="600"
                                height="600"
                                href=""
                                title="Coffee Aura"
                                description="A responsive WordPress-based website created for a local coffee shop. Built using the Wordpress theme and customized with Elementor, this site highlights the brand's identity through a warm and inviting design. Features include a clean homepage, menu section, contact form, and call-to-action buttons — all tailored for a smooth user experience."
                                techStack={["Wordpress"]}
                                />
                                </div>
                </section>
                <Cta/>
                <Footer/>
            </main>
        </>
    )
}