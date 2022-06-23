import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

import Home from "./views/Home";
import Projects from "./views/Projects";
import MyStack from "./views/MyStack";
import AboutMe from "./views/AboutMe";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <Router>
          <Navbar loggedIn={true} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/my-stack" element={<MyStack />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
          <Footer />
        </Router>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
}

export default App;
