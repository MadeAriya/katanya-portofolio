'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SiLaravel, SiBootstrap, SiMysql, SiReact, SiTailwindcss, SiExpress, SiMongodb, SiWordpress } from "react-icons/si";

const techIcons = {
  Laravel: <SiLaravel className="text-red-500" />,
  Bootstrap: <SiBootstrap className="text-purple-500" />,
  MySQL: <SiMysql className="text-blue-500" />,
  React: <SiReact className="text-blue-400" />,
  Wordpress: <SiWordpress className="text-blue-400" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />
};

export default function ImageHoverView({ src, alt, width, height, href, title, description, techStack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
      <div className='relative p-5 h-[auto] w-auto bg-[#38383C] border-1 border-[#464649] rounded-xl'>
        <Image src={src} alt={alt} width={width} height={height} className="rounded-xl z-10"/>
        <div className='mt-3'>
          <h1 className='font-montserrat font-bold text-xl'>{title}</h1>
          <p className="font-montserrat">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
            {techStack && (
            <div className="flex gap-3 mt-2 items-center flex-wrap">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-1 text-white text-sm">
                  {techIcons[tech] ?? null}
                  <span className="hidden md:inline font-montserrat">{tech}</span>
                </div>
              ))}
            </div>
          )}
          <div className="z-999">
            <Link href={href} className="text-xs hidden md:block">Visit Site<i className="fa-solid fa-arrow-up-right-from-square mx-2 text-xs"></i></Link>
          </div>
        </div>
    </div>
  );
}

{/* <div className="project-card mt-20 relative w-fit">
          <Image
          src="/images/temp.png"
          alt="Mockup Project MmEK"
          width={600}
          height={100}
          className=""
          />
          <div className="absolute bottom-4 left-4 bg-[#38383C] text-white px-4 py-3 shadow-md w-[250px]">
            <h1 className="font-montserrat text-lg font-semibold">Project MmEK</h1>
            <p className="font-montserrat text-sm text-gray-300">Lorem ipsum dolor sit amet.</p>
          </div>
        </div> */}
