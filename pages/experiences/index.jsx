import React from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  AccommodationsImageContainer,
  AccommodationsImagesContainer,
  AccommodationsTitleContainer,
  ActivitiesContactContainer,
  ActivitiesHeaderContainer,
  ActivitiesParentContainer,
  ActivitiesSection,
  ActivitiesTitle,
  ActivitiesTitleContainer,
  CallUsContainer,
  GetInTouchContainer,
  GetInTouchTextContainer,
  ImageChildContainer,
  LocationCardContainer,
  LocationContainer,
  LocationDescriptionContainer,
  LocationDescriptionParagraph,
  LocationDoubleImagesContainer1,
  LocationDoubleImagesContainer2,
  LocationImageContainer,
  LocationTitle,
  LocationsParentContainer,
  LocationsToursContainer,
  OfferListContainer,
  OtherActivitiesContainer,
  OtherActivitiesParentContainer4,
  ToursContainer,
  ToursGetInTouchContainer,
  ToursOfferContainer,
  ToursText,
  ToursTitle,
  VilaPartyTextContainer,
  WhatsappContainer,
} from "../../components/activitiespagecomponents/component";

import Header from "../../components/header/index";
import Contact from "../../components/contact/contact";

import Image from "next/image";

import kartasbran from "../../public/kartas-bran.jpg";
import kartasbran2 from "../../public/kartas-bran2.jpg";
import kartasbran3 from "../../public/kartas-bran3.jpg";
import kartaspeles from "../../public/kartas-peles.jpg";
import kartaspeles2 from "../../public/kartas-peles2.jpg";
import kartaspeles3 from "../../public/kartas-peles3.jpg";
import kartasbuc from "../../public/kartas-pp.jpg";
import kartasbuc2 from "../../public/kartas-pp2.jpg";
import kartasbuc3 from "../../public/kartas-pp3.jpg";
import kartasct from "../../public/kartas-ct.jpg";
import kartasct2 from "../../public/kartas-ct2.jpg";
import kartasct3 from "../../public/kartasct3.jpg";
import kartasveliko from "../../public/kartas-veliko.jpg";
import kartasveliko3 from "../../public/kartas-veliko3.jpg";
import kartasveliko4 from "../../public/kartas-veliko4.jpg";

import kartasfaleza2 from "../../public/kartas-faleza2.jpg";
import kartasfaleza3 from "../../public/kartas-faleza3.jpeg";
import kartasbrasov1 from "../../public/kartasbrasov1.jpg";
import kartasbrasov2 from "../../public/kartasbrasov2.jpg";
import kartasbrasov3 from "../../public/kartasbrasov3.jpg";
import kartasaccom1 from "../../public/kartasaccom1.jpg";
import kartasaccom2 from "../../public/kartasaccom2.jpg";
import kartasaccom3 from "../../public/kartasaccom3.jpg";
import kartasaccom4 from "../../public/kartasaccom4.jpg";
import kartasaccom5 from "../../public/kartasaccom5.jpg";
import kartasaccom6 from "../../public/kartasaccom6.jpg";
import kartasaccom7 from "../../public/kartasaccom7.jpg";
import kartasaccom8 from "../../public/kartasaccom8.jpg";
import kartasboat1 from "../../public/kartasboat1.jpg";
import kartasboat2 from "../../public/kartasboat2.jpg";
import kartasboat3 from "../../public/kartasboat3.jpg";
import kartasboat4 from "../../public/kartasboat4.jpg";

import { CiLocationOn } from "react-icons/ci";

import { FaWhatsapp } from "react-icons/fa";

