import React, {useEffect, useRef} from 'react';
import HeadLine from './headline';
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';

export default function Hero() {
  useEffect( () => {

    const timeLine = gsap.timeline( {defaults: {duration: 1.5}} );

    timeLine.set( '.hero', {'z-index': -20} );
    timeLine.to( '.hero', {width: '100vw', left: 0} );
    timeLine.to( '.hero > .hero-overlay', {width: '0vw'});
    // timeLine.set( '.headline', {'z-index': -20000} );
    // timeLine.to( '.headline', {width: '100vw', left: 0} );
    // timeLine.to( '.headline' > '.headline-overlay', {width: '0vw'});
  }, [] );

return (
<>

<div className="hero" >

<div class="hero-overlay"></div>


 <div className="headline">
 {/* <div className="headline-overlay"></div> */}
 <span>

     <HeadLine/>
     </span>

     </div>

   <a className="hero-container" href="#">


     {/* <span className="hover_over"> */}
     <span className="text">
       <Typewriter
 options={{
   strings: [ '下にドラック' ],
   autoStart: true,
   loop: true,
 }}

 onInit={( typewriter ) => {
   typewriter.typeString( '下にドラック' )
     .callFunction( () => {
     } )
     .pauseFor( 2500 )
     .deleteAll()
     .callFunction( () => {
     } )
     .start();
 }}

 />
 {/* </span> */}
 </span>
   </a>
   {/* <div className='cursor' id="cursor"></div>
   <div className='cursor2' id="cursor2"></div>
   <div className='cursor3' id="cursor3"></div> */}


   <div className="curve">
   <svg  tab-index="-1" viewBox="0 0 545 26" fill="#F1F1F1">
       <path
         d="M292 9.60972C375.5 -4 490.951 -2.62191 546 10V26H546H0C0 11.3221 -1 26 -1 7.45941C68 30 191.63 25 292 9.60972Z"
         fill="#F1F1F1"
       />
     </svg>


     </div>
     </div>

    </>

   );

}
