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
     animation.start({
         opacity : 1 ,
         transition : {
             duration : 0.8 ,
             delay : 0.35 ,
         } 
     })
    } else {
     animation.start({
         opacity : 0.7 ,
     })
    }
 
     // if(inView ) {
     //  animation.start({
     //     x:0,
     //     transition:{
     //         type:'spring' , duration :2, bounce : 0.3 ,opacity :0.8,
     //     }
     //  })
     // } else {
     //     animation.start({
     //         opacity : 1,
     //         x: '100vw'        
     //     })
     // }
  },[inView])



  return (
<motion.div animate={animation}>
   <Container ref={ref}>


    <BlackCinemaTop></BlackCinemaTop>
    <BlackCinemaBottom></BlackCinemaBottom>
    <GridContainer>


     <LeftColumn>
      <h3>Stunning Interior</h3> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio quod libero accusantium blanditiis dolores nobis est tempore mollitia dicta illo adipisci !</p>
      <Button marginT={"1.5rem"} padding={"0.8rem 1.6rem"}> Learn More</Button>
     </LeftColumn>
     <RightColumn>
      <img src={'/images/design1.jpg'} alt="" />
     </RightColumn>
     

    </GridContainer>
   </Container>
</motion.div>
    )
}

export default InfoSectionThree