import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { device } from "../../styles/breakpoints";

export const Section = styled.section`
  padding: 4rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;

    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }

  .swiper {
    border-radius: 12px;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 3rem;
  }

  .slide-item {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    padding: 1rem;
    background-color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.accent};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slide-item img,
  .slide-item iframe {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`;
