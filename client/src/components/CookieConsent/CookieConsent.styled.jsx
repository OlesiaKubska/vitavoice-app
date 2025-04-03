import styled from "styled-components";

export const ConsentContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.accent};
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 999;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &.accept {
      background: ${({ theme }) => theme.primary};
      color: #fff;
    }

    &.decline {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;
