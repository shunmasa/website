import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {sanitize} from '../../../../utils/sanitize';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../../image/index';
import {
    Grid,
    Typography,
    Box,
    TableFooter,
    TableRow,
    TablePagination,
  } from '@material-ui/core';
  import Link from 'next/link';

  const bounceVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5
      }
    }
  };

const useStyles = makeStyles( ( theme ) => ( {
    outline: {
        height: '100%',
        width: '100%',
        position: 'relative',

        backgroundColor: '#f7f8fc',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down( 'xl' )]: {
          margin: '0',
        },
        [theme.breakpoints.down( 'lg' )]: {
        marginBottom: '8em',
        padding: 0
        },
        [theme.breakpoints.down( 'md' )]: {
        },
        [theme.breakpoints.down( 'sm' )]: {
        },
        [theme.breakpoints.down( 'xs' )]: {
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: '4rem',
          width: '100vw',
        }
      },
      curve: {
        position: 'absolute',
        width: '100%',
        bottom: '-5px',

        fill: '#f1f1f1'
        // fill:#1c2e4a;
       },
      card: {
      margin: 0,
      objectFit: 'cover',
      borderRadius: '8px',
      height: '100%',
      minHeight: '500px',
      backgroundColor: 'white',

      transition: 'all 0.2s ease-in-out',
      '&:hover,&:active': {
          boxShadow: '0px 2px 24px 0px rgba(153, 153, 153, 0.22)',
          cursor: 'pointer',
        transform: 'translateY(-5px)'

    },
    [theme.breakpoints.down( 'md' )]: {

      margin: '100px',


    },
    [theme.breakpoints.down( 'sm' )]: {


    },

      [theme.breakpoints.down( 'xs' )]: {

        margin: 0,
        height: '100%'

    },

      },

      switch: {
        marginTop: '5em'
      },
      pagination: {
        width: '100%',
        marginBottom: '3em',
      },

      description: {
        marginTop: '2rem',
        height: '100%',
      maxHeight: '400px',
      },
      box: {
    marginTop: '2rem'
      },
      img_file: {
        display: 'block'
      },
      text: {
        fontSize: '0.5em'
      },
      h1: {
        fontFamily: 'Noto Sans TC, sans-serif',
          fontWeight: 650,
          fontSize: '40px',
          color: '#a8bbff',

          lineHeight: 1.5,
          marginBottom: '4rem',
          [theme.breakpoints.down( 'xl' )]: {

            fontWeight: 650,
            fontSize: '3.5rem',
            marginTop: '4rem',
            marginBottom: '4rem',
          },
          [theme.breakpoints.down( 'lg' )]: {
            fontFamily: 'Noto Sans TC, sans-serif',
            fontWeight: 650,
            fontSize: '3.4rem',

            lineHeight: 1.5,
            marginBottom: '4rem',
          },
          [theme.breakpoints.down( 'md' )]: {

          },
          [theme.breakpoints.down( 'xs' )]: {
            fontSize: '2.3rem',
            marginBottom: '2rem'

        },
      },
} ) );

export default function Posts ( {posts, loading} ) {
   const theme = useTheme();
    const [ page, setPage ] = useState( 0 );
    const [ rowsPerPage, setRowsPerPage ] = useState( 2 );
    const [ postList, setPostList ] = useState( [] );
    // const image = posts[0]?.map( img => img.featuredImage.node ) || [];
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

    const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );
    useEffect( ()=>{
      if ( ! loading ) {
        setPostList( posts );
      }

    }, [ postList ] );
console.log( 'postList', postList  );

    const handleChangeRowsPerPage = ( event ) => {
      setRowsPerPage( parseInt( event.target.value, 10 ) );
      setPage( 0 );
    };
    const handleChangePage = ( event, newPage ) => {
      setPage( newPage );


    };

  const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [ 0.48, 0.15, 0.25, 0.96 ] } },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [ 0.48, 0.15, 0.25, 0.96 ] }
    }
  };


  const ReadLimit = ( { children, maxCharacter = 148 } ) => {
    const text = children;
    const resultString = text.slice( 0, maxCharacter );

    return (

      <Typography style={{fontSize: '1rem'}}>
           {resultString ? <div dangerouslySetInnerHTML={{__html: sanitize( resultString ?? {} )}}/> : null }
     </Typography>


    );
  };

//   const { content, title } = posts[0] || {};
    return (
      <>
  <Grid className={classes.outline}>
  <motion.div
   initial="initial"
   animate="enter"
   exit="exit"
   variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  >


    <Grid item container direction="row"  justifyContent="center" lg>

    <div className={classes.h1}>
            留学体験談のご紹介
      </div>


      </Grid>

      <motion.div
      ref={ref}
      variants={bounceVariants}
      initial="hidden"
      animate={control}>

  <Grid container alignItems="center" justifyContent="space-around">

  {( 0 < rowsPerPage ?
   postList && postList.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ) :
   postList )
  .map( ( post, key )=>(

        <Grid  item className={classes.card} container direction="column"md={5}>


      <Grid key={key} item container direction="row" justifyContent="space-between"
    >
      <motion.div variants={postVariants}>
        <Box style={{ margin: matchesXS ? 0 : '30px'}}>
            <Link scroll={false} href={`/post/${post?.postId}`} as={`/post/${post?.postId}`}>
          <a style={{color: 'black'}}>
          <motion.div whileHover={{
    scale: 0.95,
    transition: { duration: 1 },

  }}
  whileTap={{ scale: 0.95 }}>
 <Image cover { ...post?.featuredImage?.node } className={classes.img_file}
 width="450" height="300"  sizes="(max-width: 500px) 100vw,(max-width: 768px) 100vw,
 (max-width: 1200px) 50vw,
 33vw" title={post?.title ?? ''} />
      </motion.div>

      <Typography variant="h5" gutterBottom style={{marginTop: matchesXS ? '10px' : '5px', width: '90%', marginLeft: matchesXS ? '10px' : 0}}>
         {post?.title}
        </Typography>

      <Typography variant="h5" gutterBottom style={{width: '90%', marginLeft: matchesXS ? '10px' : 0}}>
      <ReadLimit>
          { post?.content}
          </ReadLimit>
          <Typography style={{fontSize: '1.1rem', fontWeight: 700}}>...続きを読む</Typography>

           </Typography>

      </a>
          </Link>


        </Box>
        </motion.div>


      </Grid>


    </Grid>
      ) )}

</Grid>
</motion.div>

<div style={{marginTop: '50px', marginLeft: '50px'}}>
<TableFooter>
<TableRow>
  <TablePagination
    rowsPerPageOptions={[ 2 ]}
    colSpan={2}
    count={postList.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}

    >
  </TablePagination>
</TableRow>
</TableFooter>
</div>

     </motion.div>


   </Grid>


  </>
    );
  }
