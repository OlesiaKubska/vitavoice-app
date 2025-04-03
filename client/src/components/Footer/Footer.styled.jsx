import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};

  p {
    margin: 0.5rem 0;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;
