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
            <main className='relative z-30'>
                <Navbar/>
                
                <AnimatedSection>
                  <section className="mx-4 md:mx-16 lg:mx-24 flex flex-col justify-center mt-24 md:mt-32">
                      <div className="flex items-center gap-4 mb-2">
                          <span className="w-12 h-1 rounded-full bg-[#5F399E]" />
                          <span className="font-montserrat text-sm md:text-base text-white/60 uppercase tracking-wider">{t('title')}</span>
                      </div>
                      <h1 className="font-poppins font-bold text-2xl md:text-4xl text-white mb-8">{t('description')}</h1>
                      
                      <div className="flex flex-wrap gap-3 my-6">
                        {allTechs.map((tech) => (
                          <motion.button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                              filter === tech
                                ? 'bg-[#5F399E] text-white shadow-lg shadow-[#5F399E]/30 border border-[#5F399E]'
                                : 'bg-[#24283C] text-white/80 hover:bg-[#2d3350] hover:text-white border border-white/5'
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