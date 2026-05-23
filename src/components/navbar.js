'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLocale } from 'next-intl';

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();
    const locale = useLocale();
    const router = useRouter();

  const switchLocale = (newLocale) => {
    const newPath = pathname.replace(/^\/(en|id)/, `/${newLocale}`);
    router.push(newPath);
  };

    return(
        <nav className="fixed top-0 left-0 w-full z-[999] flex justify-between items-center px-6 py-4 md:px-12 md:py-5 bg-[#FFFDF7] border-b-[3px] border-[#1A1A2E]">
            {/* Logo */}
            <div>
                <p className="font-island text-5xl md:text-6xl text-[#1A1A2E] select-none">Ayak Dev</p>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
                {/* Chat Room Button — Neo Brutalism */}
                <Link
                    href={`/${locale}/chat`}
                    className="hidden sm:flex items-center gap-2 font-montserrat font-bold text-sm text-[#1A1A2E] bg-[#FFE156] border-[3px] border-[#1A1A2E] rounded-[6px] px-4 py-2 shadow-[3px_3px_0px_#1A1A2E] transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1A1A2E]"
                >
                    <i className="fa-solid fa-comments"></i>
                    Chat Room
                </Link>

                {/* Language Switcher */}
                <div className="flex items-center border-[2px] border-[#1A1A2E] rounded-[6px] overflow-hidden">
                    <button
                        onClick={() => switchLocale('en')}
                        className={`px-3 py-1.5 text-sm font-montserrat font-bold text-[#1A1A2E] transition-colors duration-150 ${
                            locale === 'en'
                                ? 'bg-[#FFE156]'
                                : 'bg-[#FFFDF7] hover:bg-[#FFE156]/40'
                        }`}
                    >
                        EN
                    </button>
                    <span className="w-[2px] h-6 bg-[#1A1A2E]"></span>
                    <button
                        onClick={() => switchLocale('id')}
                        className={`px-3 py-1.5 text-sm font-montserrat font-bold text-[#1A1A2E] transition-colors duration-150 ${
                            locale === 'id'
                                ? 'bg-[#FFE156]'
                                : 'bg-[#FFFDF7] hover:bg-[#FFE156]/40'
                        }`}
                    >
                        ID
                    </button>
                </div>

                {/* Hamburger Button */}
                <button
                    id="hamburger"
                    name="hamburger"
                    type="button"
                    className="flex flex-col justify-center items-center gap-[6px] p-2 ml-1 border-[3px] border-[#1A1A2E] rounded-[6px] bg-[#FFFDF7] shadow-[3px_3px_0px_#1A1A2E] transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1A1A2E]"
                    onClick={toggleMenu}
                >
                    <span className="w-[28px] h-[4px] block bg-[#1A1A2E] rounded-[2px]"></span>
                    <span className="w-[28px] h-[4px] block bg-[#1A1A2E] rounded-[2px]"></span>
                    <span className="w-[28px] h-[4px] block bg-[#1A1A2E] rounded-[2px]"></span>
                </button>
            </div>

            {/* Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="flex flex-col justify-center items-center gap-8 md:gap-10 bg-[#FFFDF7] fixed top-0 left-0 w-full h-screen z-[1000]"
                    >
                        {/* Close Button — Neo Style */}
                        <button
                            type="button"
                            className="absolute top-5 right-5 flex items-center justify-center w-14 h-14 bg-[#FFFDF7] border-[3px] border-[#1A1A2E] rounded-[6px] shadow-[3px_3px_0px_#1A1A2E] transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1A1A2E]"
                            onClick={toggleMenu}
                        >
                            <i className="fa-solid fa-xmark text-[#1A1A2E] text-3xl"></i>
                        </button>

                        {/* Nav Links */}
                        <li className="list-none">
                            <Link
                                href={`/${locale}`}
                                className={`font-montserrat font-bold text-3xl md:text-5xl text-[#1A1A2E] px-4 py-1 rounded-[4px] transition-all duration-150 hover:bg-[#FFE156]/60 ${
                                    pathname === `/${locale}` ? 'bg-[#FFE156] shadow-[3px_3px_0px_#1A1A2E] border-[2px] border-[#1A1A2E]' : ''
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                href={`/${locale}/about`}
                                className={`font-montserrat font-bold text-3xl md:text-5xl text-[#1A1A2E] px-4 py-1 rounded-[4px] transition-all duration-150 hover:bg-[#FFE156]/60 ${
                                    pathname === `/${locale}/about` ? 'bg-[#FFE156] shadow-[3px_3px_0px_#1A1A2E] border-[2px] border-[#1A1A2E]' : ''
                                }`}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                href={`/${locale}/project`}
                                className={`font-montserrat font-bold text-3xl md:text-5xl text-[#1A1A2E] px-4 py-1 rounded-[4px] transition-all duration-150 hover:bg-[#FFE156]/60 ${
                                    pathname === `/${locale}/project` ? 'bg-[#FFE156] shadow-[3px_3px_0px_#1A1A2E] border-[2px] border-[#1A1A2E]' : ''
                                }`}
                            >
                                Project
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                href={`/${locale}/contact`}
                                className={`font-montserrat font-bold text-3xl md:text-5xl text-[#1A1A2E] px-4 py-1 rounded-[4px] transition-all duration-150 hover:bg-[#FFE156]/60 ${
                                    pathname === `/${locale}/contact` ? 'bg-[#FFE156] shadow-[3px_3px_0px_#1A1A2E] border-[2px] border-[#1A1A2E]' : ''
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                href={`/${locale}/pricing`}
                                className={`font-montserrat font-bold text-3xl md:text-5xl text-[#1A1A2E] px-4 py-1 rounded-[4px] transition-all duration-150 hover:bg-[#FFE156]/60 ${
                                    pathname === `/${locale}/pricing` ? 'bg-[#FFE156] shadow-[3px_3px_0px_#1A1A2E] border-[2px] border-[#1A1A2E]' : ''
                                }`}
                            >
                                Plan & Pricing
                            </Link>
                        </li>

                        {/* Bottom Bar */}
                        <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex justify-between items-center border-t-[3px] border-[#1A1A2E]">
                            <p className="text-[#1A1A2E] text-sm font-montserrat font-semibold">
                                Design & Develop by <span className="font-island text-2xl ml-1">Ayak Dev</span>
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.linkedin.com/in/i-made-ariya-putra"
                                    className="flex items-center justify-center w-9 h-9 bg-[#FFFDF7] border-[2px] border-[#1A1A2E] rounded-[4px] shadow-[2px_2px_0px_#1A1A2E] transition-all duration-150 hover:bg-[#00D4AA] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E]"
                                >
                                    <i className="fa-brands fa-linkedin-in text-[#1A1A2E]"></i>
                                </a>
                                <a
                                    href="https://github.com/MadeAriya"
                                    className="flex items-center justify-center w-9 h-9 bg-[#FFFDF7] border-[2px] border-[#1A1A2E] rounded-[4px] shadow-[2px_2px_0px_#1A1A2E] transition-all duration-150 hover:bg-[#FF6B9D] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E]"
                                >
                                    <i className="fa-brands fa-github text-[#1A1A2E]"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/mdeariya_"
                                    className="flex items-center justify-center w-9 h-9 bg-[#FFFDF7] border-[2px] border-[#1A1A2E] rounded-[4px] shadow-[2px_2px_0px_#1A1A2E] transition-all duration-150 hover:bg-[#FF6B35] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E]"
                                >
                                    <i className="fa-brands fa-instagram text-[#1A1A2E]"></i>
                                </a>
                                <a
                                    href="https://discord.com/users/694010733070909521"
                                    className="flex items-center justify-center w-9 h-9 bg-[#FFFDF7] border-[2px] border-[#1A1A2E] rounded-[4px] shadow-[2px_2px_0px_#1A1A2E] transition-all duration-150 hover:bg-[#7B2FF2] hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E]"
                                >
                                    <i className="fa-brands fa-discord text-[#1A1A2E]"></i>
                                </a>
                                <a
                                    href="https://web.facebook.com/i.m.putra.3576/"
                                    className="flex items-center justify-center w-9 h-9 bg-[#FFFDF7] border-[2px] border-[#1A1A2E] rounded-[4px] shadow-[2px_2px_0px_#1A1A2E] transition-all duration-150 hover:bg-[#FFE156] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E]"
                                >
                                    <i className="fa-brands fa-facebook text-[#1A1A2E]"></i>
                                </a>
                            </div>
                        </div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}