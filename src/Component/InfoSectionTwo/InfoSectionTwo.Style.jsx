import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
margin: auto;
padding-top: 5rem;
margin-bottom: 5rem;
@media screen and (max-width:768px) {
}
`

export const GridContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
margin: auto;
justify-content: center;
gap: 2rem;
@media screen and (max-width : 768px){
display: block;
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
    width: 100%;
    max-width: 800px;
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
    width: 100%;
    max-width: 800px;
    object-fit: cover;
}
`


export const TitleDiv = styled.div`
width: 100%;
height: auto;
h3{
    margin-top: 1.5rem;
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: capitalize;
}
`
export const Span = styled.span`
width: 200px;
margin-top: 1.5rem;
`