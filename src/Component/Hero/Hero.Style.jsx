import  styled  from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/Ai'
import {AiOutlineArrowLeft} from 'react-icons/Ai'



export const HeroContainer = styled.div`
width: 100%;
height: 100vh;
position: relative;
`

export const HeroSlider = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
bottom: 0;
transition: all 0.3 ease-in-out;
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