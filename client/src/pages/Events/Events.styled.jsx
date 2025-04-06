import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
  }

  .event-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media ${device.tablet} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .event-item {
    background-color: ${({ theme }) => theme.background};
    border-left: 5px solid ${({ theme }) => theme.accent};
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    @media ${device.tablet} {
      width: 45%;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.primary};
      margin-bottom: 0.5rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.text};
      text-align: center;
    }
  }
`;
