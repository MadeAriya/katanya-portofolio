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
    description: 'items.jelajahbali.desc',
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
                  <section className='mx-3 flex flex-col justify-center md:mx-40 mt-40'>
                      <div className="flex gap-5 items-center">
                          <h1 className="font-montserrat  text-[20px]">{t('title')}</h1>
                          <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
                      </div>
                      <h1 className='font-montserrat font-extrabold text-[40px]'>{t('description')}</h1>
                      
                      <div className="flex flex-wrap gap-4 my-8">
                        {allTechs.map(tech => (
                          <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${filter === tech ? 'bg-purple-600 text-white' : 'bg-[#38383C] text-white hover:bg-purple-500'}`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>

                      <motion.div
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'
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