import React, { useEffect, useRef } from 'react'
import { Container, DivImage, Grid, Span } from './PhotoSection.Style'


const PhotoSection = ({PhotoSectionData}) => {




  return (
      <Container>
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
          </Container>
    )
}

export default PhotoSection