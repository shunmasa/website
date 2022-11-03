import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, Button} from '@material-ui/core';
import Step from './step';
import Boarding from './boardingAnimation';

const useStyles = makeStyles( theme => ( {

    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // flexWrap: 'wrap',
      // flexGrow: 1,
        width: '100%',
        [theme.breakpoints.down( 'xl' )]: {
          padding: '140px',
          width: '100%',
          height: '100%'
          },
          [theme.breakpoints.down( 'lg' )]: {
            padding: '100px 100px 300px 100px',
            },
        [theme.breakpoints.down( 'md' )]: {
          width: '100%',
          padding: '70px 70px 150px 70px',
          },
          [theme.breakpoints.down( 'sm' )]: {
            padding: '100px',
            flexDirection: 'column-reverse',


            },
        [theme.breakpoints.down( 'xs' )]: {
          marginTop: '100px',
          marginBottom: 0,
          width: '100vw',
          padding: 0,


          }

      },
      imageContainer: {

        marginTop: '2em',
        width: '400px',
        marginLeft: '20px',
        [theme.breakpoints.down( 'lg' )]: {
         marginTop: '60px',
          width: '330px',
          marginLeft: 0,
          },
        [theme.breakpoints.down( 'md' )]: {
         width: '300px',
         },
         [theme.breakpoints.down( 'sm' )]: {
         height: '330px',
         marginTop: '120px'


            },
        [theme.breakpoints.down( 'xs' )]: {

         width: '280px',
         height: '280px',
         marginTop: '30px',
         marginBottom: '30px'
         }

     },
      flow: {

        width: '50%',
        marginTop: '70px',
        marginRight: '150px',

          [theme.breakpoints.down( 'lg' )]: {
            marginRight: '100px',
            },
        [theme.breakpoints.down( 'md' )]: {
          marginLeft: '30px',
        marginRight: '70px',
          },
          [theme.breakpoints.down( 'sm' )]: {
            marginLeft: 0,
            width: '100%',
            marginRight: 0,
            marginTop: 0,
            },
        [theme.breakpoints.down( 'xs' )]: {
          width: '100vw',

          margin: 0

          }
      },
      curve: {
        position: 'absolute',
        width: '100%',
        bottom: '-2px',

        // marginBottom:"10px",
        fill: '#f1f1f1',
        [theme.breakpoints.down( 'md' )]: {

           },

           [theme.breakpoints.down( 'xs' )]: {
            position: 'static',
            width: '100%',


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
            fontSize: '1.3rem',
            marginLeft: '1rem'
          }
        },
} ) );

export default function Block6 () {


    const classes = useStyles();
    const theme = useTheme();


    const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );
    const matchesSM = useMediaQuery( theme.breakpoints.down( 'sm' ) );

const style = {
    height: '13rem',
    width: '13rem'
  };


return (

 <>
    <Grid>
    <Grid container
    alignItems="center" direction="row"className={classes.container} >

    <Hidden lgUp>


    <Grid className={classes.imageContainer}>
      <Boarding/>

  </Grid>


    </Hidden>

    <Hidden mdDown>
    <Grid className={classes.imageContainer}>

      <Boarding/>
  </Grid>
    </Hidden>


      <Grid className={classes.flow}>
        <div className={classes.title}>
      <span style={{marginTop: matchesXS ? '2rem' : 0, marginRight: matchesXS ? '.1rem' : '.5rem',
      marginBottom: '1rem'}}>○</span>ご渡航までの流れ
      </div>


    <Step/>

    </Grid>


    </Grid>

    </Grid>

   {matchesXS ?
    <svg className="curve4"tab-index="-1" viewBox="0 0 545 17" fill="#f7f8fc">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154
 191.63 16.3461 292 6.28327Z" fill="#f7f8fc"/>
</svg> : <svg className="curve4" tab-index="-1" viewBox="0 0 545 17" fill="#f7f8fc">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154
 191.63 16.3461 292 6.28327Z" fill="#f7f8fc"/>
</svg>
}

</>

   );

}


export async function getStaticProps() {

  const apolloClient = initializeApollo();

  const pages = await apolloClient.query( {
    query: '11',
    revalidate: 10,
  } );


    return addApolloState( apolloClient, {
      props: {pages},
    } );
}
