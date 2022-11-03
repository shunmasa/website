import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { useTheme } from '@material-ui/core/styles';
import Banner from './banner';

const Container = styled.div`
/* position: absolute; */
top: 0;
left: 0;
min-height: 100%;
width: 100%;
@media screen and (max-width: 760px) {
  width: 90%;
}
@media screen and (max-width: 500px) {
  width: 100%;
}
`;

const Row = styled.div`
width: 90%;
padding: 0 100px;
height:700px;
background-color: #f1f1f1;

@media screen and (max-width: 1901px) {
    padding: 0 80px;
  }

@media screen and (max-width: 1440px) {
  max-width:100%;
  padding: 0 40px;
}
@media screen and (max-width: 670px) {
  height:620px;
  padding: 0 20px;
}
@media screen and (max-width: 500px) {
  height:620px;
  padding: 0 10px;
}
`;

const ArrowBtn = styled.span`
display: inline-block;
position: absolute;
top: 50%;
right: ${( { type } ) => ( 'right' === type ? '-40px' : 'unset' )};
left: ${( { type } ) => ( 'left' === type ? '-40px' : 'unset' )};
width: 45px;
height: 45px;
background: #fff;
border-radius: 50%;
box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
cursor: pointer;
&::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${( { type } ) =>
    'right' === type ?
      'translate(-75%, -50%) rotate(45deg)' :
      'translate(-25%, -50%) rotate(-135deg)'};
  width: 10px;
  height: 10px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
}
&:hover::after {
  border-color: #333;
}
`;

const Card = styled.div`
margin: 2px;
border-radius: 6px;
border: 1px solid #eaeaea;
overflow: hidden;
cursor: pointer;
transition: box-shadow 0.25s;
:hover {
  box-shadow: 0 0 2px 0 #00000063;
}
`;

const Img = styled.div`
height: 400px;
width:100%;
margin-bottom: 4px;
background-image: ${( { img } ) => `url(${img})`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;


const SliderGallery = ( {posts} ) => {
  const theme = useTheme();

  const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );

const photos = Object.values( posts ).slice( 1 );
console.log( 'photos', photos );
const title = photos[0];
const photoArr = photos.slice( 1 );
 console.log( 'gallery', photoArr );
  return (
    <>
    <Container>
<Banner/>
    <Row>
      <h2 style={{padding: '20px', fontSize: matchesXS ? '30px' : '40px', textAlign: 'center'}}
>
       {/* <Typewriter
  options={{
    strings: [ `${title }` ],
     autoStart: true,
     loop: true,
   }}
   onInit={( typewriter ) => {
     typewriter.typeString( `${title }` )
       .callFunction( () => {
        //  console.log('String typed out!');
      } )
       .pauseFor( 2500 )
       .deleteAll()
       .callFunction( () => {
        //  console.log('All strings were deleted');
       } )
       .start();
         }}
   /> */}
      </h2>
    <Carousel
  cols={3}
  rows={1}
  gap={11}

  arrowRight={<ArrowBtn type="right" />}

  arrowLeft={<ArrowBtn type="left"/>}
>


  { photoArr && photoArr.map( ( image, key )=>(
    <Carousel.Item>
    <Card key={key}>
    <Img
    img={image?.mediaItemUrl} />
      </Card>
    </Carousel.Item>

   ) )


  }


</Carousel>


</Row>
</Container>


<div className="curve3">
<svg  tab-index="-1" viewBox="0 0 545 17" fill='#f1f1f1'>
<path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154
191.63 16.3461 292 6.28327Z" fill="#f1f1f1"/>
</svg>

</div>
</>
  );
};

export default SliderGallery;
