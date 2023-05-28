import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero/Hero'
import { SliderData } from './Data/SliderData'

const App = () => {

 

  return (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero SliderData={SliderData} />
    </Router>
  </>   
  
  )
}

export default App