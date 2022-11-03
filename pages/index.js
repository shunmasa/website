import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react';
import {useQuery} from '@apollo/client';
import Router from 'next/router';
import ScrollNavigation from 'react-single-page-navigation';
import {GET_PAGES_URI} from '../src/queries/pages/get-pages.js';
import { initializeApollo, addApolloState } from '../src/apollo/client';
import { Grid, useScrollTrigger } from '@material-ui/core';
// import useSticky from '../src/components/UseSticky';
import { makeStyles} from '@material-ui/core/styles';
import Layout from '../src/components/layout/index';
import Hero from '../src/components/hero/index';
import Block1 from '../src/components/block1/index';
import Block2 from '../src/components/block2/index';
import Block3 from '../src/components/block3/index';
import Block4 from '../src/components/block4/index';
import Block5 from '../src/components/block5/index';
import Block6 from '../src/components/block6/index';
import Block7 from '../src/components/block7/index';
import Block8 from '../src/components/block8/index';
import Block9 from '../src/components/block9/index';
function ElevationScroll( props ) {

  const { children } = props;

  const trigger = useScrollTrigger( {
    disableHysteresis: true,
    threshold: 0
  } );

  return React.cloneElement( children, {
    elevation: trigger ? 4 : 0
  } );
}

const useStyles = makeStyles( theme => ( {
  root: {
    marginTop: '7em',

   },
   container: {
    height: '100%',
      position: 'relative',
    [theme.breakpoints.down( 'xl' )]: {
      height: '100%',
      // maxHeight: '190rem',

      width: '100%',
      },
    [theme.breakpoints.down( 'lg' )]: {
      height: '100%',
      // maxHeight: '220rem',


      },
    [theme.breakpoints.down( 'md' )]: {
      // maxHeight: '300rem',
      paddingBottom: '10px',

      },
      [theme.breakpoints.down( 'sm' )]: {
        paddingBottom: '100px',

        },
    [theme.breakpoints.down( 'xs' )]: {


      marginTop: 0,

      paddingTop: 0

    }
  },
  cardContainer: {
    backgroundColor: '#f7f8fc',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100vw',
    '&::before': {
      content: '',
      background: '#f1f1f1',
      height: '50%',
      left: 0,
      position: 'absolute',
      top: 0,
      zIndex: '1'
    },

    },


} ) );


export default function Home() {
    const [ useData, setData ] = useState();
    const {data, loading, error} = useQuery( GET_PAGES_URI );
    // const {data, loading, error} = useQuery( GET_PAGES_URI );
    // const pages = data?.pages?.nodes;
    // const havePages = Boolean( pages.length );
    // console.log( pages );


    const classes = useStyles();

    const [ prev, setPrev ] = useState( 0 );

    const handleScroll = useCallback( (  ) => {
      const y = window.scrollY;

       setPrev( y );


    }, [  ] );
  useEffect( () => {
    function scrollTrigger() {
    if ( window.pageYOffset < ( window.innerHeight ) * 0.01 ) {
      handleScroll();
    }
    }
    window.addEventListener( 'scroll', scrollTrigger, false );
     return () => {
      window.removeEventListener( 'scroll', scrollTrigger, false );
    };
  }, [ handleScroll ] );


useEffect( () => {
 if ( data ) {
 const pages = data?.pages?.nodes;
 setData( pages );
 }
}, [] );


  return (
    <>
   <main>

   <ElevationScroll>
  
   <ScrollNavigation elements={{ section1: {}, section2: {}, section3: {}, section4: {}, section5: {}, section6: {}, section7: {}}}>
   {( { refs, goTo, activeElement } ) => (
 <Layout goTo={goTo} activeElement={activeElement} data={data}>

   <Hero />


   <div ref={refs.section1}>
    <Block1 />
</div>
<div  ref={refs.section2}>
    <Grid
     item
     container
     direction="row"
     className={classes.container}
     style={{background: '#f7f8fc'}}
   >

<Block2/>
      {/* <Block3/> */}
   
      </Grid>
      </div>
<div ref={refs.section3}> <Block3/></div>
      <div  ref={refs.section4}>
      <Block4/>
      <Block5/>
      <Block6/>
      </div>
      <div  ref={refs.section5} className={classes.cardContainer}>
      <Block7/>
      </div>
      <div  ref={refs.section6} >
      <Block8/>
      </div>
      <div  ref={refs.section7} >
      <Block9/>
       </div>
       </Layout>

       )}


      </ScrollNavigation>
      </ElevationScroll>
      </main>


    </>
  );
}


export async function getStaticProps() {

  const apolloClient = initializeApollo();

  const pages = await apolloClient.query( {
    query: GET_PAGES_URI,
    revalidate: 10,
  } );


    return addApolloState( apolloClient, {
      props: {pages},
    } );
}
