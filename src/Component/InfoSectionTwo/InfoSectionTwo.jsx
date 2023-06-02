import React from 'react'
import { Container, GridContainer, LeftColmun, RightColmun, Span, TitleDiv } from './InfoSectionTwo.Style'
import { Button } from '../../Button/Button.Style'
import { motion } from 'framer-motion'


const InfoSectionTwo = () => {
  return (
      
      <Container>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
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
     </motion.div>
    </Container>
    )
}

export default InfoSectionTwo