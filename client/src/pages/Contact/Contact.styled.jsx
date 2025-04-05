import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.primary};
    text-align: center;

    @media ${device.tablet} {
      font-size: 2.4rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  input,
  textarea {
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.primary};
    font-size: 1rem;
    resize: vertical;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.accent};
    }
  }

  .success-message {
    margin-bottom: 1.5rem;
    font-weight: 500;
    border-radius: 6px;
    text-align: center;
  }

  .error {
    font-size: 0.9rem;
    color: red;
  }
`;
