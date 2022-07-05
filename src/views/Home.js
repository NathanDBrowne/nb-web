import React from "react";
import HeroSection from "../components/HeroSection";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ProjectSection from "../components/Projects";
import {
  ZenoBotObj,
  RustObj,
  NBWebObj,
  LinqObj,
  QuantObj,
  BoozeBotObj,
} from "../components/Projects/Data";
import Stack from "../components/Stack";
import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
    </>
  );
}

export default Home;
