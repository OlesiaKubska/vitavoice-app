import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Repertoire from './pages/Repertoire';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>VitaVoice</h1>
          <nav>
            <a href="/">Strona główna</a>
            <a href="/o-nas">O nas</a>
            <a href="/repertuar">Repertuar</a>
            <a href="/wydarzenia">Wydarzenia</a>
            <a href="/galeria">Galeria</a>
            <a href="/kontakt">Kontakt</a>
          </nav>
        </header>
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
        <footer>
          <p>&copy; 2025 VitaVoice</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;