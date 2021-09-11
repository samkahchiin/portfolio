import React from 'react';
import Sobre from '../../src/components/screens/sobre';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';

function SobreScreen() {
  return (
    <Sobre />
  );
}

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About Me',
    },
  },
});

SobreScreen.defaultProps = {};
