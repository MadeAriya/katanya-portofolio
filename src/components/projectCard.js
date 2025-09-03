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

export default function ImageHoverView({ src, galleryImages, alt, width, height, href, title, description, techStack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  }
  const closeModal = () => setIsModalOpen(false);

  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [src];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='relative p-5 h-[auto] w-full bg-[#38383C] border-1 border-[#464649] rounded-xl'>
      <div onClick={openModal} className="cursor-pointer">
        <Image src={src} alt={alt} width={width} height={height} className="rounded-xl z-10 w-full h-auto"/>
      </div>
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
      </div>

      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-11/12 h-5/6 md:w-3/4 md:h-5/6 max-w-4xl bg-gray-900 rounded-lg overflow-hidden cursor-default flex flex-col"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-4xl z-50 hover:text-gray-300"
            >
              &times;
            </button>
            <div className="relative flex-grow w-full h-full overflow-y-auto p-4">
                <Image 
                    src={images[currentImageIndex]} 
                    alt={alt} 
                    width={1200} 
                    height={2000} 
                    layout="responsive" 
                    className="rounded-lg"
                />
            </div>
            <div className="flex justify-center items-center p-2 bg-gray-900 bg-opacity-75">
                <button onClick={prevImage} className="text-white text-2xl mx-2"><i className="fas fa-chevron-left"></i></button>
                <div className="flex space-x-2">
                    {images.map((img, index) => (
                        <div key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'}`}></div>
                    ))}
                </div>
                <button onClick={nextImage} className="text-white text-2xl mx-2"><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className="absolute bottom-4 right-4 z-50">
                <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out">
                Visit Site
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                </Link>
            </div>
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
