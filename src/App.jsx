import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Hero from './Component/Hero/Hero'
import { SliderData } from './Data/SliderData'
import InfoSection from './Component/InfoSection/InfoSection'
import { InfoData, InfoDataTwo } from './Data/InfoData'
import { InfoSectionStyleOne, InfoSectionStyleTwo } from './Data/Data.Style'
import InfoSectionTwo from './Component/InfoSectionTwo/InfoSectionTwo'
import InfoSectionThree from './Component/InfoSectionThree/InfoSectionThree'
import Footer from './Component/Footer/Footer'
import PhotoSection from './Component/PhotoSection/PhotoSection'

const App = () => {

 

  return (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero SliderData={SliderData} />
      <InfoSection  {...InfoData}  {...InfoSectionStyleOne}/>
      <InfoSectionThree />
      <InfoSection  {...InfoDataTwo}  {...InfoSectionStyleTwo}/>
      <PhotoSection />
      <Footer/>
      
    </Router>
  </>   
  
  )
}

export default App