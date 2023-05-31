import React, { useEffect, useRef } from 'react'
import { Container, DivImage, Grid, Span } from './PhotoSection.Style'
import { motion,useInView,useAnimation } from 'framer-motion'


const PhotoSection = ({PhotoSectionData}) => {

const ref = useRef(null)

const IsInView = useInView(ref,{once : false})

const Control = useAnimation()  



useEffect(()=>{
if (IsInView) {
Control.start('visible')
}



},[IsInView])



// initial={{x:"-100%"}}
// animate={{x:0}}
// exit={{x:"100%"}}
// transition={{duration: 0.8}}


  return (
      <Container ref={ref}>
        <motion.div   
        variants={{
          hidden:{opacity : 0 ,x:"-100%"},
          visible :{opacity: 1 , x:0},
        }}     
        initial="hidden"
        animate={Control}
        transition ={{duration : 2}} 
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