import React from "react";
import HeroSection from "../components/Main/HeroSection";
import SideBar from "../components/Main/Sidebar";
import Navbar from "../components/Main/Navbar";
import { useState } from "react";
import ProjectSection from "../components/Main/Projects";
import {
  ZenoBotObj,
  RustObj,
  NBWebObj,
  LinqObj,
  QuantObj,
  BoozeBotObj,
} from "../components/Main/Projects/Data";
import Stack from "../components/Main/Stack";
import Footer from "../components/Main/Footer";

import "@fontsource/fira-code";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ "font-family": "Fira Code" }}>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ProjectSection {...ZenoBotObj} />
      <ProjectSection {...LinqObj} />
      <ProjectSection {...QuantObj} />
      <ProjectSection {...RustObj} />
      <ProjectSection {...NBWebObj} />
      <ProjectSection {...BoozeBotObj} />
      <Stack />
      <Footer />
    </div>
  );
}

export default Home;
