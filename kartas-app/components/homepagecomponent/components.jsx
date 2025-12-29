import { styled } from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
`;

export const HomeContainer = styled.div`
  width: 100%;
  padding: 24px 24px;
  border-top: 1px solid #dfad6a;
  border-bottom: 1px solid #dfad6a;

  @media all and (max-width: 850px) {
    padding: 24px 20px;
  }
`;

export const LandingParentContainer = styled.div`
  width: 100%;
  position: relative;
  /* height: calc(100vh - 108px); */
  overflow: hidden;
`;

export const LandingImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }
`;

export const LandingBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ::after {
    position: absolute;
    background: radial-gradient(ellipse, rgba(0, 0, 0, 0.5), #0a0a0a 65%);
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 24px;

  @media all and (max-width: 850px) {
    padding: 80px 20px;
  }

  @media all and (max-width: 580px) {
    padding: 60px 20px;
  }

  @media all and (max-width: 450px) {
    padding: 60px 20px;
  }
`;

export const LandingTitleContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

export const LandingTitle = styled.h1`
  font-family: "Neonderthaw";
  /* font-family: "Righteous", sans-serif; */
  font-size: 64px;
  font-weight: 400;
  line-height: 80px;
  color: #dfad6a;
  text-align: center;

  @media all and (max-width: 850px) {
    font-size: 50px;
    line-height: 64px;
  }

  @media all and (max-width: 580px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const LandingSpanContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const LandingYoutubeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;

  svg {
    height: 30px;
    width: 30px;
    color: #dfad6a;
    transition: 0.8s;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 200px;
    height: 60px;
    padding: 6px 12px;
    font-size: 20px;
    font-weight: 400;
    font-family: "Roboto";
    color: #dfad6a;
    background-color: #0a0a0a;
    border: 1px solid #c7b198;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.8s;

    &:hover {
      background-color: #fff;
      color: #0a0a0a;
      border: 1px solid #dfad6a;

      svg {
        color: #ff0000;
      }
    }
  }

  @media all and (max-width: 850px) {
    a {
      padding: 4px 8px;
      font-size: 18px;

      svg {
        width: 26px;
        height: 26px;
      }
    }
  }

  @media all and (max-width: 600px) {
    a {
      width: 160px;
      height: 40px;
      padding: 6px 8px;
      font-size: 16px;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const LandingSpan = styled.span`
  color: #fff;
  margin: 40px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  font-family: "Roboto";

  @media all and (max-width: 850px) {
    margin: 30px 0;
    font-size: 18px;
    line-height: 24px;
  }

  @media all and (max-width: 580px) {
    font-size: 16px;
  }
`;

export const ContactParentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
  background-color: #0a0a0a;
  border-top: 1px solid #dfad6a;

  @media all and (max-width: 850px) {
    padding: 24px 20px;
  }
`;
