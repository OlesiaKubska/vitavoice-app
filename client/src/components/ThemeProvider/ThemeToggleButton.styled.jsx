import styled from 'styled-components';

export const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1000;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;