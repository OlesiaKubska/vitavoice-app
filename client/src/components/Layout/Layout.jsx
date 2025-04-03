import styled from "styled-components";
import { device } from "./../../styles/breakpoints";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media ${device.tablet} {
    padding: 2rem;
  }

  @media ${device.laptop} {
    padding: 3rem;
  }
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
