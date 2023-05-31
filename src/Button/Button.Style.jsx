import styled from "styled-components";

export const Button = styled.button`
background: ${({background})=>(background ? "#000d1a" : "#CB853F")};
color:${({color})=>color ? "#fff" : "#000"} ;
cursor: pointer;
transition: all 0.3s ease ;
padding: ${({padding})=>padding};
margin-right: ${({marginR})=>marginR};
margin-left: ${({marginL})=>marginL};
margin-top: ${({marginT})=>marginT};
margin-bottom: ${({marginB})=>marginB};
border: none;
border-radius: 2px;
font-size: 18px;
font-weight: 600;
transition: all 0.3s ease;
&:hover{
    transform: scale(1.05);
    /* transform: rotate(3deg); */
    transition: all 0.3s ease;
}
`