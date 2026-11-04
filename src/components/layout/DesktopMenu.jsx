import { useLocation } from "react-router";
import { navigation } from "@/data/navigation";
import "@/components/layout/styles/desktopMenu.css";

function DesktopMenu() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const { ariaLabel, items } = navigation[language];

  return (
    <nav className="desktop-menu" aria-label={ariaLabel}>
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default DesktopMenu;
