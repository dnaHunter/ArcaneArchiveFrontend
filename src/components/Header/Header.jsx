import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo">
          ARCANE ARCHIVE
        </Link>
        <nav className="header__nav">
          <Link to="/books/upload" className="header__link">
            Upload
          </Link>
          <Link to="/login" className="header__link">
            Login
          </Link>
        </nav>
      </div>
    </section>
  );
}
