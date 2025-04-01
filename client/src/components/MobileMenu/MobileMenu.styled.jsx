import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  transition: all 0.4s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  a {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
