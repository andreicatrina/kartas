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
`;

export const LogoContainer = styled.div`
  color: #fff;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  span {
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
    font-size: 18px;
    text-decoration: none;
    color: #dfad6a;
    cursor: pointer;
    font-family: "Cormorant SC", serif;
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
`;
export const ActivitiesHeader = styled.span`
  color: #dfad6a;
  font-size: 18px;
  cursor: pointer;
  font-family: "Cormorant SC", serif;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
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
`;
