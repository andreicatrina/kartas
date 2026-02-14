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

export const AirportTransferParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media all and (max-width: 500px) {
    align-items: center;
  }
`;

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
  margin-bottom: 20px;

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ImagesParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding: 16px 0;
`;

export const ImagesChildContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 12px;

  @media all and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const VclassContainer1 = styled.div`
  display: flex;

  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const VclassContainer2 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const VclassContainer3 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const SclassContainer1 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const SclassContainer2 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const SclassContainer3 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const EclassContainer1 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const EclassContainer2 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const EclassContainer3 = styled.div`
  display: flex;
  @media all and (max-width: 1000px) {
    gap: 12px;
  }

  @media all and (max-width: 700px) {
  }

  @media all and (max-width: 500px) {
  }
`;

export const LimoImagesContainer = styled.div`
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
    cursor: pointer;
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

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }

  @media all and (max-width: 850px) {
    gap: 4px;
  }
`;

export const VLargeImageContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const VLargeImageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const VLargeImageContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const SLargeImageContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const SLargeImageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const SLargeImageContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const ELargeImageContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const ELargeImageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;
export const ELargeImageContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15%;
  left: 25%;
  width: 700px;
  height: 500px;
  padding: 12px 0 12px 12px;
  border: 2px solid #dfad6a;
  border-radius: 10px;
  background-color: #0a0a0a;

  img {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media all and (max-width: 800px) {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }

  @media all and (max-width: 1100px) {
    top: 15%;
    left: 20%;
  }

  @media all and (max-width: 1000px) {
    width: 600px;
    height: 400px;
  }

  @media all and (max-width: 900px) {
    top: 20%;
    left: 15%;
  }

  @media all and (max-width: 800px) {
    left: 10%;
  }

  @media all and (max-width: 700px) {
    width: 550px;
    height: 330px;
  }

  @media all and (max-width: 625px) {
    left: 5%;
  }

  @media all and (max-width: 600px) {
    width: 500px;
    height: 280px;
  }

  @media all and (max-width: 550px) {
    width: 460px;
    height: 240px;
    padding: 6px 0 6px 6px;
  }
  @media all and (max-width: 500px) {
    width: 420px;
    height: 220px;
    padding: 2px 0 2px 2px;
  }

  @media all and (max-width: 450px) {
    width: 400px;
    height: 200px;
  }

  @media all and (max-width: 425px) {
    left: 10px;
    width: 380px;
    height: 200px;
  }

  @media all and (max-width: 400px) {
    width: 360px;
    height: 200px;
  }
`;

export const TestImageContainer2 = styled.div`
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

export const ATLimoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ATLimoParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media all and (max-width: 500px) {
    align-items: center;
  }
`;

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
  margin-bottom: 20px;

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

  @media all and (max-width: 500px) {
    h3 {
      margin: 0 auto;
    }
  }
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
  margin-bottom: 20px;

  @media all and (max-width: 1000px) {
    font-size: 16px;
  }

  @media all and (max-width: 700px) {
    margin: 0 0 10px 0;
  }

  @media all and (max-width: 500px) {
    margin: 10px auto;
  }
`;

export const SecurityImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 24px 0;

  @media all and (max-width: 1000px) {
    gap: 12px;
    padding: 16px 0;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
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

export const SecurityImageContainer1 = styled.div`
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
    cursor: pointer;
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
export const SecurityImageContainer2 = styled.div`
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
    cursor: pointer;
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
export const SecurityImageContainer3 = styled.div`
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
    cursor: pointer;
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
export const SecurityImageContainer4 = styled.div`
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
    cursor: pointer;
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

export const ServicesShortTextContainer = styled.div`
  border: 1px solid #dfad6a;
  border-radius: 8px;
  padding: 8px;
  margin-top: 20px;
`;

export const ServicesShortText = styled.span`
  width: 100%;
  max-width: 1000px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";

  @media all and (max-width: 500px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const PriceContainer = styled.div`
  width: max-content;
  /* margin: 0 auto; */
  padding: 8px;
  border: 1px solid #dfad6a;
  cursor: pointer;

  @media all and (max-width: 500px) {
    margin: 0 auto;
  }
`;

export const PriceLink = styled.a`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";

  @media all and (max-width: 1000px) {
    font-size: 18px;
  }
`;
