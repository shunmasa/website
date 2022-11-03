import {React, useState, useEffect } from 'react';
import Hidden from '@material-ui/core/Hidden';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, Button} from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const useStyles = makeStyles( theme => ( {
    boxContainer: {
        backgroundColor: '#fff',
        padding: '2em',
        marginRight: '1em',
        marginBottom: '1rem',
        height: '100%',
        // maxHeight: '60rem',
        borderRadius: '12px',

        [theme.breakpoints.down( 'md' )]: {
          marginBottom: '.5em',
          margin: 0
          },
          [theme.breakpoints.down( 'sm' )]: {

            margin: 0
            },
        [theme.breakpoints.down( 'xs' )]: {
        margin: 0,
        marginTop: '-15px',
        boxShadow: 'none',
        }
      },
      boxContainer2: {
        backgroundColor: '#fff',
        padding: '2em',
        height: '100%',
        // maxHeight: '65rem',
        borderRadius: '12px',

        [theme.breakpoints.down( 'md' )]: {
          marginBottom: '.5em',

          },
        [theme.breakpoints.down( 'xs' )]: {
          margin: 0,
          boxShadow: 'none'
        }
      },

    rowContainer: {
        zIndex: 100,
        backgroundColor: '#f7f8fc',
        width: '100%',
        padding: '210px',
        [theme.breakpoints.down( 'lg' )]: {
          padding: '200px',
           },
        [theme.breakpoints.down( 'md' )]: {
          marign: 0,
          padding: '100px',
           },
        [theme.breakpoints.down( 'sm' )]: {
          width: '100%',
          marginLeft: 0,
        padding: 0,
       margin: 0,
        },

        [theme.breakpoints.down( 'xs' )]: {
          padding: 0,
          marginRight: 0,
          marginTop: '30px'

           }
      },
} ) );


const boxVariant1 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0},
};
const boxVariant2 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9} },
  hidden: { opacity: 0, scale: 0 }
};

const boxVariant3 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1} },
  hidden: { opacity: 0, scale: 0 }
};

export default function Block3 () {
  const control = useAnimation();
  const [ ref, inView ] = useInView();


    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const matchesSM = useMediaQuery( theme.breakpoints.down( 'sm' ) );
    const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );


    const ReadLimit = ( { children, maxCharacter = 200 } ) => {
        const text = children ;
        const [ isShrinker, setIsShrinker ] = useState( true );

        const resultString = isShrinker ? text.slice( 0, maxCharacter ) : text;
        function toggleIsShrinker() {

          setIsShrinker( ! isShrinker );
        }

        return (

          <Typography style={{fontSize: '1rem'}}>
                {resultString}

                <Button style={{marginLeft: '0.5rem'}}variant="outlined" onClick={toggleIsShrinker} color="primary">
                  {isShrinker ? 'もっと読む' : '縮める'}
                  </Button>


         </Typography>


        );
      };
      useEffect( () => {
        if ( inView ) {
          control.start( 'visible' );
        } else {
          control.start( 'hidden' );
        }
      }, [ control, inView ] );

return (
<Grid >

<Grid

item
container
direction="column"
className={classes.rowContainer}
justifyContent="space-around"
>


<Hidden mdDown>
{/* <AnimationOnScroll duration={5}
animateIn='tada'
initiallyVisible={true}> */}

<Grid item className="talk-bubble tri-right border round btm-left-in"
style={{marginBottom: '1em', marginTop: '1em'}}>

<Grid item container className="talk_text">

<p>
&nbsp;正しい留学成功の３つの鍵&nbsp;

</p><span><img src="/assets/key.svg"
style={{height: '30px', width: '30px'}}></img></span>
</Grid>
</Grid>
{/* </AnimationOnScroll> */}
</Hidden>


<Hidden lgUp>

<Grid item className="talk-bubble tri-right border round btm-left-in"
style={{marginBottom: '1em', marginTop: matchesXS ? '4em' : '1em', marginLeft: matchesSM ? '5px' : 0}}>

<Grid item container className="talk_text">

<p> &nbsp;正しい留学成功の３つの鍵&nbsp;</p><span><img src="/assets/key.svg"
style={{height: '30px', width: '30px'}}></img></span>
</Grid>
</Grid>

</Hidden>


<Grid item container justifyContent={matchesMD ? 'center' : 'center'}>


  <Grid
    item
    container
    direction="column"
    md
    alignItems={matchesMD ? 'center' : 'center'}
    className={classes.boxContainer}
  >
  <Grid item>
    <Typography  variant="h5">
    ①正しい留学先を選ぶ−どうしてクライストチャーチなの？
      </Typography>

    <Grid item container justifyContent="center" style={{paddingTop: '3em'}}>
    <Hidden smUp>
    
      <img
        src="/assets/earth.svg"
        alt="choose place for abroad"
        style={{ maxWidth: matchesMD ? 80 : 100 }}

      />

      </Hidden>

      <Hidden xsDown>
       <motion.div
      ref={ref}
      variants={boxVariant1}
      initial="hidden"
      animate={control}
    >
      <img
        src="/assets/earth.svg"
        alt="choose place for abroad"
        style={{ maxWidth: matchesMD ? 80 : 100 }}

      />

      </motion.div>
      </Hidden>
    </Grid>

    </Grid>


    <Grid item style={{paddingTop: '2em'}}>
      <Typography variant="caption">
      <ReadLimit>政治、治安が安定し、留学生に対する理解とサポートが充実した国、ニュージーラ
ンド。世界初、政府による「留学生の生活保障に関する服務規程」が設置されてお
り、留学生の安全と権利が守られています。また教育先進国として、2017年エコノ
ミスト英誌では、ニュージーランドは未来教育指数（Education Future Skill）世
界１位に評価されました。世界クラスの教育を受けることが可能です。
そして、ニュージーランドの第二の都市、40万人が暮らすクライストチャーチ
は、バスシステムが整っていて、学校、文化施設、公共施設、公園やビーチへ
のアクセスが簡単です。都会でありながら自然を感じることが出来る街、多様
性に柔軟で人々が親切な街、それがクライストチャーチです。
ここクライストチャーチで、「アナタ流」の留学をご提案させていただきます
。（参考)
{/* <br/><a href="https://www.christchurchnz.com/study">https://www.christchurchnz.com/study</a> */}
</ReadLimit>
      </Typography>
    </Grid>

  </Grid>


  <Grid
    item
    container
    direction="column"
    md

    alignItems={matchesMD ? 'center' : 'center'}
    className={classes.boxContainer}
  >
    <Grid item>
    <Typography  variant="h5">
    ②正しい学校を選ぶ−個性に合った学校選び
      </Typography>

    <Grid item container justifyContent="center" style={{paddingTop: '1em'}}>
    <Hidden smUp>

      <img
        src="/assets/school.svg"
        alt="choose school"
        style={{ maxWidth: matchesMD ? 80 : 100, paddingTop: '20px', paddingBottom: '10px' }}

      />

      </Hidden>

      <Hidden xsDown>
