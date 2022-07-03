import React from "react";
import "./FooterElements.js";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialIconLink,
  SocialMedia,
  SocialLogo,
  SocialMediaWrap,
  SocialIcons,
  WebsiteRights,
} from "./FooterElements.js";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                {<p style={{ color: "#38de21" }}>About Me</p>}
              </FooterLinkTitle>
              <FooterLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </FooterLink>
              <FooterLink to="contact">My Stack</FooterLink>
              <FooterLink to="about">GitHub</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                {<p style={{ color: "#ff0055" }}>Reach Out</p>}
              </FooterLinkTitle>
              <FooterLink to="contact">Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                {<p style={{ color: "#5555ff" }}>Social Media</p>}
              </FooterLinkTitle>
              <FooterLink to="projects">LinkedIn</FooterLink>
              <FooterLink to="contact">Telegram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            Nate Browne
          </SocialLogo>
          <WebsiteRights>This site is being built with React.js</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/NathanDBrowne"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/nathan-b-42549413a/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://t.me/FreeweightNate"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
            >
              <FaTelegram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
