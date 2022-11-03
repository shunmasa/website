import React from 'react';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import CheckList from '../../../public/assets/check-list.json';
const style = {
  height: '450px',
  width: '450px',
};

export default function CallAnimation () {
  const defaultOptions = {
    animationData: CheckList

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
        frames: [ 1, 230 ],
      },
    ],
  } );


  return Animation;
};
