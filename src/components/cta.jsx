import Link from 'next/link';
import  Image  from 'next/image';
import { useTranslations } from 'next-intl';

export default function Cta(){
    const t = useTranslations('home');
    return(
        <>
            <section className='relative mt-30 mx-10 flex flex-col justify-center items-center w-auto h-auto'>
                <div className="absolute w-full h-full z-1">
                            <Image
                              src="/images/grid-pattern.svg" alt="" fill className="object-cover opacity-10"
                            />
                </div>
                <h1 className='font-montserrat font-bold text-[40px]'>{t('cta.title')}</h1>
                <p className='font-montserrat mt-5'>{t('cta.desc')}</p>
                <div className='grid gap-3 mt-10 grid-cols-3 md:grid-cols-5 z-5'>
                    <Link href="https://www.linkedin.com/in/i-made-ariya-putra" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#0077B5] rounded-[5px] flex items-center justify-center'>
                    <Image src="/images/linkedin.svg" alt="" width={30} height={30} className='my-auto'/>
                    </Link>
                    <a href="https://www.instagram.com/mdeariya_/" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#E1306C] rounded-[5px] flex items-center justify-center'>
                    <Image src="/images/instagram.svg" alt="" width={30} height={30} className='my-auto'/>
                    </a>
                    <a href="https://github.com/MadeAriya/" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#000000] rounded-[5px] flex items-center justify-center'>
                    <Image src="/images/github.svg" alt="" width={60} height={60} className='my-auto'/>
                    </a>
                    <a href="https://discord.com/users/694010733070909521" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#5865F2] rounded-[5px] flex items-center justify-center'>
                    <Image src="/images/discord.svg" alt="" width={30} height={30} className='my-auto'/>
                    </a>
                    <a href="https://www.facebook.com/i.m.putra.3576?mibextid=ZbWKwL" className='w-[60px] h-[60px] bg-gradient-to-br from-[#D9D9D9] to-[#1877F2] rounded-[5px] flex items-center justify-center'>
                    <Image src="/images/facebook.svg" alt="" width={30} height={30} className='my-auto'/>
                    </a>
                    
                </div>
            </section>
        </>
    )
}