import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  nav a {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    nav {
      flex-wrap: nowrap;
    }
  }
`;