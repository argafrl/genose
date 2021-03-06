import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin:0;
    padding:0;
  }
  
  *,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
    @media only screen and (max-width:56.25em){
        font-size: 50%;
    } 
    @media only screen and (max-width:37.5em){
        font-size: 43.75%;
    } 
}
body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #222;
  line-height: 1.6;
  background-image: linear-gradient(to right bottom,#022B3A,#1F7A8C);
  min-height:100vh;
  width:100%;
}
`;

export default GlobalStyle;