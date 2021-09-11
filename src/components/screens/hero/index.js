import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import CircleVideo from './animation/circleVideo';
import TextContainer from './style';
import Link from '../../common/link/link';
import { landingPage, seo } from '../../../data/websiteData';

// TODO: Make this constant
const START_YEAR = 2016;

function Hero() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      height="75vh"
      padding={{
        xs: '0px',
        md: '40px',
      }}
      paddingLeft={{
        xs: '20px',
        md: '40px',
      }}
      paddingRight={{
        xs: '20px',
        md: '40px',
      }}
    >
      <TextContainer>
        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text
              tag="p"
              variant="paragraph3"
              textAlign="left"
              marginBottom="12px"
              color="fonts.main"
            >
              Hello my name is
            </Text>
            <Text
              tag="h1"
              variant="titleXS"
              textAlign="left"
              marginBottom="12px"
              color="fonts.main"
            >
              KC
            </Text>
          </Box>
          <Box display={{ xs: 'none', md: 'block' }}>
            <img src={landingPage.imageLink} alt={seo.siteOwner} />
          </Box>
        </Box>
        <Text
          tag="p"
          variant="paragraph3"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          A passionate AWS and terraform certified Full Stack Software Developer 🚀 having almost
          {' '}
          {new Date().getFullYear() - START_YEAR}
          {' '}
          years of experience building Web
          applications with Ruby on Rails / JavaScript / Nextjs / Reactjs
          / Nodejs / AWS / Terraform and some other cool
          libraries and frameworks.
        </Text>
        <Link href="/contact" className="contato">
          <Text tag="span" variant="paragraph2" color="fonts.main">
            Contact
          </Text>
        </Link>
      </TextContainer>
      <CircleVideo />
    </Box>
  );
}

export default Hero;
