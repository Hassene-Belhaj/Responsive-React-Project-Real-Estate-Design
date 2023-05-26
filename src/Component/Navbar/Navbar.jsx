import React from 'react'
import {CloseIcon, MenuIcon, Nav, NavButton, NavContainer,NavLogo,NavMenu,NavMenuLinks, NavMenuLinksSm, NavMenuSmDiv, NavSm, SmButton, SmContainer} from './Navbar.Styled'
import {MenuData} from '../../Data/Data'
import { Button } from '../../GlobalStyle/Global.Style'
import { useState } from 'react'


const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const HandleToggle = () => setToggle(!toggle)
    


  return (
    <Nav>
    <NavContainer>
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
            <Button primary={false} padding={"0.8rem 1.6rem"} 
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
    
              <SmButton primary={true} padding={"1.6rem 3rem"}>
                Contact Us
                </SmButton>

      
        </NavMenuSmDiv> 

    </SmContainer>

    </Nav>
  )
}

export default Navbar