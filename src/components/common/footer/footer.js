import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import FooterIcons from './footerIcons';

function Footer() {
  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent={{
        xs: 'center',
        md: 'space-between',
      }}
      alignItems="center"
      position="fixed"
      height="8vh"
      zIndex="100"
      bottom="0"
      left="1rem"
      right="1rem"
      backgroundColor="#EFEFEF"
    >
      <Text zIndex="18" rel="noopener noreferrer" tag="a" variant="paragraph3" color="fonts.main" textAlign="center">
        ©
        {new Date().getFullYear()}
        {' '}
        <a href="https://github.com/samkahchiin" target="_blank" rel="noreferrer">
          - KC
        </a>
        {' & '}
        <a href="https://github.com/carolandrade1" target="_blank" rel="noreferrer">
          Carol
        </a>
      </Text>
      <Box
        display={{
          xs: 'none',
          md: 'initial',
        }}
      >
        <FooterIcons />
      </Box>
    </Box>
  );
}

export default Footer;
