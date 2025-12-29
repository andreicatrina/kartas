import Image from "next/image";

import {
  ContactParentContainer,
  HomeContainer,
  HomeSection,
  LandingBackgroundContainer,
  LandingImageContainer,
  LandingYoutubeContainer,
} from "../components/homepagecomponent/components.jsx";

import Header from "../components/header";
import Contact from "../components/contact/contact.jsx";
import About from "../components/about/about.jsx";

import { FaYoutube } from "react-icons/fa6";

import kartas13 from "../public/kartas13.jpeg";

import {
  LandingContainer,
  LandingParentContainer,
  LandingSpan,
  LandingSpanContainer,
  LandingTitle,
  LandingTitleContainer,
} from "../components/homepagecomponent/components.jsx";

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <Header />
      </HomeContainer>
      <LandingParentContainer>
        <LandingContainer>
          <LandingBackgroundContainer>
            <LandingImageContainer>
              <Image alt="karta" src={kartas13} layout="fill" loading="eager" />
            </LandingImageContainer>
          </LandingBackgroundContainer>
          <LandingTitleContainer>
            <LandingTitle>Kartas Bucharest Events</LandingTitle>
          </LandingTitleContainer>
          <LandingSpanContainer>
            <LandingSpan>
              Kartas Events is a premium platform designed to deliver unforgettable private experiences across Romania
              and beyond. We offer seamless reservations for private tours, luxury airport transfers with high-end
              vehicles, exclusive boat tours, private pool parties, and access to top clubs and events. Kartas Events
              specializes in curated tours in iconic destinations such as Bucharest, Brașov, Constanța, the Black Sea
              coast, and the legendary castles of Transylvania. Kartas Events combines comfort, discretion, and local
              expertise to create tailored, high-quality experiences for every occasion.
            </LandingSpan>
          </LandingSpanContainer>
          <LandingYoutubeContainer>
            <a target="_blank" href="https://youtube.com">
              <FaYoutube />
              Take a look
            </a>
          </LandingYoutubeContainer>
        </LandingContainer>
      </LandingParentContainer>
      <About />
      <ContactParentContainer>
        <Contact />
      </ContactParentContainer>
    </HomeSection>
  );
}
