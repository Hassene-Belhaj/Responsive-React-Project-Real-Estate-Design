import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import ScrollToTheTop from './Data/ScrollToTheTop'
import AnimatedR from './Component/AnimatedR'


const App = () => {


  return (
  <>
    <Router>
      <ScrollToTheTop />
      <GlobalStyle /> 
      <Navbar />
       <AnimatedR />
      <Footer/>  
    </Router>
  </>   
  
  )
}

export default App

