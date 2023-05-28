import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

html {
  scroll-behavior: smooth;
}

`

export const Button = styled.button`
background: ${({background})=>(background ? "#000d1a" : "#CB853F")};
color:${({color})=>color ? "#fff" : "#000"} ;
cursor: pointer;
transition: all 0.3s ease ;
padding: ${({padding})=>padding};
margin-right: ${({marginR})=>marginR};
margin-left: ${({marginL})=>marginL};
margin-top: ${({marginT})=>marginT};
margin-bottom: ${({marginB})=>marginB};
border: none;
border-radius: 2px;
font-size: 18px;
font-weight: 600;
`