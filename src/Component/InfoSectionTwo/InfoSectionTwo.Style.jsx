import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
margin-top: 5rem;
`

export const GridContainer = styled.div`
width: 80%;
height: 100%;
display: grid;
margin: auto;
justify-content: center;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100%;
gap: 2rem;
@media screen and (max-width : 768px){
grid-template-columns    :1fr ;
}
`
export const LeftColmun = styled.div`
width    :100% ;
height: 100%;
display: flex;
flex-direction: column;
img{
    height :100% ;
    max-height: 600px ;
    object-fit: cover;
}
`

export const RightColmun = styled.div`
width    :100% ;
height: 100%;
margin-top: 15rem;
display: flex;
flex-direction: column;

img{
    height :100% ;
    max-height: 600px ;
    object-fit: cover;
}
`

export const TitleDiv = styled.div`
width: 100%;
height: auto;
h3{
    margin-top: 2rem;
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: capitalize;
}
`
