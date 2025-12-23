import React from "react";
import {
  ActivitiesContactContainer,
  ActivitiesHeaderContainer,
  ActivitiesParentContainer,
  ActivitiesSection,
  ActivitiesTitle,
  ActivitiesTitleContainer,
  BranCastleCardContainer,
  BranCastleContainer,
  BranCastleImageContainer,
  BranCastleTitle,
  LocationsToursContainer,
  PartiesContainer,
  PelesCardContainer,
  PelesCastleContainer,
  PelesImageContainer,
  PelesTitle,
  PelesTitleContainer,
  ToursContainer,
  ToursText,
  ToursTitle,
} from "../../components/activitiespagecomponents/component";

import Header from "../../components/header/index";
import Contact from "../../components/contact/contact";

import Image from "next/image";
import kartasbran from "../../public/kartas-bran.jpg";

import { CiLocationOn } from "react-icons/ci";

export default function index() {
  return (
    <ActivitiesSection>
      <ActivitiesHeaderContainer>
        <Header />
      </ActivitiesHeaderContainer>
      <ActivitiesParentContainer>
        <ToursContainer>
          <ActivitiesTitleContainer>
            <ActivitiesTitle>Activities</ActivitiesTitle>
            <span>Travel at your own pace. In absolute comfort.</span>
          </ActivitiesTitleContainer>
          <ToursTitle>Guided Tours</ToursTitle>
          <ToursText>Discover Romania through private guided tours, led by professional local experts</ToursText>
          <LocationsToursContainer>
            <BranCastleContainer>
              <BranCastleCardContainer>
                <BranCastleTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Bran+Castle/@45.5149022,25.3645888,17z/data=!3m1!4b1!4m6!3m5!1s0x40b347e5a415de31:0xcf922792d921ab7f!8m2!3d45.5149022!4d25.3671637!16zL20vMDJnbXk3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Bran Castle
                </BranCastleTitle>
                <BranCastleImageContainer>
                  <Image src={kartasbran} alt="Dracula's Castle" loading="eager" />
                </BranCastleImageContainer>
                <span></span>
              </BranCastleCardContainer>
              <BranCastleCardContainer>
                <BranCastleImageContainer>
                  <Image src={kartasbran} alt="Romania's Castles" loading="eager" />
                </BranCastleImageContainer>
                <span></span>
              </BranCastleCardContainer>
              <BranCastleCardContainer>
                <BranCastleImageContainer>
                  <Image src={kartasbran} alt="Visit Romania" loading="eager" />
                </BranCastleImageContainer>
                <span></span>
              </BranCastleCardContainer>
            </BranCastleContainer>
            <PelesCastleContainer>
              <PelesCardContainer>
                <PelesTitleContainer
                  target="_blank"
                  href="https://www.google.com/maps/place/Pele%C8%99+Castle/@45.3599816,25.5400674,17z/data=!3m1!4b1!4m6!3m5!1s0x40b316ecd2e0556d:0x9a6e63a594f3d5ad!8m2!3d45.3599816!4d25.5426423!16zL20vMDI2bXZk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  <PelesTitle>Peles Castle</PelesTitle>
                </PelesTitleContainer>
                <PelesImageContainer>
                  <Image src={kartasbran} alt="Romanian attractions" loading="eager" />
                </PelesImageContainer>
              </PelesCardContainer>
              <PelesCardContainer>
                <PelesImageContainer>
                  <Image src={kartasbran} alt="romania castle" loading="eager" />
                </PelesImageContainer>
              </PelesCardContainer>
              <PelesCardContainer>
                <PelesImageContainer>
                  <Image src={kartasbran} alt="castle guided tour" loading="eager" />
                </PelesImageContainer>
              </PelesCardContainer>
            </PelesCastleContainer>
          </LocationsToursContainer>
        </ToursContainer>
        <PartiesContainer></PartiesContainer>
      </ActivitiesParentContainer>
      <ActivitiesContactContainer>
        <Contact />
      </ActivitiesContactContainer>
    </ActivitiesSection>
  );
}
