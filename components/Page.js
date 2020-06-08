import Head from 'next/head';
import PropTypes from 'prop-types';

const Page = ({ title, description, children }) => (
  <>
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#7d0bff" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jaydenseric" />
      <meta name="twitter:creator" content="@jaydenseric" />
      {title && <meta property="og:title" content={`${title}`} />}
      {description && <meta property="og:description" content={description} />}
      <meta
        property="og:image"
        content={`${process.env.ORIGIN}/static/thumbnail.png`}
      />
      <link rel="icon" sizes="192x192" href="/static/icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
    {children}
    <style jsx global>{`
      html {
        text-size-adjust: none;
        overflow-wrap: break-word;
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif, emoji,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        background-color: #7d0bff;
        color: white;
        touch-action: manipulation;
      }

      body {
        margin: 0;
        min-width: 320px;
        overflow-x: hidden;
      }

      ::selection {
        background-color: hsla(72, 100%, 60%, 0.85);
      }
    `}</style>
  </>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
