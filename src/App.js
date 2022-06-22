import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import MyStack from "./components/pages/MyStack";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar loggedIn={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/my-stack" element={<MyStack />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
