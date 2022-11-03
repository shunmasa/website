import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { motion, useViewportScroll, useTransform, useAnimation, useAnimationFrame} from 'framer-motion';
import dynamic from 'next/dynamic';
const Main = dynamic( ()=>{
return import( './Main' );
}, {
  ssr: false
} );


const variant = {
  hidden: {
    y: '80%',
    transition: { ease: [ 0.455, 0.03, 0.515, 0.955 ], duration: 0.55 }
  },
  visible: {
    y: 0,
    transition: { ease: [ 0.455, 0.03, 0.515, 0.955 ], duration: 1.05 }
  }
};


const useStyles = makeStyles( theme => ( {
  primaryContainer: {
    height: '100%',
      position: 'relative',
    background: '#fff',


  },

  galleryContainer: {

    marginBottom: '1em',

      width: '100%',
      marginTop: '10em',
      marginRight: 0,
      marginLeft: 0,
      [theme.breakpoints.down( 'lg' )]: {
        width: '100%',

        marginTop: '2em'
        },
    [theme.breakpoints.down( 'md' )]: {
      width: '100%',
      marginRight: 0,
      marginLeft: 0,
      },
      [theme.breakpoints.down( 'sm' )]: {
        width: '100%',
      // maxWidth: '768px',

        marginRight: 0,
        marginLeft: 0
        },
    [theme.breakpoints.down( 'xs' )]: {
    margin: 0,
    width: '100%',
    marginTop: 0,
    height: '100%',

    boxShadow: 'none'
    }
  }


} ) );


export default function About() {
  const control = useAnimation();
  const [ ref, inView ] = useInView();
  useEffect( () => {
    if ( inView ) {
      control.start( 'visible' );
    } else {
      control.start( 'hidden' );
    }
  }, [ control, inView ] );

  const classes = useStyles();

  return (
<>


<motion.div initial='initial'
      animate='animate'
      exit='exit'
      >


 <Grid container className={classes.primaryContainer} direction="column">


  <Grid item container className={classes.galleryContainer}>


  <motion.div
      className="box"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >

 <div className='model'>

              <span className='first' >

               ニュージーランド
              </span>
              <span className="last" >
                留学の魅力
              </span>
          </div>
            </motion.div>
 <Main/>

 </Grid>


    </Grid>
    </motion.div>
    </>
  );
}


