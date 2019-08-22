import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/bg.svg';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
  }

  a {
    text-decoration:none;
    color:inherit;
  
    &:hover {
      text-decoration: none;
    }
  }

  ul {
    list-style:none;
  }
  
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  
  body {
    background: #191919 url(${background}) no-repeat center top;
    background-size: cover;
  }

`;

export default GlobalStyle;
