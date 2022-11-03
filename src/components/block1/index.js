import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Message from './message';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};
const buttonAnimation = {
  variants: {
    hover: { scale: 1.2 },
    tap: { scale: 0.9, color: [ null, '#cc5eff', '#6fe8a6' ] },
    focus: { y: [ null, 8, 0 ], color: '#6fe8a6' }
  },
  whileHover: 'hover',
  whileTap: 'tap',
  whileFocus: 'focus',
  transition: { type: 'spring' }
};

// const textVariant = {
//   hidden: {
//     y: '50%',
//     transition: { ease: [ 0.455, 0.03, 0.515, 0.955 ], duration: 0.55 }
//   },
//   visible: {
//     y: 0,
//     transition: { ease: [ 0.455, 0.03, 0.515, 0.955 ], duration: 1.05 }
//   }
// };

const useStyles = makeStyles( theme => ( {

bell: {
    width: '50px',
    height: '50px',
    paddingRight: '12px',
    verticalAlign: 'middle',
    [theme.breakpoints.down( 'xl' )]: {
     width: '60px',
     height: '60px',
     marginTop: '-10px'
       },
    [theme.breakpoints.down( 'lg' )]: {
      width: '55px',
      height: '55px',
      marginTop: 0
       },
    [theme.breakpoints.down( 'md' )]: {
      width: '50px',
      height: '50px',

    },
    [theme.breakpoints.down( 'xs' )]: {
      width: '45px',
      height: '40px',

    }
    }

} ) );

export default function Block1() {
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


return (
<section className="news">


<div>

  <div className="news_box">

  <p >

  <span > <strong className="big">エクセルニュージーランドは</strong> </span>
キミのホンキを本気で応援します！
自然豊かな美しい国ニュージーランドの中でも、特にのどかで且つ近代的な街クライストチャーチで
留学を成功に導く経験豊富なサポートと自立と自信を育てる親身な関わりで、  <span > <strong style={{color: 'black', fontWeight: 400}}>留学生のホンキを本気で応援します！ </strong> </span>
ニュージーランド、クライストチャーチでの、中学、高校、大学、語学学校、専門学校留学を、成功に導く
経験豊富な留学サポート、そして 入学手続きから、渡航準備、到着後のオリエンテーション、学校生活、ホームステイの留学全般
最初から最後まで安心にサポートいたします。 ご気軽にご相談ください。

  </p>


  <motion.div
      className="img_container"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}>

  <img className="img_earth" src="assets/earth.jpg" />
  <div className="img_title">NZ留学の魅力</div>
  <div className="overlay"></div>
  {/* <div className="img_button"> */}
  <motion.div className="img_button" {...buttonAnimation} >
 <a href="#">お問い合わせ</a></motion.div>

</motion.div>
</div>

<div className="bell_container">


  <h2 >

    <img src="/assets/bell.svg"
        className={classes.bell}>

        </img>

        ExcelNzからお知らせ</h2>
  <ol className="ordered-list">


  <Message/>
  </ol>
  <br />
  <p></p>
  </div>

  </div>

</section>


);
    }
