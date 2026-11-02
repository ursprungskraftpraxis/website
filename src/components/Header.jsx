import LanguageSwitcher from "./LanguageSwitcher";
import "./styles/header.css";

function Header() {
  return (
    <header>
      <h1>Ursprungskraft</h1>
      <div>
        <LanguageSwitcher />
        <div>
          <p>Menu goes here</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
