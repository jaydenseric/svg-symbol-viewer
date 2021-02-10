import 'device-agnostic-ui/public/theme.css';
import 'device-agnostic-ui/public/global.css';
import 'device-agnostic-ui/public/components/Heading.css';
import 'device-agnostic-ui/public/components/Icon.css';
import 'device-agnostic-ui/public/components/LinkText.css';
import 'device-agnostic-ui/public/components/Margin.css';
import 'device-agnostic-ui/public/components/Scroll.css';
import 'device-agnostic-ui/public/components/Toggle.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import GitHubLinks from '../components/GitHubLinks';
import GoogleAnalyticsPageviewTracker from '../components/GoogleAnalyticsPageviewTracker';

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
    {!!process.env.GA_TRACKING_ID && <GoogleAnalyticsPageviewTracker />}
  </>
);

export default App;
