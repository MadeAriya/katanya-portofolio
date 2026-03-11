'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  }
  const closeModal = () => setIsModalOpen(false);

  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [src];
  const hasLink = href && href.trim() !== "";

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="project-card group relative h-full w-full flex flex-col rounded-2xl overflow-hidden bg-[#1F2127] border border-white/5 shadow-lg hover:shadow-xl hover:shadow-[#5F399E]/10 hover:border-[#5F399E]/30 transition-all duration-300"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div onClick={openModal} className="cursor-pointer flex-shrink-0 overflow-hidden rounded-t-2xl">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-t-2xl w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white/90 text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {images.length > 1 ? "View Gallery" : "View Fullscreen"}
            </span>
          </div>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h2 className="font-poppins font-bold text-lg md:text-xl text-white tracking-tight">{title}</h2>
        <p className={`font-montserrat text-sm text-white/80 mt-1.5 leading-relaxed ${isExpanded ? '' : 'overflow-hidden'}`} style={!isExpanded ? { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' } : undefined}>
          {isExpanded ? description : `${description.substring(0, 70)}${description.length > 70 ? '...' : ''}`}
        </p>
        {description.length > 70 && (
          <button onClick={toggleDescription} className="text-[#B9A1E0] hover:text-white text-sm font-medium mt-2 transition-colors duration-200">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
        {techStack && techStack.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-white/80 text-xs font-medium border border-white/10"
              >
                {techIcons[tech] ?? null}
                <span className="font-montserrat">{tech}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#1F2127] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-default flex flex-col"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <i className="fa-solid fa-times text-lg"></i>
              </button>
              <div className="relative flex-grow overflow-y-auto p-6">
                <Image
                  src={images[currentImageIndex]}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
              {images.length > 1 && (
                <div className="flex justify-center items-center gap-4 py-4 bg-[#24283C]/50">
                  <button onClick={prevImage} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div className="flex gap-2">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-[#B9A1E0] scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextImage} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              )}
              {hasLink && (
                <div className="absolute bottom-4 right-4 z-50">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-[#5F399E] hover:bg-[#6B44B0] px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#5F399E]/30"
                  >
                    Visit Site
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
