'use client'
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
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
            <span className='text-[#1A1A2E] font-bold'>Sending Message..</span>
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

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/i-made-ariya-putra",
            faIcon: "fa-brands fa-linkedin-in",
            label: "LinkedIn",
            bgColor: "bg-[#0077B5]",
        },
        {
            href: "https://www.instagram.com/mdeariya_/",
            faIcon: "fa-brands fa-instagram",
            label: "Instagram",
            bgColor: "bg-[#E1306C]",
        },
        {
            href: "https://github.com/MadeAriya/",
            faIcon: "fa-brands fa-github",
            label: "Github",
            bgColor: "bg-[#1A1A2E]",
        },
        {
            href: "https://discord.com/users/694010733070909521",
            faIcon: "fa-brands fa-discord",
            label: "Discord",
            bgColor: "bg-[#5865F2]",
        },
        {
            href: "https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL",
            faIcon: "fa-brands fa-facebook-f",
            label: "Facebook",
            bgColor: "bg-[#1877F2]",
        },
    ];

    return(
        <>
        <main className='relative z-30'>
                        <Navbar/>
                        
                        <AnimatedSection>
                            <section className='mx-6 md:mx-40 pt-28 md:pt-36 mt-10'>
                                <div className="flex gap-4 items-center">
                                    <h1 className="font-montserrat text-[20px] text-[#1A1A2E] font-bold">{t('title')}</h1>
                                    <span className="w-[80px] h-[3px] bg-[#FF6B35]"></span>
                                </div>
                                <h1 className='font-poppins font-black text-[40px] text-[#1A1A2E] leading-tight mt-1'>{t('sectionTitle')}</h1>
                                <p className='text-[#1A1A2E] mt-2 text-lg'>{t('desc')}</p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='flex gap-4 items-center group transition-transform duration-200 hover:-translate-y-1'
                                        >
                                            <div
                                                className={`w-14 h-14 ${social.bgColor} rounded-sm flex items-center justify-center border-3 border-[#1A1A2E]`}
                                                style={{ boxShadow: '4px 4px 0px #1A1A2E' }}
                                            >
                                                <i className={`${social.faIcon} text-white text-xl`}></i>
                                            </div>
                                            <div className='flex items-center'>
                                                <span className='font-montserrat font-bold text-[#1A1A2E] text-lg group-hover:text-[#FF6B35] transition-colors'>{social.label}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </section>
                        </AnimatedSection>

                        <AnimatedSection>
                            <section className='mx-6 mt-20 md:mx-40'>
                                <h1 className='font-poppins font-black text-[32px] text-[#1A1A2E]'>{t('form.title')}</h1>
                                <form onSubmit={handleSubmit} className='mt-8 grid gap-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder={t('form.name')}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='neo-input bg-white h-14 rounded-[6px] p-4 w-full text-[#1A1A2E] placeholder-[#1A1A2E]/40 font-montserrat border-3 border-[#1A1A2E] outline-none focus:shadow-[4px_4px_0px_#FF6B35] transition-shadow'
                                        />
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder={t('form.email')}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='neo-input bg-white h-14 rounded-[6px] p-4 w-full text-[#1A1A2E] placeholder-[#1A1A2E]/40 font-montserrat border-3 border-[#1A1A2E] outline-none focus:shadow-[4px_4px_0px_#FF6B35] transition-shadow'
                                        />
                                    </div>
                                    <textarea
                                        name='message'
                                        placeholder={t('form.message')}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className='neo-input bg-white w-full h-48 rounded-[6px] p-4 resize-none text-[#1A1A2E] placeholder-[#1A1A2E]/40 font-montserrat border-3 border-[#1A1A2E] outline-none focus:shadow-[4px_4px_0px_#FF6B35] transition-shadow'
                                    ></textarea>

                                    <button
                                        type='submit'
                                        className="flex justify-center items-center bg-[#FF6B35] border-3 border-[#1A1A2E] rounded-[6px] mt-3 h-14 w-full max-w-xs mx-auto md:mx-0 text-white font-poppins font-bold text-lg transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#1A1A2E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1A1A2E] cursor-pointer"
                                        style={{ boxShadow: '4px 4px 0px #1A1A2E' }}
                                    >
                                        {t('form.button')}
                                    </button>
                                </form>
                                {status && (
                                    <div
                                        className={`mt-6 text-center p-4 rounded-[6px] font-montserrat font-bold border-3 border-[#1A1A2E] ${
                                            typeof status === 'string' && status.includes('berhasil')
                                                ? 'bg-[#00D4AA] text-[#1A1A2E]'
                                                : typeof status === 'string' && status.includes('Gagal')
                                                    ? 'bg-[#FF6B9D] text-[#1A1A2E]'
                                                    : 'bg-[#FFE156] text-[#1A1A2E]'
                                        }`}
                                        style={{ boxShadow: '4px 4px 0px #1A1A2E' }}
                                    >
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