import React from 'react';
import AboutMe from '../../src/components/screens/sobre';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';

function AboutMeScreen() {
  return (
    <AboutMe />
  );
}

export default websitePageHOC(AboutMeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About Me',
    },
  },
});

AboutMeScreen.defaultProps = {};
