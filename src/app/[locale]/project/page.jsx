'use client'
import { useState } from 'react';
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageHover from '@/components/projectCard';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const projects = [
  {
    src: "/images/yaguwipa.png",
    alt: "Yayasan Guna Widya Paramesthi",
    href: "https://yaguwipa.org/",
    title: "Yayasan Guna Widya Paramesthi",
    description: 'items.yaguwipa.desc',
    techStack: ["Laravel", "Bootstrap", "MySQL"]
  },
  {
    src: "/images/red-clinic.png",
    alt: "Red Clinic",
    href: "https://design.redsystem.id/klinik/design-2/",
    title: "Red Clinic",
    description: 'items.redclinic.desc',
    techStack: ["Bootstrap"]
  },
  {
    src: "/images/payro.png",
    alt: "Workly",
    href: "",
    title: "Workly",
    description: 'items.workly.desc',
    techStack: ["Laravel", "Bootstrap"]
  },
  {
    src: "/images/red-property.png",
    alt: "Red Property",
    href: "https://design.redsystem.id/property/design-1/",
    title: "Red Property",
    description: 'items.redproperty.desc',
    techStack: ["Laravel", "Bootstrap"]
  },
  {
    src: "/images/coffee-aura.png",
    alt: "Coffee Aura",
    href: "",
    title: "Coffee Aura",
    description: 'items.coffeeaura.desc',
    techStack: ["Wordpress"]
  },
  {
    src: "/images/red-hills-villa.png",
    alt: "Red Hills Villa",
    href: "",
    title: "Red Hills Villa",
    description: 'items.redhillsvilla.desc',
    techStack: ["Wordpress"]
  },
  {
    src: "/images/wedding-invitation.png",
    alt: "Wedding Invitation",
    href: "",
    title: "Wedding Invitation",
    description: 'items.weddingInvitation.desc',
    techStack: ["Wordpress"]
  },
  {
    src: "/images/jelajah-bali.png",
    alt: "Jelajah Bali",
    href: "",
    title: "Jelajah Bali",
    galleryImages: ["/images/jelajahbali-1.png", "/images/jelajahbali-2.png", "/images/jelajahbali-3.png"],
    description: 'items.redhillsvilla.desc',
    techStack: ["Wordpress"]
  },
  {
    src: "/images/great-barbershop.png",
    alt: "Barbershop Website",
    href: "",
    title: "Barbershop Website",
    galleryImages: ["/images/great-barbershop-2.png", "/images/great-barbershop-3.png", "/images/great-barbershop-4.png"],
    description: 'items.barbershop.desc',
    techStack: ["Wordpress"]
  }
];

const allTechs = ['All', ...new Set(projects.flatMap(p => p.techStack))];

export default function Project(){
    const t = useTranslations('project');
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.techStack.includes(filter));

    const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    };

    return(
        <>
            <main className='relative z-30 overflow-x-hidden'>
                <Navbar/>
                
                <AnimatedSection>
                  <section className="mx-4 md:mx-16 lg:mx-24 flex flex-col justify-center pt-28 md:pt-36">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-[3px] bg-[#FF6B35]" />
                          <span className="font-montserrat text-sm md:text-base text-[#1A1A2E]/60 uppercase tracking-wider font-bold">{t('title')}</span>
                      </div>
                      <h1 className="font-poppins font-black text-2xl md:text-4xl text-[#1A1A2E] mb-8">{t('description')}</h1>
                      
                      {/* Filter buttons */}
                      <div className="flex flex-wrap gap-3 my-6">
                        {allTechs.map((tech) => (
                          <motion.button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-2.5 text-sm font-bold font-montserrat transition-all duration-200 rounded-sm ${
                              filter === tech
                                ? 'bg-[#FF6B35] text-white border-3 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E]'
                                : 'bg-white text-[#1A1A2E] border-2 border-[#1A1A2E] shadow-[2px_2px_0px_#1A1A2E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E]'
                            }`}
                          >
                            {tech}
                          </motion.button>
                        ))}
                      </div>

                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                      >
                        <AnimatePresence>
                          {filteredProjects.map((project, index) => (
                            <motion.div key={project.title} variants={itemVariants} exit={{ opacity: 0, scale: 0.8 }}>
                                <ImageHover
                                  src={project.src}
                                  alt={project.alt}
                                  href={project.href}
                                  width="600"
                                  height="600"
                                  title={project.title}
                                  description={t(project.description)}
                                  techStack={project.techStack}
                                  galleryImages={project.galleryImages}
                                />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </motion.div>
                  </section>
                </AnimatedSection>
                <Cta/>
                <Footer/>
            </main>
        </>
    )
}