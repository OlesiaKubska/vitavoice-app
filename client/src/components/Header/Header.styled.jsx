import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledHeader = styled.header`
  position: fixed;
  // position: absolute;
  top: 0;
  width: 100%;
  max-width: 1280px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
  // background-color: ${({ theme }) => theme.secondary};
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .container {
    margin: 0 auto;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tablet} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;

    @media ${device.laptop} {
      font-size: 2.5rem;
    }
  }

  .theme-toggle {
    margin-top: 1rem;

    @media ${device.tablet} {
      margin-top: 0;
    }
  }
`;

export const BurgerButton = styled.button`
  background: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  z-index: 1001;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const DesktopNav = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
    align-items: center;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;
