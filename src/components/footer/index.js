import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';
import {useScrollTo} from '../useScrollTo';

const variant = {
  visible: { opacity: 1, scale: 0.8, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 }
};

const useStyles = makeStyles( theme => ( {
  footer: {
    background: 'linear-gradient(-8deg, #0045ad 50%, #073882 50.1%)',
    width: '100%',
    position: 'relative',
   height: '15em'

  },

  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  linkStyle: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:visited': {
      color: '#fff'
    }
  },

  gridItem: {
    margin: '4em',
    [theme.breakpoints.down( 'md' )]: {
      marginRight: '4em',
      marginLeft: '2em',
      marginTop: '4em',
    },
    [theme.breakpoints.down( 'sm' )]: {
      marginRight: '2em',
      marginLeft: '2em',
      marginTop: '4em',
    }

  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down( 'xs' )]: {
      height: '2em',
      width: '2em'
    }
  },
  socialContainer: {
    marginTop: '1em',
    [theme.breakpoints.down( 'xs' )]: {
      right: '0.6em'
    }
  },
  curve: {
    position: 'absolute',
    width: '100%',
    bottom: '-2px',

    fill: '#f1f1f1'
    // fill:#1c2e4a;
   },
} ) );


  const Footer = ()=>{
  const classes = useStyles();
  const control = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect( () => {
    if ( inView ) {
      control.start( 'visible' );
    } else {
      control.start( 'hidden' );
    }
  }, [ control, inView ] );

const scrollToId = useScrollTo();
  return (
    <>

    <footer className={classes.footer}>

    <Hidden smUp>
    <Grid container justifyContent="center" className={classes.mainContainer}>

<Grid item className={classes.gridItem}>
  <Grid
   item
    container
    direction="column"
    spacing={2}

    style={{ margin: 0 }}
  //   component={Link}
    href="/contact"
    className={classes.link}
  >
    <Grid
      item
    >

    <span style={{color: '#fff'}}>お問い合わせ</span>

    </Grid>

    <Grid
      item
    >
     excelnz@outlook.com
    </Grid>
    <Grid
      item
    >
     (+64)-21-1427-282
    </Grid>
  </Grid>
</Grid>


<motion.div
ref={ref}
variants={variant}
initial="hidden"
animate={control}
>

<Grid item className={classes.gridItem}>
  <Grid
    container
    direction="column"
    spacing={2}
    style={{ margin: 0 }}
  >
      <div type="button" onClick={() => scrollToId( '#id', 300 )}>
 <img style={{height: '60px', overflowX: 'hidden', margin: 0}}src="/assets/scroll-up.png"></img>
</div>

  </Grid>
</Grid>
</motion.div>

</Grid>
</Hidden>

      <Hidden xsDown>
        <Grid container justifyContent="center" className={classes.mainContainer}>

          <Grid item className={classes.gridItem}>
            <Grid
             item
              container
              direction="column"
              spacing={2}

              style={{ margin: 0 }}
            //   component={Link}
              href="/contact"
              className={classes.link}
            >
              <Grid
                item
              >

              <span style={{color: '#fff'}}>お問い合わせ</span>

              </Grid>

              <Grid
                item
              >
               excelnz@outlook.com
              </Grid>
              <Grid
                item
              >
               (+64)-21-1427-282
              </Grid>
            </Grid>
          </Grid>


          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >

              <Grid
                item
                className={classes.link}
              >
                SNSリンク
              </Grid>


              <Grid
          container
          spacing={2}
          className={classes.link}
      >
        <Grid
          item
          component={'a'}
          href="https://www.facebook.com/pages/Excel-NZ/111770877271517"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>

        <Grid
          item
          component={'a'}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>

        <Grid
          item
          component={'a'}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src="/assets/instagram.svg"
            className={classes.icon}
          />
        </Grid>
      </Grid>


            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
            </Grid>
          </Grid>
          {/* <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
            </Grid>
          </Grid> */}

          <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
                <div type="button" onClick={() => scrollToId( '#id', 300 )}>
           <img style={{height: '80px', overflowX: 'hidden', margin: 0}}src="/assets/scroll-up.png"></img>
        </div>

            </Grid>
          </Grid>
          </motion.div>

        </Grid>


      </Hidden> 


    </footer>
    </>
  );
};

export default Footer;
