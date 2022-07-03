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
  FooterScrollLink,
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
                {<p style={{ color: "#ff0055" }}>Reach Out</p>}
              </FooterLinkTitle>
              <FooterScrollLink to="/">+44(0)7312 267 345</FooterScrollLink>
              <FooterScrollLink to="/">
                nathandbrowne@gmail.com
              </FooterScrollLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                {<p style={{ color: "#38de21" }}>About Me</p>}
              </FooterLinkTitle>
              <FooterScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </FooterScrollLink>
              <FooterScrollLink
                to="stack"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                My Stack
              </FooterScrollLink>
              <FooterLink
                href="https://github.com/NathanDBrowne"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                {<p style={{ color: "#5555ff" }}>Social Media</p>}
              </FooterLinkTitle>
              <FooterLink
                href="https://www.linkedin.com/in/nathan-b-42549413a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </FooterLink>
              <FooterLink
                href="https://t.me/FreeweightNate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            Nate Browne
          </SocialLogo>
          <WebsiteRights>Site built with React.js</WebsiteRights>
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
