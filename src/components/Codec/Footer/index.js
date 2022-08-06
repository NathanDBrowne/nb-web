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
    <FooterContainer id={"footer"}>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  "text-shadow":
                    "-1px -1px 6px #30B16E, 1px -1px 6px #30B16E, -1px 1px 6px #30B16E, 1px 1px 6px #30B16E",
                }}
              >
                Web Dev
              </FooterLinkTitle>
              <FooterScrollLink to="/">Color Schemes</FooterScrollLink>
              <FooterScrollLink to="/">Fonts</FooterScrollLink>
              <FooterScrollLink to="/">Netlify Hosting</FooterScrollLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  "text-shadow":
                    "-1px -1px 6px #dc0000, 1px -1px 6px #dc0000, -1px 1px 6px #dc0000, 1px 1px 6px #dc0000",
                }}
              >
                Cloud
              </FooterLinkTitle>
              <FooterScrollLink
                to="?"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                GCP
              </FooterScrollLink>
              <FooterScrollLink
                to="?"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                AWS
              </FooterScrollLink>
              {/* <FooterLink href="?" target="_blank" rel="noopener noreferrer">
                Azure
              </FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  "text-shadow":
                    "-1px -1px 6px #ff870c, 1px -1px 6px #ff870c, -1px 1px 6px #ff870c, 1px 1px 6px #ff870c",
                }}
              >
                Scripting
              </FooterLinkTitle>
              <FooterLink
                href="https://www.pythoncheatsheet.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python
              </FooterLink>
              <FooterLink
                href="https://www.programmingwithmosh.com/wp-content/uploads/2019/03/SQL-Cheat-Sheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL
              </FooterLink>
              <FooterLink
                href="https://doc.rust-lang.org/book/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rust
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  "text-shadow":
                    "-1px -1px 6px #00E6FF, 1px -1px 6px #00E6FF, -1px 1px 6px #00E6FF, 1px 1px 6px #00E6FF",
                }}
              >
                Misc.
              </FooterLinkTitle>
              <FooterLink
                href="https://kubernetes.io/docs/reference/kubectl/cheatsheet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kubernetes
              </FooterLink>
              <FooterLink
                href="https://dockerlabs.collabnix.com/docker/cheatsheet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docker
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo
            onClick={toggleHome}
            to="/"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
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
