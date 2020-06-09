import Head from 'next/head';
import PropTypes from 'prop-types';

const Page = ({ title, description, children }) => (
  <>
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta
        property="og:image"
        content={`${process.env.ORIGIN}/thumbnail.png`}
      />
    </Head>
    {children}
  </>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
