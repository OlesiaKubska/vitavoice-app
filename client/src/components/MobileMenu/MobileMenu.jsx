import { Link } from 'react-router-dom';
import { StyledMobileMenu, CloseButton } from './MobileMenu.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function MobileMenu({ isOpen, onClose }) {
  const menuRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!menuRoot || !isOpen) return null;

  return createPortal(
    <StyledMobileMenu $isOpen={isOpen} onClick={handleBackdropClick}>
      <CloseButton onClick={onClose}>✕</CloseButton>
      <nav>
        <Link to="/" onClick={onClose}>Strona główna</Link>
        <Link to="/o-nas" onClick={onClose}>O nas</Link>
        <Link to="/repertuar" onClick={onClose}>Repertuar</Link>
        <Link to="/wydarzenia" onClick={onClose}>Wydarzenia</Link>
        <Link to="/galeria" onClick={onClose}>Galeria</Link>
        <Link to="/kontakt" onClick={onClose}>Kontakt</Link>
      </nav>
    </StyledMobileMenu>,
    menuRoot
  );
}

export default MobileMenu;