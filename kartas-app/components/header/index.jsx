import React from "react";

import {
  AboutHeader,
  ActivitiesHeader,
  ContactHeader,
  HeaderContainer,
  HomeHeader,
  LogoContainer,
  Menu,
  MenuContainer,
  ServicesHeader,
  WhatsappMenuContainer,
} from "./components.jsx";

export default function Header() {
  return (
    <HeaderContainer>
      <MenuContainer>
        <LogoContainer>Logo</LogoContainer>
        <Menu>
          <HomeHeader href="/">Home</HomeHeader>
          <ServicesHeader>About Us</ServicesHeader>
          <ActivitiesHeader>Activities</ActivitiesHeader>
          <AboutHeader href="/services">Services</AboutHeader>
          <ContactHeader>Contact</ContactHeader>
        </Menu>
        <WhatsappMenuContainer>
          <a>WHATSAPP</a>
        </WhatsappMenuContainer>
      </MenuContainer>
    </HeaderContainer>
  );
}
