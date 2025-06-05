'use client'
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useState } from 'react'

export default function Contact(){
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
                        
                        <section className='mx-10 md:mx-40 mt-40'>
                            <div className="flex gap-5 items-center">
                                <h1 className="font-montserrat  text-[20px]">Contact</h1>
                                <span className="w-[80px] h-[5px] bg-[#38383C]"></span>
                            </div>
                            <h1 className='font-montserrat font-extrabold text-[40px]'>Get In Touch</h1>
                            <p>if you're interested in hiring me or collaborating, feel free to reach out for recruitment, partnership or follow to stay in touch</p>
                            <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mt-10 justify-items-start justify-center items-start md:items-center'>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <a href="https://www.linkedin.com/in/i-made-ariya-putra" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#0077B5] rounded-[5px] flex items-center justify-center'>
                                        <Image src="/images/linkedin.svg" alt="" width={30} height={30} className='my-auto'/>
                                        </a>
                                        <Link href='https://www.linkedin.com/in/i-made-ariya-putra'>Linkedin</Link><Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10}/>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <a href="https://www.instagram.com/mdeariya_/" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#E1306C] rounded-[5px] flex items-center justify-center'>
                                        <Image src="/images/instagram.svg" alt="" width={30} height={30} className='my-auto'/>
                                        </a>
                                        <Link href='https://www.instagram.com/mdeariya_/'>Instagram</Link><Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10}/>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <a href="https://github.com/MadeAriya/" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#000] rounded-[5px] flex items-center justify-center'>
                                        <Image src="/images/github.svg" alt="" width={60} height={60} className='my-auto'/>
                                        </a>
                                        <Link href='https://github.com/MadeAriya/'>Github</Link><Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10}/>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <a href="https://discord.com/users/694010733070909521" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#5865F2] rounded-[5px] flex items-center justify-center'>
                                        <Image src="/images/discord.svg" alt="" width={30} height={30} className='my-auto'/>
                                        </a>
                                        <Link href='https://discord.com/users/694010733070909521'>Discord</Link><Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10}/>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <a href="https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#1877F2] rounded-[5px] flex items-center justify-center'>
                                        <Image src="/images/facebook.svg" alt="" width={30} height={30} className='my-auto'/>
                                        </a>
                                        <Link href='https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL'>Facebook</Link><Image src="/images/Arrow.svg" alt="Arrow" width={10} height={10}/>
                                    </div>
                            </div>
                        </section>

                        <section className='mx-10 mt-30 md:mx-40'>
                            <h1 className='font-montseerrat font-extrabold text-[32px]'>Or send me a message</h1>
                            <form onSubmit={handleSubmit} className='mt-10 grid'>
                                <div className='grid grid-cols-1 md:grid-cols-2'>
                                    <input type='text' name='name' placeholder='Insert Name' value={formData.name} onChange={handleChange} required className='bg-[#38383C] md:w-[430px] h-[56px] rounded-[15px] p-2'/>
                                    <input type='email' name='email' placeholder='Insert Email' value={formData.email} onChange={handleChange} required className='bg-[#38383C] md:w-[300px] h-[56px] rounded-[15px] p-2 mt-3 md:mt-0'/>
                                </div>
                                <textarea name='message' placeholder='Insert Email' value={formData.message} onChange={handleChange} required className='bg-[#38383C] w-auto md:w-[780px] h-[300px] rounded-[15px] p-2 mt-5 resize-none'></textarea>

                                <button type='submit' className="flex justify-center items-center border-2 border-[#333336] bg-[linear-gradient(to_right,#6971A266_20%,#1D1D1F_100%)] rounded-[14px] mt-5 h-[55px] w-[200px]">Send Message</button>
                            </form>
                            <p>{status}</p>
                        </section>
                        
        <Cta/>
        <Footer/>
        </main>
        </>
    )
}