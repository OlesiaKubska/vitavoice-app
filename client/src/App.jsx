import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "pages/Home/Home";
import About from "pages/About";
import Repertoire from "pages/Repertoire/Repertoire";
import Events from "pages/Events";
import Gallery from "pages/Gallery";
import Contact from "pages/Contact";
import Layout from "components/Layout/Layout";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import CookieConsent from "components/CookieConsent/CookieConsent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem("theme", JSON.stringify(!prev));
      return !prev;
    });
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/repertuar" element={<Repertoire />} />
            <Route path="/wydarzenia" element={<Events />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
