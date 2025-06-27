'use client';
import Lottie from 'lottie-react';
import scrollDown from '@/assets/lottie/Animation - 1747623153577.json';

export default function LottieScroll() {
  return (
    <>
    <div className="w-10 h-10 filter invert">
      <Lottie animationData={scrollDown} loop={true} />
    </div>
    <p className='text-xs text-white -mt-3'>Scroll Down</p>
    </>
  );
}