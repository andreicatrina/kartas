import React from "react";

import Image from "next/image";

import {
  Column1Title,
  Column2Title,
  Column3Title,
  ContactColumn1,
  ContactColumn2,
  ContactColumn3,
  ContactContainer,
  ContactFooterLogo,
  ContactHeading,
  ContactHeadingContainer,
  ContactHeadingPhoneLink,
  ContactParentContainer,
} from "./components";

import kartaslogo4 from "../../public/kartaslogo4.png";

export default function Contact() {
  return (
    <ContactParentContainer>
      <ContactContainer>
        <ContactFooterLogo>
          <Image src={kartaslogo4} alt="logo" />
        </ContactFooterLogo>
        <ContactHeadingContainer>
          <ContactHeading>CONTACT US</ContactHeading>
          <ContactHeadingPhoneLink href="tel:+40712345678">+40 712 345 678</ContactHeadingPhoneLink>
          <a href="mailto:abc@gmail.com">abc@gmail.com</a>
        </ContactHeadingContainer>
        <ContactColumn1>
          <Column1Title>Info</Column1Title>
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </ContactColumn1>
        <ContactColumn2>
          <Column2Title>Links</Column2Title>
          <span>Home</span>
          <span>Services</span>
          <span>Activities</span>
        </ContactColumn2>
        <ContactColumn3>
          <Column3Title>Socials</Column3Title>
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </ContactColumn3>
      </ContactContainer>
    </ContactParentContainer>
  );
}
