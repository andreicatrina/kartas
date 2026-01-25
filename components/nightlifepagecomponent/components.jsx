import styled from "styled-components";

export const NightlifeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #fff;
`;

export const NightlifeHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  background-color: #0a0a0a;
  border-bottom: 1px solid #dfad6a;

  @media all and (max-width: 850px) {
    padding: 16px 20px;
  }
`;

export const NightLifeContactContainer = styled.div`
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
    padding: 30px 20px;
  }
`;

export const NightlifeParentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 24px;

  @media all and (max-width: 1000px) {
    padding: 40px 20px;
  }
`;

export const NightlifeTitle = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 60px;
  font-family: "Neonderthaw";
  text-align: center;
  color: #dfad6a;

  @media all and (max-width: 1000px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const NightlifeTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const NightlifeText = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media all and (max-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const NIghtlifeOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  @media all and (max-width: 500px) {
    align-items: center;
  }
`;

export const OtherActivitiesParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  /* width: 100%; */
  margin: 0 auto;
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

export const OtherActivitiesImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
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

export const OtherActivitiesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
      font-size: 24px;
    }

    @media all and (max-width: 850px) {
      font-size: 20px;
    }
  }
`;

export const OtherActivitiesParentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  /* width: 100%; */
  margin: 0 auto;
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
  max-width: 360px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(4px);
    transition: 1.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      filter: none;
    }
  }
`;

export const PoolPartiesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  p {
    width: 100%;
    max-width: 1000px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    span {
      width: 100%;
      max-width: 1000px;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      padding: 12px 0;
      font-family: "Roboto";
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-color: #dfad6a;
    }
  }

  @media all and (max-width: 1200px) {
    align-items: center;
  }
`;

export const OfferListContainer = styled.ul`
  color: #fff;
  font-family: "Roboto";
  font-size: 16px;
  padding: 12px 0;

  li {
    color: #fff;
    font-family: "Roboto";
    font-size: 16px;
  }
`;

export const OtherActivitiesParentContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  /* width: 100%; */
  margin: 0 auto;
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

export const VilaPartyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  p {
    width: 100%;
    max-width: 1000px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    span {
      width: 100%;
      max-width: 1000px;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      padding: 12px 0;
      font-family: "Roboto";
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-color: #dfad6a;
    }
  }

  @media all and (max-width: 1200px) {
    align-items: center;
  }
`;

export const VilaPartyImageContainer = styled.div`
  width: 100%;
  max-width: 360px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      filter: none;
    }
  }
`;

export const VIPPackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const VIPTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const VIPSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
  font-size: 18px;

  @media all and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const PackagesParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
  gap: 40px;

  @media all and (max-width: 950px) {
    gap: 20px;
  }

  @media all and (max-width: 930px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const PackageFirstChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  cursor: pointer;
  transition: 1.6s;

  &:hover {
    border: 1px solid #0a0a0a;
    -webkit-box-shadow: -1px 0.5px 16.5px -0.5px #c0c0c0;
    -moz-box-shadow: -1px 0.5px 16.5px -0.5px #c0c0c0;
    box-shadow: -1px 0.5px 16.5px -0.5px #c0c0c0;
    transform: scale(1.1);
  }
`;

export const FirstChildDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 0;
  h3 {
    margin-bottom: 12px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #c0c0c0;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #c0c0c0;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
  }

  @media all and (max-width: 750px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const FirstChildImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 420px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const PackageSecondChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  border: 1px solid #dfad6a;
  border-radius: 10px;
  cursor: pointer;
  transition: 1.6s;

  &:hover {
    border: 1px solid #0a0a0a;
    -webkit-box-shadow: 0 0.5px 16.5px -0.5px #dfad6a;
    -moz-box-shadow: 0 0.5px 16.5px -0.5px #dfad6a;
    box-shadow: 0 0.5px 16.5px -0.5px #dfad6a;
    transform: scale(1.1);
  }
`;

export const SecondChildDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 0;
  h3 {
    margin-bottom: 12px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #dfad6a;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #dfad6a;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
  }

  @media all and (max-width: 750px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const SecondChildImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 420px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
