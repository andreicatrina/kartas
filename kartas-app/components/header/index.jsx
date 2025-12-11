import React from "react";

import {
  AboutHeader,
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
          <HomeHeader>Home</HomeHeader>
          <AboutHeader>Services</AboutHeader>
          <ServicesHeader>About Us</ServicesHeader>
          <ContactHeader>Contact</ContactHeader>
        </Menu>
        <WhatsappMenuContainer>
          <a>Whatsapp</a>
        </WhatsappMenuContainer>
      </MenuContainer>
    </HeaderContainer>
  );
}
