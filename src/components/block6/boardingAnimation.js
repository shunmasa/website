import React from 'react';
import Boarding from '../../../public/assets/boarding.json';
import { useLottie, useLottieInteractivity } from 'lottie-react';

const style = {
  height: '100%',
  width: '100%'
};


export default function CallAnimation () {

  const defaultOptions = {
    animationData: Boarding

  };
  const lottieObj = useLottie( defaultOptions, style );

  const Animation = useLottieInteractivity( {
    lottieObj,
    mode: 'scroll',
    loop: true,
    autoplay: true,
    actions: [
      {
        visibility: [ 0, 1.0 ],
        type: 'seek',
        frames: [ 1, 170 ]
      }
    ],
  } );


  return Animation;
};
