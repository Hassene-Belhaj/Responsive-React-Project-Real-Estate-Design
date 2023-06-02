import React from 'react'
import Home from './Home/Home'
import Hero from './Hero/Hero'
import { SliderData } from '../Data/SliderData'
import InfoSectionTwo from './InfoSectionTwo/InfoSectionTwo'
import { useLocation } from 'react-router'
import {Routes,Route} from 'react-router-dom'
import {AnimatePresence } from 'framer-motion'


const AnimatedR = () => {
    const location = useLocation()

  return (
<AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path={'/'} element={<Home />} />
    <Route path={'/homes'} element={<Hero SliderData={SliderData} />} />
    <Route path={'/rental'} element={<InfoSectionTwo />} />
    <Route path={'/about'} element={<InfoSectionTwo />} />
  </Routes>
</AnimatePresence>
    )
}

export default AnimatedR