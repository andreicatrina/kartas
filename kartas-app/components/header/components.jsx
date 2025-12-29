import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media all and (max-width: 450px) {
    justify-content: space-evenly;
  }
`;

export const LogoContainer = styled.a`
  width: 100%;
  max-width: 160px;
  height: 60px;
  color: #fff;
  text-decoration: none;

  @media all and (max-width: 700px) {
    max-width: 140px;
    height: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media all and (max-width: 650px) {
    order: 2;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  span {
  }

  @media all and (max-width: 850px) {
    gap: 16px;
  }

  @media all and (max-width: 720px) {
    gap: 12px;
  }

  @media all and (max-width: 670px) {
    gap: 8px;
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

export const HamburgerMenuContainer = styled.div`
  display: none;
  position: relative;

  svg {
    color: #fff;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media all and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    order: 1;
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: absolute;
  top: 28px;
  left: 22px;
  width: 260px;
  padding: 40px 8px;
  border: 1px solid #dfad6a;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background: rgba(253, 253, 250, 0.25);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 2;

  a {
    color: #dfad6a;
    font-size: 16px;
    font-family: "Roboto";

    &:hover {
      color: #fff;
      text-decoration: underline;
      text-decoration-color: #dfad6a;
      text-underline-offset: 4px;
    }
  }

  span {
    color: #dfad6a;
    font-size: 16px;
    font-family: "Roboto";

    &:hover {
      color: #fff;
      text-decoration: underline;
      text-decoration-color: #dfad6a;
      text-underline-offset: 4px;
    }
  }
`;

export const DropDownLogoContainer = styled.div`
  width: 100%;
  max-width: 80px;
  height: 40px;
  margin-top: 16px;
  border-bottom: 1px solid #dfad6a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const WhatsappMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: #0a0a0a;
  border: 1px solid #dfad6a;
  border-radius: 4px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 18px;
    text-decoration: none;
    color: #dfad6a;
    cursor: pointer;
    font-family: "Cormorant SC", serif;
  }

  @media all and (max-width: 850px) {
    padding: 4px 8px;

    a {
      font-size: 16px;
    }
  }

  @media all and (max-width: 700px) {
    padding: 3px 6px;

    a {
      font-size: 14px;
    }
  }

  @media all and (max-width: 650px) {
    order: 3;
  }
`;

export const HomeHeader = styled.a`
  color: #dfad6a;
  font-size: 18px;
  cursor: pointer;
  font-family: "Cormorant SC", serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  @media all and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const AboutHeader = styled.a`
  color: #dfad6a;
  font-size: 18px;
  cursor: pointer;
  font-family: "Cormorant SC", serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  @media all and (max-width: 850px) {
    font-size: 16px;
  }
`;
export const ActivitiesHeader = styled.a`
  color: #dfad6a;
  font-size: 18px;
  cursor: pointer;
  font-family: "Cormorant SC", serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  @media all and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const ServicesHeader = styled.span`
  color: #dfad6a;
  font-size: 18px;
  cursor: pointer;
  font-family: "Cormorant SC", serif;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  @media all and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const ContactHeader = styled.span`
  color: #dfad6a;
  font-size: 18px;
  cursor: pointer;
  font-family: "Cormorant SC", serif;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  @media all and (max-width: 850px) {
    font-size: 16px;
  }
`;
