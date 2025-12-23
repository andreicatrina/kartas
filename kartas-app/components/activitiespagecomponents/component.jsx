import styled from "styled-components";

export const ActivitiesSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
`;

export const ActivitiesHeaderContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid #dfad6a;
  border-bottom: 1px solid #dfad6a;
`;

export const ActivitiesParentContainer = styled.div`
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

export const LocationsToursContainer = styled.div``;

export const BranCastleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 40px;
`;

export const BranCastleCardContainer = styled.div``;

export const BranCastleTitle = styled.a`
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

export const BranCastleImageContainer = styled.div`
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

export const PelesCastleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 40px;
`;

export const PelesCardContainer = styled.div``;

export const PelesTitleContainer = styled.a`
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

export const PelesTitle = styled.h3``;

export const PelesImageContainer = styled.div`
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

export const PartiesContainer = styled.div``;

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
