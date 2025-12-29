import {
  AboutCard1,
  AboutCard2,
  AboutCardsContainer,
  AboutContainer,
  AboutParentContainer,
  AboutSubTitleContainer,
  AboutTitle,
  AboutTitleContainer,
  AirportTransferTextContainer,
  FastContactLinksContainer,
  OfferListContainer,
  ServicesFastContactContainer,
  Subtitle,
  TextContactParentContainer,
} from "./components";

import Image from "next/image";

import { MdPhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

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
            We are specialiased in luxury airport transfers with private chauffeurs and high-end vehicles. We offer
            seamless, discreet transport using Mercedes V-Class, S-Class, Maybach, E-Class and limousines, ensuring
            comfort, safety, and elegance from arrival to destination.
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
        <TextContactParentContainer>
          <AirportTransferTextContainer>
            <h3>VIP Airport Transfers</h3>
            <p>Start and end your journey with ease through our VIP airport transfer services</p>
            <OfferListContainer>
              <li>• Meet & greet service</li>
              <li>• Luxury high-end vehicles</li>
              <li>• Professional chauffeurs</li>
              <li>• Flight tracking & flexible timing</li>
              <li>• Direct hotel or destination transfer</li>
            </OfferListContainer>
          </AirportTransferTextContainer>
          <ServicesFastContactContainer>
            <FastContactLinksContainer>
              <a href="tel:+40712345678">
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
        </TextContactParentContainer>
      </AboutContainer>
    </AboutParentContainer>
  );
}
