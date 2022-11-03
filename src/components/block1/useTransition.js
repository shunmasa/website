import Router from 'next/router';
import { useCallback, useEffect, useRef } from 'react';

const cloneNode = ( node ) => {
  return node.cloneNode( true );
};

export const useTransition = () => {
  const cleanupRef = useRef( () => {} );

  useEffect( () => {
    const changeListener = () => {

      const nodes = document.querySelectorAll<
        HTMLLinkElement | HTMLStyleElement
      >( 'link[rel=stylesheet], style:not([media=x])' );
      const copies = Array.from( nodes ).map( cloneNode );

      for ( let copy of copies ) {
        copy.removeAttribute( 'data-n-p' );
        copy.removeAttribute( 'data-n-href' );

        // Add duplicated nodes to the DOM.
        document.head.appendChild( copy );
      }

      cleanupRef.current = () => {
        for ( let copy of copies ) {

          document.head.removeChild( copy );
        }
      };
    };

    Router.events.on( 'beforeHistoryChange', changeListener );

    return () => {
      Router.events.off( 'beforeHistoryChange', changeListener );
      cleanupRef.current();
    };
  }, [] );


  return useCallback( () => {
    cleanupRef.current();
  }, [] );
};
