import React, { useEffect } from 'react'
import { Container, GridContainer, LeftColumn,RightColumn } from './InfoSection.Style'
import { Button } from '../../Button/Button.Style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const InfoSection = ({heading,paragraphone,paragraphtwo,buttonlabel,image,order}) => {

    const {ref,inView} = useInView({
        threshold: 0
    })

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
    <Container  ref={ref} >
          <motion.div
          animate={animation}
     
          >
       <GridContainer >
        
   
       <LeftColumn order={order ? 1 : 0}>
        <h2>{heading}</h2>
         <p>{paragraphone}</p>
         <Button background={true} color="true" padding={"1rem 2rem"} marginT={"2rem"} marginB={"2rem"}>View Homes</Button>
       </LeftColumn>

        <RightColumn order={order ? 1 : 0}>
            <img src={image} alt="" />
        </RightColumn>
       </GridContainer>
     </motion.div>
    </Container>
        )
}

export default InfoSection