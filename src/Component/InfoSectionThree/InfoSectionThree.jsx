import React, { useEffect } from 'react'
import { GridContainer } from '../InfoSection/InfoSection.Style'
import { BlackCinemaBottom, BlackCinemaTop, Container, LeftColumn, RightColumn } from './InfoSectionThree.Style'
import { Button } from '../../Button/Button.Style'
import { motion ,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const InfoSectionThree = () => {

  const {ref,inView} = useInView()

  const animation = useAnimation()

  useEffect(()=> {

    if(inView){
     animation.start('visible')
    } else {
     animation.start('hidden')
    }
 
  },[inView])



  return (
<motion.div
 >
   <Container ref={ref}>


    <BlackCinemaTop></BlackCinemaTop>
    <BlackCinemaBottom

    
    ></BlackCinemaBottom>
    <GridContainer>

    
     <LeftColumn 
        variants={{
            hidden : {opacity : 0  , scale : 0  , x : "-100%"} ,
            visible : {opacity : 1 , scale : 1 , x : 0 }
           }}
           animate={animation}
           transition={{
             duration : 0.5
           }}
     >
      <h3>Stunning Interior</h3> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio quod libero accusantium blanditiis dolores nobis est tempore mollitia dicta illo adipisci !</p>
      <Button marginT={"1.5rem"} padding={"0.8rem 1.6rem"}> Learn More</Button>
     </LeftColumn>
     <RightColumn>
      <motion.img 
         variants={{
            hidden : {opacity : 0  , scale : 0, x : "100%"} ,
            visible : {opacity : 1 , scale : 1, x : 0 }
           }}
           animate={animation}
           transition={{
             duration : 0.5
           }}
      
      
      src={'/images/design1.jpg'} alt="" />
     </RightColumn>
     

    </GridContainer>
   </Container>
</motion.div>
    )
}

export default InfoSectionThree