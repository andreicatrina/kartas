import { styled } from "styled-components";

export const ContactParentContainer = styled.footer`
  width: 100%;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  color: #fff;
`;

export const ContactHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactHeadingPhoneLink = styled.a`
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 400;
  text-decoration: none;
`;

export const ContactHeading = styled.h2`
  font-size: 28px;
  font-family: "Roboto";
  font-weight: 400;
  color: #dfad6a;
  text-align: center;
`;

export const ContactColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
`;

export const Column1Title = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #dfad6a;
`;

export const ContactColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
`;

export const Column2Title = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #dfad6a;
`;

export const ContactColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
`;

export const Column3Title = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #dfad6a;
`;

export const InstagramFooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  svg {
    margin: 2px;
    height: 24px;
    width: 24px;
    color: #c32aa3;
    transition: 0.6s;
  }

  &:hover {
    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const FacebookFooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
    color: #1877f2;
    transition: 0.6s;
  }

  &:hover {
    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const YoutubeFooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
    color: #ff0000;
    transition: 0.6s;
  }

  &:hover {
    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const ContactFooterLogo = styled.div`
  width: 100%;
  max-width: 200px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
