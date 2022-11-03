import React from 'react';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import Call from '../../../public/assets/call.json';

const style = {
  height: '100%',
  width: '100%'
};


export default function CallAnimation () {

  const defaultOptions = {
    animationData: Call

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
        frames: [ 1, 185 ],
      },
    ],
  } );


  return Animation;
};
