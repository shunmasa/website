import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_GALLERY} from '../../queries/gallery/get-gallery';
import Gallery from './gallery';


export default function Block8 () {

    const {data, loading} = useQuery( GET_GALLERY );
    // console.log( 'data', data );
    if ( loading ) {
        return 'Loading...';
       }

    const posts = data?.galleries?.nodes[0];
    console.log( 'posts', posts );
    return (

   <Gallery posts={posts}  />
    );
  }

export async function getStaticProps() {

    const apolloClient = initializeApollo();

    const posts = await apolloClient.query( {
    query: GET_GALLERY,
    revalidate: 10,
    } );
   console.log( posts );

    return addApolloState( apolloClient, {
      props: {posts},
    } );
    }

