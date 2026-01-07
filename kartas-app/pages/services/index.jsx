import { useState } from "react";

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
  ELargeImageContainer1,
  ELargeImageContainer2,
  ELargeImageContainer3,
  EclassContainer1,
  EclassContainer2,
  EclassContainer3,
  FastContactLinksContainer,
  FirstChildDetailsContainer,
  FirstChildImageContainer,
  ImagesChildContainer,
  ImagesParentContainer,
  LimoImagesContainer,
  PackageFirstChildContainer,
  PackageSecondChildContainer,
  PackagesParentContainer,
  SLargeImageContainer1,
  SLargeImageContainer2,
  SLargeImageContainer3,
  SclassContainer1,
  SclassContainer2,
  SclassContainer3,
  SecondChildDetailsContainer,
  SecondChildImageContainer,
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
  VLargeImageContainer1,
  VLargeImageContainer2,
  VLargeImageContainer3,
  VclassContainer1,
  VclassContainer2,
  VclassContainer3,
} from "../../components/servicespagecomponent/components";

import { RiVipCrown2Fill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
import kartaspool8 from "../../public/kartaspool8.jpg";
import kartaspool9 from "../../public/kartaspool9.jpg";

export default function ServicesPage() {
  const [image, setImage] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);
  const [image7, setImage7] = useState(false);
  const [image8, setImage8] = useState(false);

  function onClickOpenImage() {
    if (image === false) {
      setImage(true);
    } else {
      setImage(false);
    }
  }
  function onClickOpenImage1() {
    if (image1 === false) {
      setImage1(true);
    } else {
      setImage1(false);
    }
  }
  function onClickOpenImage2() {
    if (image2 === false) {
      setImage2(true);
    } else {
      setImage2(false);
    }
  }
  function onClickOpenImage3() {
    if (image3 === false) {
      setImage3(true);
    } else {
      setImage3(false);
    }
  }
  function onClickOpenImage4() {
    if (image4 === false) {
      setImage4(true);
    } else {
      setImage4(false);
    }
  }
  function onClickOpenImage5() {
    if (image5 === false) {
      setImage5(true);
    } else {
      setImage5(false);
    }
  }
  function onClickOpenImage6() {
    if (image6 === false) {
      setImage6(true);
    } else {
      setImage6(false);
    }
  }
  function onClickOpenImage7() {
    if (image7 === false) {
      setImage7(true);
    } else {
      setImage7(false);
    }
  }
  function onClickOpenImage8() {
    if (image8 === false) {
      setImage8(true);
    } else {
      setImage8(false);
    }
  }

  function onClickCloseImage() {
    setImage(false);
  }
  function onClickCloseImage1() {
    setImage1(false);
  }
  function onClickCloseImage2() {
    setImage2(false);
  }
  function onClickCloseImage3() {
    setImage3(false);
  }
  function onClickCloseImage4() {
    setImage4(false);
  }
  function onClickCloseImage5() {
    setImage5(false);
  }
  function onClickCloseImage6() {
    setImage6(false);
  }
  function onClickCloseImage7() {
    setImage7(false);
  }
  function onClickCloseImage8() {
    setImage8(false);
  }

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
              <ImagesParentContainer>
                <ImagesChildContainer>
                  <VclassContainer1>
                    <ATImageContainer1 onClick={onClickOpenImage}>
                      <Image src={kartas8} alt="Airport Transfer" />
                      <span>V Class</span>
                    </ATImageContainer1>
                    {image ? (
                      <VLargeImageContainer1>
                        <Image src={kartas8} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage} />
                      </VLargeImageContainer1>
                    ) : null}
                  </VclassContainer1>
                  <VclassContainer2>
                    <ATImageContainer1 onClick={onClickOpenImage1}>
                      <Image src={kartas28} alt="Airport Transfer" />
                      <span>V Class</span>
                    </ATImageContainer1>
                    {image1 ? (
                      <VLargeImageContainer2>
                        <Image src={kartas28} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage1} />
                      </VLargeImageContainer2>
                    ) : null}
                  </VclassContainer2>
                  <VclassContainer3>
                    <ATImageContainer1 onClick={onClickOpenImage8}>
                      <Image src={kartas29} alt="Airport Transfer" />
                      <span>V Class</span>
                    </ATImageContainer1>
                    {image8 ? (
                      <VLargeImageContainer3>
                        <Image src={kartas29} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage8} />
                      </VLargeImageContainer3>
                    ) : null}
                  </VclassContainer3>
                </ImagesChildContainer>
                <ImagesChildContainer>
                  <SclassContainer1>
                    <ATImageContainer1 onClick={onClickOpenImage2}>
                      <Image src={kartas13} alt="Airport Transfer" />
                      <span>S Class</span>
                    </ATImageContainer1>
                    {image2 ? (
                      <SLargeImageContainer1>
                        <Image src={kartas13} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage2} />
                      </SLargeImageContainer1>
                    ) : null}
                  </SclassContainer1>
                  <SclassContainer2>
                    <ATImageContainer1 onClick={onClickOpenImage3}>
                      <Image src={kartas1} alt="Airport Transfer" />
                      <span>S Class </span>
                    </ATImageContainer1>
                    {image3 ? (
                      <SLargeImageContainer2>
                        <Image src={kartas1} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage3} />
                      </SLargeImageContainer2>
                    ) : null}
                  </SclassContainer2>
                  <SclassContainer3>
                    <ATImageContainer1 onClick={onClickOpenImage4}>
                      <Image src={kartas2} alt="Airport Transfer" />
                      <span>S Class</span>
                    </ATImageContainer1>
                    {image4 ? (
                      <SLargeImageContainer3>
                        <Image src={kartas2} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage4} />
                      </SLargeImageContainer3>
                    ) : null}
                  </SclassContainer3>
                </ImagesChildContainer>
                <ImagesChildContainer>
                  <EclassContainer1>
                    <ATImageContainer1 onClick={onClickOpenImage5}>
                      <Image src={kartas25} alt="Airport Transfer" />
                      <span>E Class</span>
                    </ATImageContainer1>
                    {image5 ? (
                      <ELargeImageContainer1>
                        <Image src={kartas25} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage5} />
                      </ELargeImageContainer1>
                    ) : null}
                  </EclassContainer1>
                  <EclassContainer2>
                    <ATImageContainer1 onClick={onClickOpenImage6}>
                      <Image src={kartas26} alt="Airport Transfer" />
                      <span>E Class </span>
                    </ATImageContainer1>
                    {image6 ? (
                      <ELargeImageContainer2>
                        <Image src={kartas26} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage6} />
                      </ELargeImageContainer2>
                    ) : null}
                  </EclassContainer2>
                  <EclassContainer3>
                    <ATImageContainer1 onClick={onClickOpenImage7}>
                      <Image src={kartas27} alt="Airport Transfer" />
                      <span>E Class</span>
                    </ATImageContainer1>
                    {image7 ? (
                      <ELargeImageContainer3>
                        <Image src={kartas27} alt="Airport Transfer" />
                        <MdClose onClick={onClickCloseImage7} />
                      </ELargeImageContainer3>
                    ) : null}
                  </EclassContainer3>
                </ImagesChildContainer>
              </ImagesParentContainer>
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
                <a href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20">
                  <FaWhatsapp />
                  WHATSAPP
                </a>
              </FastContactLinksContainer>
            </ServicesFastContactContainer>
          </ATLimoContainer>
          {/* <ServicesSecurityContainer>
            <SecurityTitle>Security Guard</SecurityTitle>
            <SecuritySpan>For your protection</SecuritySpan>
          </ServicesSecurityContainer> */}
          <VIPPackContainer>
            <VIPTitle>
              VIP Packages <RiVipCrown2Fill />
            </VIPTitle>
            <VIPSpan>Get the best of everything</VIPSpan>
            <PackagesParentContainer>
              <PackageFirstChildContainer>
                <FirstChildDetailsContainer>
                  <h3>Pool Party Silver Pack</h3>
                  <p>Location (6h)-Private Pool Vila</p>
                  <p>Drinks-2 x Absolut Vodka(1L) + natural juices + RedBull</p>
                  <p>Camino Tequilla shots</p>
                  <p>2 x JN Chennet(1.5L)</p>
                  <p>VIP Transfer</p>
                </FirstChildDetailsContainer>
                <FirstChildImageContainer>
                  <Image src={kartaspool8} alt="pool party" />
                </FirstChildImageContainer>
              </PackageFirstChildContainer>
              <PackageSecondChildContainer>
                <SecondChildDetailsContainer>
                  <h3>Pool Party Gold Pack</h3>
                  <p>Location (6h)-Private Pool Vila</p>
                  <p>Drinks-2 x Belvedere/Grey Goose + natural juices</p>
                  <p>2 x Moet + Figa</p>
                  <p>Patron/Padre tequila shots</p>
                  <p>Snacks & water</p>
                  <p>VIP Transfer</p>
                </SecondChildDetailsContainer>
                <SecondChildImageContainer>
                  <Image src={kartaspool9} alt="vip pool party" />
                </SecondChildImageContainer>
              </PackageSecondChildContainer>
            </PackagesParentContainer>
          </VIPPackContainer>
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
