import React from 'react'
import {CloseIcon, MenuIcon, Nav, NavButton, NavContainer,NavLogo,NavMenu,NavMenuLinks, NavMenuLinksSm, NavMenuSmDiv, NavSm, SmButton, SmContainer} from './Navbar.Styled'
import {MenuData} from '../../Data/Data'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '../../Button/Button.Style'


const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const [color,setColor] =useState(false)

    const HandleToggle = () => setToggle(!toggle)
    
useEffect(()=>{
window.addEventListener('scroll',()=>{
window.scrollY > 60  ? setColor(true) : setColor(false)  ;
})  
})

  return (
    <Nav>
    <NavContainer color={color ? 0 : 1}>
         <NavLogo>
            Elixr
         </NavLogo>

         <NavMenu>
          {MenuData.map((item,index)=>{
            return (
            <NavMenuLinks key={index}>
                {item.title}
            </NavMenuLinks>
            )
          })}
         </NavMenu>

        <NavButton marginR={"2rem"}>
         
            <Button  color={color ? 1: 0}  background={color ? 1: 0 }padding={"0.6rem 1.6rem"} 
            >Contact Us</Button>
       </NavButton> 

    </NavContainer>


    <SmContainer toggle={toggle ? 1:0}>
        <NavSm>
        {toggle ? <CloseIcon onClick={HandleToggle} color="#fff" size="25" /> : <MenuIcon onClick={HandleToggle} color="#fff" size="25" /> 
         }
        </NavSm>    
        <NavMenuSmDiv>
           {MenuData.map((item,index)=>{
               return (
                <NavMenuLinksSm key={index}>
                    {item.title}
                </NavMenuLinksSm>
            )
        })}
    
              <SmButton padding={"1.6rem 3rem"}>
                Contact Us
                </SmButton>

      
        </NavMenuSmDiv> 

    </SmContainer>

    </Nav>
  )
}

export default Navbar