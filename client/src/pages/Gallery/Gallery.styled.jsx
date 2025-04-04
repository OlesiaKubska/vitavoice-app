import styled from "styled-components";
import "yet-another-react-lightbox/styles.css";

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
  }

  .my-masonry-grid {
    display: flex;
    margin-left: -1rem;
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 1rem;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > img {
    margin-bottom: 1rem;
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
