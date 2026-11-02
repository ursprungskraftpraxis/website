import { motion, AnimatePresence } from "motion/react";
import LanguageSwitcher from "./LanguageSwitcher";
import "./styles/mobileMenu.css";

function MobileMenu({ isOpen, onClose, language }) {
  const labels = {
    de: {
      home: "Startseite",
      about: "Über uns",
      contact: "Kontakt",
    },
    en: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div className="mobile-menu__links">
            <a href="#home" onClick={onClose}>
              {labels[language].home}
            </a>

            <a href="#about" onClick={onClose}>
              {labels[language].about}
            </a>

            <a href="#contact" onClick={onClose}>
              {labels[language].contact}
            </a>
          </div>
          <div className="mobile-menu__language">
            <LanguageSwitcher />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
