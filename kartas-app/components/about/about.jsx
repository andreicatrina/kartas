import React from "react";
import {
  AboutCard1,
  AboutCard2,
  AboutCardsContainer,
  AboutContainer,
  AboutParentContainer,
  AboutSubTitleContainer,
  AboutTitle,
  AboutTitleContainer,
  Subtitle,
} from "./components";

import Image from "next/image";

import carexample1 from "../../public/bmw.jpg";

export default function About() {
  return (
    <AboutParentContainer>
      <AboutContainer>
        <AboutTitleContainer>
          <AboutTitle>About Us</AboutTitle>
        </AboutTitleContainer>
        <AboutSubTitleContainer>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quasi modi iste tempore accusamus eaque
            nobis soluta ipsum velit necessitatibus?
          </Subtitle>
        </AboutSubTitleContainer>
        <AboutCardsContainer>
          <AboutCard1>
            <Image src={carexample1} alt="car rent" />
            <span>VIP Cars & Driver</span>
          </AboutCard1>
          <AboutCard2>
            <img src="" alt="" />
            <span>VIP Escorts</span>
          </AboutCard2>
        </AboutCardsContainer>
      </AboutContainer>
    </AboutParentContainer>
  );
}
