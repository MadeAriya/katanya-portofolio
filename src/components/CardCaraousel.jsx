'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skillColors = [
  'bg-[#FFE156]',
  'bg-[#A8E6CF]',
  'bg-[#FFB3BA]',
  'bg-[#87CEEB]',
  'bg-[#DDA0DD]',
  'bg-[#FFA07A]',
  'bg-[#B0E0E6]',
];

const cards = [
  { id: 1, content: ( 
    <>
        <h1 className='font-montserrat text-center text-xl my-3 mx-auto font-black text-[#1A1A2E]'>Front End</h1>
        <div className='grid grid-cols-2 w-[220px] md:w-auto justify-center gap-3 mt-2 z-5 mx-auto'>
            <div className='flex justify-center items-center bg-[#FFE156] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/tail.svg" alt='' width={40} height={40} className='p-2'/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>Tailwind</p>
            </div>
            <div className='flex justify-center gap-1 items-center bg-[#A8E6CF] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/re.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>React</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#FFB3BA] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/bootstrap.svg" alt='' width={20} height={20}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>Bootstrap</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#87CEEB] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/html-5-svgrepo-com.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>HTML</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#DDA0DD] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/css-3-svgrepo-com.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>CSS</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#FFA07A] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/javascript-logo-svgrepo-com.svg" alt='' width={20} height={20}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>Javascript</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#B0E0E6] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/wordpress-color-svgrepo-com.svg" alt='' width={20} height={20}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>Wordpress</p>
            </div>
        </div>
    </>
  )},
  { id: 2, content: (
    <>
        <h1 className='font-montserrat text-center text-xl my-3 mx-auto font-black text-[#1A1A2E]'>Back End</h1>
        <div className='grid grid-cols-1 w-[185px] md:w-auto justify-center items-center gap-3 mt-2 z-5 mx-auto'>
            <div className='flex justify-center gap-2 items-center bg-[#FFE156] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/laravel-svgrepo-com.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>Laravel</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#A8E6CF] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/javascript-logo-svgrepo-com.svg" alt='' width={20} height={20}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>Javascript</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#FFB3BA] w-full rounded-sm p-2 border-2 border-[#1A1A2E]'>
                <Image src="/images/php-svgrepo-com.svg" alt='' width={25} height={25}/>
                <p className='font-montserrat text-xs font-bold text-[#1A1A2E]'>PHP</p>
            </div>
        </div>
    </>
  )},
];

export default function CardCarousel() {
  const [current, setCurrent] = useState(0);

  const prevCard = () => setCurrent((current - 1 + cards.length) % cards.length);
  const nextCard = () => setCurrent((current + 1) % cards.length);

  return (
    <div className="mx-10 relative flex flex-col items-center justify-center w-[auto] h-[500px] overflow-hidden">
      <div className="flex transition-transform duration-700">
        {cards.map((card, index) => {
          const offset = index - current;

          return (
            <motion.div
                key={card.id}
                className="absolute top-1/2 left-1/2 w-[300px] md:w-[300px] h-96 bg-white rounded-lg cursor-pointer transition-all duration-500 border-[3px] border-[#1A1A2E]"
                style={{
                    transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 60}px)
                    scale(${offset === 0 ? 1 : 0.9})
                    rotateY(${offset * -15}deg)
                    `,
                    zIndex: cards.length - Math.abs(offset),
                    opacity: offset === 0 ? 1 : 0.5,
                    boxShadow: offset === 0 ? '6px 6px 0px #1A1A2E' : '4px 4px 0px #1A1A2E',
                }}
                >
                    <div className='w-[220px] mx-auto'>
                        {card.content}
                    </div>
                </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-2 flex gap-4">
        <button
          onClick={prevCard}
          className="px-5 py-2 bg-[#FF6B35] text-white font-bold font-montserrat rounded-sm border-3 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1A1A2E] transition-all duration-150"
        >
          ← Prev
        </button>
        <button
          onClick={nextCard}
          className="px-5 py-2 bg-[#FF6B35] text-white font-bold font-montserrat rounded-sm border-3 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1A1A2E] transition-all duration-150"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
