import styled from "styled-components";
import { device } from "./../../styles/breakpoints";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${device.tablet} {
    padding: 2rem;
  }

  @media ${device.laptop} {
    padding: 3rem;
  }
`;

export const Main = styled.main`
  flex: 1;
`;
