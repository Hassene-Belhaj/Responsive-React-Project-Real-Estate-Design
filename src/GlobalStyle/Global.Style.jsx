import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}

html {
  scroll-behavior: smooth;
}

`

export const Button = styled.button`
background: ${({primary})=>(primary ? "#000d1a" : "#CB853F")};
cursor: pointer;
transition: all 0.3s ease ;
padding: ${({padding})=>padding};
margin-right: ${({marginR})=>marginR};
margin-left: ${({marginL})=>marginL};
border: none;
border-radius: 2px;
font-weight: 600;
font-size: 18px;
`