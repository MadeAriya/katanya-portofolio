'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ImageHoverView({ src, alt, width, height, href, title, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="project-card group mt-10 relative w-[340px] h-[200px] md:w-[1000px] md:h-[500px]">
      <Image src={src} alt={alt} width={width} height={height} fill className="object-cover"/>

      <div className="absolute bottom-4 left-4 right-4 bg-[#38383C] z-3 text-white px-4 py-3 shadow-md w-500px flex justify-between items-center opacity-50">
        <span>
        <h1 className="font-montserrat text-sm md:text-lg font-semibold">{title}</h1>
            <p className="font-montserrat text-xs md:text-sm text-gray-300">{description}</p>
        </span>
            <Link href={href} className="text-xs hidden md:block">Visit Site<i className="fa-solid fa-arrow-up-right-from-square mx-2 text-xs"></i></Link>
          </div>
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/40 md:opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg"
      >
        <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white bg-opacity-20 p-2 rounded-full shadow-lg text-black text-sm font-semibold"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
      </div>
      {isModalOpen && (
          <div className="fixed inset-0 bg-[#1D1D1F] bg-opacity-60 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300"
              >
              <i className="fa-solid fa-circle-xmark text-black text-5xl p-5"></i>
              </button>
  
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
      )}
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
