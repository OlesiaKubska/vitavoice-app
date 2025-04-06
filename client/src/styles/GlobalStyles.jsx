import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  h4, h5, h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 2rem;

    @media ${device.tablet} {
      font-size: 2.5rem;
    }

    @media ${device.laptop} {
      font-size: 3rem;
    }
  }

  p, li, a {
    font-weight: 400;
    line-height: 1.6;
  }

  ul, ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, textarea, select {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    background-color: #fff;
    color: #333;
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
    }
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }

    &:focus {
      outline: 2px dashed ${({ theme }) => theme.accent};
      outline-offset: 2px;
    }
  }

  .btn {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;

    @media ${device.mobileS} {
      font-size: 0.95rem;
    }

    @media ${device.laptop} {
      font-size: 1.1rem;
    }
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;

    &:hover {
      background-color: ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.primary};
    }
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: #fff;
    }
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }

  .error {
    color: red;
    font-size: 0.9rem;
  }

  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
  }
`;

export default GlobalStyles;
