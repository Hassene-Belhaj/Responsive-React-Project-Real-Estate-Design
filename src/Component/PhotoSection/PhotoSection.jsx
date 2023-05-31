import React from 'react'
import { Container, DivImage, Grid } from './PhotoSection.Style'


const PhotoSection = ({PhotoSectionData}) => {
  return (
      <Container>
         {/* <h3>Contemporary Design</h3> */}
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