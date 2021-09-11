import React from 'react';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';
import Project from '../../src/components/screens/projects';
import { GITHUB_USERNAME } from '../../src/data/websiteData';

// eslint-disable-next-line react/prop-types
function ProjetoScreen({ repositorios }) {
  return (
    <Project repositorios={repositorios} />
  );
}

ProjetoScreen.defaultProps = {};

export default websitePageHOC(ProjetoScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projects',
    },
  },
});

export async function getStaticProps() {
  const repositorios = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then((res) => res.json());
  return {
    props: {
      repositorios,
    }, // will be passed to the page component as props
  };
}
