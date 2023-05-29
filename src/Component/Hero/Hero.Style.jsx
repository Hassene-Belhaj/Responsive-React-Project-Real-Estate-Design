import  styled  from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/Ai'
import {AiOutlineArrowLeft} from 'react-icons/Ai'


export const Container = styled.div`
width: 100%;
height: 100vh;
` 

export const ContainerSlider = styled.div`
width: 100%;
height: 100vh;
background-image:${({img})=>img};
background-position: center;
background-size: cover;
transition: all 0.3s ease-in-out;
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
export const TextHero = styled.div`
background: rgba(0,0,0,0.3);
width: 100%;
height: 100vh;
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
position: absolute;
top: 0;
bottom: 0;
text-transform: uppercase;
font-family: "Montserrat",sans-serif;
font-size: 1.2rem;
color: #fff;
font-weight: 100;
h2{
  font-size: 1.8rem;
  font-weight: 500;
  padding-left: 2rem;
}
h3{
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 1rem;
  padding-left: 2rem;
}
`