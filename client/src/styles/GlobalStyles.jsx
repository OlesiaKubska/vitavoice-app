import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
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