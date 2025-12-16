import Image from "next/image";

import { HomeContainer, HomeSection } from "../components/homepagecomponent/components.jsx";

import Header from "../components/header";
import Landing from "../components/landing";

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <Header />
      </HomeContainer>
      <Landing />
    </HomeSection>
  );
}
