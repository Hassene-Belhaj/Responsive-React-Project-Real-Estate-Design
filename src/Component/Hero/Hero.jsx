import React, {useEffect, useState } from 'react'
import {Container, ContainerSlider, NextBtn, NextSlide, PrevBtn, PrevSlide, TextHero,} 
from './Hero.Style'
import { Button } from '../../Button/Button.Style'

const Hero = ({SliderData}) => {


  const [currentIndex,setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide()
    }, 2600)
 
    return () => clearTimeout(timeout)
    
}, [currentIndex])




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
    <Container>
      <ContainerSlider img={`url(${SliderData[currentIndex].image})`}>
         <NextBtn> 
            <NextSlide onClick={nextSlide} size={40} />
          </NextBtn>
         <PrevBtn> 
           <PrevSlide onClick={prevSlide} size={40} />
          </PrevBtn>
            
           <TextHero>
                <h2>{SliderData[currentIndex].title}</h2>
                <h3>{SliderData[currentIndex].price}</h3>
                <Button padding={"1rem 2rem"} marginT={"2rem"} marginL={"2rem"}>View Home</Button>
           </TextHero>
      </ContainerSlider>
    </Container>
  )
}

export default Hero

