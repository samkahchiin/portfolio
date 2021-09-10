import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import CircleVideo from './animation/circleVideo';
import TextContainer from './style';
import Link from '../../common/link/link';

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
          Sam
        </Text>
        <Text
          tag="p"
          variant="paragraph3"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          A passionate Full Stack Software Developer 🚀 having an experience of building Web
          applications with Ruby on Rails / JavaScript / Reactjs / Nodejs and some other cool
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
