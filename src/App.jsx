import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import ScrollToTop from "../src/components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll/>
      <div className="relative">
        {/* You can include Navbar here if it’s common across all routes */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
