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

  @media all and (max-width: 850px) {
    padding: 0px 20px 60px;
    gap: 24px;
  }
`;

export const AboutSubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Subtitle = styled.span`
  font-family: "Roboto";
  width: 100%;
  max-width: 600px;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto";
  line-height: 24px;
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
  margin: 10px 0;
  color: #dfad6a;

  @media all and (max-width: 850px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const AboutCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 12px;
  justify-items: center;

  @media all and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 550px) {
    column-gap: 8px;
    row-gap: 8px;
  }

  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutCard1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  width: 100%;
  max-width: 360px;
  height: 220px;
  border: 1px solid #c7b198;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    cursor: pointer;
  }

  span {
    color: #fff;
  }
`;

export const AboutCard2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  width: 100%;
  height: 220px;
  max-width: 360px;
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
    cursor: pointer;
  }
`;

export const AirportTransferTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: #dfad6a;
    font-family: "Roboto";

    @media all and (max-width: 850px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #dfad6a;

    @media all and(max-width:850px) {
      font-size: 16px;
    }
  }
`;

export const OfferListContainer = styled.ul`
  padding: 12px 0;

  li {
    color: #fff;
    font-family: "Roboto";
    font-size: 16px;
  }
`;
