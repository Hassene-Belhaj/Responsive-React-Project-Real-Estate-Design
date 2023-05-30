import styled from "styled-components";
import {FaYoutube,FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Container = styled.footer`
width: 100%;
height: 60vh;
@media screen and (max-width : 768px){
margin-top    :58rem ;
height: 100vh;
}
`
export const GridColumn = styled.div`
width: 100%;
height: 100%;
background-color: #000;
color: #fff;
display: flex;
@media screen and (max-width : 768px) {
width   :100% ;
display: block;
margin: auto;
}
`

export const LeftColumn = styled.div`
padding-left: 5rem;
width: 70%;
height: 100%;
background-color: #000;
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 10rem;
h4{
  font-size: 5rem;
}

@media screen and (max-width:1384px) {
    h4{
  font-size: 3rem;
}      
}

@media screen and (max-width : 768px) {
width   :100% ;
height: 70%;
display: block;
padding-left: 0;
padding-top: 15rem;
text-align: center;
}
`

export const RightColumn = styled.div`
width: 30%;
height: 100%;
background-color: #000;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: #fff;
display: flex;
@media screen and (max-width : 768px) {
width   :100% ;
height: 100%;
}
`
export const SocialIcons = styled.div`
padding-top:5rem;
width: 300px;
height: 50%;
display: flex;
justify-content: space-between;
@media screen and (max-width:768px) {
    margin: auto;
    width: 200px;
}
`


export const IconOne = styled(FaYoutube)`
fill:#CB853F;
`

export const IconTwo = styled(FaInstagram)`
fill:#CB853F;
`

export const IconThree = styled(FaFacebook)`
fill:#CB853F;
`

export const Iconfour = styled(FaLinkedin)`
fill:#CB853F;
`

export const BlockContainer = styled.div`
display: flex;
width: 400px;
height: auto;
justify-content: space-between;

h3{
line-height: 4rem;
font-size: 1.4rem;
}

p{
line-height: 4rem;
font-size:1.3rem;
}

@media screen and (max-width:768px) {
        h3{
        line-height: 4rem;
        font-size: 1rem;
        }
        display: block;
        width: 100%;
}

`


export const BlockOne = styled.div`
display: flex;
flex-direction: column;
`

export const BlockTwo = styled.div`
margin-top: 5rem;
display: flex;
flex-direction: column;
`
export const FooterLink = styled(Link)`
line-height: 4rem;
font-size:1rem;
color: #fff;
text-decoration: none ;
margin: auto;

:nth-child(1){
    font-size: 1.5rem;
    font-weight: 600;
}
:hover {
    text-decoration: underline;
}
`