import { RefObject, useEffect } from 'react';
import { MotionValue, useMotionValue, useViewportScroll } from 'framer-motion';

export const useInViewScroll = (
  el,
  options = {}
) => {
  const progress = useMotionValue( 0 );
  const { scrollY } = useViewportScroll();

  useEffect( () => {
    const handleScrollProgress = () => {
      const node = el.current;
      if ( ! node ) {
return;
};

      const threshold = options.threshold || 0;

      const elPosY = node.getBoundingClientRect().top + scrollY.get();
      const elHeight = node.scrollHeight;

      const viewIntersect = Math.max( elPosY - window.innerHeight, 0 );
      const current = scrollY.get() - viewIntersect - threshold;
      const total = Math.min( window.innerHeight, elPosY ) + elHeight - threshold;

      const quotient = current / total;

      if ( 0 < quotient && 1 > quotient ) {
        progress.set( quotient );
      }
    };

    handleScrollProgress();
    const unsubscribeFromScroll = scrollY.onChange( handleScrollProgress );

    return () => unsubscribeFromScroll();
  }, [ el, options ] );

  return progress;
};

