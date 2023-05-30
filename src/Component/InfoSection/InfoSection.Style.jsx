import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
margin-top: 5rem;
@media screen and (max-width : 768px) {
}
`

export const GridContainer = styled.div`
margin-top: 5rem;
margin-left: auto;
margin-right: auto;
width: 80%;
height: 100%;
display:grid;
background: #fff;
grid-template-columns: 50% 50%;
grid-template-rows: 100%;
gap: 2rem;
@media screen and (max-width :768px){
grid-template-columns    :100%;

}
`

export const LeftColumn = styled.div`
width: 100%;
height: 100%;
display: flex;
padding: 0 1rem;
margin-left: auto;
margin-right: auto;
text-align: center;
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

@media screen and (max-width :768px){

}
`

export const RightColumn = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;
order: ${({order})=>order ? "2" : "1"};
img {
width: 100%;
max-width:600px ;
}

`

