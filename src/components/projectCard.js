'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SiLaravel, SiBootstrap, SiMysql, SiReact, SiTailwindcss, SiExpress, SiMongodb, SiWordpress } from "react-icons/si";

const techIcons = {
  Laravel: <SiLaravel className="text-red-600" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  MySQL: <SiMysql className="text-blue-600" />,
  React: <SiReact className="text-blue-500" />,
  Wordpress: <SiWordpress className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-teal-500" />,
  Express: <SiExpress className="text-gray-700" />,
  MongoDB: <SiMongodb className="text-green-600" />
};

const techColors = {
  Laravel: "bg-red-100 border-red-300",
  Bootstrap: "bg-purple-100 border-purple-300",
  MySQL: "bg-blue-100 border-blue-300",
  React: "bg-sky-100 border-sky-300",
  Wordpress: "bg-indigo-100 border-indigo-300",
  Tailwind: "bg-teal-100 border-teal-300",
  Express: "bg-gray-100 border-gray-300",
  MongoDB: "bg-green-100 border-green-300"
};

export default function ImageHoverView({ src, galleryImages, alt, width, height, href, title, description, techStack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => { setCurrentImageIndex(0); setIsModalOpen(true); }
  const closeModal = () => setIsModalOpen(false);
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [src];
  const hasLink = href && href.trim() !== "";
  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      className="project-card group relative h-full w-full flex flex-col rounded-lg overflow-hidden bg-white"
      style={{
        border: '3px solid #1A1A2E',
        boxShadow: '5px 5px 0px #1A1A2E',
      }}
      whileHover={{
        x: -3,
        y: -3,
        boxShadow: '8px 8px 0px #1A1A2E',
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Image Section */}
      <div
        onClick={openModal}
        className="cursor-pointer flex-shrink-0 overflow-hidden"
        style={{ borderBottom: '3px solid #1A1A2E' }}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Bold label on hover — no gradient, no blur */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span
              className="text-white text-sm font-bold font-poppins px-4 py-2 rounded-sm"
              style={{
                backgroundColor: '#FF6B35',
                border: '2px solid #1A1A2E',
                boxShadow: '2px 2px 0px #1A1A2E',
              }}
            >
              {images.length > 1 ? "★ View Gallery" : "★ View Fullscreen"}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col">
        <h2 className="font-poppins font-black text-lg md:text-xl tracking-tight" style={{ color: '#1A1A2E' }}>
          {title}
        </h2>
        <p
          className={`font-montserrat text-sm mt-1.5 leading-relaxed ${isExpanded ? '' : 'overflow-hidden'}`}
          style={{ color: '#1A1A2E', opacity: 0.75, ...((!isExpanded) ? { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' } : {}) }}
        >
          {isExpanded ? description : `${description.substring(0, 70)}${description.length > 70 ? '...' : ''}`}
        </p>
        {description.length > 70 && (
          <button
            onClick={toggleDescription}
            className="text-sm font-bold mt-2 transition-all duration-200 hover:underline text-left"
            style={{ color: '#FF6B35' }}
          >
            {isExpanded ? '← Read Less' : 'Read More →'}
          </button>
        )}

        {/* Tech Stack Tags */}
        {techStack && techStack.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-bold font-montserrat ${techColors[tech] ?? 'bg-gray-100 border-gray-300'}`}
                style={{
                  border: '2px solid #1A1A2E',
                  boxShadow: '2px 2px 0px #1A1A2E',
                  color: '#1A1A2E',
                }}
              >
                {techIcons[tech] ?? null}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer p-4"
            style={{ backgroundColor: 'rgba(26, 26, 46, 0.85)' }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden cursor-default flex flex-col"
              style={{
                backgroundColor: '#FFFDF7',
                border: '3px solid #1A1A2E',
                boxShadow: '8px 8px 0px #1A1A2E',
              }}
            >
              {/* Close Button — Neo style */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-sm font-bold transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#FF6B9D',
                  border: '3px solid #1A1A2E',
                  boxShadow: '3px 3px 0px #1A1A2E',
                  color: '#1A1A2E',
                }}
              >
                <i className="fa-solid fa-times text-lg"></i>
              </button>

              {/* Image Area */}
              <div className="relative flex-grow overflow-y-auto p-6">
                <Image
                  src={images[currentImageIndex]}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-sm object-contain"
                  style={{ border: '3px solid #1A1A2E' }}
                />
              </div>

              {/* Gallery Navigation */}
              {images.length > 1 && (
                <div
                  className="flex justify-center items-center gap-4 py-4"
                  style={{ borderTop: '3px solid #1A1A2E', backgroundColor: '#FFFDF7' }}
                >
                  <button
                    onClick={prevImage}
                    className="w-10 h-10 flex items-center justify-center rounded-sm font-bold transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#FFE156',
                      border: '3px solid #1A1A2E',
                      boxShadow: '3px 3px 0px #1A1A2E',
                      color: '#1A1A2E',
                    }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div className="flex gap-2">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className="w-3 h-3 rounded-none transition-all"
                        style={{
                          border: '2px solid #1A1A2E',
                          backgroundColor: index === currentImageIndex ? '#FF6B35' : '#FFFFFF',
                          transform: index === currentImageIndex ? 'scale(1.3)' : 'scale(1)',
                        }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextImage}
                    className="w-10 h-10 flex items-center justify-center rounded-sm font-bold transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#FFE156',
                      border: '3px solid #1A1A2E',
                      boxShadow: '3px 3px 0px #1A1A2E',
                      color: '#1A1A2E',
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              )}

              {/* Visit Site Button */}
              {hasLink && (
                <div className="absolute bottom-4 right-4 z-50">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-sm text-sm font-bold font-poppins transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#FF6B35',
                      border: '3px solid #1A1A2E',
                      boxShadow: '4px 4px 0px #1A1A2E',
                    }}
                  >
                    Visit Site <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
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
