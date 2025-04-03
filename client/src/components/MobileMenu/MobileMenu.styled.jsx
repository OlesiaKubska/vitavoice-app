import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translate(-50%, -50%)" : "translate(-50%, -150%)"};
  width: 90%;
  max-width: 400px;
  height: auto;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

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

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.backdrop};
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.4s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
