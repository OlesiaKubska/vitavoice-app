import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 3rem;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 300;

  p {
    margin: 0;
  }
`;