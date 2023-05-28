import  styled  from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/Ai'
import {AiOutlineArrowLeft} from 'react-icons/Ai'
import { SliderData } from '../../Data/SliderData'




export const ContainerSlider = styled.div`
height: 100vh;
background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url(${SliderData[3].image});
background-position: center;
background-size: cover;
opacity: 1;
` 

export const HeroSlider = styled.div`
width: 100%;
height: 100%;
transition: all 0.5s ease-in-out;
`

export const NextBtn = styled.span`
position: absolute;
background: rgba(0,0,0,0.8);
z-index: 300;
bottom : 5rem ;
right : 5rem;
border-radius: 50%;
padding: 0.5rem;
&:hover {
  background: #CB853F;
  transition: all 0.2s ease-in-out;
}
`  

export const PrevBtn = styled.span`
position: absolute;
background: rgba(0,0,0,0.8);
z-index: 300;
bottom: 5rem ;
right : 10rem;
border-radius: 50%;
padding: 0.5rem;
&:hover {
  background: #CB853F;
  transition: all 0.2s ease-in-out;
}
`  
export const PrevSlide = styled(AiOutlineArrowLeft)`
z-index: 300;
fill: #fff;
`
export const NextSlide = styled(AiOutlineArrowRight)`
z-index: 300;
fill: #fff;
`