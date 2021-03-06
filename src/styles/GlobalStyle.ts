import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    height: 100%;
    width: 100%;
    font-family: "Paytone One", Arial, Helvetica, sans-serif;

    #__next{
      height: 100%;
      width: 100%;
    }
  }

  html {
    width: 100%;
    height: 100%;
  }

  button, input{
    outline: none;
    cursor:pointer;
  }
`