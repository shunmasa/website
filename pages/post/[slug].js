import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {useQuery} from '@apollo/client';
import { Typography, Tabs, Paper, Box, Link, Grid } from '@material-ui/core';
import { initializeApollo, addApolloState } from '../../src/apollo/client';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {GET_POST_BY_ID} from '../../src/queries/posts/get-post';
import {GET_SLUGS} from '../../src/queries/posts/get-slugs';
const useStyles = makeStyles( theme =>
  createStyles( {


    root: {

      width: '100%',
      height: '100%',
      maxHeight: '2000px',
      backgroundColor: '#f7f8fc',
      // paddingTop: '8rem',
      paddingBottom: '15rem',


      [theme.breakpoints.down( 'xs' )]: {
        margin: 0
      }
    },
    papper: {
      height: '100%',
      maxWidth: '70%',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxHeight: '2000px',
      position: 'relative',
      textAlign: 'center',
      overflowX: 'hidden',
      margin: '0 15% 5em 15%',
      paddingBottom: '2.5em',
      [theme.breakpoints.down( 'xl' )]: {
        maxWidth: '70%',
        margin: '0 15% 2em 15%',

        },
      [theme.breakpoints.down( 'lg' )]: {
        maxWidth: '70%',
        margin: '0 15% 5em 15%',
        },
      [theme.breakpoints.down( 'md' )]: {
        maxWidth: '100%',
        margin: '3rem 1rem 5rem 1rem'
        },
        [theme.breakpoints.down( 'sm' )]: {

          margin: 0
        },
      [theme.breakpoints.down( 'xs' )]: {
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 0
      }
    },

    item: {
      // objectFit: 'cover',
      width: '100%',
      maxHeight: '500px',
      marginBottom: '1rem',


    },
    description: {
      marginTop: '1rem',
      marginRight: '1rem',
      marginLeft: '1rem',
      fontSize: '20px',
      fontWight: 500,
      [theme.breakpoints.down( 'xs' )]: {
        margin: 0,
        fontSize: '15px'
      }
    },
    appBar: {
      position: 'fixed',
      backgroundColor: '#fff',
      color: '#808080',
      zIndex: theme.zIndex.drawer + 1
    },
    title: {
      marginLeft: '1rem',
      flex: 1,
    },
    flex: {
      flex: 1
    },
  } ),
);

export default function studentPost( { data } ) {
  const router = useRouter();
  // console.log( 'post', post?.post?.content );
  // useEffect( ()=> {
  //   if ( loading ) {
  //     router.reload();
  //   }
  //   }, [] );
  // console.log( 'data', data?.post?.featuredImage?.node?.sourceUrl
  // );
  const classes = useStyles();
  const handleClick = ( e ) => {
    e.preventDefault();
    router.push( '/' );
  };

  useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [] );

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 1.15 ] );

//   const [canScroll, setCanScroll] = useState(false);
// console.log('scroll',canScroll)
//   useEffect(() => {
//     if (canScroll === false) {
//       document.querySelector("body").classList.add("no-scroll");
//       console.log('scroll',canScroll)
//     } else {
//       document.querySelector("body").classList.remove("no-scroll");
//     }
//   }, [canScroll]);


let easing = [ 0.175, 0.85, 0.42, 0.96 ];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const theme = useTheme();
const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );

// const {post} =post;
  return (
    <div className={classes.root} >


      {/* <Dialog  fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}> */}


      {/* {loading ? (
          <Typography></Typography>

      ) : ( */}

    <motion.div
  initial="exit" animate="enter" exit="exit">


 <Grid container spacing={3}className={classes.papper}>
          <motion.div>

           <motion.img variants={imageVariants} style={{ scale: scale }}
           src={data?.post?.featuredImage?.node?.sourceUrl }
          className={classes.item}/>
<motion.div style={{ display: 'flex', justifyContent: matchesXS ? 'flex-start' : 'space-between', fontSize: matchesXS ? '23px' : '32px',
          color: '#999',  lineHeight: '1.6', height: '100px', flexDirection: matchesXS ? 'column' : 'row',
          margin: '30px 0' }} variants={textVariants}>
<div style={{ marginLeft: matchesXS ? 0 : '15px', textAlign: 'left' }}>
  {data?.post?.title}
  </div>
<div  style={{ marginRight: matchesXS ? 0 : '30px', textAlign: matchesXS ? 'left' : 'right'}}>
          {/* {`${data.post.username}さん`} */}
          </div>
</motion.div>


<motion.div style={{ display: 'flex' }} variants={textVariants}>

  <Typography
    variant="body2"
    className={classes.description}
    align="left"
  >
 {data?.post?.content}


  </Typography>

</motion.div>

<motion.div className="back"style={{marginTop: '30px'}}variants={backVariants}>
          <Link onClick={handleClick}>
            ←ホームに戻る
          </Link>
        </motion.div>

      </motion.div>

    </Grid>

    </motion.div>

{/* )} */}


    </div>
);
};

export async function getStaticProps( { params } ) {
   console.log( 'param', params.slug );
   const postId = params.slug;
  const apolloClient = initializeApollo();
	const { data, errors } = await apolloClient.query( {
		query: GET_POST_BY_ID,
		variables: {
     postId: Number( postId )
    },
	} );

  // console.log( 'postData', data );
 const post = data.postBy;
  const apolloProps = addApolloState( apolloClient, {
		props: {
      data: {post},
    }
	} );

 return  {
    ...apolloProps,
		revalidate: 1,
  };
}

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
	const { data } = await apolloClient.query( {
		query: GET_SLUGS
	} );
  console.log( 'data_slug', data );

    return {
      paths: data?.nodes?.map( ( { node } ) => `/post/${node.postId}` ) || [],
      fallback: true,
    };
  };
