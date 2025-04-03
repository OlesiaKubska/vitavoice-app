import { Container, Main } from "./Layout.styled";

const Layout = ({ children }) => {
  const [header, main, footer] = children;

  return (
    <Container>
      {header}
      <Main>{main}</Main>
      {footer}
    </Container>
  );
};

export default Layout;
