import React, { useEffect } from 'react'
import { Container, DivImage, Grid, Span } from './PhotoSection.Style'
import { useAnimation} from 'framer-motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const PhotoSection = ({PhotoSectionData}) => {

  const {ref,inView} = useInView({
    // threshold: 0.1
})

const animation = useAnimation()


useEffect(()=> {
if(inView ) {
 animation.start('visible')
} else {
 animation.start('hidden')
}
},[inView])



  return (
      <Container  ref={ref}>
         <motion.div
          variants={{
            hidden : { opacity : 0 , scale: 0  , y : '100%'},
            visible : { opacity : 1 , scale: 1 , y: 0 }
          }}
          animate={animation}
          transition={{
            delay : 0.2 ,
            duration : 0.4
          }}
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