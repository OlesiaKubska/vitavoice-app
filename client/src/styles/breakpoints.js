const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

// import styled from 'styled-components';
// import { device } from '../styles/breakpoints';

// const StyledSection = styled.section`
//   padding: 1rem;

//   @media ${device.tablet} {
//     padding: 2rem;
//   }

//   @media ${device.laptop} {
//     padding: 3rem 4rem;
//   }
// `;
