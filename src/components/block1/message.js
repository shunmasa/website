
import {React, useState, useEffect, useMemo} from 'react';
import {useQuery} from '@apollo/client';
import { motion} from 'framer-motion';
import  {GET_MESSAGES} from '../../queries/message/get-messages.js';
import { initializeApollo, addApolloState } from '../../../src/apollo/client';
import moment from 'moment';
import {sanitize} from '../../../utils/sanitize';


///need fix

export default function Message() {

const [ shouldShowActions, setShouldShowActions ] = useState( false );
const [ lastYPos, setLastYPos ] = useState( 0 );

const { loading, data, error } = useQuery( GET_MESSAGES );
// console.log(data);
const messages = data?.messages?.nodes || [];


useEffect( () => {

function handleScroll() {
    const yPos = window.scrollY;
    const isScrollingUp = yPos > lastYPos;

    setShouldShowActions( isScrollingUp );
    setLastYPos( yPos );
  }

    window.addEventListener( 'scroll', handleScroll, false );

    return () => {
      window.removeEventListener( 'scroll', handleScroll, false );
    };
  }, [ lastYPos, shouldShowActions ] );


return (


<div>
  {loading ? (
        // <Loading/>
      <>
      </>
    ) : (


        messages &&
        messages.map( ( message, key ) => (

    <motion.li key={key} initial={{ opacity: 0 }}
 animate={{ opacity: shouldShowActions ? 1 : 0 }}
transition={{ opacity: { duration: 0.5} }}>
   <strong style={{marginLeft: '10px'}}>
       <dt>
       <time>{moment( message.modified ).format( 'YYYY/MM/DD' )}</time></dt></strong>
   { message?.text1 ? <div dangerouslySetInnerHTML={{__html: sanitize( message?.text1 ?? {} )}}/> : null }
    </motion.li>
     ) ) )}

     </div>


);
}


export async function getStaticProps() {

const apolloClient = initializeApollo();

const messages = await apolloClient.query( {
query: GET_MESSAGES,
revalidate: 10,
} );


return addApolloState( apolloClient, {
  props: {messages},
} );
}


