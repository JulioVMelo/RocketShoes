import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/bg.svg';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    outline: none;
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
    font-family: sans-serif;
  }

  .Toastify__toast--success {
    background: #7159c1!important;
  }
  
`;

export default GlobalStyle;
