import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CgMenuRight} from 'react-icons/cg'
import { AiOutlineClose} from 'react-icons/Ai'
import { Button } from '../../GlobalStyle/Global.Style'

export const Nav = styled.nav`
width: 100%;
height: 100%;
position: relative;
`


export  const NavContainer = styled.div`
width: 100%;
height: 60px;
background: #000;
display: flex;
justify-content: space-between;
align-items: center;
` 
export  const NavLogo = styled(Link)`
width: 30%;
text-decoration: none;
color: #fff;
font-size: 1.4rem;
margin-left: 2rem;
font-style: italic;
text-transform: uppercase;
z-index: 700;
`

export  const NavMenu = styled.div`
width: 40%;
@media screen and (max-width : 768px){
    display: none;
}

`
export const NavMenuLinks = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 1.2rem;
margin-right: 3rem;
`

export  const NavButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: ${({marginR})=>marginR};
margin-left: ${({marginL})=>marginL};
@media screen and (max-width:768px){
display    :none ;
}
`
export const NavSm = styled.div`
display: none;
@media screen and (max-width:768px){
display :block ;
}
`


export const MenuIcon = styled(CgMenuRight)`
display: none;
@media screen and (max-width:768px){
display    : block;
position: fixed;
top: 2rem;
right:1rem;
transform: translateY(-50%);
margin-right: 2rem;
}
`

export const CloseIcon = styled(AiOutlineClose)`
display: none;
@media screen and (max-width:768px){
display :block ;
position: fixed;
top: 2rem;
right:1rem;
transform: translateY(-50%);
margin-right: 2rem;
}
`


export const SmContainer =styled.div`
display: none;
@media screen and (max-width:768px) {
    display: block ;
    width:100%;
    height:${({toggle})=>(toggle ?  "100vh" : 0)} ; 
    background:#CB853F;
    position: fixed;
    top: 0;
    bottom:0;
    z-index: 200;
    transition: all .4s ease-in-out;
}
`

export  const NavMenuSmDiv = styled.div`
display: none;
@media screen and (max-width:768px) {
   display: flex;
   width: 100%;
   height: 100vh;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: all .3s ease-in-out;
}
`
export const NavMenuLinksSm = styled(Link)`
display: none;
@media screen and (max-width:768px) {
display:flex ;
text-decoration: none;
color: #fff;
font-size: 2rem;
margin-bottom: 3rem;
}
` 


export const SmButton = styled(Button)`
display: block;
color: #fff;
border-radius: 2px;
`