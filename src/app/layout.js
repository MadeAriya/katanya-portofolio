import "./globals.css";
import { poppins, montserrat, island } from '@/app/fonts/font'
import ScrollToTopButton from "@/components/scrollToTop";
import BottomLeftGlow from "@/components/glowEffect";
import  Image  from 'next/image';


export const metadata = {
  title: "Ariya Portofolio",
  description: "Ariya Portofolio | Web Developer | Tech Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${island.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`antialiased select-none`}
      >
        <ScrollToTopButton/>
        <div className="absolute"><Image src="/images/spotlight.png" alt="" width={400} height={400}/></div>
        <div className="absolute right-0 scale-x-[-1]"><Image src="/images/spotlight.png" alt="" width={400} height={400}/></div>
        <div className="absolute w-full h-screen opacity-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/grid-pattern.svg" alt="" fill className="object-cover"
            />
          </div>
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-500 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-pink-500 rounded-full opacity-25 blur-2xl"></div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
