import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Hello.</h1>
      <p style={{ marginTop: "30px" }}>
        I'm Nate and I'm a developer based in the United Kingdom.
      </p>
      <p style={{ marginTop: "30px" }}>
        MY PHILOSOPHY: if it's difficult or fun give it a go - they're usually
        the same thing anyway.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH VIDEO
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
