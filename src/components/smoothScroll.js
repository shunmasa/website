import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from 'framer-motion';

const SmoothScroll = ( { children } ) => {
  // scroll container
  const scrollRef = useRef( null );
  const [ pageHeight, setPageHeight ] = useState( 0 );

  const resizePageHeight = useCallback( entries => {
    for ( let entry of entries ) {
      setPageHeight( entry.contentRect.height );
    }
  }, [] );

  useLayoutEffect( () => {
    const resizeObserver = new ResizeObserver( entries =>
      resizePageHeight( entries )
    );
    scrollRef && resizeObserver.observe( scrollRef.current );
    return () => resizeObserver.disconnect();
  }, [ scrollRef, resizePageHeight ] );

  const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform( scrollY, [ 0, pageHeight ], [ 0, -pageHeight ] );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring( transform, physics ); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
      >
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
