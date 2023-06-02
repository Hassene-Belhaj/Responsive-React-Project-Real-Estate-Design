import React, { useEffect } from 'react'
import { Container, DivImage, Grid, Span } from './PhotoSection.Style'
import { useAnimation} from 'framer-motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const PhotoSection = ({PhotoSectionData}) => {

  const {ref,inView} = useInView({
    threshold: 0.2
})

const animation = useAnimation()


useEffect(()=> {
if(inView ) {
 animation.start({
    x:0,
    transition:{
        type:'spring' , duration :2, bounce : 0.3 ,opacity :1,
    }
 })
} else {
    animation.start({
        opacity : 1,
        x: '-100%'        
    })
}
},[inView])



  return (
      <Container ref={ref}>
         <motion.div
          animate={animation}
     
          >
          <Span>
          <h2>interior design styles</h2>
          </Span>
       <Grid>
          {PhotoSectionData.map((photo,index)=>{
            return (
              <DivImage key={index}>
                   <img src={photo.image} alt="" />
             </DivImage>  
            )
          })}
       </Grid>
       </motion.div>
          </Container>
    )
}

export default PhotoSection