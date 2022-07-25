import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarBtnLink,
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Tools
          </SidebarLink>
          <SidebarRoute
            to="/"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Nate
          </SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarBtnLink
            to="footer"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Quick Links
          </SidebarBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
