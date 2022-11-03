import React from 'react';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import Click from '../../../public/assets/click.json';
const style = {
  height: '300px',
  width: '300px',
};

export default function ClickAnimation() {
  const defaultOptions = {
    animationData: Click

  };
  const lottieObj = useLottie( defaultOptions, style );

  const Animation = useLottieInteractivity( {
    lottieObj,
    mode: 'scroll',
    loop: true,
    autoplay: true,
    actions: [
      {
        visibility: [ 0, 1.5 ],
        type: 'seek',
        frames: [ 1, 230 ],
      },
    ],
  } );


  return Animation;
};
