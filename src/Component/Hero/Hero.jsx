import React, {useEffect, useState } from 'react'
import {Container, ContainerSlider, NextBtn, NextSlide, PrevBtn, PrevSlide, TextHero,} 
from './Hero.Style'
import { Button } from '../../Button/Button.Style'
import { motion} from 'framer-motion'

const Hero = ({SliderData}) => {


  const [index,setIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide()
    }, 2600)
 
    return () => clearTimeout(timeout)
    
}, [index])




const prevSlide = () => {
  const curr = index === 0;
  setIndex( curr ? SliderData.length - 1 : index - 1)
};

const nextSlide = () => {
  const curr = index === SliderData.length - 1;
  setIndex(curr ? 0 : index + 1)
};


  return (
   
    <Container>
      <ContainerSlider> 
         <motion.img 
         variants={{
          hidden : {opacity : 0 , x : 500} ,
          visible : {opacity : 1 , x : 0}
         }}
         initial='hidden'
         animate='visible'
         transition={{
          duration : 0.5 ,
          type : 'spring' ,
          bounce : 0.3
         }}
         key={SliderData[index].image}
         src={SliderData[index].image} />
         <NextBtn> 
            <NextSlide onClick={nextSlide} size={40} />
          </NextBtn>
         <PrevBtn> 
           <PrevSlide onClick={prevSlide} size={40} />
          </PrevBtn>
            
           <TextHero>
                <h2>{SliderData[index].title}</h2>
                <h3>{SliderData[index].price}</h3>
                <Button padding={"1rem 2rem"} marginT={"2rem"} marginL={"2rem"}>View Home</Button>
           </TextHero>
      </ContainerSlider>
    </Container>
  )
}

export default Hero

