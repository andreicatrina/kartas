import {
  ContactParentContainer,
  ServicesHeaderContainer,
  ServicesSection,
} from "../../components/servicespagecomponent/components";

import Header from "../../components/header/";
import Contact from "../../components/contact/contact";

export default function ServicesPage() {
  return (
    <ServicesSection>
      <ServicesHeaderContainer>
        <Header />
      </ServicesHeaderContainer>
      <ContactParentContainer>
        <Contact />
      </ContactParentContainer>
    </ServicesSection>
  );
}
