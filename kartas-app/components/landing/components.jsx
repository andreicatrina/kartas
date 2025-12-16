import { styled } from "styled-components";

export const LandingParentContainer = styled.div`
  width: 100%;
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px 24px;
`;

export const LandingTitleContainer = styled.div`
  width: 100%;
`;

export const LandingTitle = styled.h1`
  font-family: "Neonderthaw", cursive;
  font-size: 64px;
  font-weight: 400;
  line-height: 80px;
  color: #dfad6a;
  text-align: center;
`;

export const LandingSpanContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

export const LandingSpan = styled.span`
  color: #fff;
  margin: 40px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
`;
