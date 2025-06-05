import Navbar from "@/components/navbar";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import LottieScroll from "@/components/LottieScroll";
import ImageHover from "@/components/projectCard";
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-30">
      <Navbar/>

      <section className="flex flex-col justify-center items-center mt-30 gap-4 mx-10 md:mx-0 md:w-auto">
        <h6 className="font-montserrat font-extrabold text-xs md:text-sm text-white">I MADE ARIYA PUTRA</h6>
        <h1 className="font-montserrat font-extrabold text-center md:text-left text-5xl md:text-7xl text-white md:w-[750px]">Website Developer & <span className="text-[#B9A1E0]">Tech Enthusiast</span> </h1> 
        <p className="font-montserrat text-sm md:p-5 md:text-xl text-center md:w-[650px] text-white">Website developer who currently focused on Web Development. Other than that, I also interested in UX/UI Design, Mobile and AI Development, and IOT. I love to learn new things and always open to new opportunities.</p>
        <LottieScroll/>
      </section>

      <section className="mt-40 mx-10 md:mt-40 md:mx-40 flex flex-col gap-4">
        <h1 className='font-poppins text-white text-2xl md:text-6xl font-bold'>Hi There, I'm Ariya</h1>
        <p className="font-montserrat text-white md:text-xl mt-3 text-[15px]">I am a 17-year-old student from Bali passionate about web programming and technology. With experience in designing websites for e-commerce and learning platforms, I’ve mastered the basics of HTML, CSS, JavaScript, and Laravel. Eager to collaborate and innovate, I’m always seeking new challenges and opportunities to grow. Let’s create something impactful together!
        </p>
        {/* <button className="border-1 rounded-[50px] mt-5 h-[55px] w-[200px]">
            <Link href="/about" className="p-5 text-sm text-justify">More About Me</Link>
          </button>    */}
            <Link href="/about" className="flex justify-center items-center border-2 border-[#333336] bg-[linear-gradient(to_right,#6971A266_20%,#1D1D1F_100%)] rounded-[14px] mt-5 h-[55px] w-[200px]">More About Me<Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-3"/></Link>
      </section>

      <div className="mt-20">
        <Image src="/images/mask.png" alt="" width={1400} height={700}/>
      </div>

      <section className="mt-30 mx-3 md:mx-40 flex flex-col">
        <h1 className="font-montserrat text-white text-[40px] font-bold mx-7">Explore My Works</h1>
        <p className="font-montserrat text-white w-[300px] mx-7">Discover innovative web solutions crafted with passion and precision.</p>
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
          </div>

          <div className='mx-auto'>
            <Link href="/about" className="flex justify-center items-center border-2 border-[#333336] bg-[linear-gradient(to_right,#6971A266_20%,#1D1D1F_100%)] rounded-[14px] mt-5 h-[55px] w-[200px]">More Project<Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-3"/></Link>    
          </div>
        </section>

        <Cta/>
        <Footer/>
    </main>
  );
}
