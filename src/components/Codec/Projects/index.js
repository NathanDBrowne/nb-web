import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  Column2,
  BtnWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./ProjectElements";

import { ExtButton } from "../../ButtonElements";

const InfoSection = ({
  lightBg,
  id,
  href,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ProjectContainer lightBg={lightBg} id={id}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ExtButton
                    href={href}
                    smooth={true}
                    duration={500}
                    spy={true}
                    target="_blank"
                    rel="noreferrer noopener"
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ExtButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default InfoSection;
