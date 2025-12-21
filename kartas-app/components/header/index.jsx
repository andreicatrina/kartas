import React from "react";
import Image from "next/image.js";

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

import kartaslogo4 from "../../public/kartaslogo4.png";

export default function Header() {
  return (
    <HeaderContainer>
      <MenuContainer>
        <LogoContainer>
          <Image src={kartaslogo4} alt="logo" />
        </LogoContainer>
        <Menu>
          <HomeHeader href="/">Home</HomeHeader>
          <ServicesHeader>About Us</ServicesHeader>
          <ActivitiesHeader href="/activities">Activities</ActivitiesHeader>
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
