import React from 'react'
import { Container, GridContainer, LeftColmun, RightColmun, TitleDiv } from './InfoSectionTwo.Style'

const InfoSectionTwo = () => {
  return (
    <Container>
        <GridContainer>
            <LeftColmun>
                <img src={'/images/home1.jpg'} alt="" />
               <TitleDiv>
                <h3>8 bed 10 bath house in venice , california</h3>
               </TitleDiv>
            </LeftColmun>
            <RightColmun>
                <img src={'/images/home2.jpg'} alt="" />
                <TitleDiv>
                <h3>lorem</h3>
               </TitleDiv>           
            </RightColmun>

        </GridContainer>
    </Container>
    )
}

export default InfoSectionTwo