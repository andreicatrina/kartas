import {
  AboutCard1,
  AboutCard2,
  AboutCardsContainer,
  AboutChildFirstContainer,
  AboutChildSecondContainer,
  AboutContainer,
  AboutParentContainer,
  AboutSubTitleContainer,
  AboutTitle,
  AboutTitleContainer,
  AirportTransferTextContainer,
  FastContactLinksContainer,
  LineContainer,
  OfferListContainer,
  ServicesFastContactContainer,
  Subtitle,
  TextContactParentContainer,
} from "./components";

import Image from "next/image";

import { MdPhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import kartas13 from "../../public/kartas13.jpeg";
import kartas15 from "../../public/kartas15.jpeg";
import kartas17 from "../../public/kartas17.jpeg";
import kartas12 from "../../public/kartas12.jpeg";
import kartas11 from "../../public/kartas11.jpeg";
import kartas9 from "../../public/kartas9.jpeg";
import kartas8 from "../../public/kartas8.jpeg";
import kartas6 from "../../public/kartas6.jpeg";
import kartaspartytest2 from "../../public/kartaspartytest2.jpeg";
import kartasparty3 from "../../public/kartasparty3.jpg";
import kartasparty4 from "../../public/kartasparty4.jpg";
import kartasparty5 from "../../public/kartasparty5.jpg";
import kartasparty2 from "../../public/kartasparty2.png";
import kartasparty7 from "../../public/kartasparty7.png";
import kartasparty6 from "../../public/kartasparty6.jpg";
import kartasparty1 from "../../public/kartasparty1.jpg";
import kartasbrasov1 from "../../public/kartasbrasov1.jpg";
import kartasct1 from "../../public/kartas-ct.jpg";
import kartasbran3 from "../../public/kartas-bran3.jpg";
import kartaspeles3 from "../../public/kartas-peles3.jpg";
import kartaspp3 from "../../public/kartas-pp3.jpg";
import kartaspp2 from "../../public/kartas-pp2.jpg";

export default function About() {
  return (
    <AboutParentContainer>
      <AboutContainer>
        <AboutChildFirstContainer>
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
              <Image src={kartasbrasov1} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartas17} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasct1} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartas11} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasbran3} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartas6} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartaspeles3} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartas15} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartaspp3} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartas9} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartaspp2} alt="bucharest car rent" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
          </AboutCardsContainer>
          <TextContactParentContainer>
            <AirportTransferTextContainer>
              <h3>VIP Airport Transfers and Tours</h3>
              <p>Start and end your journey with ease through our VIP airport transfer services</p>
              <OfferListContainer>
                <li>• Meet & greet service</li>
                <li>• Luxury high-end vehicles</li>
                <li>• Professional chauffeurs</li>
                <li>• Flight tracking & flexible timing</li>
                <li>• Direct hotel or destination transfer</li>
              </OfferListContainer>
            </AirportTransferTextContainer>
          </TextContactParentContainer>
        </AboutChildFirstContainer>
        <AboutChildSecondContainer>
          <LineContainer></LineContainer>
          <AboutSubTitleContainer>
            <Subtitle>
              Experience the ultimate VIP party in Romania — arrive in style with a luxury limousine, premium drinks,
              exclusive venues, and an unforgettable night of elegance, music, and celebration. Where glamour meets
              nonstop fun
            </Subtitle>
          </AboutSubTitleContainer>
          <AboutCardsContainer>
            <AboutCard1>
              <Image src={kartasparty3} alt="Romania party" />
              {/* <span>VIP Cars & Driver</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasparty4} alt="Romaniațs clubs" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasparty5} alt="bucharest party people" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasparty2} alt="bucharest fun" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasparty6} alt="bucharest best clubs" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasparty1} alt="bucharest clubs" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartaspartytest2} alt="bucharest party" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
            <AboutCard1>
              <Image src={kartasparty7} alt="bucharest club" />
              {/* <span>VIP Escorts</span> */}
            </AboutCard1>
          </AboutCardsContainer>
          <TextContactParentContainer>
            <AirportTransferTextContainer>
              <h3>V.I.P Party</h3>
              <p>Party with style — luxury limousine, premium vibes, unforgettable night</p>
              <OfferListContainer>
                <li>• Birthday & anniversary celebrations</li>
                <li>• Bachelor & Bachelorette Parties</li>
                <li>• Professional chauffeur</li>
                <li>• We handle logistics & coordination</li>
                <li>• Special private party for you and your friends</li>
                <li>• Hard and soft drinks</li>
                <li>• Great music & great atmosphere</li>
              </OfferListContainer>
            </AirportTransferTextContainer>
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
          </TextContactParentContainer>
        </AboutChildSecondContainer>
      </AboutContainer>
    </AboutParentContainer>
  );
}

/*


*/
