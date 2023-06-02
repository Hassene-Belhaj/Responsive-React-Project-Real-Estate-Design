import React, { useEffect } from 'react'
import {CloseIcon, MenuIcon, Nav, NavButton, NavContainer,NavLogo,NavMenu,NavMenuLinks, NavMenuLinksSm, NavMenuSmDiv, NavSm, SmButton, SmContainer} from './Navbar.Styled'
import {MenuData} from '../../Data/Data'
import { useState } from 'react'
import { Button } from '../../Button/Button.Style'
import { useLocation } from 'react-router-dom'


const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const [color,setColor] =useState(null)

    const HandleToggle = () => setToggle(!toggle)
    const HandleClose = () =>setToggle(!toggle)


const location = useLocation()


useEffect(()=>{
 if(location.pathname === '/')   {
  window.addEventListener('scroll',()=>{
  window.scrollY > 60  ? setColor(true) : setColor(false);
})
} else {
  setColor(true)
}

})


    


  return (
    <Nav>
    <NavContainer color={color ? 0 : 1}>
         <NavLogo to={'/'}>
            Elixr
         </NavLogo>

         <NavMenu>
          {MenuData.map((item,index)=>{
            return (
            <NavMenuLinks  to={item.link} key={index}>
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
                <NavMenuLinksSm onClick={HandleClose} to={item.link} key={index}>
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