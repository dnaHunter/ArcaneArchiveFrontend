import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <Link to="/" className="header__logo">
        ARCANE ARCHIVE
      </Link>

      <Link to="/login" className="header__login">
        Login
      </Link>
    </section>
  );
}
