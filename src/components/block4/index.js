import React, { useRef }  from 'react';
import { motion, useTransform } from 'framer-motion';
import { useInViewScroll } from '../useInViewScroll';
import { useInViewAnimate } from '../useInView';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography} from '@material-ui/core';
import Welcome from './welcome';
import Call from './call';
const useStyles = makeStyles( theme => ( {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
    container: {
       [theme.breakpoints.down( 'xl' )]: {
        padding: '10%',
        height: '100%',
        width: '100%',
        },
       [theme.breakpoints.down( 'lg' )]: {
        padding: '100px',
        },
          [theme.breakpoints.down( 'md' )]: {

            marginTop: '1em',
            padding: '70px ',
            },
            [theme.breakpoints.down( 'sm' )]: {
              padding: '100px',
              flexDirection: 'column',
              },
          [theme.breakpoints.down( 'xs' )]: {
          width: '100vw',
          padding: 0,
          margin: 0,
          marginTop: '30px',
          marginLeft: 0,
          }

          },
        textContainer: {
              width: '100%',
             [theme.breakpoints.down( 'xl' )]: {
              marginRight: 0,
               marginLeft: 0,
               },
             [theme.breakpoints.down( 'lg' )]: {
               marginRight: 0,
               marginLeft: '2rem',
              //  marginLeft: '120px',
               },
             [theme.breakpoints.down( 'md' )]: {
              marginLeft: 0,
               },
               [theme.breakpoints.down( 'sm' )]: {
                 marginRight: 0,
                 marginTop: '30px',
                 },
             [theme.breakpoints.down( 'xs' )]: {

               width: '100%',
               marginTop: '40px'
             }
           },
           animation: {
            [theme.breakpoints.down( 'xl' )]: {
              maxWidth: '31em',
              marginRight: 0,

            },
            [theme.breakpoints.down( 'lg' )]: {
              maxWidth: '28em',
              marginTop: '8em',
              marginRight: '1em',
              marginLeft: '3rem',
              marginBottom: '5em',
            },
            [theme.breakpoints.down( 'md' )]: {
              maxWidth: '22em',
              marginTop: '2em',
              marginBottom: '3em',
              // marginRight: '100px'
              marginRight: 0
            },
            [theme.breakpoints.down( 'sm' )]: {
             maxWidth: '19em',
             marginLeft: 0,
             marginTop: '6em',
             marginRight: 0
            },
            [theme.breakpoints.down( 'xs' )]: {
              marginTop: '4em',
              maxWidth: '22em',
            }
          },
          title: {
            [theme.breakpoints.down( 'xl' )]: {
            fontFamily: 'Noto Sans TC, sans-serif',
            fontWeight: 650,
            fontSize: '2.5rem',
             color: '#a8bbff',

            },
            [theme.breakpoints.down( 'lg' )]: {
              fontSize: '2.3rem',
            },
            [theme.breakpoints.down( 'md' )]: {
              fontSize: '1.8rem',
            },
            [theme.breakpoints.down( 'sm' )]: {
              fontSize: '1.6rem',
            },
            [theme.breakpoints.down( 'xs' )]: {
              fontSize: '18px',
            }
          },
          text: {
            [theme.breakpoints.down( 'xl' )]: {
            fontFamily: 'Noto Sans TC, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',

            },
            [theme.breakpoints.down( 'lg' )]: {
              fontSize: '1.4rem',
            },
            [theme.breakpoints.down( 'md' )]: {
              fontSize: '1.3rem',
            },
            [theme.breakpoints.down( 'sm' )]: {
              fontSize: '1.1rem',
            },
            [theme.breakpoints.down( 'xs' )]: {
              fontSize: '1rem',
            }
          }
} ) );

const variants = {
  visible: {  x: 0, transition: { duration: 0.5 } },
  hidden: {  x: 300}
};
const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 300}
};

export default function Block4 () {
  const { inViewRef, animation } = useInViewAnimate( { animate: 'visible' } );

  const ref = useRef( null );

  const progress = useInViewScroll( ref );

  const x = useTransform( progress, [ 0, 1 ], [ 0, 200 ] );


    const classes = useStyles();
    const theme = useTheme();


    const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );


return (
<>
<Grid>


    <Grid container className={classes.container}
    alignItems="center" direction="row">


     <Hidden mdUp>

     <Grid xs item className={classes.textContainer}>

   <div className={classes.title}>
    <span style={{color: '#a8bbff',
    marginRight: matchesXS ? 0 : '.5rem', marginLeft: matchesXS ? '1.25rem' : '.5rem'}}>
      ■</span> Excel NZの主なご提供サービス
    </div>


    <div className={classes.text} style={{marginTop: '20px', marginRight: matchesXS ? '1.5rem' : 0, marginLeft: matchesXS ? '1.5rem' : '2rem'}}>

    <br/>−中学、高校生正規留学案内、及び現地留学サポート
    <br/>−英語習得の為の語学留学案内、及び現地留学サポート
    <br/>−高校卒業後、進路としての大学、各種専門学校の留学案内、及び
    <br/>現地留学サポート
・その他サービス
    <br/>−無料各種学校申し込み代行、海外旅行保険加入代行
        </div>

     </Grid>
     <Grid sm item className={classes.animation}>
         <Welcome/>
       </Grid>

     </Hidden>

     <Hidden smDown>
     <Grid xs item className={classes.textContainer}>
     <motion.div
      ref={inViewRef}
      initial="hidden"
      animate={animation}
      variants={variants}
      className={classes.title}
    >
    <span style={{color: '#a8bbff',
    marginRight: matchesXS ? 0 : '.5rem', marginLeft: matchesXS ? '1.25rem' : '.5rem'}}>
      ■</span> Excel NZの主なご提供サービス
</motion.div>
    <div  className={classes.text} style={{marginTop: '20px', marginRight: matchesXS ? '1.5rem' : 0, marginLeft: matchesXS ? '1.5rem' : '2rem'}}>

    <br/>−中学、高校生正規留学案内、及び現地留学サポート
    <br/>−英語習得の為の語学留学案内、及び現地留学サポート
    <br/>−高校卒業後、進路としての大学、各種専門学校の留学案内、及び
    <br/>現地留学サポート
・その他サービス
    <br/>−無料各種学校申し込み代行、海外旅行保険加入代行
        </div>
     </Grid>


     <Grid xs item className={classes.animation}>

         <Welcome />
      </Grid>
     </Hidden>


    </Grid>

    </Grid>

    <Grid style={{marginTop: '2rem'}}>

    <Call/>

    </Grid>

    </>

   );

}
