import React, {useState, useEffect} from 'react';
// import {useQuery} from '@apollo/client';
// import {GET_GALLERY} from '../../queries/gallery/get-gallery';
// import Gallery from './gallery';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Router from 'next/router';
import useSticky from '../useSticky';

export default function Nav ( {goTo, activeElement} ) {

    // const {data, loading} = useQuery( GET_GALLERY );
    // if ( loading ) {
    //     return 'Loading...';
    //    }

    // const posts = data?.posts?.nodes;

    const defaultHeaderClassName = 'classes.main_h';
    const [ headerClassName, setHeaderClassName ] = useState(
      defaultHeaderClassName
    );
    const { isSticky, element } = useSticky();
    const [ isOpened, setIsOpened ] = useState( false );
    const [ status, setStatus ] = useState( 'close' );
    const [ selected, setSelected ] = useState( '' );

    useEffect( () => {
      setHeaderClassName(
        `${isOpened ? 'open-nav' : ''}`
      );


    }, [ isOpened ] );

    const screens = [
        {
          index: 'section1',
          title: 'EXCELNZ',
          color: '#ff0055'
        },

        {
          index: 'section2',
          title: '留学の魅力',
          color: '#1835f5'
        },
        {
          index: 'section3',
          title: 'NZ留学＆鍵',
          color: '#22cc88'
        },
        {
          index: 'section4',
          title: 'サポート内容',
          color: '#ffaa00'
        },
        {
          index: 'section5',
          title: '留学体験談',
          color: '#0099ff'
        },
        {
          index: 'section6',
          title: 'ギャラリー',
          color: '#f403fc'
        },
        {
          index: 'section7',
          title: 'お問い合わせ',
          color: '#7c18f5'
        },


      ];


    return (
        <header className={`${headerClassName} ${isSticky ? 'navbar1 navbar-sticky' : 'navbar1'}`} ref={element}>

        <div className="row">
       <div>
          <a onClick={() => Router.push( '/' )} className="logo" href="#">
          <img src="/assets/logo.png" alt=""/>
          </a>
    </div>
          <div
            className="mobile-wrapper"
            role="button"
            onClick={() => {
setStatus( 'open' === status ? 'close' : 'open' ), setIsOpened( ! isOpened );
}}
          >
            <span className={status}></span>
            <span className={status}></span>
            <span className={status}></span>
          </div>

          <header>

    <AnimateSharedLayout>
    <nav>
          <ul style={{ transform: 'translateZ(0)' }}>
            {screens.map( ( { title, color, index}, i ) => (

             <motion.li
                animate
                key={i}
                className={`title ${index === selected || activeElement === index ? 'selected' : ' '  }`}

                style={{ color: index === selected || activeElement === index ? color : '#333' }}

                onClick={() => {
                setSelected( activeElement === index && index ), goTo( index );
                }}
              >

                {index === selected  && (
                  <motion.a
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
                  { activeElement === index && (

                  <motion.a
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}

                {title}
              </motion.li>


            ) )}
          </ul>
          </nav>
        </AnimateSharedLayout>
    </header>


        </div>
      </header>

    );
  }

// export async function getStaticProps() {

//     const apolloClient = initializeApollo();

//     const posts = await apolloClient.query( {
//     query: GET_GALLERY,
//     revalidate: 10,
//     } );


//     return addApolloState( apolloClient, {
//       props: {posts},
//     } );
//     }

