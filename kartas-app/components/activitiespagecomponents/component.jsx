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
`;

export const ToursTitle = styled.h3`
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";
`;

export const ToursText = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #dfad6a;
`;

export const LocationsToursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 40px;
`;

export const LocationCardContainer = styled.div``;

export const LocationTitle = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";
  margin-bottom: 20px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
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
`;

export const LocationDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 280px;
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
  }
`;

export const OtherActivitiesContainer = styled.div`
  padding: 40px 0;
`;

export const OtherActivitiesTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  h3 {
    font-size: 28px;
    color: #dfad6a;
    margin-bottom: 20px;
    font-family: "Roboto";
    margin-bottom: 20px;
    cursor: pointer;
    font-family: "Roboto";
  }
`;

export const OtherActivitiesSubtitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #dfad6a;
`;

export const OtherActivityCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 340px;
  /* height: 280px; */
  border-radius: 8px;
  border: 1px solid #c7b198;
  transition: 1.2s;
  cursor: pointer;
  background: rgba(199, 177, 152, 0.15);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /* border: 1px solid rgba(199, 177, 152, 0.075); */

  h3 {
    padding: 16px 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #dfad6a;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const OtherActivityImageContainer = styled.div`
  width: 100%;
  max-width: 340px;
  height: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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
`;
