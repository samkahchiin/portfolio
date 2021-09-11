import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import breakpointsMedia from '../util/breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  ${normalize}

  html {
    scroll-behavior: smooth;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;
    background-color: ${({ theme }) => theme.colors.background.main.color};
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  section {
    min-height: 100vh; max-width: 100vw;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: solid 1px;
    border-color: ${({ theme }) => theme.colors.background.second.color};

   ${breakpointsMedia({
    md: css`
        margin-bottom: none;
        padding-bottom: 0;
        border-bottom: 0;
      `,
  })}
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fonts.main.color};
  }

  h1, h2, h3, h4 {
    line-height: 1.15;
    margin: 0px;
  }

  p {
    margin: 0;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
