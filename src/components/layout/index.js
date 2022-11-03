import React, {useState, useEffect} from 'react';
import Footer from '../footer/index';
import Nav from '../header/index';
import { Grid } from '@material-ui/core';
import isEmpty from '../../../utils/isEmpty';
import { useRef } from 'react';
import CookieConsent from 'react-cookie-consent';

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  MotionValue
} from 'framer-motion';


export default function Layout( {children, goTo, activeElement, data} ) {
	const {page, post, posts, header, footer, headerMenus, footerMenus} = data || {};


  // const { scrollYProgress } = useViewportScroll();
  // const scaleX = useSpring( scrollYProgress, {
  //   stiffness: 20,
  //   damping: 80,
  //   restDelta: 0.001
  // } );


  return (
    <>
    <main >
<CookieConsent  location="bottom" buttonText="理解しました"declineButtonText="拒否"
cookieName="myAwesomeCookieName3"
enableDeclineButton
overlay
expires={150}
style={{ background: '#2B373B' }}
buttonStyle={{ color: '#4e503b', fontSize: '13px' }} 
>
当サイトでは利便性向上や閲覧の追跡のためにGoogle・他連携サービスによりCookieが使用されています。
サイトの閲覧を続けた場合Cookieの使用に同意したことになります。
</CookieConsent>

    <Grid container direction="column" >
    <Nav goTo={goTo} activeElement={activeElement} />
       {/* <motion.div className="progress" style={{ scaleX }} /> */}
      {children}
      <Footer/>

      </Grid>
    </main>


    </>
  );
}

