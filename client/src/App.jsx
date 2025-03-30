import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeToggle from './components/ThemeProvider/ThemeToggle';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Repertoire from './pages/Repertoire';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggle toggleTheme={() => setIsDarkMode(!isDarkMode)} isDark={isDarkMode} />
      <Router>
        <Layout>
          <Header />
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
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;