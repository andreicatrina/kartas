import React from "react";

import Image from "next/image";

import {
  ClubPartiesTextContainer,
  FirstChildDetailsContainer,
  FirstChildImageContainer,
  NIghtlifeOfferContainer,
  NightLifeContactContainer,
  NightlifeHeaderContainer,
  NightlifeParentContainer,
  NightlifeSection,
  NightlifeText,
  NightlifeTextContainer,
  NightlifeTitle,
  OfferListContainer,
  OtherActivitiesChildContainer1,
  OtherActivitiesImageContainer,
  OtherActivitiesParentContainer,
  OtherActivitiesParentContainer2,
  OtherActivitiesParentContainer3,
  OtherActivitiesTitleContainer,
  PackageFirstChildContainer,
  PackageSecondChildContainer,
  PackagesParentContainer,
  PoolPartiesTextContainer,
  PoolPartyImageContainer,
  PoolPartyImagesContainer,
  PoolPartyTitleContainer,
  SecondChildDetailsContainer,
  SecondChildImageContainer,
  VIPPackContainer,
  VIPSpan,
  VIPTitle,
  VilaPartyImageContainer,
  VilaPartyImagesContainer,
  VilaPartyTextContainer,
  VilaPartyTitleContainer,
} from "../../components/nightlifepagecomponent/components";

import Contact from "../../components/contact/contact";
import Header from "../../components/header";

// import kartaspartytest from "../../public/kartaspartytest.jpg";
import kartaspartytest2 from "../../public/kartaspartytest2.jpeg";
import kartasparty3 from "../../public/kartasparty3.jpg";
import kartasparty4 from "../../public/kartasparty4.jpg";
import kartasparty5 from "../../public/kartasparty5.jpg";

import kartasparty8 from "../../public/kartasparty8.jpg";
import kartasparty9 from "../../public/kartasparty9.jpg";
import kartasparty10 from "../../public/kartasparty10.jpg";
import kartasparty11 from "../../public/kartasparty11.jpg";
import kartasparty12 from "../../public/kartasparty12.jpg";
import kartasparty13 from "../../public/kartasparty13.jpg";
import kartasparty14 from "../../public/kartasparty14.jpg";
import kartasparty15 from "../../public/kartasparty15.jpg";

import kartaspool1 from "../../public/kartaspool1.jpg";
import kartaspool2 from "../../public/kartaspool2.jpg";
import kartaspool3 from "../../public/kartaspool3.jpg";
import kartaspool4 from "../../public/kartaspool4.jpg";
import kartaspool8 from "../../public/kartaspool8.jpg";
import kartaspool9 from "../../public/kartaspool9.jpg";

import { BiParty } from "react-icons/bi";
import { RiVipCrown2Fill } from "react-icons/ri";

export default function NightlifePage() {
  return (
    <NightlifeSection>
      <NightlifeHeaderContainer>
        <Header />
      </NightlifeHeaderContainer>
      <NightlifeParentContainer>
        <NightlifeTitle>Nightlife</NightlifeTitle>
        <NightlifeTextContainer>
          <NightlifeText>
            When the sun sets, Bucharest turns up the volume — vibrant nights, endless energy.
          </NightlifeText>
        </NightlifeTextContainer>
        <NIghtlifeOfferContainer>
          <OtherActivitiesParentContainer>
            <OtherActivitiesTitleContainer>
              <h3>Bucharest Clubs</h3>
            </OtherActivitiesTitleContainer>
            <OtherActivitiesChildContainer1>
              <OtherActivitiesImageContainer>
                <Image src={kartaspartytest2} alt="romanian clubs" loading="eager" />
              </OtherActivitiesImageContainer>
              <OtherActivitiesImageContainer>
                <Image src={kartasparty3} alt="romania parties" loading="eager" />
              </OtherActivitiesImageContainer>
              <OtherActivitiesImageContainer>
                <Image src={kartasparty4} alt="bucharest parties" loading="eager" />
              </OtherActivitiesImageContainer>
              <OtherActivitiesImageContainer>
                <Image src={kartasparty5} alt="bucharest clubs" loading="eager" />
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
                <Image src={kartaspool1} alt="pool party Romania" />
              </PoolPartyImageContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspool2} alt="bucharest pool party" />
              </PoolPartyImageContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspool3} alt="bucharest party" />
              </PoolPartyImageContainer>
              <PoolPartyImageContainer>
                <Image src={kartaspool4} alt="vip parties" />
              </PoolPartyImageContainer>
            </PoolPartyImagesContainer>
            <PoolPartiesTextContainer>
              <p>
                Bucharest pool parties bring a vibrant, sun-soaked twist to the city’s nightlife, especially during the
                summer months when rooftops, hotels, and private venues transform into lively daytime-to-night events.
                Known for stylish crowds, upbeat DJ sets, and a relaxed yet glamorous atmosphere
                <br />
                <span>Our offer includes:</span>
              </p>
              <OfferListContainer>
                <li>• Pool parties in private locations</li>
                <li>• Birthday & anniversary celebrations</li>
                <li>• Bachelor & Bachelorette Parties</li>
                <li>• Invitation-only private gatherings</li>
                <li>• Your own personal DJ</li>
                <li>• We handle logistics & coordination</li>
                <li>• No crowds. No wait list. No compromises.</li>
                <li>• Just your group — done right.</li>
              </OfferListContainer>
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
                <Image src={kartasparty8} alt="romania vip party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty9} alt="VIP party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty10} alt="romania private party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty11} alt="romania party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty12} alt="Bucharest penthouse party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty13} alt="romania pool party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty14} alt="Bucharest pool party" />
              </VilaPartyImageContainer>
              <VilaPartyImageContainer>
                <Image src={kartasparty15} alt="Bucharest private party" />
              </VilaPartyImageContainer>
            </VilaPartyImagesContainer>
            <VilaPartyTextContainer>
              <p>
                Private villa parties in Romania are known for their exclusivity, freedom, and high-energy atmosphere,
                often set in scenic countryside locations or luxury properties near major cities. These gatherings blend
                music, privacy, and style, featuring DJ-led soundtracks, open-air spaces, pools, and long nights that
                feel detached from everyday life.
                <br />
                <span>Our offer includes:</span>
              </p>
              <OfferListContainer>
                <li>• Private villa & pool parties</li>
                <li>• Birthday & anniversary celebrations</li>
                <li>• Invitation-only private gatherings</li>
                <li>• Bachelor & Bachelorette Parties</li>
                <li>• Private & spacious villa that can accomodate everyone</li>
                <li>• We handle logistics & coordination</li>
                <li>• No crowds. No wait list. No compromises.</li>
                <li>• Just your group — done right.</li>
              </OfferListContainer>
            </VilaPartyTextContainer>
          </OtherActivitiesParentContainer3>
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
        </NIghtlifeOfferContainer>
      </NightlifeParentContainer>
      <NightLifeContactContainer>
        <Contact />
      </NightLifeContactContainer>
    </NightlifeSection>
  );
}
