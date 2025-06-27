'use client'
import Link from 'next/link';
import Image from 'next/image';
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageHover from '@/components/projectCard';
import { useTranslations } from 'next-intl';

export default function Project(){
    const t = useTranslations('project');
    return(
        <>
            <main className='relative z-30'>
                <Navbar/>
                
                <section className='mx-3 flex flex-col justify-center md:mx-40 mt-40'>
                    <div className="flex gap-5 items-center">
                        <h1 className="font-montserrat  text-[20px]">{t('title')}</h1>
                        <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
                    </div>
                    <h1 className='font-montserrat font-extrabold text-[40px]'>{t('description')}</h1>
                    <div className='grid md:grid-cols-2 gap-2 md:gap-4 mt-10'>

                                <ImageHover
                                  src="/images/yaguwipa.png"
                                  alt="Yayasan Guna Widya Paramesthi"
                                  href="https://yaguwipa.org/"
                                  width="600"
                                  height="600"
                                  title="Yayasan Guna Widya Paramesthi"
                                  description={t('items.yaguwipa.desc')}
                                  techStack={["Laravel", "Bootstrap", "MySQL"]}
                                  />
                    
                                <ImageHover
                                src="/images/red-clinic.png"
                                alt="Red Clinic"
                                width="600"
                                height="600"
                                href="https://design.redsystem.id/klinik/design-2/"
                                title="Red Clinic"
                                description={t('items.redclinic.desc')}
                                techStack={["Bootstrap"]}
                                />

                                <ImageHover
                                src="/images/payro.png"
                                alt="Workly"
                                width="600"
                                height="600"
                                href=""
                                title="Workly"
                                description={t('items.workly.desc')}
                                techStack={["Laravel", "Bootstrap"]}
                                />

                                <ImageHover
                                src="/images/red-property.png"
                                alt="Red Property"
                                width="600"
                                height="600"
                                href="https://design.redsystem.id/property/design-1/"
                                title="Red Property"
                                description={t('items.redproperty.desc')}
                                techStack={["Laravel", "Bootstrap"]}
                                />

                                <ImageHover
                                src="/images/coffee-aura.png"
                                alt="Coffee Aura"
                                width="600"
                                height="600"
                                href=""
                                title="Coffee Aura"
                                description={t('items.coffeeaura.desc')}
                                techStack={["Wordpress"]}
                                />

								<ImageHover
                                src="/images/red-hills-villa.png"
                                alt="Red Hills Villa"
                                width="600"
                                height="600"
                                href=""
                                title="Red Hills Villa"
                                description={t('items.redhillsvilla.desc')}
                                techStack={["Wordpress"]}
                                />
                            </div>
                </section>
                <Cta/>
                <Footer/>
            </main>
        </>
    )
}