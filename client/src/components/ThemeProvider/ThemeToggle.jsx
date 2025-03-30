import { FaSun, FaMoon } from 'react-icons/fa';
import { ToggleButton } from './ThemeToggleButton.styled';

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Zmień motyw">
      {isDark ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;