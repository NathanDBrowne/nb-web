import React from "react";
import HeroSection from "../components/Codec/HeroSection";
import SideBar from "../components/Codec/Sidebar";
import Navbar from "../components/Codec/Navbar";
import { useState } from "react";
import Footer from "../components/Codec/Footer";

import "@fontsource/electrolize";

// use these colors:
// red c23f13
// blue 1A5185
// green 30b16e
// gold dbb13b
// grey 96a7a7

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ "font-family": "Electrolize" }}>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
