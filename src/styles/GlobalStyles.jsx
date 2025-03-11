import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { globalColor } from './root';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    font-family: "IBM Plex Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background-color: ${globalColor.colorBody};
    color: ${globalColor.colorWhite};
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img, svg {
  display: block;
  width: 100%;
  height: 100%;
  
}
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: inherit;
  }
`;
export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
    padding: 0 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 80px;
  }
`;
export default GlobalStyles;
