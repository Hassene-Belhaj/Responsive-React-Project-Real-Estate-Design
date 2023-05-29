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

