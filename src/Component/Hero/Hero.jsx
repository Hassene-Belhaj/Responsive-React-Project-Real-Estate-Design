import React from 'react'
import {ContainerSlider,HeroSlider, NextBtn, NextSlide, PrevBtn, PrevSlide,} 
from './Hero.Style'
import { useState } from 'react'
import styled from 'styled-components'

const Hero = ({SliderData}) => {

  const [currentIndex,setCurrentIndex] = useState(0)

  const ContainerSlider = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ), url(${SliderData[currentIndex].image});
  background-position: center;
  background-size: cover;
  opacity: 1;
  ` 






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
      <ContainerSlider>
         <NextBtn> 
            <NextSlide onClick={nextSlide} size={40} />
          </NextBtn>
         <PrevBtn> 
           <PrevSlide onClick={prevSlide} size={40} />
          </PrevBtn>
      </ContainerSlider>
  )
}

export default Hero

