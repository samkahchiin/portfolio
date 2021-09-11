import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function SEO({ headTitle }) {
  const pageTitleDefault = 'Sam Kah Chiin - Portfolio';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);
  // TODO: Move this
  const url = 'https://samkahchiin.vercel.app/';
  const image = 'https://postimg.cc/7G39Vdw7';
  const description = 'Sam Kah Chiin Portfolio';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Portfolio" />
      <meta name="author" content="Sam Kah Chiin" />
      <meta name="keywords" content="Ruby on Rails, Javascript, Next.js, React, Portfolio" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <meta httpEquiv="Content-Security-Policy" content="script-src 'self' https://carol-portfolio.vercel.app/;" /> */}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};

export default SEO;
