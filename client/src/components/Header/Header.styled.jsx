import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  position: relative;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .theme-toggle {
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-bottom: 0;
    }

    .theme-toggle {
      margin-top: 0;
    }
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
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