import styled from "styled-components";

export const ToggleButton = styled.button`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.body};
  }
`;
