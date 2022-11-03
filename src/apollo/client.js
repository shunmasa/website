import { useMemo } from 'react';
import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { setContext } from '@apollo/client/link/context';
import cookie from 'cookie';
import { onError } from '@apollo/link-error';
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
// export const GRAPHQL_JWT_AUTH_SECRET_KEY = 'graphql_wordpress_secret_token';


let apolloClient;


const errorControl = onError( ( { graphQLErrors, networkError } ) => {
  if ( graphQLErrors ) {
graphQLErrors.forEach( ( { message, locations, path } ) =>{
  //  const location = Object.values( locations );
  //  const locationInfo = location.map( ( l )=>( `line:${l.line} column:${l.column}` ) );
  console.log(
        `[GraphQL error]: Message: ${message}, Locations: ${locations}, Path: ${path}`
      );
}
    );
};
  if ( networkError ) {
console.log(
      `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
    );
};
} );


 function parseCookies( req ) {
	return cookie.parse( req ? req.headers.cookie : '' );
}


export function getAuthToken( req ) {
	const cookies = parseCookies( req );
	return cookies.auth || '' ;
}


const getAuthLink = ( ctx ) => {
  return setContext( ( _, { headers } ) => {
    const authToken = getAuthToken( ctx );
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : '',

      },
    };
  } );
};


function createApolloClient( ctx ) {
  const httpLink = new HttpLink( {
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    credentials: 'same-origin',
  } );

  return new ApolloClient( {
    ssrMode: 'undefined' === typeof window,
    link: from( [ errorControl, getAuthLink( ctx ), httpLink ] ),
    cache: new InMemoryCache( {
      typePolicies: {
        Query: {
          fields: {
            posts: relayStylePagination(),
          },
        },
      },
    } ),
  } );
}


export function initializeApollo( initialState = null, ctx = null ) {
  const _apolloClient = apolloClient ?? createApolloClient( ctx );


  if ( initialState ) {
    const existingCache = _apolloClient.extract();

    const data = merge( initialState, existingCache, {

      arrayMerge: ( destinationArray, sourceArray ) => [
        ...sourceArray,
        ...destinationArray.filter( ( d ) =>
          sourceArray.every( ( s ) => ! isEqual( d, s ) )
        ),
      ],
    } );


    _apolloClient.cache.restore( data );
  }


  if ( 'undefined' === typeof window ) {
return _apolloClient;
}


  if ( ! apolloClient ) {
apolloClient = _apolloClient;
}

  return _apolloClient;
}

export function addApolloState( client, pageProps ) {
  if ( pageProps?.props ) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo( pageProps ) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo( () => initializeApollo( state ), [ state ] );
  return store;
}


