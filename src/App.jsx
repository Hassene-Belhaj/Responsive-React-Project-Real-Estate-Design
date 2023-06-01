import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Hero from './Component/Hero/Hero'
import { SliderData } from './Data/SliderData'
import InfoSectionTwo from './Component/InfoSectionTwo/InfoSectionTwo'


const App = () => {

 

  return (
  <>
    <Router>
      <GlobalStyle /> 
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/homes'} element={<Hero SliderData={SliderData}  />} />
        <Route path={'/rental'} element={<InfoSectionTwo />} />
      </Routes>
      <Footer/>  
    </Router>
  </>   
  
  )
}

export default App

{/* <InfoSectionTwo />
<InfoSection  {...InfoDataTwo}  {...InfoSectionStyleTwo}/>
<PhotoSection PhotoSectionData={PhotoSectionData} /> */}