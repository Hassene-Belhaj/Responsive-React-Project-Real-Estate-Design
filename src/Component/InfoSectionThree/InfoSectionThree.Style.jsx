import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh; 
margin-top: 5rem;
margin-left: auto;
margin-top: auto;
position: relative;
@media screen and (max-width:768px) {
margin-top: 68rem;
}
`
export const BlackCinemaTop= styled.div`
position: absolute;
right: 0;
bottom: 0;
width: 100%;
height: 20%;
background: #000;
`
export const BlackCinemaBottom= styled.div`
position: absolute;
right: 0;
top: 20%;
width: 100%;
height: 20%;
background: #000;
`

export const GridContainer = styled.div`
width: 100%;
height: 100%;
background: #000;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows    :900px ;
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
`
export const LeftColumn = styled.div`
width: 100%;
height: 100%;
padding-top:26rem;
@media screen and (max-width:768px){
}
h3{
    color: #000;
}
p{
    padding-top: 1.5rem;
}
`
export const RightColumn = styled.div`
width: 100%;
height: 100%;
@media screen and (max-width:768px){
}
`
