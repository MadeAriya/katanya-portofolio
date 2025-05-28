'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  { id: 1, content: ( 
    <>
        <h1 className='font-montserrat text-center text-xl my-3 mx-auto font-bold ml-8'>Front End</h1>
        <div className='grid grid-cols-2 justify-center gap-3 mt-2 z-5'>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/tail.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs'>Tailwind</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/re.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs'>React</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/bootstrap.svg" alt='' width={25} height={25}/>
                <p className='font-montserrat text-xs'>Bootstrap</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/html-5-svgrepo-com.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs'>HTML</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/css-3-svgrepo-com.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs'>CSS</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/javascript-logo-svgrepo-com.svg" alt='' width={20} height={20}/>
                <p className='font-montserrat text-xs'>Javascript</p>
            </div>
            
        </div>
    </>
  )},
  { id: 2, content: (
    <>
        <h1 className='font-montserrat text-center text-xl my-3 mx-auto font-bold ml-8'>Back End</h1>
        <div className='grid grid-cols-2 justify-center gap-3 mt-2 z-5'>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/laravel-svgrepo-com.svg" alt='' width={30} height={30}/>
                <p className='font-montserrat text-xs'>Laravel</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/javascript-logo-svgrepo-com.svg" alt='' width={20} height={20}/>
                <p className='font-montserrat text-xs'>Javascript</p>
            </div>
            <div className='flex justify-center gap-2 items-center bg-[#282829] w-full rounded-[10px] p-2 mx-3'>
                <Image src="/images/php-svgrepo-com.svg" alt='' width={25} height={25}/>
                <p className='font-montserrat text-xs'>PHP</p>
            </div>
        </div>
    </>
  )},
  // { id: 3, content: (
  //   <h1>Anjay</h1>
  // )},
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
                className="absolute top-1/2 left-1/2 w-64 h-96 bg-[#38383C] rounded-xl shadow-xl cursor-pointer transition-all duration-500 border-1 border-[#333336]"
                style={{
                    transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 60}px)
                    scale(${offset === 0 ? 1 : 0.9})
                    rotateY(${offset * -15}deg)
                    `,
                    zIndex: cards.length - Math.abs(offset),
                    opacity: offset === 0 ? 1 : 0.5,
                }}
                >
                    <Image src='/images/bg.png' alt='' fill className='absolute top-0 right-0 -z-1'/>
                    <div className='w-[210px]'>
                        {card.content}
                    </div>
                </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-2 flex gap-4">
        <button
          onClick={prevCard}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
        >
          Prev
        </button>
        <button
          onClick={nextCard}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
