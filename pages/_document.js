import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';
import theme from '../src/ui/Theme';

export default class MyDocument extends Document {
    render() {
    return (
    <Html lang="ja">
      <Head>
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
          />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
           <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-min.css"></link>
          </Head>

         <body style={ {'background-color': '#F1F1F1'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
}

MyDocument.getInitialProps = async ( ctx ) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage( {
      enhanceApp: ( App ) => ( props ) => styledComponentsSheet.collectStyles( sheets.collect( <App {...props} /> ) )
    } );

  const initialProps = await Document.getInitialProps( ctx );

  return {
    ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
              {sheets.getStyleElement()}
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          )

  };

};
