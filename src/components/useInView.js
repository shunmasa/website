import { useEffect } from 'react';
import { Target, useAnimation, VariantLabels } from 'framer-motion';
import { IntersectionOptions, useInView } from 'react-intersection-observer';


export const useInViewAnimate = (
  {  hidden, animate },
  options = {}
) => {
  const animation = useAnimation();

  const [ inViewRef, inView ] = useInView( options );

  useEffect( () => {
    if ( hidden ) {
animation.set(  hidden );
};
  }, [] );

  useEffect( () => {
    if ( inView ) {
      animation.start( animate );
    } else if ( hidden && false === options.triggerOnce ) {
      animation.start( hidden );
    }
  }, [ inView ] );

  return { inViewRef, animation };
};
