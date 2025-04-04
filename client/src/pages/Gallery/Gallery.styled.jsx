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

  .video-section {
    margin-top: 4rem;
    text-align: center;

    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.primary};
    }

    .video-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      .player-wrapper {
        position: relative;
        padding-top: 56.25%;
        max-width: 800px;
        width: 100%;
        height: 400px;
        margin: 0 auto;
      }

      .react-player {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;
