import React from 'react';
import welcomeAnime from '../../../public/assets/welcome.json';
import { useLottie, useLottieInteractivity } from 'lottie-react';

const style = {
  height: '100%',
  width: '100%'
};


export default function Welcome () {

  const defaultOptions = {
    animationData: welcomeAnime,

  };
  const lottieObj = useLottie( defaultOptions, style );

  const Animation = useLottieInteractivity( {
    lottieObj,
    mode: 'scroll',
    loop: true,
    autoplay: true,
    actions: [
      {
        visibility: [ 0.50, 1.0 ],
        type: 'play'
        }
    ],
  } );


  return Animation;
};

