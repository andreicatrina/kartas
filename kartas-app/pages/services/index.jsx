import {
  ATClassicSpan,
  ATClassicTitle,
  ATImageContainer1,
  ATImageContainer2,
  ATImageContainer3,
  ATImageContainer4,
  ATImageContainer5,
  ATImageContainer6,
  ATImagesContainer,
  ATLimoContainer,
  ATLimoParentContainer,
  ATLimoSpan,
  ATLimoTitle,
  AirportTransferClassicContainer,
  AirportTransferParentContainer,
  ContactParentContainer,
  FastContactLinksContainer,
  SecuritySpan,
  SecurityTitle,
  ServicesFastContactContainer,
  ServicesHeaderContainer,
  ServicesOffersContainer,
  ServicesParentContainer,
  ServicesSection,
  ServicesSecurityContainer,
  ServicesText,
  ServicesTextContainer,
  ServicesTitle,
  VIPPackContainer,
  VIPSpan,
  VIPTitle,
} from "../../components/servicespagecomponent/components";

import { RiVipCrown2Fill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import Header from "../../components/header";
import Contact from "../../components/contact/contact";
import Image from "next/image";

import kartas6 from "../../public/kartas6.jpeg";
import kartas7 from "../../public/kartas7.jpeg";
import kartas8 from "../../public/kartas8.jpeg";
import kartas25 from "../../public/kartas25.jpg";
import kartas22 from "../../public/kartas22.jpg";
import kartas11 from "../../public/kartas11.jpeg";
import kartas12 from "../../public/kartas12.jpeg";
import kartas21 from "../../public/kartas21.jpg";
import kartas24 from "../../public/kartas24.jpg";

export default function ServicesPage() {
  return (
    <ServicesSection>
      <ServicesHeaderContainer>
        <Header />
      </ServicesHeaderContainer>
      <ServicesParentContainer>
        <ServicesTitle>Services</ServicesTitle>
        <ServicesTextContainer>
          <ServicesText>
            At Kartas Experiences,transportation is more than moving from point A to point B. It's about comfort,
            discretion and impeccable timing.
          </ServicesText>
        </ServicesTextContainer>
        <ServicesOffersContainer>
          <AirportTransferClassicContainer>
            <AirportTransferParentContainer>
              <ATClassicTitle>Airport Transfer - Clasic</ATClassicTitle>
              <ATClassicSpan>Let us enhance your comfort with our fleet of classic luxury vehicles</ATClassicSpan>
              <ATImagesContainer>
                <ATImageContainer1>
                  <Image src={kartas8} alt="Airport Transfer" />
                  <span>V Class</span>
                </ATImageContainer1>
                <ATImageContainer2>
                  <Image src={kartas22} alt="Bucharest vip car" />
                  <span>S Class</span>
                </ATImageContainer2>
                <ATImageContainer3>
                  <Image src={kartas25} alt="E-class for rent" />
                  <span>E Class</span>
                </ATImageContainer3>
              </ATImagesContainer>
            </AirportTransferParentContainer>
            <ServicesFastContactContainer>
              <FastContactLinksContainer>
                <a href="tel:+40758579743">
                  <MdPhoneInTalk />
                  CALL US
                </a>
                <a href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20">
                  <FaWhatsapp />
                  WHATSAPP
                </a>
              </FastContactLinksContainer>
            </ServicesFastContactContainer>
          </AirportTransferClassicContainer>
          <ATLimoContainer>
            <ATLimoParentContainer>
              <ATLimoTitle>Airport Transport - Limousine</ATLimoTitle>
              <ATLimoSpan>Or maybe a Limousine fits you better</ATLimoSpan>
              <ATImagesContainer>
                <ATImageContainer1>
                  <Image src={kartas11} alt="Limousine Romania" />
                  <span>G-Class</span>
                </ATImageContainer1>
                <ATImageContainer2>
                  <Image src={kartas21} alt="Bucharest vip car" />
                  <span>Ferrari</span>
                </ATImageContainer2>
                <ATImageContainer3>
                  <Image src={kartas12} alt="Bucharest Limousine" />
                  <span>G-Class</span>
                </ATImageContainer3>
                <ATImageContainer4>
                  <Image src={kartas24} alt="Bucharest Ferrari" />
                  <span>Ferrari</span>
                </ATImageContainer4>
                <ATImageContainer5>
                  <Image src={kartas6} alt="Bucharest Hummer" />
                  <span>Hummer</span>
                </ATImageContainer5>
                <ATImageContainer6>
                  <Image src={kartas7} alt="Bucharest Hummer Limousine" />
                  <span>Hummer</span>
                </ATImageContainer6>
              </ATImagesContainer>
            </ATLimoParentContainer>
            <ServicesFastContactContainer>
              <FastContactLinksContainer>
                <a href="tel:+40758579743">
                  <MdPhoneInTalk />
                  CALL US
                </a>
                <a href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20">
                  <FaWhatsapp />
                  WHATSAPP
                </a>
              </FastContactLinksContainer>
            </ServicesFastContactContainer>
          </ATLimoContainer>
          <ServicesSecurityContainer>
            <SecurityTitle>Security Guard</SecurityTitle>
            <SecuritySpan>For your protection</SecuritySpan>
          </ServicesSecurityContainer>
          <VIPPackContainer>
            <VIPTitle>
              VIP Combo <RiVipCrown2Fill />
            </VIPTitle>
            <VIPSpan>Get the best of everything</VIPSpan>
          </VIPPackContainer>
        </ServicesOffersContainer>
      </ServicesParentContainer>
      <ContactParentContainer>
        <Contact />
      </ContactParentContainer>
    </ServicesSection>
  );
}
