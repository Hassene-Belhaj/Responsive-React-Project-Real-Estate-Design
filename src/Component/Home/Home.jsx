import React from 'react'
import Hero from '../Hero/Hero'
import InfoSection from '../InfoSection/InfoSection'
import InfoSectionTwo from '../InfoSectionTwo/InfoSectionTwo'
import InfoSectionThree from '../InfoSectionThree/InfoSectionThree'
import {SliderData} from '../../Data/SliderData'
import {InfoData} from '../../Data/InfoData'
import {InfoDataTwo} from '../../Data/InfoData'
import { InfoSectionStyleOne, InfoSectionStyleTwo } from '../../Data/Data.Style'
import  PhotoSection from '../PhotoSection/PhotoSection'
import { PhotoSectionData } from '../../Data/Data'

const Home = () => {
  return (
    <>       
            <Hero SliderData={SliderData} />
            <InfoSection  {...InfoData}  {...InfoSectionStyleOne}/>
            <InfoSectionThree />
            <InfoSectionTwo />
            <InfoSection  {...InfoDataTwo}  {...InfoSectionStyleTwo}/>
            <PhotoSection PhotoSectionData={PhotoSectionData} />
    </>
    )
}

export default Home