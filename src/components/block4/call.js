import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import Hidden from '@material-ui/core/Hidden';
import { useViewportScroll, useTransform } from 'framer-motion';
import CallAnimation from './callAnimation';

const useStyles = makeStyles( theme=>
  createStyles( {
    animation: {
      maxWidth: '25em',
      marginTop: '2em',
      marginLeft: 0,
      marginRight: 0,
      [theme.breakpoints.down( 'xl' )]: {
        marginLeft: '5rem',
        maxWidth: '27em',
        },
      [theme.breakpoints.down( 'lg' )]: {
        maxWidth: '21em',
        marginLeft: '2rem',
        },
      [theme.breakpoints.down( 'md' )]: {

        maxWidth: '20em',
        marginLeft: 0,
        marginTop: '120px',
        },
      [theme.breakpoints.down( 'sm' )]: {
        maxWidth: '300px',

      },
      [theme.breakpoints.down( 'xs' )]: {
        // maxWidth: '330px',
        marginTop: '60px',
        marginLeft: '5rem',
      }
    },

    container: {

      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '0 200px',
      [theme.breakpoints.down( 'xl' )]: {
        height: '100%',
       marginLeft: 0,
        width: '100%',
        marginRight: 0,
        padding: '0 140px',
        },
      [theme.breakpoints.down( 'lg' )]: {
 
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '6rem',
        width: '100%',
        padding: '0 100px',
        },
      [theme.breakpoints.down( 'md' )]: {

        width: '100%',
        padding: '0 70px',
        },
        [theme.breakpoints.down( 'sm' )]: {
      
          marginLeft: 0,
          width: '100%',
          padding: '0 20px',
          flexDirection: 'column-reverse',
          },
      [theme.breakpoints.down( 'xs' )]: {
      marginBottom: 0,
      width: '100vw',
      padding: '0 10px',

      }

      },
    textContainer: {
      marginTop: '5em',
      marginBottom: '5em',
      [theme.breakpoints.down( 'xl' )]: {
        width: '100%',
        marginRight: '50px',
        marginLeft: '10rem',
        marginTop: '5em',
        marginBottom: '5em',

      },
      [theme.breakpoints.down( 'lg' )]: {
        marginTop: '3em',
        marginLeft: '8rem',
        marginRight: '10px',
        marginBottom: 0,
        marginRIght: 0,

      },
      [theme.breakpoints.down( 'md' )]: {
        marginTop: 0,
        marginLeft: '2rem',
        marginRight: 0,
        marginBottom: '2em',
      },
      [theme.breakpoints.down( 'sm' )]: {
        marginLeft: '1rem',
        width: '80%'
      },
      [theme.breakpoints.down( 'xs' )]: {
        width: '90%',
        marginTop: '2rem',
        marginLeft: 0,
        marginRight: 0,

        marginBottom: 0,

      },
    },

    title: {
      [theme.breakpoints.down( 'xl' )]: {
      fontFamily: 'Noto Sans TC, sans-serif',
      fontWeight: 650,
      fontSize: '2.5rem',
       color: '#a8bbff',

      },
      [theme.breakpoints.down( 'lg' )]: {
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down( 'md' )]: {
        fontSize: '1.8rem',
      },
      [theme.breakpoints.down( 'sm' )]: {
        fontSize: '1.6rem',
      },
      [theme.breakpoints.down( 'xs' )]: {
        fontSize: '18px',
        marginLeft: '-10px'
      }
    },

  } )
);


