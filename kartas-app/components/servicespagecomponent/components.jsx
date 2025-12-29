import { styled } from "styled-components";

export const ServicesSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #fff;
`;

export const ServicesHeaderContainer = styled.div`
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

export const ServicesParentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 24px;

  @media all and (max-width: 1000px) {
    padding: 40px 20px;
  }
`;

export const ServicesTitle = styled.h2`
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

export const ServicesTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const ServicesText = styled.span`
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

export const ServicesOffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media all and (max-width: 500px) {
    align-items: center;
  }
`;

export const AirportTransferClassicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AirportTransferParentContainer = styled.div``;

export const ServicesFastContactContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
`;

export const FastContactLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  /* margin-top: 40px; */
  border: 1px solid #c7b198;
  border-radius: 8px;

  @media all and (max-width: 1000px) {
    padding: 6px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    font-family: "Cormorant SC", serif;
    color: #0a0a0a;
    font-size: 16px;
    font-weight: 500;
    background-color: #f9f6f7;
    padding: 6px;
    border: 1px solid #c7b198;
    border-radius: 4px;
    transition: 0.6s;

    svg {
      /* width: 20px;
      height: 20px; */
    }

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

export const ATClassicTitle = styled.h3`
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ATClassicSpan = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ATImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 24px 0;

  @media all and (max-width: 1000px) {
    gap: 12px;
    padding: 16px 0;
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ATImageContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  border: 1px solid #c7b198;
  border-top-left-radius: 14px;

  img {
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }

    @media all and (max-width: 650px) {
      font-size: 14px;
    }
  }

  @media all and (max-width: 1000px) {
    padding: 4px;
  }

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const ATImageContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  border: 1px solid #c7b198;
  border-top-left-radius: 14px;

  img {
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }

    @media all and (max-width: 650px) {
      font-size: 14px;
    }
  }

  @media all and (max-width: 1000px) {
    padding: 4px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const ATImageContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  border: 1px solid #c7b198;
  border-top-left-radius: 14px;

  img {
    object-fit: contain;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }

    @media all and (max-width: 650px) {
      font-size: 14px;
    }
  }

  @media all and (max-width: 1000px) {
    padding: 4px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const ATImageContainer4 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  border: 1px solid #c7b198;
  border-top-left-radius: 14px;

  img {
    object-fit: contain;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }
  }

  @media all and (max-width: 1000px) {
    padding: 4px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const ATImageContainer5 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  border: 1px solid #c7b198;
  border-top-left-radius: 14px;

  img {
    object-fit: contain;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }
  }

  @media all and (max-width: 1000px) {
    padding: 4px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const ATImageContainer6 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  border: 1px solid #c7b198;
  border-top-left-radius: 14px;

  img {
    object-fit: contain;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
      font-size: 18px;
    }

    @media all and (max-width: 850px) {
      font-size: 16px;
    }
  }

  @media all and (max-width: 1000px) {
    padding: 4px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const ATLimoContainer = styled.div``;

export const ATLimoParentContainer = styled.div``;

export const ATLimoTitle = styled.h3`
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ATLimoSpan = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ServicesSecurityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SecurityTitle = styled.h3`
  font-size: 28px;
  color: #dfad6a;
  margin-bottom: 20px;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const SecuritySpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 700px) {
    font-size: 16px;
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
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
  font-size: 18px;

  @media all and (max-width: 700px) {
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

  @media all and (max-width: 1000px) {
    padding: 30px 20px;
  }
`;
