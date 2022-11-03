import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


// const banner = {
//   visible: {
//     transition: {
//       staggerChildren: 0.025
//     }
//   }
// };

const letterAni = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, y: 100, }
};

const banner = {
  visible: { opacity: 1, scale: 1, y: 0,  },
  animate: {
    y: 0,
  },
  hidden: { opacity: 0, scale: 0, y: 100,   transition: {
    ease: [ 0.6, 0.01, -0.05, 0.95 ],
    duration: 0,
  }, }
};

const Banner = () => {
  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  console.log( 'ref', ref );
  console.log( 'inview', inView );

  const [ playMarquee, setPlayMarquee ] = useState( false );

  useEffect( () => {
    if ( inView ) {
    setTimeout( () => {
      controls.start( 'visible' );
      setPlayMarquee( true );
    }, 1000 );
  } else {
    setPlayMarquee( false );
    controls.start( 'hidden' );
  }
  }, [ inView, controls  ] );

  const title = 'エクセルNZで留学';
  return (
    <motion.div className='banner' variant='banner' ref={ref}>
      <BannerRowCenter
      title={title}
      animate={controls}
      playMarquee={playMarquee}
      />
    </motion.div>
  );
};


const AnimatedLetters = ( { title, disabled, animate } ) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='hidden'
    animate={animate}>
    {[ ...title ].map( ( letter ) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ) )}
  </motion.span>
);

const BannerRowCenter = ( { title, playMarquee, animate} ) => {

  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className='marquee__inner'>
        <AnimatedLetters title={title} animate={animate} />
        <AnimatedLetters title={title} animate={animate}/>
        <AnimatedLetters title={title} animate={animate} />
        <AnimatedLetters title={title} animate={animate} />
      </motion.div>
    </div>
  );
};

export default Banner;
