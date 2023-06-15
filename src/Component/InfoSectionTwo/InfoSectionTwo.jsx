import React, { useEffect } from 'react'
import { Container, GridContainer, LeftColmun, RightColmun, Span, TitleDiv } from './InfoSectionTwo.Style'
import { Button } from '../../Button/Button.Style'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const InfoSectionTwo = () => {
 const {inView,ref} = useInView()
 const animation = useAnimation()

useEffect(()=>{
if(inView) {
    animation.start('visible')
} else {
   animation.start('hidden') 
}
},[inView])

  return (
      
      <Container ref={ref}>
            <motion.div>
        <GridContainer>
            <LeftColmun>
                <motion.img 
                   variants={{
                    hidden : {opacity : 0  , scale : 0} ,
                    visible : {opacity : 1 , scale : 1 }
                   }}
                   animate={animation}
                   transition={{
                     duration : 0.5
                   }}
                
                
                src={'/images/home1.jpg'} alt="" />
               <TitleDiv>
                <h3>8 bed 10 bath house in venice , california</h3>
               </TitleDiv>
               <Span>
               <Button background={true} color="true" padding={"1rem 2rem"}>View Home</Button>
               </Span>
            </LeftColmun>
            <RightColmun>
                <motion.img 
                   variants={{
                    hidden : {opacity : 0  , scale : 0} ,
                    visible : {opacity : 1 , scale : 1 }
                   }}
                   animate={animation}
                   transition={{
                     duration : 0.5
                   }}
                
                
                src={'/images/home2.jpg'} alt="" />
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