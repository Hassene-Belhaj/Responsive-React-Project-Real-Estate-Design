import React from 'react'
import { Container, GridContainer, LeftColumn,RightColumn } from './InfoSection.Style'
import { Button } from '../../Button/Button.Style'
import { motion } from 'framer-motion'
const InfoSection = ({heading,paragraphone,paragraphtwo,buttonlabel,image,order}) => {
    return (
    <Container>
       <GridContainer>
        
       <LeftColumn order={order ? 1 : 0}>
        <h2>{heading}</h2>
         <p>{paragraphone}</p>
         <Button background={true} color={true} padding={"1rem 2rem"} marginT={"2rem"} marginB={"2rem"}>View Homes</Button>
       </LeftColumn>

        <RightColumn order={order ? 1 : 0}>
            <img src={image} alt="" />
        </RightColumn>
 
       </GridContainer>
    </Container>
        )
}

export default InfoSection