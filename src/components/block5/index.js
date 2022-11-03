import React from 'react';
import Hidden from '@material-ui/core/Hidden';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, Button} from '@material-ui/core';
import ButtonArrow from '../buttonArrow';
import Link from 'next/link';
const useStyles = makeStyles( theme => ( {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexGrow: 1,
  height: '100vh',
    container: {
       [theme.breakpoints.down( 'xl' )]: {
        padding: '140px',
        height: '100%',
        width: '100%',
        },
       [theme.breakpoints.down( 'lg' )]: {
        padding: '100px 100px 0 100px',
        },
          [theme.breakpoints.down( 'md' )]: {
            // marginTop: '10em',
            padding: '70px',
            },
            [theme.breakpoints.down( 'sm' )]: {
              padding: '20px',
              flexDirection: 'column',
              },
          [theme.breakpoints.down( 'xs' )]: {
          width: '100vw',
          padding: 0,
          marginTop: '40px',
          }

          },
        textContainer: {
              width: '100%',
             [theme.breakpoints.down( 'xl' )]: {

               marginLeft: '6rem',
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
                 marginTop: 0,
                 width: '80%',
                 },
             [theme.breakpoints.down( 'xs' )]: {

               width: '90%',
               marginTop: '40px'
             }
           },
           animation: {
            position: 'relative',
            [theme.breakpoints.down( 'xl' )]: {
              maxWidth: '28em',
              marginBottom: '4rem'

            },
            [theme.breakpoints.down( 'lg' )]: {
              maxWidth: '21em',
              marginRight: 0,
              marginLeft: '-5em',
            },
            [theme.breakpoints.down( 'md' )]: {
              maxWidth: '10em',
              marginTop: '1em',
              marginRight: '2.5rem',
              marginBottom: '3em'
            },
            [theme.breakpoints.down( 'sm' )]: {
             maxWidth: '19em',
             marginRight: 0,
             marginLeft: 0,
            },
            [theme.breakpoints.down( 'xs' )]: {
              maxWidth: '100%',
              marginLeft: '-10px',
            }
          },
          title: {
            [theme.breakpoints.down( 'xl' )]: {
            fontFamily: 'Noto Sans TC, sans-serif',
            fontWeight: 650,
            marginBottom: '40px',
            fontSize: '2.5rem',
             color: '#a8bbff',

            },
            [theme.breakpoints.down( 'lg' )]: {
              fontSize: '2.3rem',
            },
            [theme.breakpoints.down( 'md' )]: {
              fontSize: '1.8rem',
              marginBottom: '20px',
            },
            [theme.breakpoints.down( 'sm' )]: {
              fontSize: '1.6rem',
            },
            [theme.breakpoints.down( 'xs' )]: {
              fontSize: '18px',
              marginLeft: '.5rem'
            }
          },
          text_img_container: {
            // display: 'flex',
            // flexDirection: 'column',
            width: '100%',
            // justifyContent: 'center',
            // alignItems: 'baseline',
            // alignContent: 'space-around',
          },
          text_img: {
            height: '30px',
            [theme.breakpoints.down( 'xl' )]: {
                marginBottom: '30px'
                },
                [theme.breakpoints.down( 'lg' )]: {

                },
                [theme.breakpoints.down( 'md' )]: {
                  marginBottom: '30px',
                  width: '63vw',
                  display: 'inline-block',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                },
                [theme.breakpoints.down( 'sm' )]: {
                  display: 'block',
                  width: '80vw',
                },
                [theme.breakpoints.down( 'xs' )]: {
                  whiteSpace: 'unset',
                  height: '50px',
                }

          },
          text: {
            [theme.breakpoints.down( 'xl' )]: {
            fontFamily: 'Noto Sans TC, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            display: 'inline-block',
            marginLeft: '10px',
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
              marginLeft: '35px',
            }
          },
          check: {
            marginBottom: '-20px',
            [theme.breakpoints.down( 'lg' )]: {
            },
            [theme.breakpoints.down( 'md' )]: {
            },
            [theme.breakpoints.down( 'sm' )]: {
              marginBottom: '-14px',
            },
            [theme.breakpoints.down( 'xs' )]: {
              marginBottom: '-40px',
              marginRight: '20px'
            }
          },
            check2: {
              marginBottom: 0,
              [theme.breakpoints.down( 'lg' )]: {
              },
              [theme.breakpoints.down( 'md' )]: {
              },
              [theme.breakpoints.down( 'sm' )]: {
                marginBottom: 0,
              },
              [theme.breakpoints.down( 'xs' )]: {
                marginBottom: '-35px',
              }

          },
          btn: {
                 position: 'relative',
                  marginTop: '1em',
                  border: '2px solid #2930c2',
                  borderWidth: 3,
                  textTransform: 'none',
                  borderRadius: 50,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  height: 80,
                  padding: 8,
                  textDecoration: 'none',
                  width: 250,
                cursor: 'pointer',
                color: '#2930c2',
                backgroundSize: '200%',
                backgroundColor: '#fff',
                transition: 'all 0.3s ease-out',
                '&:hover': {
                  backgroundPosition: 'right',
                  background: '#2930c2',
                  color: '#fff',
                },
                  [theme.breakpoints.down( 'lg' )]: {
                    marginLeft: 0
                  },
                   [theme.breakpoints.down( 'md' )]: {
                    marginLeft: '-40px',
                    width: 230,
                  },
                  [theme.breakpoints.down( 'sm' )]: {
                    marginLeft: 0,
                    width: 230,
                  }
              }
} ) );

