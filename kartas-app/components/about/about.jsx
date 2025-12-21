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
import kartas13 from "../../public/kartas13.jpeg";
import kartas15 from "../../public/kartas15.jpeg";
import kartas17 from "../../public/kartas17.jpeg";
import kartas12 from "../../public/kartas12.jpeg";
import kartas11 from "../../public/kartas11.jpeg";
import kartas9 from "../../public/kartas9.jpeg";
import kartas8 from "../../public/kartas8.jpeg";
import kartas6 from "../../public/kartas6.jpeg";

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
            <Image src={kartas13} alt="car rent" />
            {/* <span>VIP Cars & Driver</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas15} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas17} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas12} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas11} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas9} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas6} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
          <AboutCard1>
            <Image src={kartas8} alt="bucharest car rent" />
            {/* <span>VIP Escorts</span> */}
          </AboutCard1>
        </AboutCardsContainer>
      </AboutContainer>
    </AboutParentContainer>
  );
}
