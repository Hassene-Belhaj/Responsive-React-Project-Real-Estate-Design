import React from 'react'
import { GlobalStyle } from './GlobalStyle/Global.Style'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'


const App = () => {

 

  return (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
       <Home />
      <Footer/>  
    </Router>
  </>   
  
  )
}

export default App