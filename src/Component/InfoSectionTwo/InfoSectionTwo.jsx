import React from 'react'
import { Container, GridContainer, LeftColmun, RightColmun, Span, TitleDiv } from './InfoSectionTwo.Style'
import { Button } from '../../Button/Button.Style'

const InfoSectionTwo = () => {
  return (
    <Container>
        <GridContainer>
            <LeftColmun>
                <img src={'/images/home1.jpg'} alt="" />
               <TitleDiv>
                <h3>8 bed 10 bath house in venice , california</h3>
               </TitleDiv>
               <Span>
               <Button background={true} color="true" padding={"1rem 2rem"}>View Home</Button>
               </Span>
            </LeftColmun>
            <RightColmun>
                <img src={'/images/home2.jpg'} alt="" />
                <TitleDiv>
                <h3>4 bed 2 bath house in miami , florida</h3>
               </TitleDiv>
               <Span>
               <Button background={true} color="true" padding={"1rem 2rem"} >View Home</Button>
               </Span>
            </RightColmun>

        </GridContainer>
    </Container>
    )
}

export default InfoSectionTwo