import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero/Hero'
import { SliderData } from './Data/SliderData'
import InfoSection from './Component/InfoSection/InfoSection'
import { InfoData } from './Data/InfoData'
import { InfoSectionStyleOne } from './Data/Data.Style'
import InfoSectionTwo from './Component/InfoSectionTwo/InfoSectionTwo'

const App = () => {

 

  return (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero SliderData={SliderData} />
      <InfoSection  {...InfoData}  {...InfoSectionStyleOne}/>
      <InfoSectionTwo />
    </Router>
  </>   
  
  )
}

export default App