import styled from "styled-components";

export const Container = styled.div`
width: 80%;
height: 100%;
margin: 5rem auto;
padding-top: 2rem;
@media screen and (max-width : 768px) {
display: block;
}
`

export const GridContainer = styled.div`
margin-top: 5rem;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items: center;
background: #fff;
gap: 2rem;
@media screen and (max-width :768px){
display: block;

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
height: 100%;
height: 700px;
object-fit: cover;
}

`