<motion.div
      ref={ref}
      variants={boxVariant2}
      initial="hidden"
      animate={control}
    >
      <img
        src="/assets/school.svg"
        alt="choose school"
        style={{ maxWidth: matchesMD ? 80 : 100, paddingTop: '20px', paddingBottom: '10px' }}

      />
      </motion.div>
      </Hidden>
    
    </Grid>

    </Grid>
    <Grid item style={{paddingTop: '2em'}}>
      <Typography variant="caption">
      <ReadLimit>正しい学校を選ぶ−個性に合った学校選び
自分に合った学校選びは、留学環境の決め手です。
留学生一人ひとりの特性、目的/ゴールに合った校風、カリキュラムを考慮し、話し
合いながら学校選びをします。
中高校留学の場合、公立、私立（ミッション系も含む）、共学、男子校、女子校、アカデミック校、ラグビー強豪校、その他スポーツや音楽に力を入れた学校から考慮して選びます。

また、大学、専門学校、語学学校など、あなたの目的/ゴール、英語力に合った学校をご紹介いたします。年齢は問いません。自分に合った学校が見つかるはず。
必要な英語力は、渡航までに、中学生は英検３級レベル、高校生は準２級レベルい以上の英語力があることが望まれます。語学学校留学は、現段階での英語力から、留学を始めることが出来ます。大学、専門学留学におきましては、まずご相談ください。
</ReadLimit>
      </Typography>
    </Grid>
  </Grid>


  <Grid
    item
    container
    direction="column"
    md
    alignItems={matchesMD ? 'center' : 'center'}
    justifyContent="center"
    className={classes.boxContainer2}
  >

    <Grid item>
    <Typography  variant="h5">
      ③正しいエージェントを選ぶ−どうしてExcel NZなのか
      </Typography>
      <Hidden smUp>
      
      <Grid item container justifyContent="center" style={{paddingTop: '1em'}}>

      <img
        src="/assets/search.svg"
        alt="search company"
        style={{ maxWidth: matchesMD ? 80 : 100, paddingTop: '30px'}}
      />

</Grid>
</Hidden>
<Hidden xsDown>
         <motion.div
      ref={ref}
      variants={boxVariant3}
      initial="hidden"
      animate={control}
    >
      <Grid item container justifyContent="center" style={{paddingTop: '1em'}}>

      <img
        src="/assets/search.svg"
        alt="search company"
        style={{ maxWidth: matchesMD ? 80 : 100, paddingTop: '30px'}}
      />

</Grid>
</motion.div>
</Hidden>
{/* </AnimationOnScroll> */}

    </Grid>
    <Grid item style={{paddingTop: '2em'}}>
      <Typography variant="caption">
      <ReadLimit>
      一言に留学エージェントと言っても、サービス/業務内容、料金体制も様々です。
Excel NZの主なサービス/業務内容は、現地ガーディアンサポート業務です。ガーディアンと
は、身元引受人のことです。留学生の矢面に立つ存在です。
独自のオリエンテーションやワークショッププログラムを持ち、英語の習得及びコミュケー
ション力の向上のみに留まらず、人として自信とグローバルな視野を持ち、国境を超えた世
界を舞台に生きる力、人間性を育むサポートを目指します。Excel NZは、一人ひとりの留
学を、現地クライストチャーチでサポートします。また留学生、保護者、学校と、しっかり
コミュニケーションを取りながら、教育的配慮を持って留学生に関わっていきます。
Excel NZのモットーは、「もし、自分の子供が留学をして、こんな大人が身近にいて欲しい
、という大人でいる」ということ。励まし、教え、導き、時には叱り、時には甘やかす、業
務内容に現れない「信頼出来る人」であることをお約束いたします。
</ReadLimit>
      </Typography>

    </Grid>
  </Grid>

</Grid>

</Grid>
</Grid>


   );

}