export default function Call () {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery( theme.breakpoints.down( 'xs' ) );


  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 1.15 ] );

  return (
    <>

<Grid item>

<Grid container className={classes.container}
alignItems="center" direction="row">


      <Hidden xsDown>
            <Grid sm item className={classes.animation}>
               <CallAnimation/>
              </Grid>

   </Hidden>


   <Hidden smDown>

<Grid sm item className={classes.textContainer}>
{/* <AnimationOnScroll animateIn='fadeIn'> */}
<div className={classes.title}>
<span style={{marginLeft: '-1.5rem', marginRight: '.5rem'}}>○</span>ExcelNZ留学サポート内容のご紹介
 </div>
 {/* </AnimationOnScroll>
 <AnimationOnScroll animateIn='fadeIn'> */}
<Typography variant="h5" style={{marginLeft: '.5rem'}}>
現地ガーディアンサポート内容
 </Typography>
 {/* </AnimationOnScroll>
 <AnimationOnScroll animateIn='fadeIn'> */}
<Typography variant="h6"  style={{marginTop: '35px', marginLeft: 0, marginRight: 0}}>
<span style={{border: '1px solid #0362fc'}}>留学手続き代行/渡航準備</span>
<span style={{marginLeft: '0.5rem', border: '1px solid #0362fc'}}>到着後</span> 空港迎え、到着後のオリエンテーション（学校生活、NZ生活について、地図の見方、バスの乗り方、登下校方法の確認、バスカード購入、携帯電話の使い方、学生ビザ申請及び健康診断（学生ビザ申請の必要があれば）、銀行口座開設、両替、インターネットバンキングの設定、銀行口座の詳細の報告）、初登校日　同行、制服/文房具購入サポート
<br/><span style={{border: '1px solid #0362fc', marginRight: '0.5rem'}}>留学中</span>学校生活全般サポート、ホームステイサポート
病気、怪我、事故、緊急災害時の24時間対応、必要な時の個別訪問
保護者へ近況報告レポート（月一回）
定期的な学校訪問(2週間に一度)、家庭訪問（1学期または必要に応じて）、生活指導、学習指導<br/>学期に一度のワークショップの開催（近況報告、学習・生活アドバイス、日本食、楽しいアクティビティー）NCEA対策会の開催
休暇中のアクティビティーや旅行のアレンジ、スキートリップの催行など
成績表の翻訳、三者面談同行、病気/怪我の際の医療機関への同行、帰国航空券の予約及び日付変更、海外旅行保険の申請代行、
帰国の際の空港サポート、次年度の学費等の継続手続きサポート、学校への各種支払いの代行（インターネットバンキング）、進路相談<br/><span style={{border: '1px solid #0362fc', marginRight: '0.2rem'}}>その他</span>必要に応じて学校、ホームステイ、保護者との連絡を取りながら、連携して留学生をサポートします。
 </Typography>
 {/* </AnimationOnScroll> */}
</Grid>

</Hidden>


   <Hidden mdUp>

   <Grid sm item className={classes.textContainer}>


   <div className={classes.title}>
<span style={{marginLeft: matchesXS ? '.5rem' : '-1.5rem', marginRight: '.5rem'}}>○</span>ExcelNZ留学サポート内容のご紹介
 </div>

<Typography variant="h6" style={{marginLeft: matchesXS ? '20px' : 0}}>
現地ガーディアンサポート内容
    </Typography>

<Typography variant="h6"  style={{marginTop: '35px', 
marginLeft: matchesXS ? 0 : 0, 
marginRight: matchesXS ? 0 : 0, 
fontSize: '1rem'}}>
<span style={{border: '1px solid #0362fc'}}>留学手続き代行/渡航準備</span>
<span style={{marginLeft: '0.5rem', border: '1px solid #0362fc'}}>到着後</span> 空港迎え、到着後のオリエンテーション（学校生活、NZ生活について、地図の見方、バスの乗り方、登下校方法の確認、バスカード購入、携帯電話の使い方、学生ビザ申請及び健康診断（学生ビザ申請の必要があれば）、銀行口座開設、両替、インターネットバンキングの設定、銀行口座の詳細の報告）、初登校日　同行、制服/文房具購入サポート
<br/><span style={{border: '1px solid #0362fc', marginRight: '0.5rem'}}>留学中</span>学校生活全般サポート、ホームステイサポート
病気、怪我、事故、緊急災害時の24時間対応、必要な時の個別訪問
保護者へ近況報告レポート（月一回）
定期的な学校訪問(2週間に一度)、家庭訪問（1学期または必要に応じて）、生活指導、学習指導<br/>学期に一度のワークショップの開催（近況報告、学習・生活アドバイス、日本食、楽しいアクティビティー）NCEA対策会の開催
休暇中のアクティビティーや旅行のアレンジ、スキートリップの催行など
成績表の翻訳、三者面談同行、病気/怪我の際の医療機関への同行、帰国航空券の予約及び日付変更、海外旅行保険の申請代行、
帰国の際の空港サポート、次年度の学費等の継続手続きサポート、学校への各種支払いの代行（インターネットバンキング）、
進路相談<br/><span style={{border: '1px solid #0362fc', marginRight: '0.2rem'}}>その他</span>必要に応じて学校、ホームステイ、保護者との連絡を取りながら、連携して留学生をサポートします。
    </Typography>
 </Grid>

   </Hidden>


</Grid>

<Hidden smUp>
 <Grid sm item className={classes.animation}>

     <CallAnimation/>

   </Grid>

   </Hidden>


</Grid>

    </>
  );
}

