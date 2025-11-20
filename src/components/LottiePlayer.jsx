'use client';
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = ({ src, ...props }) => {
  return (
    <Player
      src={src}
      className="player"
      loop
      autoplay
      {...props}
    />
  );
};

export default LottiePlayer;
