import  styled  from 'styled-components'



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
background:linear-gradient(
  rgba(0,0,0,0.1),
  rgba(0,0,0,0.1)

) ,
url('/images/house1.jpg');
background-position: center;
background-size: cover;

`