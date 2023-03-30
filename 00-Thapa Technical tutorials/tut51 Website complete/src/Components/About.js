import React from 'react'
import HomeSection from './HomeSection'
import { aboutImg } from '../Data/image'

function About() {
  return (
    <>
      <HomeSection 
        title='Welcome to About Page'
        page='Contact Us'
        url='/contact'
        imgSrc={aboutImg}
      />

    </>
  )
}

export default About