import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 1rem;
  position: sticky;
  top: 0;

  @media screen and (max-width: 2010606px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkS)`
  display: flex;
  text-shadow: -1px -1px 6px #dc0000, 1px -1px 6px #dc0000, -1px 1px 6px #dc0000,
    1px 1px 6px #dc0000;
  font-size: 2rem;
  justify-self: flex;
  cursor: pointer;
  align-items: center;
  margin-left: flex;
  font-weight: bold;
  font: "@fontsource/michroma";
  color: #000;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #eee;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #dc0000;
  }
`;

export const NavRoute = styled(LinkR)`
  color: #eee;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Fira Code";

  &:hover {
    transition: all 0.2s ease-in-out;
    text-shadow: -1px -1px 6px #7e42ff, 1px -1px 6px #7e42ff,
      -1px 1px 6px #7e42ff, 1px 1px 6px #7e42ff;
    border-radius: 50px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 10px 22px;
  color: #dc0000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: -1px -1px 6px #dc0000, 1px -1px 6px #dc0000, -1px 1px 6px #dc0000,
    1px 1px 6px #dc0000;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #dc0000;
    color: #000;
    box-shadow: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #eee;
  }
`;
