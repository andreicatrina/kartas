import { useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  ATClassicSpan,
  ATClassicTitle,
  ATImageContainer1,
  ATImageContainer2,
  ATImageContainer3,
  ATImageContainer4,
  ATImageContainer5,
  ATImageContainer6,
  ATLimoContainer,
  ATLimoParentContainer,
  ATLimoSpan,
  ATLimoTitle,
  AirportTransferClassicContainer,
  AirportTransferParentContainer,
  ContactParentContainer,
  FastContactLinksContainer,
  ImagesChildContainer,
  ImagesParentContainer,
  LimoImagesContainer,
  SecurityImageContainer1,
  SecurityImageContainer2,
  SecurityImageContainer3,
  SecurityImageContainer4,
  SecurityImagesContainer,
  SecuritySpan,
  SecurityTitle,
  ServicesFastContactContainer,
  ServicesHeaderContainer,
  ServicesOffersContainer,
  ServicesParentContainer,
  ServicesSection,
  ServicesSecurityContainer,
  ServicesShortText,
  ServicesShortTextContainer,
  ServicesText,
  ServicesTextContainer,
  ServicesTitle,
  VclassContainer1,
} from "../../components/servicespagecomponent/components";

import { MdPhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import Header from "../../components/header";
import Contact from "../../components/contact/contact";
import Image from "next/image";

import kartas1 from "../../public/kartas1.png";
import kartas2 from "../../public/kartas2.png";
import kartas6 from "../../public/kartas6.jpeg";
import kartas7 from "../../public/kartas7.jpeg";
import kartas8 from "../../public/kartas8.jpeg";
import kartas9 from "../../public/kartas9.jpeg";
import kartas13 from "../../public/kartas13.jpeg";
import kartas22 from "../../public/kartas22.jpg";
import kartas11 from "../../public/kartas11.jpeg";
import kartas12 from "../../public/kartas12.jpeg";
import kartas21 from "../../public/kartas21.jpg";
import kartas24 from "../../public/kartas24.jpg";
import kartas25 from "../../public/kartas25.jpg";
import kartas26 from "../../public/kartas26.jpg";
import kartas27 from "../../public/kartas27.jpg";
import kartas28 from "../../public/kartas28.png";
import kartas29 from "../../public/kartas29.png";

import kartashostess1 from "../../public/kartashostess1.jpg";
import kartashostess2 from "../../public/kartashostess2.jpg";
import kartashostess3 from "../../public/kartashostess3.jpg";
import kartashostess4 from "../../public/kartashostess4.jpg";

import kartassecurity1 from "../../public/kartassecurity1.jpg";
import kartassecurity2 from "../../public/kartassecurity2.jpg";
import kartassecurity3 from "../../public/kartassecurity3.jpg";
import kartassecurity4 from "../../public/kartassecurity4.jpg";
import kartassecurity5 from "../../public/kartassecurity5.jpg";
import kartassecurity6 from "../../public/kartassecurity6.jpg";
import kartassecurity7 from "../../public/kartassecurity7.jpg";
import kartassecurity8 from "../../public/kartassecurity8.jpg";

import { ImageModal } from "../../components/servicespagecomponent/ImageModal";

const imagesList = [
  { image: kartas8, title: "V Class" },
  { image: kartas28, title: "V Class" },
  { image: kartas29, title: "V Class" },
  { image: kartas13, title: "S Class" },
  { image: kartas1, title: "S Class" },
  { image: kartas2, title: "S Class" },
  { image: kartas25, title: "E Class" },
  { image: kartas26, title: "E Class" },
  { image: kartas27, title: "E Class" },
];

export default function ServicesPage() {
  const [image, setImage] = useState(false);
  const [openModal, setOpenModal] = useState(undefined);

  function onClickOpenModal(idx) {
    setOpenModal(idx);
  }

  function onClickCloseImage() {
    setImage(false);
  }

  function onCloseImageModal() {
    setOpenModal(undefined);
  }

  return (
    <ServicesSection>
      <Analytics />
      <SpeedInsights />
      <ServicesHeaderContainer>
        <Header />
      </ServicesHeaderContainer>
      {openModal !== undefined && (
        <ImageModal images={imagesList.map((item) => item.image)} idx={openModal} onClose={onCloseImageModal} />
      )}
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
              <ImagesParentContainer>
                <ImagesChildContainer>
                  {imagesList.map((item, idx) => (
                    <VclassContainer1>
                      <ATImageContainer1 onClick={() => onClickOpenModal(idx)}>
                        <Image src={item.image} alt="Airport Transfer" />
                        <span>{item.title}</span>
                      </ATImageContainer1>
                    </VclassContainer1>
                  ))}
                </ImagesChildContainer>
              </ImagesParentContainer>
            </AirportTransferParentContainer>
            <ServicesFastContactContainer>
              <FastContactLinksContainer>
                <a href="tel:+40758579743">
                  <MdPhoneInTalk />
                  CALL US
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20"
                >
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
              <ServicesShortTextContainer>
                <ServicesShortText>
                  Kartas Bucharest Experience provides VIP airport transport with luxury limousines for a smooth and
                  stylish arrival or departure. For an extra touch of exclusivity, professional hostesses can also be on
                  board, ensuring comfort, great company, and a premium experience from the very first moment.
                </ServicesShortText>
              </ServicesShortTextContainer>
              <LimoImagesContainer>
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
              </LimoImagesContainer>
            </ATLimoParentContainer>
            <ServicesFastContactContainer>
              <FastContactLinksContainer>
                <a href="tel:+40758579743">
                  <MdPhoneInTalk />
                  CALL US
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20"
                >
                  <FaWhatsapp />
                  WHATSAPP
                </a>
              </FastContactLinksContainer>
            </ServicesFastContactContainer>
          </ATLimoContainer>
          <ServicesSecurityContainer>
            <SecurityTitle>Hostess Services</SecurityTitle>
            <SecuritySpan>For your protection</SecuritySpan>
            <ServicesShortTextContainer>
              <ServicesShortText>
                Kartas Bucharest Experience offers professional hostess services designed to elevate your night out in
                Bucharest. Our friendly, attractive, and full of life hostesses are also available for limousine
                services, adding style, great company, and smooth vibes to your premium experience from start to finish.
              </ServicesShortText>
            </ServicesShortTextContainer>
            <SecurityImagesContainer>
              <SecurityImageContainer1>
                <Image src={kartashostess1} alt="bucharest hostess" />
              </SecurityImageContainer1>
              <SecurityImageContainer2>
                <Image src={kartashostess3} alt="hostess services" />
              </SecurityImageContainer2>
              <SecurityImageContainer3>
                <Image src={kartashostess4} alt="romania hostess" />
              </SecurityImageContainer3>
              <SecurityImageContainer4>
                <Image src={kartashostess2} alt="hostess party" />
              </SecurityImageContainer4>
            </SecurityImagesContainer>
            <ServicesFastContactContainer>
              <FastContactLinksContainer>
                <a href="tel:+40758579743">
                  <MdPhoneInTalk />
                  CALL US
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20"
                >
                  <FaWhatsapp />
                  WHATSAPP
                </a>
              </FastContactLinksContainer>
            </ServicesFastContactContainer>
          </ServicesSecurityContainer>
          <ServicesSecurityContainer>
            <SecurityTitle>Security Guard</SecurityTitle>
            <SecuritySpan>For your protection</SecuritySpan>
            <ServicesShortTextContainer>
              <ServicesShortText>
                Kartas Bucharest Experience delivers elite VIP transfers in Bucharest, combining luxury vehicles with
                discreet, highly trained bodyguards. The service is designed for clients who require enhanced personal
                protection, privacy, and total peace of mind, ensuring every journey is secure, smooth, and handled with
                the highest level of professionalism.
              </ServicesShortText>
            </ServicesShortTextContainer>
            <SecurityImagesContainer>
              <SecurityImageContainer1>
                <Image src={kartassecurity1} alt="private security" />
              </SecurityImageContainer1>
              <SecurityImageContainer2>
                <Image src={kartassecurity6} alt="vip security" />
              </SecurityImageContainer2>
              <SecurityImageContainer3>
                <Image src={kartassecurity3} alt="bucharest security" />
              </SecurityImageContainer3>
              <SecurityImageContainer4>
                <Image src={kartassecurity4} alt="party security" />
              </SecurityImageContainer4>
            </SecurityImagesContainer>
            <ServicesFastContactContainer>
              <FastContactLinksContainer>
                <a href="tel:+40758579743">
                  <MdPhoneInTalk />
                  CALL US
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20"
                >
                  <FaWhatsapp />
                  WHATSAPP
                </a>
              </FastContactLinksContainer>
            </ServicesFastContactContainer>
          </ServicesSecurityContainer>
        </ServicesOffersContainer>
      </ServicesParentContainer>
      <ContactParentContainer>
        <Contact />
      </ContactParentContainer>
    </ServicesSection>
  );
}

/*
<ATImageContainer2>
                  <Image src={kartas22} alt="Bucharest vip car" />
                  <span>S Class</span>
                </ATImageContainer2>
                <ATImageContainer3>
                  <Image src={kartas25} alt="E-class for rent" />
                  <span>E Class</span>
                </ATImageContainer3>
*/
