import { useState, useEffect } from "react";
import { ConsentContainer, ButtonGroup } from "./CookieConsent.styled";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <ConsentContainer>
      <p>
        Ta strona używa plików cookie do poprawy działania oraz analityki.
        Kontynuując, zgadzasz się na naszą{" "}
        <Link to="/polityka-prywatnosci">politykę prywatności</Link>.
      </p>
      <ButtonGroup>
        <button className="accept" onClick={() => handleConsent(true)}>
          Akceptuję
        </button>
        <button className="decline" onClick={() => handleConsent(false)}>
          Odrzuć
        </button>
      </ButtonGroup>
    </ConsentContainer>
  );
}

export default CookieConsent;
