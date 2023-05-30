import React from 'react'
import { GridContainer } from '../InfoSection/InfoSection.Style'
import { BlackCinemaBottom, BlackCinemaTop, Container, LeftColumn, RightColumn } from './InfoSectionThree.Style'
import { Button } from '../../Button/Button.Style'

const InfoSectionThree = () => {
  return (
   <Container>
    <BlackCinemaTop></BlackCinemaTop>
    <BlackCinemaBottom></BlackCinemaBottom>
    <GridContainer>


     <LeftColumn>
      <h3>Stunning Interior</h3> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio quod libero accusantium blanditiis dolores nobis est tempore mollitia dicta illo adipisci fugit sapiente consequuntur modi consequatur suscipit itaque eveniet magnam eius? Neque laudantium iure nisi vitae, eaque eligendi aspernatur doloribus laboriosam asperiores amet quis nesciunt consequatur sit harum voluptatem!</p>
      <Button marginT={"1.5rem"} padding={"0.8rem 1.6rem"}> Learn More</Button>
     </LeftColumn>
     <RightColumn>
      <img src="" alt="" />
     </RightColumn>
     

    </GridContainer>
   </Container>
    )
}

export default InfoSectionThree