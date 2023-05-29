import React from 'react'
import { Container, GridContainer, LeftColumn,RightColumn } from './InfoSection.Style'

const InfoSection = ({heading,paragraphone,paragraphtwo,buttonlabel,image,order}) => {
    return (
    <Container>
       <GridContainer>
        
       <LeftColumn order={order ? 1 : 0}>
        <h2>{heading}</h2>
         <p>{paragraphone}</p>
        </LeftColumn>

        <RightColumn order={order ? 1 : 0}>
            <img src={image} alt="" />
        </RightColumn>

       </GridContainer>
    </Container>
        )
}

export default InfoSection