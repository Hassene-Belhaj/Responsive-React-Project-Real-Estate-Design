import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CgMenuRight} from 'react-icons/cg'

export  const NavContainer = styled.div`
width: 100%;
height: 60px;
background: #000;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
` 
export  const NavLogo = styled(Link)`
width: 10%;
text-decoration: none;
color: #fff;
font-size: 1.4rem;
margin-left: 2rem;
font-style: italic;
text-transform: uppercase;
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
display    :block ;
}
`


export const MenuIcon = styled(CgMenuRight)`
display: none;
@media screen and (max-width:768px){
display    :block ;
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
margin-right: 2rem;
}
`