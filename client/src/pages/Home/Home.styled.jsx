import styled from "styled-components";

export const Hero = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #fde8f4, #fff9f3);

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
    height: auto;
    object-fit: cover;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
