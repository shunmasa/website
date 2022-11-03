import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
 import Hidden from '@material-ui/core/Hidden';

///may change to style component and pass image and swap
const useStyles = makeStyles( theme => ( {
  background: {
    backgroundImage: 'url("/assets/gallery1.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '50em',
    width: '100%',
    [theme.breakpoints.down( 'md' )]: {
          backgroundImage: 'url(/assets/gallery1.jpg)',
      backgroundAttachment: 'inherit'
    }
  },

typography: {
    fontFamily: 'Noto Sans TC, sans-serif',
    fontWeight: 650,
    fontSize: '3.5rem',
    color: 'white',
    lineHeight: 1.5

},

  containerL: {
   marginLeft: '10em',
   marginTop: '5em',
   [theme.breakpoints.down( 'xl' )]: {
     marginTop: '5em',
    marginLeft: '18em',
  },
   [theme.breakpoints.down( 'lg' )]: {
    marginLeft: '5em'
  },
   [theme.breakpoints.down( 'md' )]: {
  marginTop: '10em',
  marginLeft: '7em',
  },
  [theme.breakpoints.down( 'sm' )]: {
    marginLeft: 0,
    marginTop: 0,
  },
  [theme.breakpoints.down( 'xs' )]: {
    marginLeft: 0,

  }

  },
  containerR: {
    marginRight: '15em',
    marginTop: '5em',

    [theme.breakpoints.down( 'lg' )]: {
     marginRight: '20px',
   },
    [theme.breakpoints.down( 'md' )]: {
   marginTop: 0,
   marginLeft: '7em',

   },
   [theme.breakpoints.down( 'sm' )]: {
     marginLeft: 0
   },
   [theme.breakpoints.down( 'xs' )]: {
     marginLeft: 0,

   }

   },


   contactButton: {
    marginTop: '2em',
    marginLeft: '1.7em',
    border: '2px solid #2930c2',
    borderWidth: 3,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    height: 80,
    padding: 8,
    marginRight: '8em',

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

    [theme.breakpoints.down( 'sm' )]: {
      marginLeft: 0,
      marginRight: 0
    }

  },
  btn: {
   background: 'transparent'
   }
} ) );

export default function Block9() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery( theme.breakpoints.down( 'sm' ) );


   return (
  <>

    <Hidden xsDown>

    <Grid
      container
      alignItems="center"
      justifyContent={matchesSM ? 'center' : 'space-around'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >

      <Grid
      className={classes.containerL}
        item
        style={{

          textAlign: matchesSM ? 'center' : 'inherit'
        }}
      >
        <Grid container direction="column">
          <Grid item>


          {/* <AnimationOnScroll animateIn="animate__fadeInLeftBig"
  animateOut='animate__bounceOutRight'> */}
            <Typography
              variant="h1"
              gutterBottom
            >

              {matchesSM && <br />}
              留学のことなら<br/>
              <span style={{color: '#fff'}}>エクセルニュージーランド</span>
              <br />
              にお任せください

            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ fontSize: matchesSM ? '1.25rem' : '1.7rem'}}
            >
              まずは一度お問い合わせください。
            </Typography>

          </Grid>
        </Grid>
      </Grid>
      <Grid item>

            <Grid item className={classes.containerR} >
            <Grid container justify={matchesSM ? 'center' : undefined} item>
      <Link href="/contact">
        <Button

          variant="contained"
          className={`${classes.btn} ${classes.contactButton}`}

        >
         お問い合わせ
        </Button>
        </Link>

            </Grid>

        </Grid>

      </Grid>
    </Grid>
    </Hidden>


    <Hidden smUp>
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-around'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >

      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '14em',
          textAlign: matchesSM ? 'center' : 'inherit'
        }}
      >
        <Grid container direction="column">
          <Grid item>


            <Typography

              gutterBottom
            >

              {matchesSM && <br />}
              <span style={{color: '#000000', fontSize: matchesSM ? '2.5rem' : '4rem', opacity: 0.7, background: '#a8bbff'}}>留学のことなら</span><br/>
              <br />
              <span style={{color: '#fff', fontSize: matchesSM ? '2.2rem' : '3.8rem'}}>
                エクセルニュージーランド</span>
              <br />
             <span style={{color: '#000000', fontSize: matchesSM ? '2.2rem' : '3.8rem', opacity: 0.7, background: '#a8bbff'}}> にお任せください</span>

            </Typography>

              <br />
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ fontSize: matchesSM ? '1.5rem' : '2rem' }}
            >
              まずは一度お問い合わせください。
            </Typography>

            <Grid container justify={matchesSM ? 'center' : undefined} item>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>


      　<Link href="/contact">
        <Button

          variant="contained"
          className={`${classes.btn} ${classes.contactButton}`}

        >
         お問い合わせ
        </Button>
        </Link>

      </Grid>
    </Grid>
    </Hidden>


    </>
  );
}

