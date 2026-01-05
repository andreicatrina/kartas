import React from "react";

import Image from "next/image";
import Link from "next/link";

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
  ContactMailLink,
  ContactParentContainer,
  FacebookFooterLink,
  InstagramFooterLink,
  WhatsappFooterLink,
  YoutubeFooterLink,
} from "./components";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
          <ContactHeadingPhoneLink href="tel:+40758579743">+40 758 579 743</ContactHeadingPhoneLink>
          <ContactMailLink href="mailto:abc@gmail.com">abc@gmail.com</ContactMailLink>
        </ContactHeadingContainer>
        <ContactColumn1>
          <Column1Title>INFO</Column1Title>
          <Link target="_blank" href="/pdf/Terms & Conditions.pdf">
            Terms & Conditions
          </Link>
          <Link target="_blank" href={"/pdf/Privacy policy.pdf"}>
            Privacy Policy
          </Link>
        </ContactColumn1>
        <ContactColumn2>
          <Column2Title>LINKS</Column2Title>
          <a href="/">Home</a>
          <a>About Us</a>
          <a href="/services">Services</a>
          <a href="/experiences">Experiences</a>
        </ContactColumn2>
        <ContactColumn3>
          <Column3Title>SOCIALS</Column3Title>
          <InstagramFooterLink>
            <FaInstagram />
          </InstagramFooterLink>
          <FacebookFooterLink>
            <FaFacebookSquare />
          </FacebookFooterLink>
          <YoutubeFooterLink>
            <FaYoutube />
          </YoutubeFooterLink>
          <WhatsappFooterLink
            target="_blank"
            href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20"
          >
            <FaWhatsapp />
          </WhatsappFooterLink>
        </ContactColumn3>
      </ContactContainer>
    </ContactParentContainer>
  );
}
