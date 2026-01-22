import Image from "next/image";
import { useMemo } from "react";
import Slider from "react-slick/lib/slider";
import { styled } from "styled-components";
import { useClickAway } from "@uidotdev/usehooks";

export function ImageModal(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptativeHeight: true,
  };
  const ref = useClickAway((e) => {
    e.stopPropagation();
    props.onClose();
  });
  const orderedImages = useMemo(() => {
    // if (props.idx === 0) return props.images;
    return [...props.images.slice(props.idx), ...props.images.slice(0, props.idx)];
  }, [props.idx, props.images]);
  return (
    <Container>
      <Content ref={ref}>
        <Slider {...settings}>
          {orderedImages.map((imageSrc) => (
            <ImageContainer>
              <Image src={imageSrc} alt="Airport Transfer" />
            </ImageContainer>
          ))}
        </Slider>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Content = styled.div`
  width: 70%;
  max-height: 100%;
  max-width: 900px;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 32px;
  }
`;

const ImageContainer = styled.div``;
