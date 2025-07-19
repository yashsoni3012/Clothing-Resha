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



const Home = () => {
  return (
    <div>
      {/* <HeroWithNavbar/> */}
      {/* <Navbar/> */}
      <Carousel />
      <ClothingTextSection />
      <HorizontalScrollSection />
      <HeroTextSection/>
      <HeroImageSection/>
      <Wigs_By_EstY/>
      {/* <ScrollImageReveal/> */}
      {/* <ClothingShowcase/> */}
      {/* <ImageSlider/> */}
      {/* <ImageGrid/> */}
      <Footer />
    </div>
  );
};

export default Home;
