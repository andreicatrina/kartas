import Image from "next/image";

import {
  HomeContainer,
  HomeSection,
  LandingContainer,
  LandingParentContainer,
  LandingSpan,
  LandingSpanContainer,
  LandingTitle,
  LandingTitleContainer,
} from "./components.jsx";

import Header from "../components/header";

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <Header />
      </HomeContainer>
      <LandingParentContainer>
        <LandingContainer>
          <LandingTitleContainer>
            <LandingTitle>Kartas Bucharest Events</LandingTitle>
          </LandingTitleContainer>
          <LandingSpanContainer>
            <LandingSpan>TEXT SPAN</LandingSpan>
          </LandingSpanContainer>
        </LandingContainer>
      </LandingParentContainer>
    </HomeSection>
  );
}
