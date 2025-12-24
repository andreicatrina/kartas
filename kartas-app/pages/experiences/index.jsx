import React from "react";
import {
  ActivitiesContactContainer,
  ActivitiesHeaderContainer,
  ActivitiesParentContainer,
  ActivitiesSection,
  ActivitiesTitle,
  ActivitiesTitleContainer,
  CallUsContainer,
  ClubPartiesTextContainer,
  GetInTouchContainer,
  GetInTouchTextContainer,
  LocationCardContainer,
  LocationContainer,
  LocationDescriptionContainer,
  LocationDescriptionParagraph,
  LocationImageContainer,
  LocationTitle,
  LocationsToursContainer,
  OtherActivitiesChildContainer1,
  OtherActivitiesChildContainer2,
  OtherActivitiesContainer,
  OtherActivitiesImageContainer,
  OtherActivitiesParentContainer,
  OtherActivitiesParentContainer2,
  OtherActivitiesParentContainer3,
  OtherActivitiesSubtitle,
  OtherActivitiesTitleContainer,
  PoolPartiesTextContainer,
  PoolPartyImageContainer,
  PoolPartyImagesContainer,
  PoolPartyTitleContainer,
  ToursContainer,
  ToursGetInTouchContainer,
  ToursText,
  ToursTitle,
  VilaPartyImageContainer,
  VilaPartyImagesContainer,
  VilaPartyTextContainer,
  VilaPartyTitleContainer,
  WhatsappContainer,
} from "../../components/activitiespagecomponents/component";

import Header from "../../components/header/index";
import Contact from "../../components/contact/contact";

import Image from "next/image";
import kartasbran from "../../public/kartas-bran.jpg";
import kartaspartytest from "../../public/kartaspartytest.jpg";
import kartaspartytest2 from "../../public/kartaspartytest2.jpeg";
import kartaspartytest3 from "../../public/kartaspartytest3.jpg";

