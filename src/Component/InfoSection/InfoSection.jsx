import React, { useEffect } from 'react'
import { Container, GridContainer, LeftColumn,RightColumn } from './InfoSection.Style'
import { Button } from '../../Button/Button.Style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const InfoSection = ({heading,paragraphone,paragraphtwo,buttonlabel,image,order}) => {

    const {ref,inView} = useInView({
        // threshold: 0
    })

    const animation = useAnimation()
  
   
 useEffect(()=> {

   if(inView){
    animation.start('visible')
   } else {
    animation.start('hidden')
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

    <Container ref={ref}  >     
       <GridContainer  >

       <LeftColumn order={order ? 1 : 0}>
         <motion.div 
           variants={{
               hidden : {opacity : 0, x : order? "-100%" : "100%" } ,
               visible :{opacity : 1 , x : 0 }            
            }}
          animate={animation}
          transition={{
            duration : 0.3

            }} 
            
            
            >

        <h2>{heading}</h2>
         <p>{paragraphone}</p>
         <Button background={true} color="true" padding={"1rem 2rem"} marginT={"2rem"} marginB={"2rem"}>View Homes</Button>
         </motion.div>
       </LeftColumn>

        <RightColumn order={order ? 1 : 0}>
            <motion.img
                 variants={{
                     hidden : {opacity : 0 , x : order ? "100%" : "-100%" } ,
                     visible :{opacity : 1 , x : 0 }            
                  }}
                  animate={animation}
                  transition={{
                    duration : 0.5
                    }} 
                    
                    
                    src={image} alt="" />
        </RightColumn>
       </GridContainer>
    </Container>
        )
}

export default InfoSection