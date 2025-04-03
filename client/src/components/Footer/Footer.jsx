import { StyledFooter } from "./Footer.styled";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; 2025 VitaVoice |{" "}
        <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
      </p>
      <div className="socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
      <div className="contact-info">
        <p>Email: kontakt@vitavoice.pl</p>
        <p>Telefon: +48 123 456 789</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
