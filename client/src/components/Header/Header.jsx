import { StyledHeader } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <h1>VitaVoice</h1>
      <nav>
        <a href="/">Strona główna</a>
        <a href="/o-nas">O nas</a>
        <a href="/repertuar">Repertuar</a>
        <a href="/wydarzenia">Wydarzenia</a>
        <a href="/galeria">Galeria</a>
        <a href="/kontakt">Kontakt</a>
      </nav>
    </StyledHeader>
  );
}

export default Header;