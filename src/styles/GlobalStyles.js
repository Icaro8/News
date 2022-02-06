import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --gray-800:#1A202C;
  --gray-700:#2D3748;
  --gray-600:#4A5568;
  --gray-500:#718096;
  --gray-400:#A0AEC0;
  --gray-300:#CBD5E0;
  --gray-200:#E2E8F0;
  --gray-100:#EDF2F7;
  --gray-50:#F7FAFC;

  --white:#FFFFFF;
  --black:#000000;

  --blue-400:#4299E1;
  --blue-300:#63B3ED;
  --blue-200:#90CDF4;
  --blue-100:#BEE3F8;
  --blue-50:#EBF8FF;

  --purple-500:#805AD5;
  --purple-400:#9F7AEA;
  --purple-300:#B794F4;

}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body,#root{
    width: 100%;
    height: 100%; 
  }
  body,input,button,textarea,a{
    font-family: 'Roboto', sans-serif; 
  }
  button{
    cursor:pointer
  }
`;
//!font-family: 'Indie Flower', cursive;
//!font-family: 'Roboto', sans-serif;
