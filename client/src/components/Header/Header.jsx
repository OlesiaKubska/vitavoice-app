import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeProvider/ThemeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import { StyledHeader, DesktopNav, BurgerButton } from "./Header.styled";

function Header({ toggleTheme, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <StyledHeader>
      <div className="container">
        <h1>VitaVoice</h1>
        {!menuOpen && (
          <BurgerButton
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </BurgerButton>
        )}
        <ThemeToggle toggleTheme={toggleTheme} isDark={isDarkMode} />
        <DesktopNav className="desktop-nav">
          <Link to="/">Strona główna</Link>
          <Link to="/o-nas">O nas</Link>
          <Link to="/repertuar">Repertuar</Link>
          <Link to="/wydarzenia">Wydarzenia</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/kontakt">Kontakt</Link>
        </DesktopNav>
        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </StyledHeader>
  );
}

export default Header;
