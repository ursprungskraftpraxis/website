import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { navigation } from "@/data/navigation";
import "@/components/layout/styles/mobileMenu.css";

function MobileMenu({ isOpen, onClose, language }) {
  const firstLinkRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleTabKey = (event) => {
    if (event.key !== "Tab") return;

    const focusableElements = event.currentTarget.querySelectorAll(
      "a[href], button:not([disabled])",
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          id="mobile-navigation"
          className="mobile-menu"
          aria-label={navigation[language].ariaLabel}
          onKeyDown={handleTabKey}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.35,
            ease: "easeInOut",
          }}
        >
          <div className="mobile-menu__links">
            {navigation[language].items.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : null}
                href={item.href}
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
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
