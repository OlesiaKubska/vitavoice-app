import styled from "styled-components";

export const Hero = styled.section`
  background-image: url("src/assets/images/home/home-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6rem 2rem;
  text-align: center;
  color: ${({ theme }) => theme.textOnBg};
  position: relative;
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
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.textOnLight};
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.textOnLight};
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
    height: 600px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
