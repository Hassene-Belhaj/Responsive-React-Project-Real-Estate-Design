import React from 'react'
import {HeroContainer, HeroSlider, NextBtn, NextSlide, PrevBtn, PrevSlide } from './Hero.Style'
import { useState } from 'react'

const Hero = () => {
const [currIndex,setCurrIndex] = useState(0)


  return (
    <HeroContainer>
        <HeroSlider style={{background:`url(./images/house${1}.jpg)` ,backgroundPosition:"center",backgroundSize:"cover"}} >
         <NextBtn><PrevSlide size={35} /> </NextBtn>
         <PrevBtn><NextSlide  size={35}/> </PrevBtn>
        </HeroSlider>
    </HeroContainer>
  )
}

export default Hero

//50:00