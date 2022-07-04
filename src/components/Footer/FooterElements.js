import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.footer`
  background: #010606;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
  margin: 16px;
  text-align: center;
  width: 200px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    padding: 20px;
    margin: 0;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  text-align: left;
`;

export const FooterScrollLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #e9e9e9;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #e9e9e9;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  // max-width: 1000px;
  align-items: center;
  justify-self: start;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: start;
  align-items: center;
  max-width: 80%;
  margin: 40px auto 0 auto;

  @media screen and (max-width 820px) {
    flex-direction: column;
  } ;
`;

export const SocialLogo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