export default function index() {
  return (
    <ActivitiesSection>
      <Analytics />
      <SpeedInsights />
      <ActivitiesHeaderContainer>
        <Header />
      </ActivitiesHeaderContainer>
      <ActivitiesParentContainer>
        <ToursContainer>
          <ActivitiesTitleContainer>
            <ActivitiesTitle>Experiences</ActivitiesTitle>
            <span>Travel at your own pace. In absolute comfort.</span>
          </ActivitiesTitleContainer>
          <ToursTitle>Guided Tours</ToursTitle>
          <ToursText>
            Explore Romania through private, fully customized tours, guided by experienced local professionals
          </ToursText>
          <OfferListContainer>
            Available Locations
            <li>• Bucharest. Capital of Romania</li>
            <li>• Brasov & Transylvania</li>
            <li>• Castles, palaces & cultural landmarks</li>
            <li>• Constanta, Black Sea & Dobrogea region</li>
            <li>• Veliko Trnova in Bulgaria</li>
          </OfferListContainer>
          <LocationsToursContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Bran+Castle/@45.5149022,25.3645888,17z/data=!3m1!4b1!4m6!3m5!1s0x40b347e5a415de31:0xcf922792d921ab7f!8m2!3d45.5149022!4d25.3671637!16zL20vMDJnbXk3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Bran Castle
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbran} alt="Transylvania's Castles" loading="eager" />
                  </LocationImageContainer>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbran2} alt="Dracula's Castle" />
                  </LocationImageContainer>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbran3} alt="Dracula Castle" />
                  </LocationImageContainer>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Bran Castle, often called Dracula’s Castle, is a medieval fortress in Romania perched on a rocky
                    hill near Brașov. Built in the 14th century, it is famous for its dramatic towers, narrow stairways,
                    and legends linked to{" "}
                    <a target="_blank" href="https://ro.wikipedia.org/wiki/Vlad_%C8%9Aepe%C8%99">
                      Vlad the Impaler
                    </a>
                    , the historical figure who inspired the Dracula myth.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Pele%C8%99+Castle/@45.3599816,25.5400674,17z/data=!3m1!4b1!4m6!3m5!1s0x40b316ecd2e0556d:0x9a6e63a594f3d5ad!8m2!3d45.3599816!4d25.5426423!16zL20vMDI2bXZk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Peles Castle
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartaspeles} alt="Peles Castle" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartaspeles3} alt="Romanian Castles" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartaspeles2} alt="Romania Royal Castle" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Peleș Castle is a stunning Neo-Renaissance palace in the Carpathian Mountains of Romania, near
                    Sinaia. Built in the late 19th century as a{" "}
                    <a target="_blank" href="https://ro.wikipedia.org/wiki/Familia_Regal%C4%83_a_Rom%C3%A2niei">
                      royal family
                    </a>{" "}
                    summer residence, it’s renowned for its elegant architecture, richly decorated interiors, and
                    advanced features that were ahead of their time.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Bra%C8%99ov/@45.6524485,25.514062,12z/data=!3m1!4b1!4m6!3m5!1s0x40b35b862aa214f1:0x6cf5f2ef54391e0f!8m2!3d45.6426802!4d25.5887252!16zL20vMGhqdGc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Brasov
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbrasov1} alt="Brasov city" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbrasov2} alt="Brasov, Romania" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbrasov3} alt="Brasov city" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Brașov is a charming city in central Romania, set at the foot of the Carpathian Mountains. Known for
                    its well-preserved medieval old town,{" "}
                    <a target="_blank" href="https://ro.wikipedia.org/wiki/Biserica_Neagr%C4%83">
                      Black Church
                    </a>
                    , and scenic surroundings, it blends rich Transylvanian history with a lively, modern atmosphere.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Bucharest/@44.4377073,25.9298289,11z/data=!3m1!4b1!4m6!3m5!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384!16zL20vMDk2Z20?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Bucharest - Capital City
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbuc} alt="Bucharest, Romania" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbuc2} alt="Bucharest" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasbuc3} alt="capital city of Romania" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Bucharest is Romania’s capital and largest city, known for its mix of historic charm and modern
                    energy. Often called the “Little Paris” of Eastern Europe, it features grand boulevards, the massive{" "}
                    <a target="_blank" href="https://ro.wikipedia.org/wiki/Palatul_Parlamentului">
                      Palace of Parliament
                    </a>
                    , and a vibrant cultural and nightlife scene.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Constan%C8%9Ba/@44.1809243,28.4651976,11z/data=!3m1!4b1!4m6!3m5!1s0x40bae54a64345229:0x637be1cd3e654850!8m2!3d44.1759147!4d28.6519359!16zL20vMDFuYzYy?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Constanta
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasct} alt="Constanta Romania" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasct2} alt="Black Sea" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasct3} alt="Constanta Mamaia" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Constanța is Romania’s oldest continuously inhabited city and its main port on the Black Sea. Known
                    for its seaside charm, ancient Roman roots, and landmarks like the{" "}
                    <a target="_blank" href="https://ro.wikipedia.org/wiki/Cazinoul_din_Constan%C8%9Ba">
                      Constanța Casino
                    </a>
                    , it blends history, culture, and coastal life.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Veliko+Tarnovo,+Bulgaria/@43.0840654,25.5919228,13z/data=!3m1!4b1!4m6!3m5!1s0x40a9214b3d9491dd:0x400a01269bf5dc0!8m2!3d43.0756739!4d25.6171514!16zL20vMDFiZ3Nj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Veliko Trnova, Bulgaria
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasveliko3} alt="Veliko Trnova" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasveliko} alt="Bulgaria" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasveliko4} alt="Tsarevets Fortress" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Veliko Tarnovo is a historic city in central Bulgaria, famed for its medieval heritage and dramatic
                    hilltop setting. Once the capital of the Second Bulgarian Empire, it’s best known for the{" "}
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Tsarevets_(fortress)">
                      Tsarevets Fortress
                    </a>{" "}
                    overlooking the Yantra River.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationTitle
                target="_blank"
                href="https://www.google.com/maps/place/Gala%C8%9Bi/@45.4376289,27.9650941,12z/data=!3m1!4b1!4m6!3m5!1s0x40b6dee589f2c4b5:0x53d7342f252d702b!8m2!3d45.4353208!4d28.0079945!16zL20vMDFtMHJi?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <CiLocationOn />
                Galati, Romania
              </LocationTitle>
              <LocationsParentContainer>
                <LocationCardContainer>
                  <LocationDoubleImagesContainer1>
                    <ImageChildContainer>
                      <Image src={kartasboat3} alt="Galati, Romania" loading="eager" />
                    </ImageChildContainer>
                    <ImageChildContainer>
                      <Image src={kartasboat2} alt="Galati, Romania" loading="eager" />
                    </ImageChildContainer>
                  </LocationDoubleImagesContainer1>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationImageContainer>
                    <Image src={kartasfaleza2} alt="Galati" loading="eager" />
                  </LocationImageContainer>
                  <span></span>
                </LocationCardContainer>
                <LocationCardContainer>
                  <LocationDoubleImagesContainer2>
                    <ImageChildContainer>
                      <Image src={kartasboat4} alt="Croaziere Dunare" loading="eager" />
                    </ImageChildContainer>
                    <ImageChildContainer>
                      <Image src={kartasboat1} alt="Croaziere Dunare" loading="eager" />
                    </ImageChildContainer>
                  </LocationDoubleImagesContainer2>
                  <span></span>
                </LocationCardContainer>
                <LocationDescriptionContainer>
                  <LocationDescriptionParagraph>
                    Galați is a historic port city in eastern Romania, located on the Danube River near the borders with
                    Moldova and Ukraine. The Danube offers scenic views from the{" "}
                    <a target="_blank" href="https://galaticityapp.ro/places/faleza-dunarii-5v3aavcoy-yozg">
                      embankment
                    </a>
                    , river cruises, transport routes, and a strong link between Galați and Europe.
                  </LocationDescriptionParagraph>
                </LocationDescriptionContainer>
              </LocationsParentContainer>
            </LocationContainer>
            <ToursOfferContainer>
              <p>
                At KARTAS, our private tours are designed for travelers who value comfort, culture and exclusivity. No
                groups. No fixed schedules. Just a perfectly curated experience — for you.
              </p>
              <OfferListContainer>
                <li>• Professional local guide</li>
                <li>• Flexible route & timing</li>
                <li>• Luxury transport available</li>
                <li>• Your own chauffeur for your comfort</li>
                <li>• Tailored storytelling, not scripted tours</li>
                <li>• Perfect for travelers seeking history & legends </li>
                <li>• No rush, no crowds, no wasteof time</li>
              </OfferListContainer>
            </ToursOfferContainer>
            <ToursGetInTouchContainer>
              <GetInTouchContainer>
                <GetInTouchTextContainer>
                  <p>
                    Interested<span>?</span>
                  </p>
                  <p>
                    Got questions<span>?</span>
                  </p>
                </GetInTouchTextContainer>
                <CallUsContainer>
                  <a href="tel:+40758579743">CALL US</a>
                </CallUsContainer>
                <WhatsappContainer>
                  <a href="https://wa.me/40758579743?text=Hello,%20Kartas%20Events!%20I'm%20ready%20for%20the%20best%20experience%20in%20Romania!%20">
                    <FaWhatsapp />
                    WHATSAPP
                  </a>
                </WhatsappContainer>
              </GetInTouchContainer>
            </ToursGetInTouchContainer>
          </LocationsToursContainer>
        </ToursContainer>
        <OtherActivitiesContainer>
          <OtherActivitiesParentContainer4>
            <AccommodationsTitleContainer>
              <h3>Accommodations</h3>
            </AccommodationsTitleContainer>
            <AccommodationsImagesContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom1} alt="bucharest penthouse" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom2} alt="bucharest private villa" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom3} alt="bucharest private party" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom4} alt="bucharest villa" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom5} alt="bucharest accomodation" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom6} alt="bucharest apartment for rent" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom7} alt="bucharest party penthouse" />
              </AccommodationsImageContainer>
              <AccommodationsImageContainer>
                <Image src={kartasaccom8} alt="romania private party" />
              </AccommodationsImageContainer>
            </AccommodationsImagesContainer>
            <VilaPartyTextContainer>
              <p>
                We offer exclusive villa and penthouse accommodations across Romania, designed for guests who value
                comfort, privacy, and refined living. Our villas provide generous space, private outdoor areas, and a
                relaxing atmosphere—ideal for a group of friends or family.
                <br />
                <span>Our offer includes:</span>
              </p>
              <OfferListContainer>
                <li>• Private villa/Penthouse</li>
                <li>• Birthday & anniversary celebrations</li>
                <li>• Family gatherings</li>
                <li>• Private & spacious villa that can accomodate your friends or family</li>
                <li>• We handle logistics & coordination</li>
                <li>• Your friends and family only</li>
              </OfferListContainer>
            </VilaPartyTextContainer>
          </OtherActivitiesParentContainer4>
          <GetInTouchContainer>
            <GetInTouchTextContainer>
              <p>
                Interested<span>?</span>
              </p>
              <p>
                Got questions<span>?</span>
              </p>
            </GetInTouchTextContainer>
            <CallUsContainer>
              <a href="tel:+40758579743">CALL US</a>
            </CallUsContainer>
            <WhatsappContainer>
              <a href="">
                <FaWhatsapp />
                WHATSAPP
              </a>
            </WhatsappContainer>
          </GetInTouchContainer>
        </OtherActivitiesContainer>
      </ActivitiesParentContainer>
      <ActivitiesContactContainer>
        <Contact />
      </ActivitiesContactContainer>
    </ActivitiesSection>
  );
}
