import Image from "next/image";

import { HomeContainer, HomeSection } from "./components.jsx";

import Header from "../components/header";

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <Header />
        <div></div>
      </HomeContainer>
    </HomeSection>
  );
}