import { CiLocationOn } from "react-icons/ci";
import { BiParty } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function index() {
  return (
    <ActivitiesSection>
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
          <ToursText>Discover Romania through private guided tours, led by professional local experts</ToursText>
          <LocationsToursContainer>
            <LocationContainer>
              <LocationCardContainer>
                <LocationTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Bran+Castle/@45.5149022,25.3645888,17z/data=!3m1!4b1!4m6!3m5!1s0x40b347e5a415de31:0xcf922792d921ab7f!8m2!3d45.5149022!4d25.3671637!16zL20vMDJnbXk3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Bran Castle
                </LocationTitle>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Transylvania's Castles" loading="eager" />
                </LocationImageContainer>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Dracula's Castle" loading="eager" />
                </LocationImageContainer>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Dracula's Castle" loading="eager" />
                </LocationImageContainer>
              </LocationCardContainer>
              <LocationDescriptionContainer>
                <LocationDescriptionParagraph>
                  Bran Castle, often called Dracula’s Castle, is a medieval fortress in Romania perched on a rocky hill
                  near Brașov. Built in the 14th century, it is famous for its dramatic towers, narrow stairways, and
                  legends linked to{" "}
                  <a target="_blank" href="https://ro.wikipedia.org/wiki/Vlad_%C8%9Aepe%C8%99">
                    Vlad the Impaler
                  </a>
                  , the historical figure who inspired the Dracula myth.
                </LocationDescriptionParagraph>
              </LocationDescriptionContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationCardContainer>
                <LocationTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Pele%C8%99+Castle/@45.3599816,25.5400674,17z/data=!3m1!4b1!4m6!3m5!1s0x40b316ecd2e0556d:0x9a6e63a594f3d5ad!8m2!3d45.3599816!4d25.5426423!16zL20vMDI2bXZk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Peles Castle
                </LocationTitle>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Peles Castle" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Romanian Castles" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Romania Royal Castle" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationDescriptionContainer>
                <LocationDescriptionParagraph>
                  Peleș Castle is a stunning Neo-Renaissance palace in the Carpathian Mountains of Romania, near Sinaia.
                  Built in the late 19th century as a{" "}
                  <a target="_blank" href="https://ro.wikipedia.org/wiki/Familia_Regal%C4%83_a_Rom%C3%A2niei">
                    royal family
                  </a>{" "}
                  summer residence, it’s renowned for its elegant architecture, richly decorated interiors, and advanced
                  features that were ahead of their time.
                </LocationDescriptionParagraph>
              </LocationDescriptionContainer>
            </LocationContainer>
            <LocationContainer>
              <LocationCardContainer>
                <LocationTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Bra%C8%99ov/@45.6524485,25.514062,12z/data=!3m1!4b1!4m6!3m5!1s0x40b35b862aa214f1:0x6cf5f2ef54391e0f!8m2!3d45.6426802!4d25.5887252!16zL20vMGhqdGc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Brasov
                </LocationTitle>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Brasov city" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Brasov, Romania" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Brasov city" loading="eager" />
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
            </LocationContainer>
            <LocationContainer>
              <LocationCardContainer>
                <LocationTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Bucharest/@44.4377073,25.9298289,11z/data=!3m1!4b1!4m6!3m5!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384!16zL20vMDk2Z20?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Bucharest - Capital City
                </LocationTitle>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Bucharest, Romania" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Bucharest" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="capital city of Romania" loading="eager" />
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
            </LocationContainer>
            <LocationContainer>
              <LocationCardContainer>
                <LocationTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Constan%C8%9Ba/@44.1809243,28.4651976,11z/data=!3m1!4b1!4m6!3m5!1s0x40bae54a64345229:0x637be1cd3e654850!8m2!3d44.1759147!4d28.6519359!16zL20vMDFuYzYy?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Constanta
                </LocationTitle>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Constanta Romania" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Black Sea" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Constanta Mamaia" loading="eager" />
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
            </LocationContainer>
            <LocationContainer>
              <LocationCardContainer>
                <LocationTitle
                  target="_blank"
                  href="https://www.google.com/maps/place/Veliko+Tarnovo,+Bulgaria/@43.0840654,25.5919228,13z/data=!3m1!4b1!4m6!3m5!1s0x40a9214b3d9491dd:0x400a01269bf5dc0!8m2!3d43.0756739!4d25.6171514!16zL20vMDFiZ3Nj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <CiLocationOn />
                  Veliko Trnova, Bulgaria
                </LocationTitle>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Veliko Trnova" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Bulgaria" loading="eager" />
                </LocationImageContainer>
                <span></span>
              </LocationCardContainer>
              <LocationCardContainer>
                <LocationImageContainer>
                  <Image src={kartasbran} alt="Tsarevets Fortress" loading="eager" />
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
            </LocationContainer>
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
                  <a href="tel:+40712345678">CALL US</a>
                </CallUsContainer>
                <WhatsappContainer>
                  <a href="">
                    <FaWhatsapp />
                    WHATSAPP
                  </a>
                </WhatsappContainer>
              </GetInTouchContainer>
            </ToursGetInTouchContainer>
          </LocationsToursContainer>
        </ToursContainer>
        <OtherActivitiesContainer>
          <OtherActivitiesTitleContainer>
            <h3>Other Activities</h3>
            <OtherActivitiesSubtitle>Bucharest Club Parties</OtherActivitiesSubtitle>
          </OtherActivitiesTitleContainer>
          <OtherActivitiesParentContainer>
            <OtherActivitiesChildContainer1>
              <OtherActivitiesImageContainer>
                <Image src={kartaspartytest2} alt="romanian clubs" />
              </OtherActivitiesImageContainer>
              <OtherActivitiesImageContainer>
                <Image src={kartaspartytest2} alt="romania parties" />
              </OtherActivitiesImageContainer>
              <OtherActivitiesImageContainer>
                <Image src={kartaspartytest2} alt="bucharest parties" />
              </OtherActivitiesImageContainer>
              <OtherActivitiesImageContainer>
                <Image src={kartaspartytest2} alt="bucharest clubs" />
              </OtherActivitiesImageContainer>
            </OtherActivitiesChildContainer1>
            <ClubPartiesTextContainer>
              <span>
                Bucharest’s club parties are known for their high energy, late-night intensity, and eclectic mix of
                styles, making the city one of Eastern Europe’s most exciting nightlife hubs. From sleek, upscale clubs
                in the city center to underground venues tucked into old industrial spaces, the scene caters to
                everything from mainstream hits to techno, house, and experimental electronic music.
              </span>
            </ClubPartiesTextContainer>
          </OtherActivitiesParentContainer>
          <OtherActivitiesParentContainer2>
            <PoolPartyTitleContainer>
              <h3>Bucharest Pool Parties</h3>
            </PoolPartyTitleContainer>
            <PoolPartyImagesContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspartytest3} alt="pool party Romania" />
              </PoolPartyImageContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspartytest3} alt="bucharest pool party" />
              </PoolPartyImageContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspartytest3} alt="bucharest party" />
              </PoolPartyImageContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspartytest3} alt="vip parties" />
              </PoolPartyImageContainer>
            </PoolPartyImagesContainer>
            <PoolPartiesTextContainer>
              <span>
                Bucharest pool parties bring a vibrant, sun-soaked twist to the city’s nightlife, especially during the
                summer months when rooftops, hotels, and private venues transform into lively daytime-to-night events.
                Known for stylish crowds, upbeat DJ sets, and a relaxed yet glamorous atmosphere
              </span>
            </PoolPartiesTextContainer>
          </OtherActivitiesParentContainer2>
          <OtherActivitiesParentContainer3>
            <VilaPartyTitleContainer>
              <BiParty />
              <h3>Villa/Penthouse Private Party</h3>
              <BiParty />
            </VilaPartyTitleContainer>
            <VilaPartyImagesContainer>
              <VilaPartyImageContainer>
                <Image src={kartaspartytest} alt="romania private party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartaspartytest} alt="romania private party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartaspartytest} alt="romania private party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartaspartytest} alt="romania private party" />
              </VilaPartyImageContainer>
            </VilaPartyImagesContainer>
            <VilaPartyTextContainer>
              <span>
                Private villa parties in Romania are known for their exclusivity, freedom, and high-energy atmosphere,
                often set in scenic countryside locations or luxury properties near major cities. These gatherings blend
                music, privacy, and style, featuring DJ-led soundtracks, open-air spaces, pools, and long nights that
                feel detached from everyday life.
              </span>
            </VilaPartyTextContainer>
          </OtherActivitiesParentContainer3>
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
              <a href="tel:+40712345678">CALL US</a>
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
