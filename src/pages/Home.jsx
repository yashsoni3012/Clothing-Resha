import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ClothingTextSection from '../components/ClothingTextSection'
import ClothingShowcase from '../components/ClothingShowcase'
import ImageSlider from '../components/ImageSlider'
import ImageGrid from '../components/ImageGrid'
import Footer from '../components/Footer'
import HeroWithNavbar from '../components/HeroWithNavbar'

const Home = () => {
  return (
    <div>
      {/* <HeroWithNavbar/> */}
      {/* <Navbar/> */}
      <Carousel/>
      <ClothingTextSection/>
      <ClothingShowcase/>
      <ImageSlider/>
      <ImageGrid/>
      <Footer/>
    </div>
  )
}

export default Home
