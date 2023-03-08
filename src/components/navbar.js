import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "./watchr-logo.png";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <Link to={'/'}><img src={logo} alt="The watchr logo. A simple illustration of the character 'W'" width="60px" height="auto" className="header__img"/></Link>
        </div>
        <nav className="header__nav">
          <menu className="header__menu">
            <li className="header__item">
              <Link to={'about'} className="header__link">About</Link>
            </li>
            {/* <li className="header__item">
              <Link to={'about'} className="header__link">Profile</Link>
            </li> */}
          </menu>
        </nav>
      </div>
    </header>
  );
}