import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero/Hero'

const App = () => {

 

  return (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </Router>
  </>   
  
  )
}

export default App