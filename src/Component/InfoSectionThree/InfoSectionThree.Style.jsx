import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:80vh; 
margin-bottom:10rem;
position: relative;
@media screen and (max-width:768px) {
margin-top: 58rem;
margin-bottom: 58rem;
}
`
export const BlackCinemaTop= styled.div`
position: absolute;
right: 0;
bottom: 0;
width: 100%;
height: 15%;
background: #000;
`
export const BlackCinemaBottom= styled.div`
position: absolute;
right: 0;
top: 15%;
width: 100%;
height: 15%;
background: #000;
`

export const GridContainer = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows    :100% ;
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
`
export const LeftColumn = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
font-size: 1.2rem;
@media screen and (max-width:768px){
    padding-top: 8rem;
}
h3{
    color: #000;
}
p{
    padding-top: 1.2rem;
}
`
export const RightColumn = styled.div`
width: 100%;
height: 100%;
position: relative;
padding-top: 8.5rem;
img{
    position: absolute;
    right: 0;
    top:7.5%;
    height: 100%;
    margin-right: -9.8rem;
    max-width: 100%;
    width: 700px;
    object-fit: cover;
}
   
@media screen and (max-width:768px){
    img{
    display: block;
    margin: auto;
    height: 700px;
    }
}
`
