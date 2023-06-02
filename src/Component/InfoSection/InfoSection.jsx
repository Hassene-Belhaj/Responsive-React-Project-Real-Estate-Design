import React, { useEffect } from 'react'
import { Container, GridContainer, LeftColumn,RightColumn } from './InfoSection.Style'
import { Button } from '../../Button/Button.Style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const InfoSection = ({heading,paragraphone,paragraphtwo,buttonlabel,image,order}) => {

    const {ref,inView} = useInView({
        threshold: 0.2
    })

    const animation = useAnimation()



 useEffect(()=> {
    if(inView ) {
     animation.start({
        x:0,
        transition:{
            type:'spring' , duration :2, bounce : 0.3 ,
        }
     })
    } else if(!inView) {
        animation.start({
            x: '100vw'
            
        })
    }
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