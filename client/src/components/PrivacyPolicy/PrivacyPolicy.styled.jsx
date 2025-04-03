import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  color: ${({ theme }) => theme.text};

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
    text-align: center;

    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }

  h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.accent};
  }

  p,
  li {
    line-height: 1.6;
    margin-top: 1rem;
  }

  ul {
    margin-left: 1.5rem;
  }
`;
