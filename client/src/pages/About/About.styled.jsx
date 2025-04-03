import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import "swiper/css";
import "swiper/css/pagination";

export const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
    text-align: center;

    @media ${device.tablet} {
      font-size: 2.8rem;
    }
  }

  h2 {
    margin-top: 3rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.accent};
    text-align: center;
  }

  .intro {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media ${device.laptop} {
      flex-direction: row;
      align-items: center;
    }
  }

  .intro img {
    flex: 1;
    max-width: 100%;
    height: auto;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 1rem;
  }

  .intro-text {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      line-height: 1.8;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.text};
      margin-bottom: 1.2rem;
      text-align: justify;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      background-color: ${({ theme }) => theme.background};
      border-left: 4px solid ${({ theme }) => theme.primary};
      padding: 1rem;
      text-align: left;
      border-radius: 6px;
    }
  }

  .swiper {
    margin-top: 2rem;
    max-width: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }

  .quote {
    font-style: italic;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    padding: 2rem;
    text-align: center;
  }
`;
