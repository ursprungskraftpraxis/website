import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import MobileMenu from "@/components/layout/MobileMenu";
import DesktopMenu from "@/components/layout/DesktopMenu";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import "@/components/layout/styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const wasOpen = useRef(false);

  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Return focus to the menu button when the menu closes.
  useEffect(() => {
    if (wasOpen.current && !isMenuOpen) {
      menuButtonRef.current?.focus();
    }

    wasOpen.current = isMenuOpen;
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <span className="site-header__brand">Ursprungskraft</span>

      <div className="site-header__controls">
        <DesktopMenu />
        <div className="desktop-language-switcher">
          <LanguageSwitcher />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen
              ? language === "de"
                ? "Menü schließen"
                : "Close menu"
              : language === "de"
                ? "Menü öffnen"
                : "Open menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? "mobile-navigation" : undefined}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} language={language} />
    </header>
  );
}

export default Header;
