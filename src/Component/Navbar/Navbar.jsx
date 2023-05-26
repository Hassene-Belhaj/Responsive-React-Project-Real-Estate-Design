import React from 'react'
import {MenuIcon, NavButton, NavContainer,NavLogo,NavMenu,NavMenuLinks, NavSm} from './Navbar.Styled'
import {MenuData} from '../../Data/Data'
import { Button } from '../../GlobalStyle/Global.Style'


const Navbar = () => {



  return (
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

    <NavSm>
        <MenuIcon color="#fff" size="25" />
    </NavSm>    

    </NavContainer>
  )
}

export default Navbar