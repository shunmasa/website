import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_POSTS} from '../../queries/posts/get-posts';
import Posts from './posts';


export default function Block7 () {

    const {data, loading} = useQuery( GET_POSTS );
    if ( loading ) {
        return 'Loading...';
       }

    const posts = data?.posts?.nodes || [];
     console.log( 'posts', posts) || [];

    return (
   <Posts posts={posts} loading={loading} />
    );
  }

export async function getStaticProps() {

    const apolloClient = initializeApollo();

    const posts = await apolloClient.query( {
    query: GET_POSTS,
    revalidate: 10,
    } );


    return addApolloState( apolloClient, {
      props: {posts},
    } );
    }


