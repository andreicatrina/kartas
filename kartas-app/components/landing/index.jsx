import React from "react";
import {
  LandingContainer,
  LandingParentContainer,
  LandingSpan,
  LandingSpanContainer,
  LandingTitle,
  LandingTitleContainer,
} from "./components.jsx";

export default function Landing() {
  return (
    <LandingParentContainer>
      <LandingContainer>
        <LandingTitleContainer>
          <LandingTitle>Kartas Bucharest Events</LandingTitle>
        </LandingTitleContainer>
        <LandingSpanContainer>
          <LandingSpan>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem saepe quaerat debitis fuga. Accusamus
            reiciendis minus obcaecati illo commodi, atque illum, dolores et delectus aperiam non inventore ipsam beatae
            iusto recusandae magnam est amet repellendus numquam odio quod temporibus ullam exercitationem blanditiis.
            Autem obcaecati facilis nulla non necessitatibus, culpa commodi nam incidunt consequuntur neque illum quasi
            itaque voluptate! Molestias labore, iure fugit minus, sint tenetur vitae laudantium dolore autem totam
            tempora accusamus excepturi nostrum culpa veritatis eum atque consequuntur.
          </LandingSpan>
        </LandingSpanContainer>
      </LandingContainer>
    </LandingParentContainer>
  );
}