export default function Block5 () {


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
   <span  style={{color: '#a8bbff', marginRight: matchesXS ? '5px' : '.5rem', marginLeft: 0}}>
     ■</span>1つでも当てはまった人は 今すぐ相談
</div>

<div className={classes.text_img}>
 <img className={classes.check}src="/assets/checkmark.svg"style={{ height: matchesXS ? '1.8rem' : '2rem',
width: matchesXS ? '1.8rem' : '2rem'}} alt="clip"/><span className={classes.text}>ニュージーランドに興味があり、
ニュージーランドに留学してみたい。</span>
 </div>
           <div className={classes.text_img}><img className={classes.check} src="/assets/checkmark.svg"style={{ height: matchesXS ? '1.8rem' : '3rem',
width: matchesXS ? '1.8rem' : '2rem'}} alt="clip"/><span className={classes.text}>
           留学を通して、いろんなことに挑戦してみたい。</span>
</div>
<div className={classes.text_img}><img className={classes.check} src="/assets/checkmark.svg"style={{ height: matchesXS ? '1.8rem' : '3rem',
width: matchesXS ? '1.8rem' : '2rem'}} alt="clip"/><span className={classes.text}>
留学を通して、英語とコミュニケーション力を身につけたい。</span>
</div>
<div className={classes.text_img}><img className={classes.check2} src="/assets/checkmark.svg"style={{ height: matchesXS ? '1.8rem' : '3rem',
width: matchesXS ? '1.8rem' : '2rem'}} alt="clip"/><span className={classes.text}>
留学を通して、多様性を肌で感じ、<br/>グローバルな感覚を見につけて人として大きく成長したい。</span>
</div>

    </Grid>


     </Hidden>

     <Hidden smDown>
     <Grid xs item className={classes.textContainer}>
    {/* <AnimationOnScroll animateIn='fadeIn'> */}
   <div className={classes.title}>
    <span style={{color: '#a8bbff',
    marginRight: matchesXS ? 0 : '.5rem', marginLeft: matchesXS ? '1.25rem' : '.5rem'}}>
      ■</span> 1つでも当てはまった人は 今すぐ相談
    </div>
        {/* </AnimationOnScroll>

           <AnimationOnScroll animateIn='fadeIn'> */}
            <div className={classes.text_img_container}>
           <div className={classes.text_img}>
 <img className={classes.check}src="/assets/checkmark.svg"style={{ height: matchesXS ? '2.5rem' : '2.7rem',
width: matchesXS ? '2.5rem' : '2.7rem'}} alt="clip"/><span className={classes.text}>ニュージーランドに興味があり、ニュージーランドに留学してみたい。</span>
 </div>
           <div className={classes.text_img}><img className={classes.check} src="/assets/checkmark.svg"style={{ height: matchesXS ? '2.5rem' : '3rem',
width: matchesXS ? '2.5rem' : '2.7rem'}} alt="clip"/><span className={classes.text}>
           留学を通して、いろんなことに挑戦してみたい。</span>
</div>
<div className={classes.text_img}><img className={classes.check} src="/assets/checkmark.svg"style={{ height: matchesXS ? '2.5rem' : '3rem',
width: matchesXS ? '2.5rem' : '2.7rem'}} alt="clip"/><span className={classes.text}>
留学を通して、英語とコミュニケーション力を身につけたい。</span>
</div>
<div className={classes.text_img}><img className={classes.check2} src="/assets/checkmark.svg"style={{ height: matchesXS ? '2.5rem' : '3rem',
width: matchesXS ? '2.5rem' : '2.7rem'}} alt="clip"/><span className={classes.text}>
留学を通して、多様性を肌で感じ、グローバルな感覚を見につけて<br/>人として大きく成長したい。</span>
</div>
</div>
        {/* </AnimationOnScroll> */}
     </Grid>


     <Grid xs item className={classes.animation}>
     <div className="floater position--highlight-top-right">
            {/* <Click /> */}
            </div>
            　<Link href="/contact">
            <Button
                variant="contained"
                className={classes.btn}
              >
             <span style={{ marginRight: 3}}>お問い合わせ</span>
                <ButtonArrow
                  width={35}
                  height={35}
                  fill="#fff"/>
              </Button>
              </Link>
      </Grid>


     </Hidden>


    </Grid>

    </Grid>

    </>

   );

}
