import React, { useEffect } from 'react'
import {HeroContainer, HeroSlider, NextBtn, NextSlide, PrevBtn, PrevSlide,} 
from './Hero.Style'
import { useState } from 'react'
import { SliderData } from '../../Data/SliderData'

const Hero = () => {
const [currentIndex,setCurrentIndex] = useState(0)



const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? SliderData.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const nextSlide = () => {
  const isLastSlide = currentIndex === SliderData.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};


  return (
    <HeroContainer >
        <HeroSlider style={{background:`no-repeat center url(${SliderData[currentIndex].image})`,backgroundSize:"cover"}}>
         <NextBtn> 
            <NextSlide onClick={nextSlide} size={40} />
          </NextBtn>
         <PrevBtn> 
           <PrevSlide onClick={prevSlide} size={40} />
          </PrevBtn>
        </HeroSlider>
    </HeroContainer>
  )
}

export default Hero

