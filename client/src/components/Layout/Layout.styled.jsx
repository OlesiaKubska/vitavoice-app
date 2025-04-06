import styled from "styled-components";
import { device } from "./../../styles/breakpoints";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border: 1px solid ${({ theme }) => theme.border};
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 120px;

  @media ${device.tablet} {
    padding-top: 80px;
  }
`;
