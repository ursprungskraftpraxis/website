import { useLocation, useNavigate } from "react-router";
import "./styles/languageSwitcher.css";

function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const isGerman = location.pathname.startsWith("/de");

  const currentLocation = location.pathname;

  const nextLocation = isGerman
    ? currentLocation.replace("/de", "/en")
    : currentLocation.replace("/en", "/de");

  return (
    <div className="language-switcher">
      <button
        className={isGerman ? "selected" : ""}
        onClick={() => navigate(nextLocation)}
        disabled={isGerman}
      >
        DE
      </button>
      |
      <button
        className={!isGerman ? "selected" : ""}
        onClick={() => navigate(nextLocation)}
        disabled={!isGerman}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
