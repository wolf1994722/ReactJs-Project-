import React from 'react'
import HomeSection from './HomeSection'
import { homeImg } from '../Data/image'

function Home() {
  return (
    <>
      <HomeSection 
        title='Grow your business with'
        page='Get Started'
        url='/service'
        imgSrc={homeImg}
      />
    </>
  )
}

export default Home