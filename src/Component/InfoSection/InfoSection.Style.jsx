import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background:black;
display: flex;
justify-content: center;
margin:auto;
margin: 10rem 0;
`

export const GridContainer = styled.div`
width: 100%;
height: 100%;
display:grid;
background: #fff;
padding: 0  5rem ;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100%;
gap: 2rem;
@media screen and (max-width :768px){
grid-template-columns    :1fr;
}
`

export const LeftColumn = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
order: ${({order})=>order ? "1" : "2"};
h2{
 text-transform :uppercase ;
 font-weight: 600;
}
p{
    margin-top: 2rem;
    font-size: 1.3rem;
    line-height: 2rem;
}
`

export const RightColumn = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
order: ${({order})=>order ? "2" : "1"};
img {
    width: 100%;
    max-width:700px ;
    object-fit: cover;
}

`

