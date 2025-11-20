'use client'
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useState } from 'react'
import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/AnimatedSection';

export default function Contact(){
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(
        <>
            <span className='bg-white w-[100px] h-[30px]'>Sending Message..</span>
        </>
        );

        const res = await fetch('/api/email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
        
        const result = await res.json();
        if(result.success){
            setStatus('Email berhasil terkirim');
            setFormData({name: '', email: '', message: ''});
        } else {
            setStatus('Gagal mengirim', result.error)
        }
    };

    return(
        <>
        <main className='relative z-30'>
                        <Navbar/>
                        
                        <AnimatedSection>
                            <section className='mx-10 md:mx-40 mt-40'>
                                <div className="flex gap-5 items-center">
                                    <h1 className="font-montserrat  text-[20px]">{t('title')}</h1>
                                    <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
                                </div>
                                <h1 className='font-montserrat font-extrabold text-[40px]'>{t('sectionTitle')}</h1>
                                <p>{t('desc')}</p>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10'>
                                    <a href="https://www.linkedin.com/in/i-made-ariya-putra" className='flex gap-4 items-center social-link-hover'>
                                        <div className='w-16 h-16 bg-gradient-to-br from-[#D9D9D9] to-[#0077B5] rounded-lg flex items-center justify-center'>
                                            <Image src="/images/linkedin.svg" alt="LinkedIn" width={40} height={40}/>
                                        </div>
                                        <div className='flex items-center'>
                                            <span>LinkedIn</span>
                                            <Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-2"/>
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/mdeariya_/" className='flex gap-4 items-center social-link-hover'>
                                        <div className='w-16 h-16 bg-gradient-to-br from-[#D9D9D9] to-[#E1306C] rounded-lg flex items-center justify-center'>
                                            <Image src="/images/instagram.svg" alt="Instagram" width={40} height={40}/>
                                        </div>
                                        <div className='flex items-center'>
                                            <span>Instagram</span>
                                            <Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-2"/>
                                        </div>
                                    </a>
                                    <a href="https://github.com/MadeAriya/" className='flex gap-4 items-center social-link-hover'>
                                        <div className='w-16 h-16 bg-gradient-to-br from-[#D9D9D9] to-[#000] rounded-lg flex items-center justify-center'>
                                            <Image src="/images/github.svg" alt="Github" width={40} height={40}/>
                                        </div>
                                        <div className='flex items-center'>
                                            <span>Github</span>
                                            <Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-2"/>
                                        </div>
                                    </a>
                                    <a href="https://discord.com/users/694010733070909521" className='flex gap-4 items-center social-link-hover'>
                                        <div className='w-16 h-16 bg-gradient-to-br from-[#D9D9D9] to-[#5865F2] rounded-lg flex items-center justify-center'>
                                            <Image src="/images/discord.svg" alt="Discord" width={40} height={40}/>
                                        </div>
                                        <div className='flex items-center'>
                                            <span>Discord</span>
                                            <Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-2"/>
                                        </div>
                                    </a>
                                    <a href="https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL" className='flex gap-4 items-center social-link-hover'>
                                        <div className='w-16 h-16 bg-gradient-to-br from-[#D9D9D9] to-[#1877F2] rounded-lg flex items-center justify-center'>
                                            <Image src="/images/facebook.svg" alt="Facebook" width={40} height={40}/>
                                        </div>
                                        <div className='flex items-center'>
                                            <span>Facebook</span>
                                            <Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10} className="ml-2"/>
                                        </div>
                                    </a>
                                </div>
                            </section>
                        </AnimatedSection>

                        <AnimatedSection>
                            <section className='mx-10 mt-30 md:mx-40'>
                                <h1 className='font-montserrat font-extrabold text-[32px]'>{t('form.title')}</h1>
                                <form onSubmit={handleSubmit} className='mt-10 grid gap-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <input type='text' name='name' placeholder={t('form.name')} value={formData.name} onChange={handleChange} required className='bg-[#38383C] h-14 rounded-lg p-4 w-full form-input-focus'/>
                                        <input type='email' name='email' placeholder={t('form.email')} value={formData.email} onChange={handleChange} required className='bg-[#38383C] h-14 rounded-lg p-4 w-full form-input-focus'/>
                                    </div>
                                    <textarea name='message' placeholder={t('form.message')} value={formData.message} onChange={handleChange} required className='bg-[#38383C] w-full h-48 rounded-lg p-4 resize-none form-input-focus'></textarea>

                                    <button type='submit' className="flex justify-center items-center border-2 border-[#333336] bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-lg mt-5 h-14 w-full max-w-xs mx-auto md:mx-0 text-white font-bold">
                                        {t('form.button')}
                                    </button>
                                </form>
                                {status && (
                                    <div className={`mt-4 text-center p-3 rounded-lg ${status.includes('berhasil') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {status}
                                    </div>
                                )}
                            </section>
                        </AnimatedSection>
                        
        <Cta/>
        <Footer/>
        </main>
        </>
    )
}