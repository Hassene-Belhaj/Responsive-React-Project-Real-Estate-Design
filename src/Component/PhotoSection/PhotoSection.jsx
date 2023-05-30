import React from 'react'
import { Container, Grid, ImageContainer,  } from './PhotoSection.Style'

const PhotoSection = () => {
  return (
    <Container>
       <Grid>
       <ImageContainer>
         <img src={'/images/house1.jpg'} alt="" />
       </ImageContainer>
       <ImageContainer>
         <img src={'/images/house1.jpg'} alt="" />
       </ImageContainer>
       <ImageContainer>
         <img src={'/images/house1.jpg'} alt="" />
       </ImageContainer>
       <ImageContainer>
         <img src={'/images/house1.jpg'} alt="" />
       </ImageContainer>
       <ImageContainer>
         <img src={'/images/house1.jpg'} alt="" />
       </ImageContainer>
       <ImageContainer>
         <img src={'/images/house1.jpg'} alt="" />
       </ImageContainer>
 
        
       </Grid>
    </Container>
    )
}

export default PhotoSection