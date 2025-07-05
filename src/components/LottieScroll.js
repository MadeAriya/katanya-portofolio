'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import React from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieScroll = () => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    import('@/assets/lottie/Animation - 1747623153577.json').then(setAnimationData);
  }, []);

  return (
    <div className="w-10 h-10 filter invert">
      {animationData && <Lottie animationData={animationData} loop={true} />}
    </div>
  );
};


export default function LottieScrollWrapper() {
  return (
    <>
      <Suspense fallback={<div className="w-10 h-10" />}>
        <LottieScroll />
      </Suspense>
      <p className='text-xs text-white -mt-3'>Scroll Down</p>
    </>
  );
}
