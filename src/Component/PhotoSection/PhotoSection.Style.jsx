import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height :100%;
margin: 0;
margin-top: 5rem;
margin-bottom: 5rem;
text-align: center;
@media screen and (max-width: 768px) {

}


`


export const Grid = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
grid-row: 400px;
gap: 2rem;
`


export const Span = styled.div`
width: 100%;
height: 20%;
margin:auto;
h2{
    padding: 5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;

}
`

export const DivImage = styled.div`
width: 90%;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
:nth-child(1){
grid-column: span 2;
grid-row: span 2;
@media screen and (max-width : 768px){
grid-column    :1 ;
}
}


:nth-child(2){

    
}

:nth-child(3){
grid-row:span ;
}

:nth-child(4){
grid-row:span 1;
}




img{
    width: 100%;
    object-fit: cover;
}
`
