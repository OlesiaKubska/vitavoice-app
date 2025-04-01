import { Link } from 'react-router-dom';
import { StyledMobileMenu, CloseButton, Backdrop } from './MobileMenu.styled';
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!menuRoot || !isOpen) return null;

  return createPortal(
    <Backdrop $isOpen={isOpen} onClick={handleBackdropClick}>
        <StyledMobileMenu $isOpen={isOpen} role="dialog" aria-modal="true">
            <CloseButton onClick={onClose}>✕</CloseButton>
            <nav>
                <Link to="/" onClick={onClose}>Strona główna</Link>
                <Link to="/o-nas" onClick={onClose}>O nas</Link>
                <Link to="/repertuar" onClick={onClose}>Repertuar</Link>
                <Link to="/wydarzenia" onClick={onClose}>Wydarzenia</Link>
                <Link to="/galeria" onClick={onClose}>Galeria</Link>
                <Link to="/kontakt" onClick={onClose}>Kontakt</Link>
            </nav>
        </StyledMobileMenu>
    </Backdrop>,
    menuRoot
  );
}

export default MobileMenu;