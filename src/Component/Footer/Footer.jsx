import React from 'react'
import { Container, GridColumn } from './Footer.Style'


const Footer = () => {
  return (
   <Container>
       <GridColumn>
            <LeftColumn></LeftColumn>
            <MedianColumn></MedianColumn>
            <RightColmun></RightColmun>
        </GridColumn>
   </Container>
    )
}

export default Footer