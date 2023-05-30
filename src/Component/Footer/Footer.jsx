import React from 'react'
import { BlockContainer, BlockOne, BlockTwo, Container, FooterLink, GridColumn, IconOne, IconThree, IconTwo, Iconfour, LeftColumn,RightColumn, SocialIcons} from './Footer.Style'


const Footer = () => {
  return (
   <Container>
       <GridColumn>
            <LeftColumn>
                <h4>Let's Find <br/>Your Dream Home</h4>
                <SocialIcons>
                    <IconOne size={40} />
                    <IconTwo  size={40}/>
                    <IconThree  size={40}/>
                    <Iconfour  size={40}/>
                </SocialIcons>
                </LeftColumn>
            <RightColumn>
                
                <BlockContainer>

                <BlockOne>
                    <FooterLink>Contact Us</FooterLink>
                    <FooterLink>Faq</FooterLink>
                    <FooterLink>Support</FooterLink>
                    <FooterLink>Question</FooterLink>
                </BlockOne>

                <BlockTwo>
                        <FooterLink>Offices</FooterLink>
                        <FooterLink>United State</FooterLink>   
                        <FooterLink>Canada</FooterLink>   
                        <FooterLink>Europe</FooterLink>   
                </BlockTwo>   

                </BlockContainer>
            </RightColumn>          
        </GridColumn>
   </Container>
    )
}

export default Footer