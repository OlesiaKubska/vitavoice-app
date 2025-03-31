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
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  }

  nav a {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
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
      order: 2;
      margin-top: 0;
    }

    nav {
      flex-wrap: nowrap;
      order: 3;
      gap: 2rem;
    }
  }
`;