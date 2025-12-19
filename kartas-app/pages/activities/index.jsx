import React from "react";
import {
  ActivitiesContactContainer,
  ActivitiesHeaderContainer,
  ActivitiesSection,
} from "../../components/activitiespagecomponents/component";
import Header from "../../components/header/index";
import Contact from "../../components/contact/contact";

export default function index() {
  return (
    <ActivitiesSection>
      <ActivitiesHeaderContainer>
        <Header />
      </ActivitiesHeaderContainer>
      <ActivitiesContactContainer>
        <Contact />
      </ActivitiesContactContainer>
    </ActivitiesSection>
  );
}
