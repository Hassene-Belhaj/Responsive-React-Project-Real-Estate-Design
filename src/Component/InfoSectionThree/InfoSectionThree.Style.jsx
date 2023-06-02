import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:800px; 
margin: 10rem auto;
position: relative;
@media screen and (max-width:768px) {
display: block;
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
display: flex;
margin: auto;
@media screen and (max-width:768px){
    display: block;
}
`
export const LeftColumn = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-top: 7rem;
padding-left: 5rem;
font-size: 1.2rem;
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
img{
    position: absolute;
    right: 0;
    top:8%;
    height: 100%;
    max-width: 100%;
    width: 500px;
    object-fit: cover;
}
   
@media screen and (max-width:768px){
    img{
        display: none;
    }
}
`
