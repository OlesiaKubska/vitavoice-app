import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeProvider/ThemeToggle';
import { StyledHeader } from './Header.styled';

function Header({ toggleTheme, isDarkMode }) {
  return (
    <StyledHeader>
      <h1>VitaVoice</h1>
      <ThemeToggle toggleTheme={toggleTheme} isDark={isDarkMode} />
      <nav>
        <Link to="/">Strona główna</Link>
        <Link to="/o-nas">O nas</Link>
        <Link to="/repertuar">Repertuar</Link>
        <Link to="/wydarzenia">Wydarzenia</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;