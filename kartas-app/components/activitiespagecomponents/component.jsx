import styled from "styled-components";

export const ActivitiesSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
`;

export const ActivitiesHeaderContainer = styled.div`
  width: 100%;
  padding: 30px 20px;
  border-top: 1px solid #dfad6a;
  border-bottom: 1px solid #dfad6a;
`;

export const ActivitiesParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 24px;

  @media all and (max-width: 1000px) {
    padding: 40px 20px;
  }
`;

export const ActivitiesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  span {
    padding: 40px 0;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
  }
`;

export const ActivitiesTitle = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 60px;
  font-family: "Neonderthaw";
  /* text-align: center; */
  color: #dfad6a;
`;

export const ToursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 40px;

  @media all and (max-width: 1200px) {
    align-items: center;
  }
`;

export const ToursTitle = styled.h3`
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 24px;
  }

  @media all and (max-width: 850px) {
    font-size: 20px;
  }
`;

export const ToursText = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #dfad6a;

  @media all and (max-width: 1000px) {
    font-size: 16px;
  }

  @media all and (max-width: 850px) {
    font-size: 14px;
  }
`;

export const LocationsToursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;

  @media all and (max-width: 850px) {
    gap: 12px;
  }
`;

export const LocationCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1000px) {
    order: 4;
  }
`;

export const LocationTitle = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 28px;
  color: #dfad6a;
  font-family: "Roboto";
  margin-bottom: 20px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;

    @media all and (max-width: 850px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1000px) {
    font-size: 24px;
  }

  @media all and (max-width: 850px) {
    font-size: 20px;
    margin: 0;
  }
`;

export const LocationsParentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 12px;

  @media all and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 555px) {
    column-gap: 8px;
  }
`;

export const LocationImageContainer = styled.div`
  width: 100%;
  max-width: 340px;
  height: 280px;
  border-radius: 8px;
  transition: 1.2s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    transition: 2.4s;
  }

  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 2px 0.5px 32px -4.5px rgba(222, 172, 106, 0.53);
    -moz-box-shadow: 2px 0.5px 32px -4.5px rgba(222, 172, 106, 0.53);
    box-shadow: 2px 0.5px 32px -4.5px rgba(222, 172, 106, 0.53);
  }

  @media all and (max-width: 555px) {
    max-width: 280px;
    height: 200px;
  }
`;

export const LocationDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 280px;

  @media all and (max-width: 1000px) {
    order: 2;
  }
`;

export const LocationDescriptionParagraph = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-family: "Roboto";

  a {
    color: #fff;
    font-size: 18px;
    line-height: 24px;
    font-family: "Roboto";
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #dfad6a;

    svg {
      height: 18px;
      width: 18px;
      color: #fff;
    }

    @media all and (max-width: 555px) {
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media all and (max-width: 555px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ToursGetInTouchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const OtherActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border-top: 2px solid #c7b198;
`;

export const OtherActivitiesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 28px;
    color: #dfad6a;
    margin-bottom: 20px;
    font-family: "Roboto";

    @media all and (max-width: 1000px) {
      font-size: 24px;
    }

    @media all and (max-width: 850px) {
      font-size: 20px;
    }
  }
`;

export const OtherActivitiesSubtitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
  text-decoration: underline overline;
  text-underline-offset: 5px;
  text-decoration-color: #dfad6a;

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const OtherActivitiesParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  /* width: 100%; */
`;

export const OtherActivitiesChildContainer1 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media all and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ClubPartiesTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    width: 100%;
    max-width: 1000px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
  }
`;

export const PoolPartiesTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    width: 100%;
    max-width: 1000px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
  }
`;

export const OtherActivitiesImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* filter: blur(4px); */
    transition: 1.2s;

    &:hover {
      transform: scale(1.1);
      /* filter: none; */
    }
  }
`;

export const OtherActivitiesParentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const PoolPartyTitleContainer = styled.div`
  h3 {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    text-decoration: underline overline;
    text-underline-offset: 5px;
    text-decoration-color: #dfad6a;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }
  }
`;

export const PoolPartyImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media all and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PoolPartyImageContainer = styled.div`
  width: 100%;
  max-width: 320px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(4px);
    transition: 1.2s;

    &:hover {
      transform: scale(1.1);
      filter: none;
    }
  }
`;

export const OtherActivitiesParentContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const VilaPartyTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }

  h3 {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    text-decoration: underline overline;
    text-underline-offset: 5px;
    text-decoration-color: #dfad6a;
    text-shadow: 0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e;
    animation: glow 1.5s infinite alternate;

    @keyframes glow {
      0% {
        text-shadow: 0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e;
      }
      100% {
        text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff, 0 0 160px #00d4ff;
      }
    }

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }
  }
`;

export const VilaPartyImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media all and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const VilaPartyImageContainer = styled.div`
  width: 100%;
  max-width: 320px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: 1.2s;

    &:hover {
      transform: scale(1.1);
      filter: none;
    }
  }
`;

export const VilaPartyTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    width: 100%;
    max-width: 1000px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    /* font-size: 4rem; */
    /* color: #fff; */
  }
`;

export const GetInTouchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 12px;
  margin-top: 40px;
  border: 1px solid #c7b198;
  border-radius: 8px;

  @media all and (max-width: 1000px) {
    padding: 6px;
  }
`;

export const GetInTouchTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-family: "Cormorant SC", serif;
    color: #dfad6a;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;

    @media all and (max-width: 1000px) {
      font-size: 16px;
      line-height: 20px;
    }

    span {
      font-family: "Cormorant SC", serif;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;

      @media all and (max-width: 1000px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;

export const CallUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: "Cormorant SC", serif;
    color: #0a0a0a;
    font-size: 16px;
    font-weight: 500;
    background-color: #f9f6f7;
    padding: 6px;
    border: 1px solid #c7b198;
    border-radius: 4px;
    transition: 0.6s;

    @media all and (max-width: 1000px) {
      padding: 4px;
    }

    &:hover {
      color: #dfad6a;
      background-color: #0a0a0a;
    }

    @media all and (max-width: 1000px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const WhatsappContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    gap: 2px;
    font-family: "Cormorant SC", serif;
    color: #0a0a0a;
    font-size: 16px;
    font-weight: 500;
    background-color: #f9f6f7;
    padding: 6px;
    border: 1px solid #c7b198;
    border-radius: 4px;
    transition: 0.6s;

    @media all and (max-width: 1000px) {
      padding: 4px;
    }

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      color: #dfad6a;
      background-color: #0a0a0a;
    }

    @media all and (max-width: 1000px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const ActivitiesContactContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
  background-color: #0a0a0a;
  border-top: 1px solid #dfad6a;

  @media all and (max-width: 1000px) {
    padding: 40px 20px;
  }
`;
