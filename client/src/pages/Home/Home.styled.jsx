import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import homeBg from "src/assets/images/home/home-bg.jpg";

export const Hero = styled.section`
  background-image: url(${homeBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.textOnBg};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};

    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.textOnLight};

    @media ${device.tablet} {
      font-size: 1.2rem;
    }
  }

  @media ${device.mobileS} {
    gap: 0.8rem;
    border-radius: 0;
  }
`;

export const GallerySection = styled.section`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
  }

  .swiper {
    border-radius: 12px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;

    @media ${device.laptop} {
      height: 500px;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
