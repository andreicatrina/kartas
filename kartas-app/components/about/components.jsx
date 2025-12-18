import { styled } from "styled-components";

export const AboutParentContainer = styled.div`
  width: 100%;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 24px 80px;
`;

export const AboutSubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Subtitle = styled.span`
  width: 100%;
  max-width: 600px;

  color: #fff;
`;

export const AboutTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AboutTitle = styled.h2`
  font-size: 48px;
  line-height: 56px;
  font-family: "Neonderthaw";
  margin: 20px 0;
  color: #dfad6a;
`;

export const AboutCardsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AboutCard1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  width: 100%;
  max-width: 380px;
  border: 1px solid #c7b198;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    min-height: 280px;
    object-fit: cover;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  span {
    color: #fff;
  }
`;

export const AboutCard2 = styled.div``;
