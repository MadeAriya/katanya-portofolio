'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();

    return(
        <nav className="relative z-999 flex justify-between p-5 md:mx-25">
            <div>
                <p className='font-island text-4xl'>Ariya</p>
            </div>
            <button id="hamburger" name="hamburger" type="button" className='' onClick={toggleMenu}>
                <span className='w-[43px] h-[5px] my-1 block bg-white rounded-[5px]'></span>
                <span className='w-[43px] h-[5px] my-1 block bg-white rounded-[5px]'></span>
                <span className='w-[43px] h-[5px] my-1 block bg-white rounded-[5px]'></span>
            </button>
            <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex flex-col justify-center items-center gap-10 bg-white fixed top-0 left-0 w-full h-screen"
          >
            <button
              type="button"
              className="self-end absolute top-5 right-5"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-circle-xmark text-black text-5xl p-5"></i>
            </button>
            <li className="font-montserrat font-bold text-5xl text-black">
              <Link href="/" className={pathname == '/' ? 'text-blue-500' : ''}>Home</Link>
            </li>
            <li className="font-montserrat font-bold text-5xl text-black">
              <Link href="/about" className={pathname == '/about' ? 'text-blue-500' : ''}>About Me</Link>
            </li>
            <li className="font-montserrat font-bold text-5xl text-black">
              <Link href="/project" className={pathname == '/project' ? 'text-blue-500' : ''}>Project</Link>
            </li>
            <li className="font-montserrat font-bold text-5xl text-black">
              <Link href="/contact" className={pathname == '/contact' ? 'text-blue-500' : ''}>Contact</Link>
            </li>
            <div className="absolute bottom-4 left-0 w-full px-6 flex justify-between items-center">
                <p className="text-black text-sm">Design & Develop by Ariya</p>
                <div className="space-x-4">
                    <a href="https://www.linkedin.com/in/i-made-ariya-putra"><i className="fa-brands fa-linkedin-in text-black"></i></a>
                    <a href="https://github.com/MadeAriya"><i className="fa-brands fa-github text-black"></i></a>
                    <a href="https://www.instagram.com/mdeariya_"><i className="fa-brands fa-instagram text-black"></i></a>
                    <a href="https://discord.com/users/694010733070909521"><i className="fa-brands fa-discord text-black"></i></a>
                    <a href="https://web.facebook.com/i.m.putra.3576/"><i className="fa-brands fa-facebook text-black"></i></a>
                </div>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
        </nav>
    );
}