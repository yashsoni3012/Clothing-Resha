import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ClothingTextSection from "../components/ClothingTextSection";
import ClothingShowcase from "../components/ClothingShowcase";
import ImageSlider from "../components/ImageSlider";
import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";
import HeroWithNavbar from "../components/HeroWithNavbar";
import ScrollImageReveal from "../components/ScrollImageReveal";
import HorizontalScrollSection from "../components/HorizontalSlider";
import HeroTextSection from "../components/HeroTextSection";
import HeroImageSection from "../components/HeroImageSection";
import Wigs_By_EstY from "../components/Wigs_By_EstY";
import LetsWigOut from "../components/LetsWigOut";
import BookConsultation from "../components/BookConsultation";
import HeroTextSection2 from "../components/HeroTextSection2";
import GridImages from "../components/GridImages";
import ContinuousSlider from "../components/ContinuousSlider";
import LogoScrollEffect from "../components/LogoScrollEffect";
import WordByWordScrollFill from "../components/WordByWordScrollFill";
import Words3 from "../components/Words3";
import ScrollAnimation from "../components/ScrollAnimation";



const Home = () => {
  return (
    <div>
      {/* <HeroWithNavbar/> */}
      {/* <Navbar/> */}
      <Carousel />
      <ClothingTextSection />
      {/* <ScrollAnimation/> */}
      {/* <Words3/> */}
      <WordByWordScrollFill/>
      <HorizontalScrollSection />
      <HeroTextSection/>
      <LogoScrollEffect/>
      <HeroTextSection2/>
      {/* <HeroImageSection/> */}
      <Wigs_By_EstY/>
      <LetsWigOut/>
      <BookConsultation/>
      <GridImages/>
      <ContinuousSlider/>
      {/* <ScrollImageReveal/> */}
      {/* <ClothingShowcase/> */}
      {/* <ImageSlider/> */}
      {/* <ImageGrid/> */}
      <Footer />
    </div>
  );
};

export default Home;
