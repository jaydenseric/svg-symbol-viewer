import { stylesGlobal, stylesGlobalTheme } from 'device-agnostic-ui';
import Head from 'next/head';
import Router from 'next/router';
import Footer from '../components/Footer';
import GitHubLinks from '../components/GitHubLinks';

if (process.env.GA_TRACKING_ID)
  Router.events.on('routeChangeComplete', (url) => {
    if (typeof window.ga === 'function') {
      window.ga('set', 'page', url);
      window.ga('send', 'pageview');
    }
  });

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" content="white" />
      <link rel="icon" sizes="192x192" href="/icon.png" />
      <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jaydenseric" />
      <meta name="twitter:creator" content="@jaydenseric" />
    </Head>
    <Component {...pageProps} />
    <Footer>
      <GitHubLinks author="jaydenseric" project="svg-symbol-viewer" />
    </Footer>
    <style jsx global>
      {stylesGlobalTheme}
    </style>
    <style jsx global>
      {stylesGlobal}
    </style>
  </>
);

export default App;
