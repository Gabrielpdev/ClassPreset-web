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

  .container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px){
      max-width: 540px;
    }

    @media (min-width: 768px){
      max-width: 720px;
    }

    @media (min-width: 992px){
      max-width: 960px;
    }

    @media (min-width: 1200px){
      max-width: 1140px;
    }
  }
`