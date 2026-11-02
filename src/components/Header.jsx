import { useState } from "react";
import { useLocation } from "react-router";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import "./styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";

  return (
    <header>
      <h1>Ursprungskraft</h1>
      <div>
        <LanguageSwitcher />
        <div>
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            language={language}
          />
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
