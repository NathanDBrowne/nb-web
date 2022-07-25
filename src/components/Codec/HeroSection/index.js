import React, { useState } from "react";
import { ButtonRed } from "../../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Img from "../../../images/codec.jpg";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id={"hero"}>
      <HeroBg>
        <ImgBg autoPlay loop muted src={Img} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome.</HeroH1>
        <HeroP>I'm gonna put a tonne of tools here.</HeroP>
        <HeroP>Like an everything control panel.</HeroP>
        <HeroBtnWrapper>
          <ButtonRed
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Acquire Knowledge {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonRed>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
