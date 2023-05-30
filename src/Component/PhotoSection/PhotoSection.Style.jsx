import styled from "styled-components";



export const Container = styled.div`
width: 100%;
height: 100vh;
@media screen and (max-width:768px) {
margin-top    : 58rem;
margin-bottom: -48rem;
}
`

export const Grid = styled.div`
width: 100%;
height: 100%;
display: grid;
gap: 1rem;
grid-template-rows: 400px 200px 200px; 
grid-template-columns: 800px 600px 400px ;
@media screen and (max-width:768px) {
}
`

export const ImageContainer = styled.div`
margin: auto;
img{
    object-fit: cover;
    width: 100%;
    max-width: 500px;
    :nth-child(2) {
    grid-row:  3 / 3;   
    }
}

@media screen and (max-width:768px) {

}
`