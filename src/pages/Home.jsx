import React from 'react'
import { Slider } from '../components/Slider'
import HomeAbout from '../components/HomeAbout'
import MenuSection from '../components/MenuSection'
import MapSection from '../components/MapSection'

const Home = () => {
  return (
    <div>
      <Slider/>
      <HomeAbout/>
      <MenuSection/>
      <MapSection/>
    </div>
  )
}

export default Home