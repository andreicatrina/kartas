import React, { useState } from "react";
import Image from "next/image.js";

import {
  AboutHeader,
  ActivitiesHeader,
  ContactHeader,
  DropDownContainer,
  DropDownLogoContainer,
  HamburgerMenuContainer,
  HeaderContainer,
  HomeHeader,
  LogoContainer,
  Menu,
  MenuContainer,
  ServicesHeader,
  WhatsappMenuContainer,
} from "./components.jsx";

import kartaslogo4 from "../../public/kartaslogo4.png";

import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function Header() {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);
  const [menuOpen, SetMenuOpen] = useState(false);

  function MenuClick() {
    if (showMobileMenu === false) {
      SetShowMobileMenu(true);
    } else {
      SetShowMobileMenu(false);
    }
  }

  function ScrollToContact() {
    window.scrollTo(0, 5000);
  }

  return (
    <HeaderContainer>
      <MenuContainer>
        <LogoContainer href="/">
          <Image src={kartaslogo4} alt="logo" />
        </LogoContainer>
        <Menu>
          <HomeHeader href="/">Home</HomeHeader>
          <ServicesHeader>About Us</ServicesHeader>
          <ActivitiesHeader href="/experiences">Experiences</ActivitiesHeader>
          <AboutHeader href="/services">Services</AboutHeader>
          <ContactHeader onClick={ScrollToContact}>Contact</ContactHeader>
        </Menu>
        <HamburgerMenuContainer onClick={MenuClick}>
          {showMobileMenu === true ? <MdClose /> : <AiOutlineMenu />}

          {showMobileMenu === true ? (
            <DropDownContainer>
              <a href="/">Home</a>
              <a href="/experiences">Experiences</a>
              <a href="/services">Services</a>
              <span onClick={ScrollToContact}>Contact</span>
              <DropDownLogoContainer>
                <Image src={kartaslogo4} alt="logo" />
              </DropDownLogoContainer>
            </DropDownContainer>
          ) : null}
        </HamburgerMenuContainer>
        <WhatsappMenuContainer>
          <a>WHATSAPP</a>
        </WhatsappMenuContainer>
      </MenuContainer>
    </HeaderContainer>
  );
}
